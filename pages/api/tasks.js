// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from './../../lib/prisma.js'

export default async function handler(req, res) {

  if (req.method === 'GET') {
    try {
      const data = await prisma.task.findMany({
        include: {
          tag: true,
        },
        orderBy: [
          {
            name: 'asc',
          },
        ],
      })

      console.log(data);
    
      return res.status(200).json({ data })
    } catch (err) {
      console.error(err)
      return res.status(500).json({ msg: 'Something went wrong' })
    }
  }
  else if ((req.method === 'POST')) {
    const tags = await prisma.tag.findFirst({
      where: {
        name: req.body.tag,
      },});
    //console.log(tags);

    const addedtask = await prisma.task.create({
      data: {
        name: req.body.task,
        tagid: tags.id,
        userid: 1
      },
    })

    return res.status(200).json({ addedtask })
  } 
  else  {
    return res.status(405).json({ msg: 'Method not allowed' })
  }
}
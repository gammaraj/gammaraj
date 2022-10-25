import Search from '../components/search'
import Task from '../components/Task'
import prisma from '../lib/prisma'
import Login from '../components/login'

export default function Home({ tasks }) {
  return (
      <div>
        <main className='container'>
          <div>
            <Search/>
          </div>

          <div className="grid">
            {tasks.map((task) => (
              <Task task={task} key={task.id}/>
            ))}
          </div>
        </main>
      </div>
  )
}

export async function getStaticProps(context) {
  const tasks = await prisma.task.findMany({
    include: {
      tag: true,
    },
  })
  return {
    props: { tasks },
  }
}


import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
  const { data: session } = useSession()
  if(session) {
    return <>
      Welcome {session.user.name}! <br/>
      <button className="outline" onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    <button className="outline" onClick={() => signIn()}>Sign in</button>
  </>
}
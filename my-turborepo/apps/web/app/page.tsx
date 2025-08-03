import { client } from "@repo/db/client"

export default async function Home() {
  const user = await client.user.findFirst();
  console.log("User fetched:", user);
  return (
    <div>
      <h1>Welcome to My TurboRepo App {user?.username}</h1>
      <p>This is the home page of your web application.</p>
    </div>  
  )
}

import Image from 'next/image'
import { UserList } from '../components/UserList'

export default function Home() {
  const users = [
    { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { name: 'Jane Doe', email: 'jane@example.com', phone: '098-765-4321' },
  ];

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <UserList users={users} />
    </main>
  )
}
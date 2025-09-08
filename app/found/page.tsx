import { User } from "@/types"
import Image from "next/image"

const Page = async () => {
  const usersResponse = await fetch("https://fakestoreapi.com/users", {
    cache: "no-store",
  })

  if (!usersResponse.ok) {
    return <div>Failed to load users</div>
  }

  const users: User[] = await usersResponse.json()

  return (
    <div>
      <div className="flex flex-wrap gap-6 p-10">
        {users?.length > 0 ? (
          users.map((user) => (
            <div
              key={user.id}
              className="shadow flex flex-col gap-2 rounded p-3 min-w-80 flex-1"
            >
              <Image
                height={150}
                width={150}
                className="h-40 w-40 object-cover rounded-full "
                src={`https://i.pravatar.cc/150?u=${user.id}`} 
                alt={user.name.firstname}
              />
              <h3 className="font-medium text-lg">
                {user.name.firstname} {user.name.lastname}
              </h3>
              <p className="text-gray-500">{user.email}</p>
              <p className="text-sm">{user.phone}</p>
              <p className="line-clamp-2">
                {user.address.number} {user.address.street}, {user.address.city}
              </p>
            </div>
          ))
        ) : (
          <div>No users found</div>
        )}
      </div>
    </div>
  )
}

export default Page

"use client";

import { trpc } from "@/utils/trpc";

export default function UserList() {
    const getUsers = trpc.getUsers.useQuery();
    // console.log(getUsers);

    return(
        <div>
            <h1>Users</h1>
            <ul>
                {getUsers.data?.map((user) => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
        </div>
    )
}

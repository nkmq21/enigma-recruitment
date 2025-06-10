import { auth } from 'enigma/auth'
import TaskPage from 'enigma/components/taskPage/taskPage'
import React from 'react'
async function JobListPage() {
    const session = await auth();
    return (
        <TaskPage session={session}/>
    )
}

export default JobListPage
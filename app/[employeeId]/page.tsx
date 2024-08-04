const getEmployeeDetailsById = async (id: string) => {
  const res = await fetch(
    `https://free-ap-south-1.cosmocloud.io/development/api/employees/${id}`,
    {
      headers: {
        projectId: process.env.COSMOCLOUD_PROJECT_ID ?? '',
        environmentId: process.env.COSMOCLOUD_ENVIRONMENT_ID ?? '',
      },
    }
  )

  if (!res.ok) {
    throw new Error('something went wrong!')
  }

  return res.json()
}

export default async function Employee({
  params: { employeeId },
}: {
  params: { employeeId: string }
}) {
  const employeeDetais = await getEmployeeDetailsById(employeeId)

  console.log(employeeDetais)

  return <h2>Employee</h2>
}

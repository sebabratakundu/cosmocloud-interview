import { getEmployeeDetailsById } from '@/src/actions/employee.actions'
import { Table, TCol, THead, TRow } from '@/src/components/ui'

export default async function Employee({
  params: { employeeId },
}: {
  params: { employeeId: string }
}) {
  const employeeDetais = await getEmployeeDetailsById(employeeId)
  const headers = Object.keys(employeeDetais)

  return (
    <div>
      <Table>
        <THead headers={headers} />
        <tbody>
          <TRow className="border">
            <TCol>{employeeDetais._id}</TCol>
            <TCol>{employeeDetais.name}</TCol>
            <TCol>
              <Address address={employeeDetais.address} />
            </TCol>
            <TCol>
              <Contact contact={employeeDetais.contact} />
            </TCol>
          </TRow>
        </tbody>
      </Table>
    </div>
  )
}

const Address = ({ address }: { address: object }) => {
  return (
    <address>
      {Object.entries(address).map(([key, value]) => (
        <p key={key}>{`${key}: ${value}`}</p>
      ))}
    </address>
  )
}

const Contact = ({ contact }: { contact: object }) => {
  return Object.entries(contact)
    .filter(([key, value]) => value)
    .map(([key, value]) => <p key={key}>{`${key}: ${value}`}</p>)
}

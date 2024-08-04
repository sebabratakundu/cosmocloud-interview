import {
  AddEmployeeButton,
  AddEmployeeForm,
  EmployeeContactInput,
} from '@/src/components'
import { Input } from '@/src/components/ui'

export default function AddEmployee() {
  return (
    <AddEmployeeForm>
      <div>
        <label htmlFor="name">Employee Name</label>
        <Input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Enter employee name"
        />
      </div>
      <div>
        <label htmlFor="address">Employee Address</label>
        <div className="flex flex-col gap-y-5">
          <Input
            type="text"
            name="line_1"
            id="address"
            required
            placeholder="Enter address"
          />
          <Input type="text" name="city" id="city" placeholder="Enter city" />
          <Input
            type="text"
            name="country"
            id="country"
            required
            placeholder="Enter country"
          />
          <Input
            type="number"
            name="zipcode"
            id="zipcode"
            required
            placeholder="Enter zipcode"
          />
        </div>
      </div>
      <EmployeeContactInput />
      <div>
        <AddEmployeeButton />
      </div>
    </AddEmployeeForm>
  )
}

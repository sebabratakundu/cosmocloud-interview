'use client'

import { FormEvent, useState } from 'react'
import { Input, Select } from '../../ui'

const options = [
  {
    label: 'Mobile',
    value: 'mobile',
  },
  {
    label: 'Email',
    value: 'email',
  },
]

export const EmployeeContactInput = () => {
  const [contactMethod, setContactMethod] = useState('mobile')

  const handleContactMethod = (e: FormEvent<HTMLSelectElement>) => {
    setContactMethod(e.currentTarget.value)
  }

  return (
    <>
      <div>
        <label htmlFor="name">Employee Contact</label>
        <Select
          name="contact-method"
          id="contact-method"
          onChange={handleContactMethod}
          defaultValue={contactMethod}
          options={options}
          title="Contact Method"
        />
      </div>
      <div>
        {contactMethod === 'mobile' && (
          <Input
            type="tel"
            name="mobile"
            required
            placeholder="Enter phone number"
          />
        )}
        {contactMethod === 'email' && (
          <Input
            type="email"
            name="email"
            required
            placeholder="Enter email address"
          />
        )}
      </div>
    </>
  )
}

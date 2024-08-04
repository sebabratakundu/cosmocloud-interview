'use server'

import { revalidatePath } from 'next/cache'
import { apiClient } from '../services/apiClient'
import { validateInputs } from '../utils/helper'

export const getEmployees = async ({
  page,
  perPage,
}: {
  page: number
  perPage: number
}) => {
  const [data, err] = await apiClient.list('/employees', { page, perPage })

  if (err) {
    console.error(err)

    throw new Error(
      'Something went wrong with fetching employees, please contact your admin!'
    )
  }

  return data
}

export const createEmployee = async (
  prevState: FormData,
  payload: FormData
) => {
  const validatedInputs = validateInputs(payload)

  if (validatedInputs.size === 0) {
    return {
      staus_code: 400,
      message: 'Bad Request',
      error: {
        field_msg: 'some fields are empty',
      },
    }
  }

  const { name, line_1, city, country, zipcode, email, mobile } =
    Object.fromEntries(validatedInputs)

  const body = {
    name,
    address: {
      line_1,
      city,
      country,
      zipcode: Number(zipcode),
    },
    contact: {
      email,
      mobile,
    },
  }

  const [res, err] = await apiClient.create('/employees', body)

  if (err) {
    return err
  }

  revalidatePath('/')

  return res
}

export const deleteEmployee = async (id: string) => {
  const [res, err] = await apiClient.delete('/employees', id)

  if (err) {
    return err
  }

  revalidatePath('/')

  return res
}

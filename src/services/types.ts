export type ApiClientType = {
  baseUrl: string
  headers: Headers
}

export type CreateEmployeePayloadType = {
  name: string
  address: {
    line_1: string
    city: string
    country: string
    zipcode: number
  }
  contact: {
    mobile?: string
    email?: string
  }
}

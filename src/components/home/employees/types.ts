export type Employee = {
  _id: string
  name: string
  address: {
    line_1: string
    city: string
    country: string
    zipcode: number
  }
  contact: {
    mobile: string | null
    email: string | null
  }
}

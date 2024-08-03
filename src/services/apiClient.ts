import { CosmocloudConfig } from '../config'
import { ApiClientType, CreateEmployeePayloadType } from './types'

class ApiClient {
  baseUrl: string
  headers: Headers

  constructor({ baseUrl, headers }: ApiClientType) {
    this.baseUrl = baseUrl
    this.headers = headers
  }

  async create(endpoint: string, payload: CreateEmployeePayloadType) {
    const res = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(payload),
    })

    return this.formatResponse(res)
  }

  async list(
    endpoint: string,
    options: {
      page: number
      perPage: number
    }
  ) {
    const { page, perPage } = options
    const offset = perPage * (page - 1)

    const res = await fetch(
      `${this.baseUrl}${endpoint}?offset=${offset}&limit=${perPage}`,
      {
        method: 'GET',
        headers: this.headers,
      }
    )

    return this.formatResponse(res)
  }

  async delete(endpoint: string, id: string) {
    const res = await fetch(`${this.baseUrl}${endpoint}/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    })

    return this.formatResponse(res)
  }

  async getById(endpoint: string, id: string) {
    const res = await fetch(`${this.baseUrl}${endpoint}/${id}`, {
      headers: this.headers,
    })

    return this.formatResponse(res)
  }

  private formatResponse(response: Response) {
    if (!response.ok) {
      return [null, response.body]
    }

    return [response.json(), null]
  }
}

export const apiClient = new ApiClient({
  baseUrl: CosmocloudConfig.env.apiBaseUrl,
  headers: new Headers({
    projectId: CosmocloudConfig.env.projectId,
    environmentId: CosmocloudConfig.env.environmentId,
  }),
})

import { GetRequest } from "./types/GetRequest"
import { PostRequest } from "./types/PostRequest"

export class Requests {
  constructor(private baseUrl: string){}

  async get<Response>(options: GetRequest): Promise<Response> {
    const url = this.baseUrl + options.path
    const contentType = {'Content-Type': 'application/json'}

    const config: RequestInit = {
      method: 'GET',
      headers: { ...contentType, ...options.headers },
      cache: options.cache,
      credentials: options.credentials,
    }

    const response = await fetch(url, config)
    return await response.json() as Response
  }

  async post<Response>(options: PostRequest): Promise<Response> {
    const url = this.baseUrl + options.path
    const contentType = {'Content-Type': 'application/json'}

    const config: RequestInit = {
      method: 'POST',
      body: JSON.stringify(options.body),
      headers: { ...contentType, ...options.headers },
      cache: options.cache,
      credentials: options.credentials,
    }

    const response = await fetch(url, config)
    return await response.json() as Response
  }
}
import { jwt } from "core/adapters/jwt"
import { Requests } from "core/adapters/requests"
import { ENVIRONMENT } from "core/utils/environment"
import { GetStudentDealsAndPublicJourneys } from "./types/GetStudentDealsAndPublicJourneys"
import { GetStudentDealsAndPublicJourneysResponse } from "./types/GetStudentDealsAndPublicJourneysResponse"

const request = new Requests(ENVIRONMENT.CHECKOUT_API_URL)

export async function getStudentDealsAndPublicJourneys(
  input: GetStudentDealsAndPublicJourneys
): Promise<GetStudentDealsAndPublicJourneysResponse> {
  const data = jwt.encode(input)
  const path = '/checkin/profile'
  const body = { data }
  return await request.post({ path, body })
}
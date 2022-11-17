import { CheckinService } from "core/services"; 
import { StudentModuleParams } from "./types/CheckinModuleParams";

export function StudentModule({ query }: StudentModuleParams) {
  const checkinService = new CheckinService();
  checkinService.getStudentDealsWithPublicJourneys(query.email)
  return <h1>Bla</h1>
}
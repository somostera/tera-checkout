export type GetStudentDealsAndPublicJourneysResponse = {
  studentDeals: StudentDeal[];
  publicJourneys: PublicJourney[];
}

type StudentDeal = {
  teraId: string;
  startJourneyDate: string;
  endJourneyDate: string;
}

type PublicJourney = {
  teraId: string;
  startJourneyDate: string;
  endJourneyDate: string;
}

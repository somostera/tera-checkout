export type SendProfileResponse = {
  student: {
    id: string
    deals: StudentDeal[]
  }
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

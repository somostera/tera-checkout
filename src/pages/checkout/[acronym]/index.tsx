import CheckinModule from "modules/checkin"
import { CheckinOptions } from "modules/checkin/types/CheckinOptions"
import { CheckinParams } from "modules/checkin/types/CheckinParams"
import { GetServerSidePropsOptions } from "core/utils/types/GetServerSidePropsOptions"

export default function Checkin ({ query }: CheckinOptions<CheckinParams>) {
  return <CheckinModule query={query} />
}

export async function getServerSideProps({ query }: GetServerSidePropsOptions<{ acronym: string }>) {
  return { 
    props: { 
      query
    } 
  }
}
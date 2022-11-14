import CheckinModule from "modules/checkin"
import { GetServerSidePropsOptions } from "core/utils/types/GetServerSidePropsOptions"

type CheckinProps = {
  query: {
    acronym: string
  }
}

export default function Checkin({ query }: CheckinProps) {
  return <CheckinModule query={query} />
}

export async function getServerSideProps({ query }: GetServerSidePropsOptions<{ acronym: string }>) {
  return { 
    props: { 
      query
    } 
  }
}
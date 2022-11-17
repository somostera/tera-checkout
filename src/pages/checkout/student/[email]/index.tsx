import { GetServerSidePropsOptions } from "core/utils/types/GetServerSidePropsOptions";
import { StudentModule } from "modules/student";

type StudentParams = {
  query: {
    email: string
  }
}

export default function Student({ query }: StudentParams) {
  return <StudentModule query={query} />
}

export async function getServerSideProps({ query }: GetServerSidePropsOptions<{ email: string }>) {
  return { 
    props: { 
      query
    } 
  }
}
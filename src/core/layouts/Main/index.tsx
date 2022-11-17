import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import NavBar from "./components/NavBar";

export default function MainLayout({ children }: any) {
  const router = useRouter()
  const acronym = router.query?.acronym

  const courses = {
    dpl: 'Digital Product Leadership',
    default: 'Bem vindi a Tera!'
  }

  const courseBigName = courses.default // courses[acronym] || courses.default;

  return (
    <Box backgroundColor='#F7F7F7' h="100vh">
      <NavBar text={courseBigName} />
      <Box display='flex' justifyContent='center' mt='40px'>
        {children}
      </Box>
    </Box>
  );
}

import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

export default function DefaultLayout({ children }: any) {
  return (
    <Box backgroundColor='#F7F7F7' h="100vh">
      <NavBar />
      <Box display='flex' justifyContent='center' mt='40px'>
        {children}
      </Box>
    </Box>
  );
}

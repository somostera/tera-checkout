import { Box, Text } from "@chakra-ui/react";
import Image from 'next/image'
import { GOOGLE_BUCKET_URL } from "core/utils/constants/urls";
import { NavBarProps } from "./types/NavBarProps";

export default function NavBar(props: NavBarProps) {
  const { text } = props
  const securityImg = `${GOOGLE_BUCKET_URL}/icons/padlock.svg`
  const logoImg = `${GOOGLE_BUCKET_URL}/header/logo.webp`

  return (
    <Box h="64px" background="base.black" display="flex">
      <Image src={logoImg} width={124} height={64} alt="Logo escrito tera" />
      <Box m="20px" display="flex" justifyContent="space-between" w="100%">
        <Text
          fontWeight="900"
          fontSize="md"
          color="base.white"
          lineHeight="5"
          textTransform="uppercase"
        >
          {text}
        </Text>
        <Box
          textTransform="uppercase"
          color="#8FFE81"
          fontSize="md"
          fontWeight="300"
          display="flex"
        >
          <Image
            src={securityImg}
            alt="Imagem de um cadeado"
            width={15}
            height={19}
          />
          <Text ml="12px">Ambiente seguro</Text>
        </Box>
      </Box>
    </Box>
  );
}
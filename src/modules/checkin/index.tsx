import { CheckinService } from "./services";
import { EmailInput, TextInput, CheckboxInput } from "core/components/inputs";
import { ROUTES } from "core/utils/constants/routes";
import { GOOGLE_BUCKET_URL } from "core/utils/constants/urls";
import { UpdateFormOptions } from "./types/UpdateFormOptions";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FormControl, Button, Box, Text } from "@chakra-ui/react";
import { CheckinFormValidator } from "./validators/CheckinFormValidator";
import { CheckinModuleParams } from "./types/CheckinModuleParams";

export default function CheckinModule({ query }: CheckinModuleParams) {
  const router = useRouter();
  const checkinService = new CheckinService();

  const { acronym } = query
  const [disableBtn, setDisableBtn] = useState(true);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [checkinForm, setCheckinForm] =
    useState({
      email: "",
      first_name: "",
      last_name: "",
      acronym: acronym,
      accepted_terms: false,
      accepted_receive_notifications: false,
    });

  const image = `${GOOGLE_BUCKET_URL}/checkin/mulher-rindo-com-notebook.webp`;

  const navigate = () => {
    router.push({
      pathname: ROUTES.PERSONAL_INFORMATIONS,
      query: { acronym }
    });
  }

  const sendForm = async () => {
    const actions = [setLoadingBtn, setDisableBtn];
    actions.map((setter) => setter(true));
    try {
      await checkinService.sendProfile(checkinForm);
      navigate()
    } catch (error) {
      actions.map((setter) => setter(false));
    } finally {
      actions.map((setter) => setter(false));
    }
  };

  const updateFormData = (input: UpdateFormOptions) => {
    setCheckinForm({ ...checkinForm, ...input });
  };

  const onFormUpdated = () => {
    const isFormValid = CheckinFormValidator.validate(checkinForm)
    isFormValid ? setDisableBtn(false) : setDisableBtn(true);
  };

  useEffect(onFormUpdated, [checkinForm]);

  return (
    <FormControl isInvalid={true} maxW="640px" backgroundColor="base.white">
      <Box>
        <Image
          src={image}
          alt="Mulher com notebook, rindo"
          width={640}
          height={320}
        />
      </Box>
      <Box p="40px 40px 0px 40px">
        <Text
          as="h2"
          textTransform="uppercase"
          color="base.black"
          fontWeight="900"
          fontFamily="Rubik"
          fontSize="4xl"
          lineHeight="10"
        >
          Sua jornada está apenas começando
        </Text>
        <Text
          as="span"
          color="base.black"
          fontWeight="400"
          fontFamily="Rubik"
          fontSize="md"
          lineHeight="6"
        >
          Vamos lá! Precisamos do seu email para começar nossa jornada juntes.
        </Text>
      </Box>
      <Box p="40px">
        <Box display="flex" justifyContent="space-between" mb="32px">
          <Box maxW="265px" width="100%">
            <TextInput
              isRequired
              inputId="first_name__input"
              label="Nome"
              formErrorMessage="Esse campo é necessário"
              value={checkinForm.first_name}
              onChange={(event) =>
                updateFormData({ first_name: event.target.value })
              }
            />
          </Box>

          <Box maxW="265px" width="100%">
            <TextInput
              inputId="last_name__input"
              isRequired
              label="Sobrenome"
              formErrorMessage="Esse campo é necessário"
              value={checkinForm.last_name}
              onChange={(event) =>
                updateFormData({ last_name: event.target.value })
              }
            />
          </Box>
        </Box>

        <Box mb="35px">
          <EmailInput
            inputId="email__input"
            isRequired
            label="E-mail"
            formErrorMessage="Informe um e-mail válido"
            value={checkinForm.email}
            onChange={(event) => updateFormData({ email: event.target.value })}
          />
        </Box>

        <Box mb="16px">
          <CheckboxInput
            inputId="terms__input"
            isRequired
            text="Aceito os Termos de Uso e a Política de Privacidade da Tera para continuar."
            formErrorMessage="É necessário o aceite para seguir"
            checked={checkinForm.accepted_terms}
            onChange={() =>
              updateFormData({ accepted_terms: !checkinForm.accepted_terms })
            }
          />
        </Box>

        <Box mb="28px">
          <CheckboxInput
            inputId="receive_notifications__input"
            isRequired
            text="Concordo em receber comunicações da Tera"
            formErrorMessage="É necessário o aceite para seguir"
            checked={checkinForm.accepted_receive_notifications}
            onChange={() =>
              updateFormData({
                accepted_receive_notifications:
                  !checkinForm.accepted_receive_notifications,
              })
            }
          />
        </Box>

        <Button
          type="submit"
          width="full"
          colorScheme="btn.black"
          isLoading={loadingBtn}
          onClick={sendForm}
          disabled={disableBtn}
          textTransform="uppercase"
        >
          Continuar
        </Button>
      </Box>
    </FormControl>
  );
}

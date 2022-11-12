import {
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Text
} from '@chakra-ui/react'
import { validateEmail } from 'core/utils/validators/email'
import { useEffect, useState } from 'react'
import { EmailInputOptions } from './types/EmailInputOptions'


export function EmailInput(props: EmailInputOptions) {
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true)

  const emailValidation = () => {
    const isValid = validateEmail(props.value)
    setIsValidEmail(isValid)
  }

  const onLoadComponent = () => {
    setIsValidEmail(true)
  }

  useEffect(emailValidation, [props.value])
  useEffect(onLoadComponent, [setIsValidEmail])

  return (
    <Box {...props.styles}>  
      <FormLabel textTransform='uppercase' fontSize='xs'>
        {props.label} {props.isRequired && (<Text as='span' color='#CC3314'>*</Text>)}
      </FormLabel>
      <Input id={props.inputId} w="100%" type='email' errorBorderColor='red.300' value={props.value} onChange={props.onChange} isInvalid={!isValidEmail} />
      {!isValidEmail && <FormErrorMessage mt='8px'>{props.formErrorMessage}</FormErrorMessage>}
    </Box>
  )
}
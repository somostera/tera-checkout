import {
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Text
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { InputOptions } from './types/InputOptions'


export function TextInput(props: InputOptions) {
  const [isValidValue, setIsValidValue] = useState<boolean>(true)

  const valueValidation = () => {
    const isValid = props.isRequired ? props.value !== '' : true
    setIsValidValue(isValid)
  }

  const onLoadComponent = () => {
    setIsValidValue(true)
  }

  useEffect(valueValidation, [props.value, props.isRequired])
  useEffect(onLoadComponent, [setIsValidValue])

  return (
    <Box {...props.styles}>  
      <FormLabel textTransform='uppercase' fontSize='xs'>
        {props.label} {props.isRequired && (<Text as='span' color='#CC3314'>*</Text>)}
      </FormLabel>
      <Input id={props.inputId} w="100%" type='text' errorBorderColor='red.300' value={props.value} onChange={props.onChange} isInvalid={!isValidValue} />
      {!isValidValue && <FormErrorMessage mt='8px'>{props.formErrorMessage}</FormErrorMessage>}
    </Box>
  )
}
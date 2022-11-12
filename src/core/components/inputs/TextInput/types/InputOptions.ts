import { BoxProps } from '@chakra-ui/react'
import { OnChangeCallback } from 'core/utils/types/OnChangeCallback'

export type InputOptions = {
  onChange: (event: OnChangeCallback) => any
  value: string
  label: string 
  formErrorMessage: string
  styles?: BoxProps
  isRequired?: boolean
  inputId?: string
}

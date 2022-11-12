import { OnChangeCallback } from "core/utils/types/OnChangeCallback"

export type CheckboxInputOptions = {
  text: string
  formErrorMessage: string
  onChange: (event: OnChangeCallback) => any
  checked?: boolean
  isRequired?: boolean
  inputId?: string
}
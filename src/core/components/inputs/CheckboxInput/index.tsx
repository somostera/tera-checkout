import { Checkbox, FormErrorMessage, Stack, Text, Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { CheckboxInputOptions } from './types/CheckboxInputOptions'

export function CheckboxInput(options: CheckboxInputOptions) {
  const [isChecked, setIsChecked] = useState<boolean>(options.checked || false)

  useEffect(() => setIsChecked(options.checked || false), [options.checked])
  
  return (
    <Stack>
      <Box display='flex' alignItems='baseline' gap='10px'>
        <Checkbox 
          id={options.inputId} 
          onChange={event => options.onChange(event)} 
          isInvalid={!isChecked} 
          fontSize='md' 
          fontWeight='400'
        ></Checkbox>
        <Text as='span' position='relative' bottom='5px'>{options.text}</Text>
      </Box>
      {!options.checked && <FormErrorMessage>{options.formErrorMessage}</FormErrorMessage>}
    </Stack>
  )
}
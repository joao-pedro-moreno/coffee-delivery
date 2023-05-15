import { InputHTMLAttributes, forwardRef } from 'react'
import {
  InputStyleContainer,
  InputWrapper,
  InputStyled,
  RightText,
} from './styles'
import { RegularText } from '../Typography'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, rightText, ...props }, ref) => {
    const hasError = error !== undefined

    return (
      <InputWrapper className={className}>
        <InputStyleContainer haserror={hasError ? 'true' : 'false'}>
          <InputStyled {...props} ref={ref} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>
    )
  },
)

Input.displayName = 'Input'

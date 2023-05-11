import { IconWrapper, QuantityInputContainer } from './styles'
import { Minus, Plus } from '@phosphor-icons/react'

interface QuantityInputProps {
  size?: 'medium' | 'small'
}

export function QuantityInput({ size = 'medium' }: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper>
        <Minus size={14} />
      </IconWrapper>

      <input type="number" readOnly value={1} />

      <IconWrapper>
        <Plus size={14} />
      </IconWrapper>
    </QuantityInputContainer>
  )
}

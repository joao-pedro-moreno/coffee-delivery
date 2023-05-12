import { IconWrapper, QuantityInputContainer } from './styles'
import { Minus, Plus } from '@phosphor-icons/react'

interface QuantityInputProps {
  size?: 'medium' | 'small'
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
  size = 'medium',
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} />
      </IconWrapper>

      <input type="number" readOnly value={quantity} />

      <IconWrapper onClick={onIncrease}>
        <Plus size={14} />
      </IconWrapper>
    </QuantityInputContainer>
  )
}

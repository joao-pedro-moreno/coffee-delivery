import { PaymentMethodContainer } from './styles'
import { Bank } from '@phosphor-icons/react'
export function PaymentMethodInput() {
  return (
    <PaymentMethodContainer>
      <Bank size={16} />
      Cartão de Débito
    </PaymentMethodContainer>
  )
}

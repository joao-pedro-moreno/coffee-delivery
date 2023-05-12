import { Button } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { ConfirmationSectionContainer } from './styles'

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()

  const totalPrice = formatMoney(DELIVERY_PRICE + cartItemsTotal)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formatMoney(cartItemsTotal)}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formatMoney(DELIVERY_PRICE)}</RegularText>
      </div>
      <div>
        <RegularText size="l" weight={700} color="subtitle">
          Total
        </RegularText>
        <RegularText size="l" weight={700} color="subtitle">
          R$ {totalPrice}
        </RegularText>
      </div>

      <Button text="Confirmar pedido" type="submit" disabled={!cartQuantity} />
    </ConfirmationSectionContainer>
  )
}

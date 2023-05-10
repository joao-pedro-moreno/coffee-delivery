export function formatMoney(value: number) {
  return value.toLocaleString('pt-BT', {
    minimumFractionDigits: 2,
  })
}

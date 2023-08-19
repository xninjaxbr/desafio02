export function setPreice(price: number, rs: boolean = true) {
  let tmpPrice = price + ''
  tmpPrice = tmpPrice.replace(/([0-9]{2})$/g, ',$1')
  if (tmpPrice.length > 6)
    tmpPrice = tmpPrice.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')

  if (rs === true) {
    tmpPrice = 'R$ ' + tmpPrice
  }
  return tmpPrice
}

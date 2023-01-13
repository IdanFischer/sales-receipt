// Create a sales receipt summary given subtotal and taxRate
// later try to get multiple items, then have the subtotal come to it

function calculateSalesTax (subtotal, taxRate) {
    const taxTotal = subtotal * taxRate
    return taxTotal
}


const TAX_RATE = 0.07 // For Palm beach County, FL, US
const customerSubtotal = 17.25

// calculate all the stuffs:
// every exponent will get you to round to the nearest decimal, times 100 then divide 100, same for 1000 
// 10^3 gets your 3 decimals
// also rounding gets your numbers, .toFixed makes it a string, therefore rounding can be better
console.log(calculateSalesTax(17.25, 0.07))
const customerTaxTotal = calculateSalesTax(customerSubtotal, TAX_RATE)
const roundedTotal = Math.round(customerTaxTotal * 100) / 100
const customerTotal = Math.round((customerSubtotal + customerTaxTotal)* 100) / 100

// outputs all the stuff:
// .toFixed will round to the decimal point that you wanted
console.log(`subtotal      $${customerSubtotal.toFixed(2)}`)
console.log(`Tax           $ ${roundedTotal}`)
console.log(`--------------------`)
console.log(`TOTAL         $${customerTotal}`)


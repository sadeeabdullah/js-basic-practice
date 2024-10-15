const mobiles = [
    { name: 'nexus', price: 25490 },
    { name: 'galaxy', price: 32999 },
    { name: 'redmi', price: 18450 },
    { name: 'pixel', price: 59999 },
    { name: 'oneplus', price: 42999 }
  ]

function cheapest(phones) {
    let cheap = mobiles[0].name
    for (const phone of phones) {
        if (phone.price<cheap) {
            cheap = phone;
        }
    }
    return cheap;
}
console.log(cheapest(mobiles))
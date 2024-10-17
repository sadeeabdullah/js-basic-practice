const products = [
    {
      name: "iPhone 14 Pro",
      price: 999
    },
    {
      name: "iPhone 13",
      price: 799
    },
    {
      name: "Samsung Galaxy S23",
      price: 799
    },
    {
      name: "Samsung Galaxy A54",
      price: 449
    },
    {
      name: "Google Pixel 7",
      price: 649
    },
    {
      name: "Google Pixel 6a",
      price: 349
    }
  ];
  

function getProducts(products,search) {
    let matched = [];
    for (const product of products) {
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    }
    return matched;
}
console.log(getProducts(products,'pIxel'))
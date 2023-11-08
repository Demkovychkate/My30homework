let table = document.querySelector(".table");

let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];


class Product {

  constructor(category,type,price) {
    this.category = category;
    this.type = type;
    this.price = price;
  }

  render() {
    return `<tr>
      <td><img src="images/${this.category}/${this.type}.svg" alt="${this.type}" width="50" height="50"></td>
      <td>${this.type}</td>
      <td>${Array.isArray(this.price) ? this.price.join(' - ') + ' USD' : `${this.price} USD`}</td>
    </tr>`;
  }

}

let kitchenProductsObjects = kitchenProducts.map(product => new Product('kitchen', product.type, product.price));
let devicesProductsObjects = devicesProducts.map(product => new Product('devices', product.type, product.price));
let cosmeticsProductsObjects = cosmeticsProducts.map(product => new Product('cosmetics', product.type, product.price));

let allProducts = [...kitchenProductsObjects, ...devicesProductsObjects, ...cosmeticsProductsObjects];


function renderTable(products) {
  let tableRows = products.map(product => product.render()).join('');
  return `<table>${tableRows}</table>`;
}

let tableHTML = renderTable(allProducts);

table.innerHTML = tableHTML;
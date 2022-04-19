let ShoppingCart = {
	items: [],

	add: function (name, price, amount) {
		this.items.push({
			name: name,
			price: price,
			amount: amount,
		})
	},

	removeByIndex: function (i) {
		if (i >= this.items.length) return
		this.items.splice(i, 1)
	},

	printInfo: function () {
		let finalPrice = 0
		for (let i = 0; i < this.items.length; i++) {
			let element = this.items[i]
			finalPrice += element.price * element.amount

			console.log(`W koszyku: ${element.name}, cena:${element.price}, ilość: ${element.amount}`)
		}
		console.log(`Wartość koszyka: ${finalPrice}`)
	},
}

ShoppingCart.add('Karty', 22, 2)
ShoppingCart.add('Gra planszowa', 200, 1)
ShoppingCart.printInfo()
console.log('============')
console.log('Usuwamy produkt / produkty o indeksie 1 ')
console.log('============')
ShoppingCart.removeByIndex(1)
ShoppingCart.printInfo()
console.log('============')
ShoppingCart.add('Telefon', 1500, 1)
ShoppingCart.printInfo()

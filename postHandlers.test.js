// eslint-disable-next-line no-undef
const config = require('../config');
const requestBody = {
	"deliveryTime": 9,
    "productsCount": 10,
    "productsWeight": 11
}
test('Should return 200', async () => {
	let actualStatuscode;
    try {
		const response = await fetch(`${config.API_URL}/order-and-go/v1/delivery`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatuscode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatuscode).toBe(200);
});

test('Should return delivery details', async () => {
	let name;
	let clientDeliveryCost;
	let toBeDeliveredTime;
	let hostDeliveryCost;
	let isItPossibleToDeliver;
    try {
		const response = await fetch(`${config.API_URL}/order-and-go/v1/delivery`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const data = await response.json();
		name = data.name;
		clientDeliveryCost = data.clientDeliveryCost;
		toBeDeliveredTime = data.toBeDeliveredTime;
		hostDeliveryCost = data.hostDeliveryCost;
		isItPossibleToDeliver = data.isItPossibleToDeliver; 
	} catch (error) {
		console.error(error);
	}
	expect(name).toBe( "Order and Go")
	expect(clientDeliveryCost).toBe(5)
	expect(toBeDeliveredTime.min).toBe(20)
	expect(toBeDeliveredTime.max).toBe(25)
	expect(hostDeliveryCost).toBe(5)
	expect(isItPossibleToDeliver).toBe(true)
});
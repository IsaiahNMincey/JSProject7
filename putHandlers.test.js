// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"productsList": [
    {
      "id": 2,
      "quantity": 6
    }
  ],
  "name": "My Kit"
}
test('Test should return 200 OK', async () => {
	let actualStatuscode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatuscode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatuscode).toBe(200);
});

test('Test should return kit details', async () => {
    let okres1;
	try {

		const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const data = await response.json();
		okres1 = data.ok
		_time_spent = data._time_spent;
		_ip = data._ip;
		_req_id = data._req_id;
	} catch (error) {
		console.error(error);
	}
	expect(okres1).toEqual(true)
});
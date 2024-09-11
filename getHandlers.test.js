// eslint-disable-next-line no-undef
const config = require('../config');

test('Should return 200 status code', async () => {
	let actualStatuscode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		actualStatuscode = response.status;
	} catch (error) {
		console.error(error);
	}
    expect(actualStatuscode).toBe(200);
});

test('Should return list of couriers', async () => {
    let workingHours;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		const data = await response.json();
		workingHours = data[0].workingHours;
	} catch (error) {
		console.error(error);
	}
    expect(workingHours.start).toBe(8)
	expect(workingHours.end).toBe(22)
});
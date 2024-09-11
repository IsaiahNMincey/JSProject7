// eslint-disable-next-line no-undef
const config = require('../config');

test('Should return 200 OK', async () => {
	let actualStatuscode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		actualStatuscode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatuscode).toBe(200)
});

test('Data shoulbe be true', async () => {
	let data;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
        data = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(data).toEqual({ ok: true });
});
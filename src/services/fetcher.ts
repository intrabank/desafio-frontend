const fetcher = async (url: string, data: unknown = undefined) => {
	return fetch(url, {
		method: data ? 'POST' : 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': '*',
		},
		body: JSON.stringify(data),
	}).then((res) => {
		if (res.status > 399 && res.status < 200) {
			throw new Error();
		}
		return res.json();
	});
};
export default fetcher;

export async function fetcherFunction(url: string, cacheOption?: RequestInit) {
	const response = await fetch(url, {
		headers: { "X-Riot-Token": process.env.NEXT_PUBLIC_API_KEY! },
		...cacheOption,
	});

	//Check for api server error
	if (!response.ok) {
		throw new Error(`api server error {${response.status} ${response.statusText} ${response.url}}`);
	}

	return await response.json();
}

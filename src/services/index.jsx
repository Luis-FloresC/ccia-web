export async function getCapitales() {
    const res = await fetch(`https://api.cciahn.org/v1/resources/capitales`);

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    const data = await res.json();
    return data.results;
}
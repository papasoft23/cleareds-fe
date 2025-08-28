import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://byredo-m2-dev.vaimo.net/graphql'; // Replace with your Adobe Commerce GraphQL endpoint

const client = new GraphQLClient(endpoint, {
    headers: {
        'Content-Type': 'application/json',
        'Store': 'eu_it'
    },
});

// Function to fetch data with optional caching
const cache = new Map();

export async function fetchData(query: string, variables: Record<string, any> = {}, cacheKey?: string) {
    if (cacheKey && cache.has(cacheKey)) {
        console.log(`Serving from cache: ${cacheKey}`);
        return cache.get(cacheKey);
    }

    try {
        const data = await client.request(query, variables);

        if (cacheKey) {
            cache.set(cacheKey, data);  // Store in cache
        }

        return data;
    } catch (error) {
        console.error('Error fetching product details:', error);
        throw new Error('Failed to fetch product details');
    }

    try {
        const data = await client.request(query, variables);

        if (cacheKey) {
            cache.set(cacheKey, data);  // Store in cache
        }

        return data;
    } catch (error) {
        console.error('Error fetching Adobe Commerce data:', error);
        throw new Error('Failed to fetch content');
    }
}

import { GraphQLClient } from 'graphql-request';

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID!;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN!;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || 'master';
const endpoint = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/${ENVIRONMENT}`; // Replace with your Contentful endpoint

const client = new GraphQLClient(endpoint, {
    headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
});

// Function to fetch data with optional caching
const cache = new Map();

export async function fetchContentfulData(query: string, variables: Record<string, any> = {}, cacheKey?: string) {
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
        console.error('Error fetching Contentful data:', error);
        throw new Error('Failed to fetch content');
    }
}

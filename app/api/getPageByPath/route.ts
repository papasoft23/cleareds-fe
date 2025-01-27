import { NextApiRequest, NextApiResponse } from 'next';
import { fetchContentfulData } from '@/integrations/contentful/client';
import { GET_PAGE_WITH_TEASERS } from '@/integrations/contentful/graphql/queries';

export async function GET(request: NextApiRequest, response: NextApiResponse) {
    const searchParams = request.nextUrl.searchParams;
    const slug = searchParams.get('pageUrl');
    if (!slug || typeof slug !== 'string') {
        return response.status(400).json({ error: 'Invalid request' });
    }

    try {
        const cacheKey = `page-${slug}`;
        const data = await fetchContentfulData(GET_PAGE_WITH_TEASERS, { 'url': slug }, cacheKey);
        const pageData = data.pageCollection.items[0];
        if (!Object.keys(pageData).length) {
            return Response.json(
                {status: 404}
            );
        } else {
            return Response.json(
                {data: pageData},
                {status: 200}
            );
        }
    } catch (error) {
        return Response.json(
            { error: 'Failed to fetch content' + JSON.stringify(error) },
            { status: 500 }
        );
    }
}

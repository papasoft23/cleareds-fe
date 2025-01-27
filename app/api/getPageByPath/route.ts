import { NextRequest } from 'next/server';
import { fetchContentfulData } from '@/integrations/contentful/client';
import { GET_PAGE_WITH_TEASERS } from '@/integrations/contentful/graphql/queries';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const slug = searchParams.get('pageUrl');
    if (!slug || typeof slug !== 'string') {
        return Response.json(
            { error: 'Invalid request' },
            {status: 400}
        );
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

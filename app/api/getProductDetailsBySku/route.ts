import { NextRequest } from 'next/server';
import { fetchData } from '@/integrations/adobe-commerce/client';
import { GET_PRODUCT_DETAILS } from '@/integrations/adobe-commerce/graphql/product/queries';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const sku = searchParams.get('sku');
    if (!sku || typeof sku !== 'string') {
        return Response.json(
            { error: 'Invalid request' },
            {status: 400}
        );
    }

    try {
        const cacheKey = `product-sku-${sku}`;
        const data = await fetchData(GET_PRODUCT_DETAILS, { 'sku': sku }, cacheKey);
        const productData = data.products.items[0];
        if (!Object.keys(productData).length) {
            return Response.json(
                {status: 404}
            );
        } else {
            return Response.json(
                {product: productData},
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

import { NextRequest } from 'next/server';
import { fetchData } from '@/integrations/adobe-commerce/client';
import { CREATE_GUEST_CART } from '@/integrations/adobe-commerce/graphql/cart/queries';

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
        const data = await fetchData(CREATE_GUEST_CART);
        const cartData = data;
        if (!Object.keys(cartData).length) {
            return Response.json(
                {status: 404}
            );
        } else {
            return Response.json(
                {cartId: cartData},
                {status: 200}
            );
        }
    } catch (error) {
        return Response.json(
            { error: 'Failed to create guest cart' + JSON.stringify(error) },
            { status: 500 }
        );
    }
}

import { notFound } from 'next/navigation';
import Image from 'next/image';
import AddToCart from "@/ui/client/AddToCart";

export default async function ProductPage({ params: paramsPromise }: { params: Promise<{ slug: string[] }> }) {
    const params = await paramsPromise;
    if (!params.slug || params.slug.length === 0) {
        notFound();
    }

    const path = params.slug[0]; // Extract first part of slug
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/getProductDetailsBySku?sku=${path}`);

    if (!res.ok) {
        notFound();
    }

    const productData = await res.json();

    return (
        <div className="container px-6 py-4 md:px-12 lg:px-8 xl:px-24 2xl:max-w-screen-2xl mx-auto">
            <Image src={productData.product.image.url} alt={productData.product.image.label} width={1024} height={1024} priority={true} />
            <h1 className={"mt-2 mb-2 text-xl uppercase font-bold"}>{productData.product.name}</h1>
            <div dangerouslySetInnerHTML={{ __html: productData.product.description.html }} />
            <div className={"mt-2 mb-2 text-l uppercase font-bold"}>
                {productData.product.price_range.minimum_price.regular_price.value}{' '}
                {productData.product.price_range.minimum_price.regular_price.currency}
            </div>
            <AddToCart />
        </div>
    );
}

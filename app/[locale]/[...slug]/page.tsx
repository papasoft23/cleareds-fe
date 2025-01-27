import { notFound } from 'next/navigation';

interface PageParams {
    slug: [];  // Adjust based on your route segments
}
export default async function Page({ params }: { params: PageParams }) {
    const {slug} = await params;
    const path = slug.join('/');
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/getPageByPath?pageUrl=${path}`);

    if (!res.ok) {
        notFound();
    }

    const pageData = await res.json();

    return (
        <div>
            <h1>{pageData.data.title}</h1>
        </div>
    );
}

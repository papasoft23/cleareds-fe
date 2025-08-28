/* Render regular static CMS Page*/
import { notFound } from 'next/navigation';
import HeroBanner from "@/ui/components/dynamic/HeroBanner";

export default async function Page({ params }: {params: Promise<{ slug: [] }>}) {
    const {slug} = await params;
    const path = slug.join('/');
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/getPageByPath?pageUrl=${path}`);
    if (!res.ok) {
        notFound();
    }
    const pageData = await res.json();

    const title = pageData.data.title;
    const imageSrc = pageData.data.bannerImage.url;
    const imageAlt = pageData.data.bannerImage.alt || title;
    return (
        <div>
            <HeroBanner src={imageSrc} alt={imageAlt} title={title} />
        </div>
    );
}

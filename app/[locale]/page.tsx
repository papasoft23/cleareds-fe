import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import HomePage from '@/ui/pages/HomePage';

export default async function DefaultPage({ params }: { params: Promise<{ locale: string }> }) {
    const {locale} = await params;
    const HOME_PAGE_URL = 'home'; // url from CMS to get homepage data
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/getPageByPath?pageUrl=${HOME_PAGE_URL}`);
    if (!routing.locales.includes(locale as typeof routing.locales[number]) && !res.ok) {
        notFound();
    }
    const pageData = await res.json();
    return (
        <div>
            <h1>{pageData.data.title}</h1>
            <HomePage/>
        </div>
    );
}

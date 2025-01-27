import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
export default function HeroBanner() {
    const t = useTranslations('HeroBanner');
    return (
        <div className="hero-banner">
            <div
                className="container py-4 md:px-12 lg:px-8 xl:px-24 2xl:max-w-screen-2xl mx-auto">
                <h1>{t('title')}</h1>
                <div>
                    <Link href="/about">{t('about')}</Link>
                </div>
            </div>
        </div>
    );
}

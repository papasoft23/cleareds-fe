import Image from 'next/image';
import {Link} from '@/i18n/routing';

interface HeroBannerProps {
    src?: string;
    alt?: string;
    title?: string;
}

export default function HeroBanner({ src, alt, title }: HeroBannerProps) {
    if (!src && !title) return null;
    return (
        <div>
            {src && <Image
                src={`${src}?w=1920&q=75&fm=webp`}
                alt={alt || ''}
                width={1920}
                height={1080} // Adjust based on aspect ratio
                priority // Ensures LCP loads quickly
                style={{ width: '100%', height: 'auto' }}
            />}
            {title && <div className="container flex justify-between items-center px-6 py-4 md:px-12 lg:px-8 xl:px-24 2xl:max-w-screen-2xl mx-auto">
                <h1>{title}</h1>
                <div>
                    <Link href="/about">{title}</Link>
                </div>
            </div>}
        </div>
    );
}

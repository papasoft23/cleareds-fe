import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.ctfassets.net','uat.byredo.com'], // Contentful images to work with Next/image
    },
};

export default withNextIntl(nextConfig);

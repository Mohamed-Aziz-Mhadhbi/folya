/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    // basePath: '/my-nextjs-app',
    // assetPrefix: '/my-nextjs-app',
    // trailingSlash: true,
    experimental: {
        routes: [{
            name: 'slug',
            pattern: '/:slug*',
            page: '/[slug]',
        }, ],
    },
};

export default nextConfig;
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');
export default withNextIntl({
  reactStrictMode: true,
  images: {
    remotePatterns: [{protocol: 'https', hostname: 'images.unsplash.com'}]
  }
});

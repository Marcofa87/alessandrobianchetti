import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./messages/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);

module.exports = {
  env: {
    name: process.env.NEXT_PUBLIC_NAME,
    url: process.env.NEXT_PUBLIC_URL,
  },
  reactStrictMode: true,
  devIndicators: {
    autoPrerender: false,
  },
}

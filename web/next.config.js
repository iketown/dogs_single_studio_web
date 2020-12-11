const { redirect } = require("next/dist/next-server/server/api-utils");

module.exports = {
  images: {
    domains: ["cdn.marketplace.akc.org", "cdn.akc.org", "cdn.sanity.io"],
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

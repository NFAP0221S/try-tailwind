/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'image.tmdb.org',
  //       port: '',
  //       pathname: '**',
  //     },
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '', // Leave the port empty unless your image URLs explicitly use a port
        pathname: '/t/p/original/**', // Adjust the pathname to match the structure of the URLs you are using
      },
    ],
  },
};

export default nextConfig;

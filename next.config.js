/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

module.exports = withPWA({
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
    },
    images: {
        loader: 'imgix',
        // domains: ['localhost'],
        // // next line is not required
        path: '/images',
    },
});

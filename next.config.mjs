/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const PWA =  withPWA({
   dest: 'public',
    cacheOnFrontEndNav: true,
    reloadOnOnline: true,
    disable: false,
    disableDevLogs: true
  
})


const nextConfig = {};

export default PWA(nextConfig);


// /** @type {import('next').NextConfig} */

// const withPWA = require('next-pwa')({
//   dest: 'public',
//   cacheOnFrontEndNav: true,
//   reloadOnOnline: true,
//   disable: false,
//   disableDevLogs: true
// })

// const nextConfig = {};

// export default withPWA(nextConfig);

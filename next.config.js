module.exports = {
  images: {
    domains: ['firebasestorage.googleapis.com']
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/shop': { page: '/shop', query: { title: 'Home' } },
      '/login': { page: '/login', query: { title: 'Log in' } },
      '/signup': { page: '/signup', query: { title: 'Sign up' } },
      '/logout': { page: '/logout', query: { title: 'Log out' } },
      '/cart': { page: '/cart', query: { title: 'Cart' } },
      '/checkout': { page: '/checkout', query: { title: 'Checkout' } }
    }
  },
}
export const myLoader = ({ src, width, quality }:any) => {
    return `/images/wallpapers/${src}?w=${width}&q=${quality || 75}`
  }
export const myPublicLoader = ({ src, width, quality }:any) => {
    return `/${src}?w=${width}&q=${quality || 75}`
  }
export const Public_URL = 'http://syed333-001-site1.ftempurl.com'
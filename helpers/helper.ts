export const myLoader = ({ src, width, quality }:any) => {
    return `/images/wallpapers/${src}?w=${width}&q=${quality || 75}`
  }
export const myPublicLoader = ({ src, width, quality }:any) => {
    return `/${src}?w=${width}&q=${quality || 75}`
  }

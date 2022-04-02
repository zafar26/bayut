export const myLoader = ({ src, width, quality }:any) => {
    return `/images/wallpapers/${src}?w=${width}&q=${quality || 75}`
  }

export const getImgData = (img) => {
  let w = 1,
    h = 1,
    ratio = img.naturalWidth / img.naturalHeight;

  if (ratio > 1) {
    // image is horizontal
    h = img.naturalHeight / img.naturalWidth;
  } else if (ratio < 1) {
    // image is vertical
    w = ratio;
  } else {
    // image is squared or something went horribly wrong
  }

  //return { w, h };
};

import { createTexture } from "twgl.js";

/**
 * Load Texture
 */
export function loadTexture(gl, src, filtering = "NEAREST") {
  return createTexture(gl, {
    src: src,
    mag: `gl.${filtering}`
  });
}

/**
 * Add + Attached Data
 */
export function loadTextureAndData(gl, src, filtering = "NEAREST") {
  const img = new Image();
  img.src = src;

  const completed = (instance) => {
    console.log("completed", instance);
  };

  createTexture(
    gl,
    {
      src: src,
      mag: `gl.${filtering}`
    },
    completed(this)
  );

  return {
    texture: loadTexture(gl, src, filtering),
    ratio: 1
  };
}


/* Easings */

export function lerp(v0, v1, t) {
    return v0*(1-t)+v1*t
}


/* Angles */
export function radToDeg(r) {
  return r * 180 / Math.PI;
}
export function degToRad(d) {
  return d * Math.PI / 180;
}

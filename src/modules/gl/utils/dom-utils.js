/**
 * Position and Scale + images/quads
 */
export function calcDomPosition(ref, viewport) {
  const { px, inner, scroll } = viewport;
  const { x, y, width, height } = ref.getBoundingClientRect();

  return {
    x: (x - inner[0] / 2 + width / 2) * px,
    y: -(y + scroll - inner[1] / 2 + height / 2) * px,
    width: width * px,
    height: height * px
  };
}

/**
 * Position and Scale + images/quads
 * TO BE TESTED!
 * 
 export function calcDomPositionArray(refs, viewport) {
  return refs.map((ref) => calcDomPosition(ref, viewport));
}

 */

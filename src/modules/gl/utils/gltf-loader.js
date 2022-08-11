import { load } from "@loaders.gl/core";
import { GLTFLoader } from "@loaders.gl/gltf";

/* load base */
export function loadModel(url) {
  return new Promise((resolve, reject) => {
    load(url, GLTFLoader).then((data) => {
      resolve(data);
    });
  });
}

/* OUTPUT PROCESSING

const { indices } = data.meshes[0].primitives[0];
const {
  POSITION: position,
  NORMAL: normal,
  TEXCOORD_0: texcoord
} = data.meshes[0].primitives[0].attributes;

const arr = {
  position: { numComponents: position.components, data: position.value },
  normal: { numComponents: normal.components, data: normal.value },
  texcoord: { numComponents: texcoord.components, data: texcoord.value },
  indices: { numComponents: indices.components, data: indices.value }
}

*/

/* load & process */
export function loadModelDeep(url) {
  return new Promise((resolve, reject) => {
    load(url, GLTFLoader).then((data) => {
      const arr = [];

      data.meshes.forEach((item) => {
        const { indices } = item.primitives[0];
        const {
          POSITION: position,
          NORMAL: normal,
          TEXCOORD_0: texcoord
        } = item.primitives[0].attributes;

        const result = {
          name: item.name,
          data: { position, normal, texcoord, indices },
          arr: {
            position: { numComponents: position.components, data: position.value },
            normal: { numComponents: normal.components, data: normal.value },
            texcoord: { numComponents: texcoord.components, data: texcoord.value },
            indices: { numComponents: indices.components, data: indices.value }
          }
        };

        arr.push(result);
      });

      resolve(arr);
    });
  });
}

# WebGl Parametrised Gradient

All the interesting stuffs are happening in the code embed, here you only need to import the code.

[Live Link](https://webgl-glsl-gradient.webflow.io/) | [Cloneable](#)
[Dev](https://webflow.com/design/webgl-glsl-gradient)

### Last version script

```html
<script src="https://cdn.jsdelivr.net/gh/vallafederico/glsl-gradient-webflow@master/dist/gradient.01.js"></script>
```

## How to control

| Attribute (default)     | Definition                                | Suggested Values |
| ----------------------- | ----------------------------------------- | ---------------- |
| data-test               | use it to have controls, remove it if not |
| id="c"                  | do not touch this needs to be c           |                  |
| data-gradient="wrapper" | do not touch this needs to be wrapper     |                  |
| data-multx="2"          | x axis deformation                        | 0/3              |
| data-multy="2"          | y axis deformation                        | 0/3              |
| data-hue="180"          | hue shift                                 | 0/360            |
| data-brightness=".8"    | overall brightness                        | 0/1              |
| data-mouse="-1"         | mouse influece                            | -1/1             |
| data-scale="1"          | uv scale (zoom)                           | .5/3             |
| data-noise="1.5"        | noise deformation                         | 0/3              |
| data-time=".2"          | time remapping                            | .1/3             |
| data-bw=".0"            | black and white                           | 0/1              |
| data-red=".0"           | Red Value                                 | --               |
| data-green=".0"         | Green Value                               | --               |
| data-blue=".0"          | Blue Value                                | --               |
| data-red2=".0"          | Red Value for Swap Function               | --               |
| data-green2=".0"        | Green Value for Swap Function             | --               |
| data-blue2=".0"         | Blue Value for Swap Function              | --               |

## WIndow

The Plugin is exposed to the window via `window.Gradient`, the interface is in `window.Gradient.call`

| Function               | Definition                                                                               | Parameters                                              |
| ---------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| mode()                 | Allows for togglign between light and dark mode                                          | ...                                                     |
| mode({PARAMS})         | Specify the mode you want                                                                | `string` `"light"` / `"dark"`                           |
| swap({MODE}, {PARAMS}) | Swaps for alternative params. If not specificed uses the one that's not currently active | `float` `0` / `1` / `null` , `object` `{d: {DURATION}}` |

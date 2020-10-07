# netlify-cms-widget-colorpicker

A color picker widget for Netlify CMS that supports HEX color codes, alpha channels via RGBA, color names and custom values.

[-> check out the demo here](https://colorpicker-widget.netlify.app/demo)

<img align="center" src="/docs/netlify-cms-widget-colorpicker.gif">

## Install

As an npm package:

```shell
npm install --save netlify-cms-widget-colorpicker
```

```js
import { ColorControl, ColorPreview } from "netlify-cms-widget-colorpicker";

CMS.registerWidget("color", ColorControl, ColorPreview);
```

<img src="/docs/netlify-cms-widget-colorpicker-examples.jpg">

## How to use

Add to your Netlify CMS configuration:

```yaml
fields:
  - { name: <fieldname>, label: <fieldlabel>, widget: color }
```

## Configuration

#### Color Picker

The default color picker is the `chrome picker`, change it via the `picker` options

```yaml
fields:
  - { name: <fieldname>, label: <fieldlabel>, widget: color, picker: github }
```

The following options are available:

```
block
chrome
compact
github
sketch
swatches
twitter
```

#### Preset Colors

set the preset colors for the `block`, `compact`, `github`, `sketch`, `twitter` picker:

```
colors: [ "#F44336", "#9C27B0", "#3F51B5", ...],
```

for the `swatches` picker set the preset colors as an array of color groups, each with an array of colors:

```
colors: [
  ["#FF8A80", "#FF5252", "#FF1744", "#D50000"],
  ["#FF80AB", "#FF4081", "#F50057", "#C51162"],
  ["#EA80FC", "#E040FB", "#D500F9", "#AA00FF"],
  ["#B388FF", "#7C4DFF", "#651FFF", "#6200EA"],
  ...
],
```

#### Disable Alpha

disable the alpha-slider for `chrome` and `sketch` picker, default is `false`:

```
disableAlpha: true
```

## To Do

## Support

For help with this widget, open an [issue](https://github.com/felixboet/netlify-cms-widget-colorpicker/issues)

## Development

Fork the repo, pull the code to your local computer and install dependencies:

```shell
npm install
```

To run a copy of Netlify CMS with the widget loaded for development, use the start script:

```shell
npm start
```

#### Publish

change version in package.json

```shell
npm run build
npm run publish
```

## License

MIT Licensed. Copyright Felix Böttcher

[![Netlify Status](https://api.netlify.com/api/v1/badges/973b0d6d-bb04-412c-b3b1-997fddf42b88/deploy-status)](https://app.netlify.com/sites/colorpicker-widget/deploys)

Based on the awesome [react-color](https://casesandberg.github.io/react-color/)

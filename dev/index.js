import "./bootstrap.js";
import CMS, { init } from "netlify-cms";
import "netlify-cms/dist/cms.css";
import { ColorControl as Control, ColorPreview as Preview } from "../src";

const config = {
  backend: {
    name: "test-repo",
    login: false,
  },
  media_folder: "assets",
  collections: [
    {
      name: "colors",
      label: "Colors",
      description:
        "Demo CMS for netlify-cms-widget-colorpicker - https://github.com/felixboet/netlify-cms-widget-colorpicker",
      files: [
        {
          file: "colors.yml",
          name: "colors",
          label: "Colors",
          fields: [
            {
              name: "default",
              label: "Default Color Picker (Chrome Picker)",
              widget: "color",
              default: "LightSteelBlue",
              required: false,
            },
            {
              name: "block",
              label: "Color with Block Picker",
              widget: "color",
              required: false,
              picker: "block",
            },
            {
              name: "chrome",
              label: "Color with Chrome Picker",
              widget: "color",
              required: false,
              picker: "chrome",
            },
            {
              name: "circle",
              label: "Color with Circle Picker",
              widget: "color",
              required: false,
              picker: "circle",
            },
            {
              name: "compact",
              label: "Color with Compact Picker",
              widget: "color",
              required: false,
              picker: "compact",
            },
            {
              name: "github",
              label: "Color with Github Picker",
              widget: "color",
              required: false,
              picker: "github",
            },
            {
              name: "sketch",
              label: "Color with Sketch Picker",
              widget: "color",
              required: false,
              picker: "sketch",
            },
            {
              name: "swatches",
              label: "Color with Swatches Picker",
              widget: "color",
              required: false,
              picker: "swatches",
            },
            {
              name: "twitter",
              label: "Color with Twitter Picker",
              widget: "color",
              required: false,
              picker: "twitter",
            },
          ],
        },
      ],
    },
  ],
};

CMS.registerWidget("color", Control, Preview);

init({ config });

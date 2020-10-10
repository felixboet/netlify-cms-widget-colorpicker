import "./bootstrap.js";
import CMS, { init } from "netlify-cms";
import "netlify-cms/dist/cms.css";
import { ColorControl, ColorPreview } from "../src";

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
      preview: "false",
      files: [
        {
          file: "colors.yml",
          name: "colors",
          label: "Colors",
          fields: [
            {
              name: "chrome",
              label: "Color with Chrome Picker",
              widget: "color",
              hint: "that's the default color picker",
            },
            {
              name: "chromeWithAlpha",
              label: "Color with Chrome Picker",
              widget: "color",
              hint: "enableAlpha: true, allowInput: true",
              enableAlpha: true,
              allowInput: true,
            },
            {
              name: "block",
              label: "Color with Block Picker",
              widget: "color",
              picker: "block",
            },
            {
              name: "compact",
              label: "Color with Compact Picker",
              widget: "color",
              picker: "compact",
            },
            {
              name: "github",
              label: "Color with Github Picker",
              widget: "color",
              picker: "github",
            },
            {
              name: "sketch",
              label: "Color with Sketch Picker",
              widget: "color",
              picker: "sketch",
            },
            {
              name: "sketchWithAlpha",
              label: "Color with Sketch Picker",
              widget: "color",
              picker: "sketch",
              hint: "enableAlpha: true",
              enableAlpha: true,
            },
            {
              name: "swatches",
              label: "Color with Swatches Picker",
              widget: "color",
              picker: "swatches",
            },
            {
              name: "twitter",
              label: "Color with Twitter Picker",
              widget: "color",
              picker: "twitter",
            },
            { label: "Text", name: "text", widget: "text" },
          ],
        },
      ],
    },
  ],
};

CMS.registerWidget("color", ColorControl, ColorPreview);

init({ config });

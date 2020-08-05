import Control from "./Control";
import Preview from "./Preview";

if (typeof window !== "undefined") {
  window.ColorControl = Control;
  window.ColorPreview = Preview;
}

export { Control as ColorControl, Preview as ColorPreview };

import React from "react";
import PropTypes from "prop-types";
import {
  BlockPicker,
  ChromePicker,
  CompactPicker,
  GithubPicker,
  SketchPicker,
  SwatchesPicker,
  TwitterPicker,
} from "react-color";
import validateColor from "validate-color";

const Picker = {
  block: BlockPicker,
  chrome: ChromePicker,
  compact: CompactPicker,
  github: GithubPicker,
  sketch: SketchPicker,
  swatches: SwatchesPicker,
  twitter: TwitterPicker,
};

const DefaultPickerWidth = {
  block: "170px",
  github: "187px",
  sketch: "198px",
  swatches: "322px",
  twitter: "276px",
};

const DefaultPresetColors = {
  block: [
    "#F44336",
    "#9C27B0",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#9E9E9E",
    "#607D8B",
  ],
  compact: [
    "#F44336",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
    "#795548",
    "#607D8B",
    "#bdbdbd",
    "#9e9e9e",
    "#757575",
    "#616161",
    "#424242",
    "#000000",
  ],
  github: [
    "#F44336",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
    "#795548",
    "#607d8b",
    "#455a64",
    "#9E9E9E",
    "#616161",
  ],
  sketch: [
    "#F44336",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
  ],
  swatches: [
    ["#FF8A80", "#FF5252", "#FF1744", "#D50000"],
    ["#FF80AB", "#FF4081", "#F50057", "#C51162"],
    ["#EA80FC", "#E040FB", "#D500F9", "#AA00FF"],
    ["#B388FF", "#7C4DFF", "#651FFF", "#6200EA"],
    ["#8C9EFF", "#536DFE", "#3D5AFE", "#304FFE"],
    ["#80D8FF", "#40C4FF", "#00B0FF", "#0091EA"],
    ["#84FFFF", "#18FFFF", "#00E5FF", "#00B8D4"],
    ["#A7FFEB", "#64FFDA", "#1DE9B6", "#00BFA5"],
    ["#B9F6CA", "#69F0AE", "#00E676", "#00C853"],
    ["#CCFF90", "#B2FF59", "#76FF03", "#64DD17"],
    ["#FFFF8D", "#FFFF00", "#FFEA00", "#FFD600"],
    ["#FFD180", "#FFAB40", "#FF9100", "#FF6D00"],
  ],
  twitter: [
    "#F44336",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#9E9E9E",
    "#607D8B",
  ],
};

export default class ColorControl extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: "",
  };

  state = {
    showColorPicker: false,
  };

  // show/hide color picker
  handleClick = () => {
    this.setState({ showColorPicker: !this.state.showColorPicker });
  };
  handleClear = () => {
    this.props.onChange("");
  };
  handleClose = () => {
    this.setState({ showColorPicker: false });
  };
  handleChange = (color) => {
    const formatedColor =
      color.rgb.a < 1
        ? `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
        : color.hex;
    this.props.onChange(formatedColor);
  };
  render() {
    const allowInput = this.props.field.get("allowInput") || false;
    const DynamicPicker = Picker[this.props.field.get("picker") || "chrome"];
    const presetColors = this.props.field.get("presetColors")
      ? this.props.field.get("presetColors").toJS()
      : DefaultPresetColors[this.props.field.get("picker") || ""];
    const pickerWidth = this.props.field.get("pickerWidth")
      ? this.props.field.get("pickerWidth")
      : DefaultPickerWidth[this.props.field.get("picker") || ""];

    const {
      forID,
      value,
      onChange,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle,
    } = this.props;
    return (
      <>
        {" "}
        {!allowInput && value ? (
          <div
            // clear button, not displayed if allowInput: true
            style={{
              position: "absolute",
              right: "18px",
              zIndex: "3",
              padding: "8px",
              marginTop: "11px",
            }}
            onClick={this.handleClear}
          >
            <svg
              height="20"
              width="20"
              viewBox="0 0 20 20"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="rgb(122, 130, 145)"
                d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
              ></path>
            </svg>
          </div>
        ) : null}
        <div
          // color swatch background with checkerboard to display behind transparent colors
          style={{
            position: "absolute",
            zIndex: "1",
            background:
              'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==")',
            height: "38px",
            width: "48px",
            marginTop: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
        />
        <div
          // color swatch
          style={{
            position: "absolute",
            zIndex: "2",
            background: validateColor(this.props.value)
              ? this.props.value
              : "#fff",
            cursor: "pointer",
            height: "38px",
            width: "48px",
            marginTop: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
            border: "2px solid rgb(223, 223, 227)",
            textAlign: "center",
            fontSize: "27px",
            lineHeight: "1",
            paddingTop: "4px",
            userSelect: "none",
            color: validateColor(this.props.value)
              ? "rgba(255, 255, 255, 0)"
              : "rgb(223, 223, 227)",
          }}
          onClick={this.handleClick}
        >
          ?
        </div>
        {this.state.showColorPicker ? (
          <div
            // color picker container
            style={{
              position: "absolute",
              zIndex: "3",
              marginTop: "48px",
              marginLeft: "12px",
            }}
          >
            <div
              // fullscreen div to close color picker when clicking outside of picker
              style={{
                position: "fixed",
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              }}
              onClick={this.handleClose}
            />
            <DynamicPicker
              color={value || ""}
              onChange={this.handleChange}
              triangle={"hide"}
              width={pickerWidth}
              height={this.props.field.get("pickerHeight") || "242px"}
              colors={presetColors}
              presetColors={presetColors}
              disableAlpha={!this.props.field.get("enableAlpha") || false}
            />
          </div>
        ) : null}
        <input
          // text input with padding left for the color swatch
          type="text"
          id={forID}
          className={classNameWrapper}
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          onFocus={setActiveStyle}
          onBlur={setInactiveStyle}
          style={{
            paddingLeft: "75px",
            paddingRight: "70px",
            color: !allowInput && "#bbb",
          }}
          // make readonly and open color picker on click if set to allowInput: false
          onClick={!allowInput && this.handleClick}
          readOnly={!allowInput}
        />
      </>
    );
  }
}

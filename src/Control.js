import React from "react";
import PropTypes from "prop-types";
import { ChromePicker } from "react-color";
import validateColor from "validate-color";

export default class Control extends React.Component {
  state = {
    displayColorPicker: false,
    color: this.props.value,
  };
  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };
  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };
  handleChange = (color) => {
    const colorAsString =
      color.rgb.a < 1
        ? `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
        : color.hex;
    this.setState({ color: colorAsString });
    this.props.onChange(colorAsString);
  };
  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle,
    } = this.props;
    console.log("color: " + this.props.value);

    return (
      <>
        {" "}
        <div
          style={{
            position: "absolute",
            zIndex: "1",
            background: validateColor(this.props.value)
              ? this.props.value
              : "transparent",
            cursor: "pointer",
            height: "38px",
            width: "48px",
            marginTop: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
            border: "2px solid rgb(223, 223, 227)",
            textAlign: "center",
            fontWeight: "bold",
            color: validateColor(this.props.value)
              ? "rgba(255, 255, 255, 0)"
              : "rgb(223, 223, 227)",
          }}
          onClick={this.handleClick}
        >
          ?
        </div>
        {this.state.displayColorPicker ? (
          <div
            style={{
              position: "absolute",
              zIndex: "2",
              marginTop: "48px",
              marginLeft: "12px",
            }}
          >
            <div
              style={{
                position: "fixed",
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              }}
              onClick={this.handleClose}
            />
            <ChromePicker color={value || ""} onChange={this.handleChange} />
          </div>
        ) : null}
        <input
          type="text"
          id={forID}
          //readOnly={true}
          className={classNameWrapper}
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          onFocus={setActiveStyle}
          onBlur={setInactiveStyle}
          style={{ paddingLeft: "75px" }}
        />
      </>
    );
  }
}

ColorControl.propTypes = {
  onChange: PropTypes.func.isRequired,
  forID: PropTypes.string,
  value: PropTypes.node,
  classNameWrapper: PropTypes.string.isRequired,
  setActiveStyle: PropTypes.func.isRequired,
  setInactiveStyle: PropTypes.func.isRequired,
};

ColorControl.defaultProps = {
  value: "",
};

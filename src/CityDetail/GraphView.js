import React from "react";

class GraphView extends React.Component {
  state = {
    mounted: false
  };
    componentDidMount() {
    setTimeout(() => this.setState({ ...this.state, mounted: true }), 100);
  }
  render() {
    const maxWidth =
      this.state.mounted || this.props.noTransition
        ? this.props.maxWidth
          ? this.props.maxWidth
          : "600px"
        : "10px"; //in px
    const length = this.props.data.length;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          fontSize: "20px",
          width: "100%"
        }}
      >
        {this.props.data.map((c, i) => {
          if (c.type === "float") c.value = c.value ? parseFloat(c.value) : 0;
          const colorHsl = [
            (i / length) * 360 + 31,
            clamp(c.value * 8 + 0, 0, 100),
            65
          ];
          c.color = HSLToHex(colorHsl[0], colorHsl[1], colorHsl[2]);
          c.grade = c.grade === "N/A" ? "" : c.grade;
          return (
            <div key={i} style={{ margin: "10px 0", display: "flex" }}>
              <div
                style={{
                  marginRight: "5px",
                  minWidth: "130px",
                  textAlign: "left"
                }}
              >
                {c.label}
              </div>
              <div
                style={{
                  backgroundColor: `hsl(${colorHsl[0]},${colorHsl[1]}%, ${
                    colorHsl[2]
                  }%)`,
                  maxWidth: maxWidth,
                  minWidth: "15px",
                  height: "20px",
                  width: `${(c.value / 10) * parseInt(maxWidth)}px`,
                  fontSize: "15px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  transition: "1.5s max-width linear"
                }}
              >
                <div
                  style={{
                    marginTop: "2.5px",
                    color: `${invertColor(c.color)}`
                  }}
                >
                  {c.grade}{" "}
                </div>
              </div>
              <div style={{ marginLeft: "10px" }}>
                {c.prefix}
                {Math.round(c.value * 10) / 10}
                {c.suffix}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default GraphView;

function invertColor(hex, bw = true) {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error("Invalid HEX color.");
  }
  var r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16);
  if (bw) {
    // http://stackoverflow.com/a/3943023/112731
    return r * 0.299 + g * 0.587 + b * 0.114 > 140 ? "#000000" : "#FFFFFF";
  }
  // invert color components
  r = (255 - r).toString(16);
  g = (255 - g).toString(16);
  b = (255 - b).toString(16);
  // pad each with zeros and return
  return "#" + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
  len = len || 2;
  var zeros = new Array(len).join("0");
  return (zeros + str).slice(-len);
}

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}

function HSLToHex(h, s, l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (r.length === 1) r = "0" + r;
  if (g.length === 1) g = "0" + g;
  if (b.length === 1) b = "0" + b;

  return "#" + r + g + b;
}

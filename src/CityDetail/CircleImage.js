import React from "react";
import styled from "styled-components";

class CircleImage extends React.Component {
  state = {
    mounted: false
  };
  componentDidMount() {
    setTimeout(() => this.setState({ ...this.state, mounted: true }), 200); //for animation
  }

  render() {
    let isLetter = false;
    if (!this.props.image) return <div />;
    if (this.props.image.length <  5) isLetter = true;
    let value = this.props.value ? Math.ceil(this.props.value*10)+0.5 : 0;
    let color = `hsl(31,${ clamp((value*8)+0,0,100)}%,65%)`;
    let grade = this.props.grade ? this.props.grade : "N/A"
    const Circle = styled.div`
        position: relative;
        user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
        #circle-background,
        #circle-progress {
            fill: ${isLetter ? "white" : "none"};
        }
        #circle-background {
            stroke: #ddd;
        }

        #circle-progress {
            stroke: ${color};
            stroke-linecap: round;
            stroke-linejoin: round;
        }

        #circle-text {
            font-size: 3em;
            font-weight: bold;
            fill: red;
        }
        .label {
            font-size: 4em;
            font-weight: 700;
        }
        .image-cropper {
            width: 100px;
            height: 100px;
            position: relative;
            overflow: hidden;
            border-radius: 50%;
        }
        .profile-pic {
          display: inline;
          margin: 0 auto;
          margin-left: -25%; //centers the image
          height: 100%;
          width: auto;
        }
        .hover-grade
        {
            opacity: 0;
            background-color: #000000AA;
            font-size: 5em;
            font-color: #444;
            font-weight: bold;
            width: 100%;
            height: 99%;
            border-radius: 50%;
            position: absolute;
            z-index: 0;
            top: 0;
            right: 0;
            transition: opacity 0.7s linear;
            div {
                
                text-align: center;
                padding-top: 40%;
            }
            &:hover
            {
                opacity: 1;
                transition: opacity 0.7s linear;
            }
        }
    `;
    return (
      <Circle>
        <CircularProgressBar
        style={{position: "absolute"}}
          percentage={value}
          sqSize={600}
          strokeWidth={20}
          text={isLetter ? this.props.image : ""}
        />
        <img src={this.props.image} style={{position: "absolute", height: "99%", top: "0", right:"0%", borderRadius: "50%", zIndex: "-1"}}/>
        <div className="hover-grade"><div>{grade}</div></div>
      </Circle>
      
    );
  }
}

export default CircleImage;

const CircleLoad = styled.div``;

class CircularProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // Size of the enclosing square
    const sqSize = this.props.sqSize;
    // SVG centers the stroke width on the radius, subtract out so circle fits in square
    const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
    // Enclose cicle in a circumscribing square
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    // Arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2;
    // Scale 100% coverage overlay with the actual percent
    const dashOffset = dashArray - (dashArray * this.props.percentage) / 100;

    return (
      <svg
        width={this.props.sqSize}
        height={this.props.sqSize}
        viewBox={viewBox}
        style={{maxWidth: "200px", maxHeight: "200px", width: "25vw", height: "25vw", position: "relative", zIndex: "1", pointerEvents: "none"}}
      >
        <circle
          id="circle-background"
          cx={this.props.sqSize / 2}
          cy={this.props.sqSize / 2}
          r={radius}
          strokeWidth={`${this.props.strokeWidth}px`}
        />
        <circle
          style={{stroke: "blue"}}
          id="circle-progress"
          cx={this.props.sqSize / 2}
          cy={this.props.sqSize / 2}
          r={radius}
          strokeWidth={`${this.props.strokeWidth}px`}
          // Start progress marker at 12 O'Clock
          transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize /
            2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset
          }}
        />
        {
            this.props.img ?
            <div>
                {/* <img src="https://letsmovehomie-city-photoes.nyc3.digitaloceanspaces.com/Woodside,%20CA.jpg" /> */}
            </div>
            :
        <text id="circle-text" x="50%" y="50%" dy=".3em" textAnchor="middle">
          {`${this.props.text}`}
        </text>
        }
      </svg>
    );
  }
}

function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
  }
import React from "react";

class GraphView extends React.Component
{
    state = 
    {

    }

    render()
    {
        this.props.data.map( c => console.log(invertColor(c.color) + " : "+ c.color));
        const maxWidth = 400; //in vws
        return (
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", fontSize: "20px"}}>
                {
                    this.props.data.map( (c,i) => 
                    <div key={i} style={{margin: "10px 0", display: "flex"}}>
                        <div style={{marginRight: "5px", minWidth: "130px", textAlign: "left"}}>{c.label}</div>
                        <div style={{backgroundColor: `${c.color}`, maxWidth: maxWidth, height: "20px", width: `${(c.value/10)*maxWidth}px`,  fontSize: "15px", textAlign: "center", verticalAlign: "middle"}}>
                            <div style={{marginTop: "2.5px", color: `${invertColor(c.color)}`}}>{c.grade} </div>
                        </div>
                        <div style={{marginLeft: "10px"}}>{c.prefix}{Math.round(c.value*10)/10}{c.suffix}</div>
                    </div>
                    )
                }
            </div>
        );
    }
}

export default GraphView;


function invertColor(hex, bw=true) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
        // http://stackoverflow.com/a/3943023/112731
        return (r * 0.299 + g * 0.587 + b * 0.114) > 140
            ? '#000000'
            : '#FFFFFF';
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
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}
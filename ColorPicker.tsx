/// <reference path="./typings/tsd.d.ts" />
import React = require("react")

interface IProps{
	onChange?: Function; 
}

interface IState{
	red?: number;
	green?: number;
	blue?: number;
}

class ColorPicker extends React.Component<IProps, IState>{
	constructor(props){
		super(props)
		this.state = {
			red: 0,
			green: 0,
			blue: 0
		}
		this.onChange = this.onChange.bind(this)
	}

	onChange(e) {
		var obj = {}
		obj[e.target.name] = e.target.value
		this.setState(obj)
		this.props.onChange && this.props.onChange(this.getHexColorCode(this.state.red, this.state.green, this.state.blue))
	}

	getHexColorCode(red, green, blue) {
		return "#" + ((1 << 25) + (red << 16) + (green << 8) + (blue << 0)).toString(16).substr(1);
	}

	render() {
		var bgHexCode = this.getHexColorCode(this.state.red, this.state.green, this.state.blue)
		var colorBoxStyle = { height: '100px', width: '100px', background: bgHexCode }
		return <div>
			<div id="color-bars">
				<p>Red</p><input type="range" name="red" min="0" max="255" value={this.state.red} onChange={this.onChange}/><strong>{this.state.red}</strong><br/>
				<p>Green</p><input type="range" name="green" min="0" max="255" value={this.state.green} onChange={this.onChange}/><strong>{this.state.green}</strong><br/>
				<p>Blue</p><input type="range" name="blue" min="0" max="255" value={this.state.blue} onChange={this.onChange}/><strong>{this.state.blue}</strong><br/>
			</div>
			<div style={colorBoxStyle}></div>
			<div>{bgHexCode}</div>
		</div>
	}
}

export = ColorPicker
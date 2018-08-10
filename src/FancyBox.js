import React, { Component } from 'react';

function toggleFanyBox(visible, iframeURL){
    console.log("fancy 4", visible, this);

	this.setState({visible: visible, iframeURL: iframeURL});
}

var toggleFanyBoxAssignment = null;

export function getToggleFancyBox(){
	return toggleFanyBoxAssignment;
}

class FancyBox extends Component {
	state = {iframeURL: "", visible: false};
	
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};

		toggleFanyBoxAssignment = toggleFanyBox.bind(this);
	}
	
	render() {
		let content = null;
		console.log(7, this.props.boxWidthPix, this.props.boxHeightPix);

		if(!this.state.visible) return null;

		if(2>1){
			content = (
			<div className="react-fancybox">
				<div className="box">
					<div className="image-box">
						<img className="close-btn" src="./close.svg" alt="close" onClick={this.props.closeFancy} cursor="pointer" />
						<iframe id="inlineFrameExample"
							title="Inline Frame Example"
							width={this.props.boxWidthPix}
							height={this.props.boxHeightPix}
							src={this.state.iframeURL} >
						</iframe>
					</div>
				</div>
			</div>);
		}

		console.log(content);

		return content;
	}
}

export default FancyBox;


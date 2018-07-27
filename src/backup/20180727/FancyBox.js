import React, { Component } from 'react';
import 'react-fancybox/lib/fancybox.css.nomudule';

class FancyBox extends Component {
	render() {
		let content = null;
		console.log(7, this.props.boxWidthPix, this.props.boxHeightPix);

		if(this.props.showFancyBox){
			content = (
			<div className="react-fancybox">
				<div className="box">
					<div className="image-box">
						<img className="close-btn" src="./close.svg" alt="close" onClick={this.props.closeFancy} />
						<iframe id="inlineFrameExample"
							title="Inline Frame Example"
							width={this.props.boxWidthPix}
							height={this.props.boxHeightPix}
							src={this.props.iframeURL} >
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

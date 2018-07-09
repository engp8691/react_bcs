import React, { Component } from 'react';
import 'react-fancybox/lib/fancybox.css.nomudule';

class FancyBox extends Component {
	render() {
		let content = null;

		if(this.props.showFancyBox){
			content = (
			<div className="react-fancybox">
				<div className="box">
					<div className="image-box">
						<img className="close-btn" src="./close.svg" alt="close" onClick={this.props.closeFancy} />
						<iframe id="inlineFrameExample"
							title="Inline Frame Example"
							width="600px"
							height="480px"
							src={this.props.iframeURL} >
						</iframe>
					</div>
				</div>
			</div>);
		}

		return content;
	}
}

export default FancyBox;

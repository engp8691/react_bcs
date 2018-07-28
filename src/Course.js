import React, {Component} from 'react';
import classes from './Course.css';

class Course extends Component{
	state = {}

	openTeacherHandler = (event) => {
		console.log(18, event);

		let windowWidth = this.props.windowWidth;
		let windowHeight = this.props.windowHeight;
		let boxWidth = 600;
		let boxHeight = 480;
		
		if(windowWidth>600){
			boxWidth = 600;
		}else{
			boxWidth = windowWidth-60;
		}
		if(windowHeight>480){
			boxHeight = 480;
		}else{
			boxHeight = windowHeight-60;
		}

		let boxWidthPix  = boxWidth + "px";
		let boxHeightPix = boxHeight + "px";

		this.setState( { iframeURL: this.state.biofile_en, showFancyBox: true, boxWidthPix: boxWidthPix, boxHeightPix: boxHeightPix } );
	}

	courseSelectionChangedHandler = (event) => {
		console.log(24, event.target.name, event.target.checked);
		let caobi = Math.random().toString(36).substring(7);
		this.state = {...this.state, selected: event.target.checked, fallselected: event.target.checked, springselected: event.target.checked, name: caobi};
		console.log(55, this.state);
		this.setState(this.state);
	}

	termChangedHandler = (event) => {
		console.log(8, event.target.name, event.target.checked);

		if(event.target.name === "fall"){
			if(!this.state.springselected){
				this.setState( {...this.state, fallselected: event.target.checked, selected: event.target.checked} );
			}else{
				this.setState( {...this.state, fallselected: event.target.checked} );
			}
		}
		if(event.target.name === "spring"){
			if(!this.state.fallselected){
				this.setState( {...this.state, springselected: event.target.checked, selected: event.target.checked} );
			}else{
				this.setState( {...this.state, springselected: event.target.checked} );
			}
		}
	}


	componentWillReceiveProps(nextProps){
	}

	shouldComponentUpdate(nextProps, nextState, nextContext){
		return true;
	}

	componentDidMount() {
		this.state = {...this.props};
		this.setState({...this.props});
	}

	render(){
		console.log(71, this.state);

		let content = (
		<div className={classes.Course}>
			<table border="0px"  className={classes.info}>
				<tbody>
				<tr>
					<td colSpan={3}>
			<input type="checkbox" name={this.state.id} checked={this.state.selected} onClick={this.courseSelectionChangedHandler} /> <span>{this.state.name}</span>
					</td>
				</tr>
				<tr>
					<td width="40px"></td>
					<td className={classes.info_teacher}>Teacher:</td>
					<td className={classes.info_teacher_name}><button type="button" onClick={this.props.openTeacher} className={classes.teacherButton}>{this.state.teacher}</button></td>
				</tr>
				<tr>
					<td width="40px"></td>
					<td className={classes.info_teacher}>Room:</td>
					<td className={classes.info_teacher_name}>{this.state.room}</td>
				</tr>
				<tr>
					<td width="40px"></td>
					<td className={classes.info_teacher}>Time:</td>
					<td className={classes.info_teacher_name}>{this.state.time}</td>
				</tr>
				<tr>
					<td width="40px"></td>
					<td className={classes.info_teacher} colSpan="2"><input type="checkbox" name="fall" checked={this.state.fallselected} onClick={this.termChangedHandler} /> ${this.state.fallprice} Fall Term</td>
				</tr>
				<tr>
					<td width="40px"></td>
					<td className={classes.info_teacher} colSpan="2"><input type="checkbox" name="spring" checked={this.state.springselected} onClick={this.termChangedHandler} /> ${this.state.springprice} Spring Term</td>
				</tr>
				</tbody>
			</table>
		</div>);

		return content;
	}
}

export default Course;


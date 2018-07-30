import React, {Component} from 'react';
import classes from './Course.css';
import { getToggleFancyBox } from './FancyBox.js';

class Course extends Component{
	state = {selected: false, fallselected: false, springselected: false}

	courseSelectionChangedHandler = (event) => {
		console.log(24, event.target.name, event.target.checked);
		// this.state = {...this.state, selected: event.target.checked, fallselected: event.target.checked, springselected: event.target.checked};
		this.setState({...this.state, selected: event.target.checked, fallselected: event.target.checked, springselected: event.target.checked});
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

	openTeacherHandler = (event) => {
		console.log(34, this.state.biofile_en);
		console.log(35, this.state.biofile_cn);

		getToggleFancyBox()(true, this.state.biofile_en);
	}

	componentWillReceiveProps(nextProps){
	}

	shouldComponentUpdate(nextProps, nextState, nextContext){
		return true;
	}

	componentDidMount() {
		// this.state = {...this.props};
		this.setState({...this.props});
	}

	render(){
		// console.log(71, this.state);
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
					<td className={classes.info_teacher_name}><button type="button" onClick={this.openTeacherHandler} className={classes.teacherButton}>{this.state.teacher}</button></td>
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


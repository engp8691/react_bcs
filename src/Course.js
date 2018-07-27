import React, {Component} from 'react';
import classes from './Course.css';

class Course extends Component{
	state = {};

	componentDidMount() {
		// const {id, name, teacher, time, room, fallprice, springprice, selected, fallselected, springselected, biofile_en, biofile_cn} = this.props;
		// this.setState({id, name, teacher, time, room, fallprice, springprice, selected, fallselected, springselected, biofile_en, biofile_cn});
		this.setState(this.props);

		console.log(12, this.state);
	}

	termChangedHandler = (event) => {
		console.log(8, event.target.checked);
		// this.setState( { courses: courses } );
	}

	render(){
		let content = (
		<div className={classes.Course}>
			<input type="checkbox" onChange={this.props.changed} value={this.props.id} />
			<span>{this.props.name}</span>
			<table border="0px"  className={classes.info}>
				<tbody>
				<tr>
					<td width="40px"></td>
					<td className={classes.info_teacher}>Teacher:</td>
					<td className={classes.info_teacher_name}><button type="button" onClick={this.props.openTeacher} className={classes.teacherButton}>{this.state.teacher}</button></td>
				</tr>
				<tr>
					<td width="40px"></td>
					<td className={classes.info_teacher}>Room:</td>
					<td className={classes.info_teacher_name}>{this.props.room}</td>
				</tr>
				<tr>
					<td width="40px"></td>
					<td className={classes.info_teacher}>Time:</td>
					<td className={classes.info_teacher_name}>{this.props.time}</td>
				</tr>
				<tr>
					<td width="40px"></td>
					<td className={classes.info_teacher} colSpan="2"><input type="checkbox" value="fall" checked={this.props.fallselected} onClick={this.termChangedHandler} /> ${this.props.fallprice} Fall Term</td>
				</tr>
				<tr>
					<td width="40px"></td>
					<td className={classes.info_teacher} colSpan="2"><input type="checkbox" value="spring" checked={this.props.springselected} onClick={this.props.termchanged} /> ${this.props.springprice} Spring Term</td>
				</tr>
				</tbody>
			</table>
		</div>);


		return content;
	}
}

export default Course;


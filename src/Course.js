import React, {Component} from 'react';
import classes from './Course.css';

class Course extends Component{
	render(){
		return (
		<div className={classes.Course}>
			<input type="checkbox" onChange={this.props.changed} value={this.props.id} />
			<span>{this.props.name}</span>
			<table border="0px"  className={classes.info}>
				<tbody>
				<tr>
					<td width="40px"></td>
					<td className={classes.info_teacher}>Teacher:</td>
					<td className={classes.info_teacher_name}><button type="button" onClick={this.props.openTeacher} className={classes.teacherButton}>{this.props.teacher}</button></td>
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
					<td className={classes.info_teacher} colSpan="2"><input type="checkbox" value="fall" checked={this.props.fallselected} onChange={this.props.termchanged} /> ${this.props.fallprice} Fall Term</td>
				</tr>
				<tr>
					<td width="40px"></td>
					<td className={classes.info_teacher} colSpan="2"><input type="checkbox" value="spring" checked={this.props.springselected} onChange={this.props.termchanged} /> ${this.props.springprice} Spring Term</td>
				</tr>
				</tbody>
			</table>
		</div>
		);
	}
}

export default Course;


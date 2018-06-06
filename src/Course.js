import React from 'react';
import classes from './Course.css';

const course = ( props ) => {
	return(
		<div className={classes.Course}>
			<input type="checkbox" onChange={props.changed} value={props.id} checked={props.selected} /> <span>{props.name}</span>
			<table border="0px"  className={classes.info}>
				<tbody>
				<tr>
					<td width="40px"></td>
					<td className={classes.info_teacher}>Teacher:</td>
					<td className={classes.info_teacher_name}>{props.teacher}</td>
				</tr>
				<tr>
					<td width="40px"></td>
					<td className={classes.info_teacher}>Room:</td>
					<td className={classes.info_teacher_name}>{props.room}</td>
				</tr>
				<tr>
					<td width="40px"></td>
					<td className={classes.info_teacher}>Time:</td>
					<td className={classes.info_teacher_name}>{props.time}</td>
				</tr>
				<tr>
					<td width="40px"></td>
					<td className={classes.info_teacher} colSpan="2"><input type="checkbox" value="fall" checked={props.fallselected} onChange={props.termchanged} /> ${props.fallprice} Fall Term</td>
				</tr>
				<tr>
					<td width="40px"></td>
					<td className={classes.info_teacher} colSpan="2"><input type="checkbox" value="spring" checked={props.springselected} onChange={props.termchanged} /> ${props.springprice} Spring Term</td>
				</tr>
				</tbody>
			</table>
		</div>
	);
}

export default course;


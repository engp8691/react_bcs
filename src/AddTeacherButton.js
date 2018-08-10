import React, { Component } from "react";
import classes from "./TeacherForm.css";
 
class AddTeacherButton extends Component {
	render() {
		return(
			<div className={classes.AddClassButtom}>
				<button onClick={this.props.showAddClassForm}> Add Class </button>
			</div>
		)
	}
}

export default AddTeacherButton;

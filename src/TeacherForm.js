import React, { Component } from "react";
import Form from "react-jsonschema-form";
import classes from "./TeacherForm.css";
 
const schema = {
	"title": "Add a new class",
	"type": "object",
	"required": [
		"name",
		"teacher",
		"room",
		"time",
		"fallprice",
		"springprice"
	],
	"properties": {
		"name": {
			"type": "string",
			"title": "Class name"
		},
		"teacher": {
			"type": "string",
			"title": "Teacher's full name"
		},
		"room": {
			"type": "string",
			"title": "Class room"
		},
		"time": {
			"type": "string",
			"title": "Class time"
		},
		"fallprice": {
			"type": "string",
			"title": "Fall price"
		},
		"springprice": {
			"type": "string",
			"title": "Spring price"
		}
	}
};

const uiSchema = {
	"name": {
		"ui:autofocus": true,
		"ui:emptyValue": ""
	},
	"teacher": {
		"ui:title": "Teacher's full name",
		"ui:help": "Hint: Firstname Lastname!"
	},
};

const formData = {
  "name": "Chinese Level 8",
  "teacher": "Joe Brown",
  "room": "101",
  "time": "1:00pm - 2:00pm",
  "fallprice": "220",
  "springprice": "220"
};

const log = (type) => console.log.bind(console, type);

class TeacherForm extends Component {
	render() {
		return(
			<div className={classes.TeacherForm}>
			<Form schema={schema}
				formData={formData}
				uiSchema={uiSchema}
				onSubmit={this.props.addClass}
				onError={log("errors")} />
			</div>
		)
	}
}

export default TeacherForm;

import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Course from './Course.js';
import TeacherForm from './TeacherForm.js';
import AddTeacherButton from './AddTeacherButton.js';
import FancyBox, { getToggleFancyBox } from './FancyBox.js';
import windowSize from 'react-window-size';

class App extends Component {
	
	state = ({
		courses: [ ],
		showForm: false,
		boxWidthPix: "540px",
		boxHeightPix: "340px",
	});

	componentDidMount () {
		console.log(19, "componentDidMount");

		axios.get(`https://eventd.netbriefings.com/test/courses.php`).then(res => {
			const coursesJson = res.data;
			console.log(coursesJson);

			this.setState({courses: coursesJson});
		});
	}

	addClass = (event) => {
		const aCourse = {id: "1000005116", name: event.formData.name, teacher: event.formData.teacher, room: event.formData.room, time: event.formData.time, selected: false, fallprice: event.formData.fallprice, springprice: event.formData.springprice, termregistered: {fallselected: false, springselected: false}, biofile_en: "hello.html", biofile_cn: "world.html"};
		
		this.setState({courses: [...this.state.courses, aCourse], showForm: false});
	}

	componentWillUnmount () {
		document.removeEventListener('click', null);
	}

	closeFancyHandler = (event) => {
		getToggleFancyBox()(false,  "about:blank");
	}

	showAddClassForm = (event) => {
		this.setState({showForm: true});
	}

	render() {
		let courses = null;
		courses = (this.state.courses.map((course, index) => {
			return (
				<Course
					key={course.id}
					id={course.id}
					name={course.name}
					teacher={course.teacher}
					time={course.time}
					room={course.room}
					fallprice={course.fallprice}
					springprice={course.springprice}
					selected={course.selected}
					fallselected={course.termregistered.fallselected}
					springselected={course.termregistered.springselected}
					biofile_en={course.biofile_en}
					biofile_cn={course.biofile_cn}
				/>
			);
		}));

		return (
			<div>
				<h1 className="App-title">Welcome to Brookline Chinese School</h1>
				{this.state.showForm? null: <AddTeacherButton showAddClassForm={this.showAddClassForm} />}
				<div>
					{this.state.showForm? <TeacherForm addClass={this.addClass}/> : courses}
   		   		</div>

				<div>
				<FancyBox
					closeFancy={(event)=>this.closeFancyHandler(event)}
					boxWidthPix={this.state.boxWidthPix}
					boxHeightPix={this.state.boxHeightPix}
				/>
		  		</div>
			</div>
		);
	}
}

export default windowSize(App);


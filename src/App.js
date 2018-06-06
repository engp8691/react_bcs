import React, { Component } from 'react';
import './App.css';
import Course from './Course.js';

class App extends Component {
	state = ({
		courses: [
			{id: '1000001', name: 'Chinese Level 1', teacher: 'Wang Lan', time: '2:00 - 3:30pm', room: '104', fallprice: '220', springprice: '220', selected: true, termregistered: {fallselected: false, springselected: false}},
			{id: '1000003', name: 'Chinese Level 2', teacher: 'Peng Li', time: '2:00 - 3:30pm', room: '114', fallprice: '220', springprice: '220', selected: false, termregistered: {fallselected: false, springselected: false}},
			{id: '1000005', name: 'Chinese Level 3', teacher: 'Li Qingwei', time: '2:00 - 3:30pm', room: '124', fallprice: '220', springprice: '220', selected: false, termregistered: {fallselected: false, springselected: false}},
			{id: '1000007', name: 'Chinese Level 4', teacher: 'Li Lijia', time: '2:00 - 3:30pm', room: '134', fallprice: '220', springprice: '220', selected: true, termregistered: {fallselected: true, springselected: true}}
		]
	});

	selectionChangedHandler = (event, id) => {
		const courseIndex = this.state.courses.findIndex( c => {
			return c.id === id;
		});

		const course = {
			...this.state.courses[courseIndex]
		};

		course.selected = !course.selected;

		const courses = [...this.state.courses];
		courses[courseIndex] = course;

		this.setState( { courses: courses } );
	}

	termChangedHandler = (event, id) => {
		const courseIndex = this.state.courses.findIndex( c => {
			return c.id === id;
		});

		const course = {
			...this.state.courses[courseIndex]
		};

		if(event.target.value === "fall"){
			course.termregistered.fallselected = !course.termregistered.fallselected;
		}
		if(event.target.value === "spring"){
			course.termregistered.springselected = !course.termregistered.springselected;
		}

		const courses = [...this.state.courses];
		courses[courseIndex] = course;

		this.setState( { courses: courses } );
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
					termchanged={(event) => this.termChangedHandler(event, course.id)}
					changed={(event) => this.selectionChangedHandler(event, course.id )} />
				);
		}));

		console.log(62, courses);

		return (
			<>
				<h1 className="App-title">Welcome to Brookline Chinese School</h1>
				<div>
					{courses}
   		   		</div>
			</>
		);
	}
}

export default App;

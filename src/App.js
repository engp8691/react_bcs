import React, { Component } from 'react';
// import ReactFancyBox from 'react-fancybox';
// import 'react-fancybox/lib/fancybox.css.nomudule';
import './App.css';
import Course from './Course.js';
import FancyBox from './FancyBox.js';

class App extends Component {
	state = ({
		courses: [
			{id: '1000001', name: 'Chinese Level 1', teacher: 'Wang Lan', biofile_en: 'wanglan_en.html', biofile_cn: 'wanglan_cn.html', time: '2:00 - 3:30pm', room: '104', fallprice: '220', springprice: '220', selected: true, termregistered: {fallselected: false, springselected: false}},
			{id: '1000003', name: 'Chinese Level 2', teacher: 'Peng Li', biofile_en: 'pengli_en.html', biofile_cn: 'pengli_cn.html', time: '2:00 - 3:30pm', room: '114', fallprice: '220', springprice: '220', selected: false, termregistered: {fallselected: false, springselected: false}},
			{id: '1000005', name: 'Chinese Level 3', teacher: 'Li Qingwei', biofile_en: 'liqingwei_en.html', biofile_cn: 'liqingwei_cn.html', time: '2:00 - 3:30pm', room: '124', fallprice: '220', springprice: '220', selected: false, termregistered: {fallselected: false, springselected: false}},
			{id: '1000007', name: 'Chinese Level 4', teacher: 'Li Lijia', biofile_en: 'lilijia_en.html', biofile_cn: 'lilijia_cn.html', time: '2:00 - 3:30pm', room: '134', fallprice: '220', springprice: '220', selected: true, termregistered: {fallselected: true, springselected: true}}
		],
		iframeURL: "",
		showFancyBox: false
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

	openTeacherHandler = (event, id) => {
		const courseIndex = this.state.courses.findIndex( c => {
			return c.id === id;
		});

		const course = {
			...this.state.courses[courseIndex]
		};

		this.setState( { iframeURL: course.biofile_en, showFancyBox: true } );
	}

	closeFancyHandler = (event) => {
		this.setState( { iframeURL: "", showFancyBox: false} );

		console.log("Close Fancy Box");
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
					termchanged={(event) => this.termChangedHandler(event, course.id)}
					changed={(event) => this.selectionChangedHandler(event, course.id )}
					openTeacher={(event) => this.openTeacherHandler(event, course.id)}
				/>
			);
		}));

		console.log(62, courses);

		return (
			<div>
				<h1 className="App-title">Welcome to Brookline Chinese School</h1>
				<div>
					{courses}
   		   		</div>

				<div>
				<FancyBox
					iframeURL={this.state.iframeURL}
					showFancyBox={this.state.showFancyBox}
					closeFancy={(event)=>this.closeFancyHandler(event)}
				/>
		  		</div>
			</div>
		);
	}
}

export default App;

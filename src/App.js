import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Course from './Course.js';
import FancyBox from './FancyBox.js';
import windowSize from 'react-window-size';

class App extends Component {
	
	state = ({
		courses: [ ],
		iframeURL: "",
		showFancyBox: false,
		boxWidthPix: "540px",
		boxHeightPix: "340px",
	});

	componentDidMount () {
		console.log(19, "componentDidMount");

		axios.get(`http://eventd.netbriefings.com/test/courses.php`).then(res => {
			const coursesJson = res.data;
			console.log(coursesJson);

			this.setState({courses: coursesJson});
		});
	}

	componentWillUnmount () {
		document.removeEventListener('click', null);
	}

	openTeacherHandler = (event, id) => {
		const courseIndex = this.state.courses.findIndex( c => {
			return c.id === id;
		});

		const course = {
			...this.state.courses[courseIndex]
		};

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
		console.log(90, boxWidthPix, boxHeightPix);
		this.setState( { iframeURL: course.biofile_en, showFancyBox: true, boxWidthPix: boxWidthPix, boxHeightPix: boxHeightPix } );
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
					openTeacher={(event) => this.openTeacherHandler(event, course.id)}
				/>
			);
		}));

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
					boxWidthPix={this.state.boxWidthPix}
					boxHeightPix={this.state.boxHeightPix}
				/>
		  		</div>
			</div>
		);
	}
}

export default windowSize(App);


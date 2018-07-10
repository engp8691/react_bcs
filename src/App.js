import React, { Component } from 'react';
// import ReactFancyBox from 'react-fancybox';
// import 'react-fancybox/lib/fancybox.css.nomudule';
import './App.css';
import Course from './Course.js';
import FancyBox from './FancyBox.js';
import windowSize from 'react-window-size';

class App extends Component {
	state = ({
		courses: [
			{id: '1000001', name: 'Chinese Level 1', teacher: 'Wang Lan', biofile_en: 'wanglan_en.html', biofile_cn: 'wanglan_cn.html', time: '2:00 - 3:30pm', room: '104', fallprice: '220', springprice: '220', selected: true, termregistered: {fallselected: false, springselected: false}},
			{id: '1000003', name: 'Chinese Level 2', teacher: 'Peng Li', biofile_en: 'pengli_en.html', biofile_cn: 'pengli_cn.html', time: '2:00 - 3:30pm', room: '114', fallprice: '220', springprice: '220', selected: false, termregistered: {fallselected: false, springselected: false}},
			{id: '1000005', name: 'Chinese Level 3', teacher: 'Li Qingwei', biofile_en: 'liqingwei_en.html', biofile_cn: 'liqingwei_cn.html', time: '2:00 - 3:30pm', room: '124', fallprice: '220', springprice: '220', selected: false, termregistered: {fallselected: false, springselected: false}},
			{id: '1000007', name: 'Chinese Level 4', teacher: 'Li Lijia', biofile_en: 'lilijia_en.html', biofile_cn: 'lilijia_cn.html', time: '2:00 - 3:30pm', room: '134', fallprice: '220', springprice: '220', selected: true, termregistered: {fallselected: true, springselected: true}}
		],
		iframeURL: "",
		showFancyBox: false,
		boxWidthPix: "540px",
		boxHeightPix: "340px",
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

	componentDidMount () {
		document.addEventListener('click', (event)=>{
			console.log(103, event.target.type);
			if(event.target.type !== "button"){
				this.setState({ iframeURL: "", showFancyBox: false });
			}
		});
	}

	componentWillUnmount () {
		document.removeEventListener('click', null);
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
					boxWidthPix={this.state.boxWidthPix}
					boxHeightPix={this.state.boxHeightPix}
				/>
		  		</div>
			</div>
		);
	}
}

export default windowSize(App);


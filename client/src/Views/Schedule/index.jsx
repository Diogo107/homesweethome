import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
//import '~@fullcalendar/core/main.css';
//import '~@fullcalendar/daygrid/main.css';
import './main.scss'
import { calendar } from './../../Services/otherServices';
// 'GPL-My-Project-Is-Open-Source'
//<FullCalendar schedulerLicenseKey="XXX" plugins={[ resourceTimelinePlugin ]} />


export default class DemoApp extends React.Component {
  constructor(props){
super(props)
  

  //calendarComponentRef = React.createRef()
  this.state = {
    calendarWeekends: true,
    calendarEvents: [ // initial event data
      { title: 'Today', start: Date.now() }
    ]
    
  }
  this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }
  toggleWeekends = () => {
    this.setState({ // update a property
      calendarWeekends: !this.state.calendarWeekends
    })
  }

  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.getApi()
    calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
  }

  async handleFormSubmission(event) {
    
    const { title,start } = this.state.calendarEvents[this.state.calendarEvents.length-1];
    console.log('this is the one', this.state.calendarEvents[this.state.calendarEvents.length-1])
    try {
      const data = await calendar({
        title,
        start,
        
      });
      
    } catch (error) {
      console.log(error);
    }
  }

  handleDateClick = (arg) => {
    if (window.confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.setState({  // add new event data
        calendarEvents: this.state.calendarEvents.concat({ // creates a new array
          title: prompt("Please enter your name"),
          start: arg.date,
          allDay: arg.allDay
        })
      })
      this.handleFormSubmission()
    }
  }

  render() {
    return (
      <div className='demo-app'>
        <div className='demo-app-top'>
          <button onClick={ this.toggleWeekends }>toggle weekends</button>&nbsp;
          <button onClick={ this.gotoPast }>go to a date in the past</button>&nbsp;
          (also, click a date/time to add an event)
        </div>
        <div className='demo-app-calendar'>
          <FullCalendar 
            defaultView="dayGridMonth"
            schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
            header={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }}
            plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin, resourceTimelinePlugin ]}
            ref={ this.calendarComponentRef }
            weekends={ this.state.calendarWeekends }
            events={ this.state.calendarEvents }
            dateClick={ this.handleDateClick }
            />
        </div>
      </div>
    )
  }

 

}

















// import React, { Component } from 'react';
// import Cal from "./../../Components/Calendar";

// class Schedule extends React.Component {
//   render() {
//     return (
//       <div>
//         <main>
//           <Cal />
//         </main>
//       </div>
//     );
//   }
// }

// export default Schedule;
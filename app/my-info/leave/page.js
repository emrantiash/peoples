"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Chart } from "chart.js";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import Button from '@/app/components/button/Button'
import Select from '@/app/components/select/Select'
import styles from './page.style'

const data = [
  {
    id: 1,
    name: "Casual Leave"
  },
  {
    id: 2,
    name: "Sick Leave"
  },
  {
    id: 3,
    name: "Annual Leave"
  }
]

export default function page() {
  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novembet", "December"],
        datasets: [{
          data: [2, 1, 0, 2, 3, 1, 1, 2, 1, 0, 2, 3, 1, 1],
          // label: "Applied",
          label: "Leave",
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgb(75, 192, 192,0.5)",
          borderWidth: 2
        }
        ]
      },
    });
  }, [])
  return (
    <div style={styles.constainer}>
      <div className='row' >
        <div className='col-11' style={styles.headingTitle}>
          <div className='text-table font-weight-bold'>
            <i className='fas fa-clock text-gray-900'></i>
            &nbsp;
            Balance Remaining
          </div>
          <div >
            <Button class="btn btn-outline-success text-table" text="Apply Leave" />
          </div>
        </div>

      </div>
      <div className='row' style={{ marginTop: 10 }}>
        <div className='col-2' style={styles.keepGap}>
          <div className='text-md'>
            Casual Leave
          </div>
          <div className='text-md' style={styles.daysCount}>
            5 days
          </div>
          <div className="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0"
            aria-valuemax="100" style={styles.barHeight}>
            <div className="progress-bar bg-success" style={{ width: '25%' }}></div>
          </div>
        </div>
        <div className='col-2' style={styles.keepGap}>
          <div className='text-md'>
            Sick Leave
          </div>
          <div className='text-table text-danger' style={styles.daysCount}>
            9 days
          </div>
          <div className="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0"
            aria-valuemax="100" style={styles.barHeight}>
            <div className="progress-bar bg-danger" style={{ width: '25%' }}></div>
          </div>
        </div>
      </div>
      <div className='row' style={{ marginTop: 20 }}>
        <div className='col-2' style={styles.keepGap}>
          <div className='text-md ' >
            Annual Leave
          </div>
          <div className='text-md text-primary' style={styles.daysCount}>
            5 days
          </div>
          <div className="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0"
            aria-valuemax="100" style={styles.barHeight}>
            <div className="progress-bar bg-primary" style={{ width: '25%' }}></div>
          </div>
        </div>

      </div>
      <div className='row' style={{ marginTop: 20 }}>
        <div className='col-11'>
          <hr />
        </div>

      </div>
      <div className='row' >
        <div className='col-11' style={{ ...styles.headingTitle }}>
          <div className='text-table font-weight-bold'>
            <i className='fas fa-chart-bar text-gray-900'></i>
            &nbsp;
            Bar Chart</div>
          <div >
            <Select data={data} />
          </div>
        </div>
      </div>
      <div className='row' >
        <div className='col-11' style={{ ...styles.headingTitle }}>
          <canvas id='myChart'></canvas>
        </div>
      </div>
      <div className='row' style={{ marginTop: 20 }}>
        <div className='col-11'>
          <hr />
        </div>

      </div>
      <div className='row' >
        <div className='col-11' style={{ ...styles.headingTitle }}>
          <div className='text-table font-weight-bold'>
            <i className='fas fa-calendar text-gray-900'></i>
            &nbsp;
            Leave Calendar</div>
         
        </div>
      </div>
      <div className='row' style={{ marginTop: 20 }}>
        <div className='col-11'>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            events={[
              {
                title: "Annual Leave Approaved",
                start: '2024-04-01',
                end: '2024-04-06',
                 display: 'block',
                textColor: 'white',
              },

              {
                title: "Sick Leave Approaved",
                start: '2024-04-17',
                end: '2024-04-19',
                backgroundColor: 'coral',
                textColor: 'white',
                // display: 'background',
                
               
              }
              
            ]}

          //   id = "calender"
          // events={value}
          />
        </div>
      </div>

    </div>
  )
}

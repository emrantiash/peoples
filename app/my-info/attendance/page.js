"use client" //tiashiit904@gmail.com
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from '@/app/components/input/Input'
import Calender from '@/app/components/calender/Calender'
import styles from './page.style'
const dates = [
  {
      id : 1 ,
      date : '2024-04-01',
      title : 'present',
      status : 1
  },
  {
      id : 2 ,
      date : '2024-04-02',
      title : 'present',
      status : 1
  },
  {
      id : 3 ,
      date : '2024-04-03',
      title : 'present',
      status : 1
  },
  {
      id : 4 ,
      date : '2024-04-04',
      title : 'absent',
      status : 2
  },
  {
      id : 3 ,
      date : '2024-04-05',
      title : 'present',
      status : 1
  },
  {
      id : 4 ,
      date : '2024-04-06',
      title : 'absent',
      status : 1
  },
  {
      id : 5 ,
      date : '2024-04-07',
      title : 'present',
      status : 2
  },
  {
      id : 6,
      date : '2024-04-08',
      title : 'absent',
      status : 1
  }
]

export default function page() {
  return (
    <div style={styles.constainer}>
      <div className='row'>
        <div className='col-2'>
          <div style={styles.dateFixed}>
            <div className='text-md'> April , 2024 </div>
            <i className='fas fa-calendar text-gray-300'></i>
          </div>
        </div>
      </div>
      <div className='row' style={styles.cardModel}>
        <div className="col-xl-3 col-md-6 mb-4" >
          <div className="card border-left-primary shadow h-100 py-2" >
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                   Total Attendance</div>
                  <div className="h6 mb-0 font-weight-normal text-gray-800">20 days</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                   Total Hours</div>
                  <div className="h6 mb-0 font-weight-normal text-gray-800">126h 26m</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='row'>
        <div className='col-2' style={styles.summeryRoot}>
          <i className='fas fa-book text-gray-300'></i>
          &nbsp;
          <div className='text-table font-weight-bold' style={styles.summeryTitle}>Todays Summery</div>
        </div>

      </div>
      <div className='row' style={styles.cardModel}>
        <div className="col-xl-3 col-md-6 mb-4" >
          <div className="card border-left-primary shadow h-100 py-2" >
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                   In Time </div>
                  <div className="h6 mb-0 font-weight-normal text-gray-800">3h 17m 26s</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-clock fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                   Break Time</div>
                  <div className="h6 mb-0 font-weight-normal text-gray-800">0h 12m 26m</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-utensil-spoon fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                   Total Time</div>
                  <div className="h6 mb-0 font-weight-normal text-gray-800">6h 26m 52s</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-calculator fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='row'>
        <div className='col-2' style={styles.summeryRoot}>
          <i className='fas fa-calendar text-gray-300'></i>
          &nbsp;
          <div className='text-table font-weight-bold' style={styles.summeryTitle}>Punch Calender</div>
        </div>

      </div>
      <div className='row' style={{marginTop : 20,height : 300}}>
        <div className='col-8'>
          <Calender dates={dates} />
        </div>
      </div>


    </div>
  )
}

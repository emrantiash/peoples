"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from "next/navigation";
import { setbreadcrumb } from '../redux/slices/breadcrumbSlice'
import { getActive, setThisIndex } from '../redux/slices/rolesSlice'
import Button from '../components/button/Button'
import Ellipsis from '../components/ellipsis/Ellipsis';

const _color = "#37B5A7";
const active = "nav-link active"

const data = [
  {
    id : 1,
    name : "Tiger Nixon",
    position : "Software Engineer",
    office  : "Dhaka",
    age :  30,
    startDate : "12-09-23",
    salary : "80000"
  },
  {
    id : 2,
    name : "John Morgan",
    position : "System Engineer",
    office  : "Dubai",
    age :  30,
    startDate : "12-09-23",
    salary : "80000"
  }
]

const ellipsis = [
  {
    id : 1,
    name  : "Edit",
    action : "_ecllipsEdit"
  },
  {
    id : 2,
    name  : "Delete",
    action : "_ecllipsEdit"
  }

]



export default function Page() {
  const router = useRouter()
  const dispatch = useDispatch()
  const { active, index } = useSelector((state) => state.rolesReducer)

  const _setMyData = (data) =>{
    console.log(data)
  }
  
  const _ecllipsEdit = () =>{
    console.log("Edit caeed")
  }

  useEffect(() => {
    dispatch(getActive())
    // dispatch(setbreadcrumb(index == 0 ? ["Setting","Salary Component", "Earning"] : ["Setting","Salary Component", "Benifit & Deduction"]))
  }, [dispatch])


  const setMyIndex = (val) => {
    console.log(val)
    dispatch(setThisIndex(val))
  }

  const _invite = () => {
    router.push(index == 0 ? '/setting/user-roles/invite' : '/setting/user-roles')
  }

  useEffect(() => {
    dispatch(setbreadcrumb(["Setting ", "User & Roles"]))
  }, [dispatch])
  return (
    <div>
      <div className='row'>
        <div className='col-10'></div>
        <div className='col-2'>
          <Button class="btn btn-success text-table" text={index == 0 ? "Invite User" : "New Role"}
            onclick={_invite} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <ul className="nav nav-tabs">
            <li className="nav-item active">
              <a className={index == 0 ? active : "nav-link"} href="/user-roles" onClick={() => setMyIndex(0)}>
                Users
              </a>
            </li>
            <li className="nav-item">
              <a className={index == 1 ? active : "nav-link"} href="/user-roles" onClick={() => setMyIndex(1)}>
                Roles
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">

        </div>
        <div className="col-md-1">
          {/* <Select data={selectData} /> */}
        </div>
        <div className="col-md-2"></div>
      </div>

      <div className='row'>
        <div className='col-1'></div>
        <div className='col-8'>
          <div className="card-body">
            {
              index == 0 ?
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Users </h6>
                  </div>
                  <div className="card-body text-table" >
                    <div className="table-responsive">
                      <table
                        className="table table-bordered"
                        id="dataTable"
                        width="100%"
                        cellSpacing="0"
                      >
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            data.map((data,index)=>
                            <tr key={index} >
                            <td>{data.name}</td>
                            <td>{data.position}</td>
                            <td>{data.office}</td>
                            <td>{data.age}</td>
                            <td>{data.startDate}</td>
                            <td>{data.salary}</td>
                            <td className='text-xs'>
                             {/* <i className='fas fa-edit' style={{cursor : 'pointer'}}></i> */}

                              <Ellipsis  onClick={()=>_setMyData(data)}  />
                            </td>
                          </tr>
                            )
                          } 
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                :
                <div className="card shadow mb-4 text-table">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Roles </h6>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        className="table table-bordered"
                        id="dataTable"
                        width="100%"
                        cellSpacing="0"
                      >
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011/04/25</td>
                            <td>$320,800</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
            }

          </div>
        </div>
      </div>

    </div>
  )
}

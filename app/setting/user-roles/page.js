"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setbreadcrumb } from '@/app/redux/slices/breadcrumbSlice'
import Label from '@/app/components/label/Label'
import Input from '@/app/components/input/Input'
import Textarea from '@/app/components/textarea/Textarea'
import Checkbox from '@/app/components/checkbox/Checkbox'
import Underline from '@/app/components/underline/Underline'
import Button from '@/app/components/button/Button'
import Closewindow from '@/app/components/closewindow/Closewindow'

const empData = [
  {
    id: 1,
    name: "Basic and Personal Details"
  },
  {
    id: 2,
    name: "Salary Details"
  },
  {
    id: 3,
    name: "Employee Payment Information"
  },
  {
    id: 4,
    name: "Salary Revision"
  },
  {
    id: 5,
    name: "Employee Document"
  }
]
const payrollData = [
  {
    id: 1,
    name: "Payroll Run"
  }
]
const approvals = [
  {
    id: 1,
    name: "Salary Revision"

  }
]
const setting = [
  {
    id: 1,
    name: "Reporting Tags",
    tag: true
  },
  {
    id: 2,
    name: "Update Organizational Profile",
    tag: true
  },
  {
    id: 1,
    name: "Email Template",
    tag: true
  },
  {
    id: 1,
    name: "Pay Schedule",
    tag: false
  }
]


export default function Page() {
  const dispatch = useDispatch()

  const _goBack = () => {
    // router.push('/user-roles')
    window.location = '/user-roles'
  }

  useEffect(() => {
    dispatch(setbreadcrumb(["Setting", "User & Roles", "New Roles"]))
  }, [dispatch])
  return (
    <main>
      <div className='row'>
        <div className='col-1'></div>
        <div className='col-6 text-md' style={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <Closewindow onClick={_goBack} />
        </div>
      </div>
      <Underline gap="col-1" className="col-6" />
      <div className='row'>
        <div className='col-1'></div>
        <div className='col-6 text-md'>
          <Label title="Name" />
          <Input placeholder='name' />
          <Label title="Description" />
          <Textarea  height={150}/>


        </div>
      </div>


      <Underline gap="col-1" className="col-6" />

      <div className='row'>
        <div className='col-1'></div>
        <div className='col-6 text-md'>
          Employee
        </div>
      </div>
      <Underline gap="col-1" className="col-6" />
      <div className='row'>
        <div className='col-1'></div>
        <div className='col-6 text-md'>
          <table className="table table-borderless">
            <thead>
              <tr className='text-table font-weight-normal'>
                <th scope="col" >Name</th>
                <th scope="col">Full Access</th>
                <th scope="col">View</th>
                <th scope="col">Create</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>

              </tr>
            </thead>
            <tbody>
              {
                empData.map((data, index) =>
                  <tr key={index} className='text-table font-weight-normal'>
                    <td scope="row" >{data.name}</td>
                    <td style={{ textAlign: 'center' }}> <Checkbox id="full" />  </td>
                    <td style={{ textAlign: 'center' }}> <Checkbox checked id="view" />  </td>
                    <td style={{ textAlign: 'center' }}> <Checkbox id="create" />  </td>
                    <td style={{ textAlign: 'center' }}> <Checkbox id="edit" />  </td>
                    <td style={{ textAlign: 'center' }}> <Checkbox id="delete" />  </td>
                  </tr>
                )
              }


            </tbody>
          </table>

        </div>
      </div>
      <Underline gap="col-1" className="col-6" />
      <div className='row'>
        <div className='col-1'></div>
        <div className='col-6' style={{ marginLeft: 30 }}>
          <Checkbox checked text="Provide access to view and download employee Payslips" />
          <Checkbox checked text="Provide access to view and download employee Payslips" />
          <Checkbox checked text="Provide access to view and download employee Payslips" />
        </div>
      </div>
      <Underline gap="col-1" className="col-6" />
      <div className='row'>
        <div className='col-1'></div>
        <div className='col-6 text-md'>
          Payroll Run
        </div>
      </div>
      <Underline gap="col-1" className="col-6" />
      <div className='row'>
        <div className='col-1'></div>
        <div className='col-6 text-md'>
          <table className="table table-borderless">
            <thead>
              <tr className='text-table font-weight-normal'>
                <th scope="col" >Name</th>
                <th scope="col">Full Access</th>
                <th scope="col">View</th>
                <th scope="col">Create</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                payrollData.map((data, index) =>
                  <tr key={index} className='text-table font-weight-normal'>
                    <td scope="row" >{data.name}</td>
                    <td style={{ textAlign: 'center' }}> <Checkbox id="full" />  </td>
                    <td style={{ textAlign: 'center' }}> <Checkbox checked id="view" />  </td>
                    <td style={{ textAlign: 'center' }}> <Checkbox id="create" />  </td>
                    <td style={{ textAlign: 'center' }}> <Checkbox id="edit" />  </td>
                    <td style={{ textAlign: 'center' }}> <Checkbox id="delete" />  </td>
                  </tr>
                )
              }

            </tbody>
          </table>
        </div>
      </div>
      <Underline gap="col-1" className="col-6" />
      <div className='row' >
        <div className='col-1'></div>
        <div className='col-6 text-md'>
          Approvals
        </div>
      </div>
      <Underline gap="col-1" className="col-6" />
      <div className='row'>
        <div className='col-1'></div>
        <div className='col-6 text-md' style={{ marginLeft: 0 }}>
          {
            approvals.map((data, index) =>
              <div key={index} style={{
                display: 'flex',
                marginLeft: 30
              }}>
                <Checkbox id="full" checked />
                <div className='text-table'>{data.name}</div>
              </div>
            )
          }
        </div>
      </div>
      <Underline gap="col-1" className="col-6" />
      <div className='row' >
        <div className='col-1'></div>
        <div className='col-6 text-md'>
          Settings
        </div>
      </div>
      <Underline gap="col-1" className="col-6" />
      <div className='row'>
        <div className='col-1'></div>
        <div className='col-6 text-md' style={{ marginLeft: 0 }}>
          {
            setting.map((data, index) =>
              <div key={index} style={{
                display: 'flex',
                marginLeft: 30,
                marginBottom: 5
              }}>
                <Checkbox id="full" checked />
                <div className='text-table'>{data.name}</div>
              </div>
            )
          }
        </div>
      </div>
      <Underline gap="col-1" className="col-6" />
      <div className='row' >
        <div className='col-1'></div>
        <div className='col-6 text-md'>
          Report
        </div>
      </div>
      <Underline gap="col-1" className="col-6" />
      <div className='row'>
        <div className='col-1'></div>
        <div className='col-6 text-md' style={{ marginLeft: 0 }}>
          {
            setting.map((data, index) =>
              <div key={index} style={{
                display: 'flex',
                marginLeft: 30,
                marginBottom: 5
              }}>
                <Checkbox id="full" checked={data.tag} />
                <div className='text-table'>{data.name}</div>
              </div>
            )
          }
        </div>
      </div>
      <Underline gap="col-1" className="col-6" />
      <div className='row' style={{ marginBottom: 80 }}>
        <div className='col-1'></div>
        <div className='col-6 text-md' style={{ display: 'flex', flexDirection: 'row' }}>
          <Button class="btn btn-success" text="Save" /> &nbsp;
          <Button class="btn btn-outline-success" text="Cancel" onclick={_goBack} />
        </div>
      </div>
    </main>
  )
}

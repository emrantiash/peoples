"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setbreadcrumb } from '@/app/redux/slices/breadcrumbSlice'
import { useRouter } from "next/navigation";
import Label from '@/app/components/label/Label'
import Input from '@/app/components/input/Input'
import Button from '@/app/components/button/Button'
import Underline from '@/app/components/underline/Underline'
import Closewindow from '@/app/components/closewindow/Closewindow';

export default function Page() {
    const router = useRouter()
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(setbreadcrumb(["Setting", "User & Roles", "Invite People"]))

    }, [])

    const _goBack = () =>{
        // router.push('/user-roles')
        window.location = '/user-roles'
    }
    return (
        <div>

            <div className='row'>
                <div className='col-4' style={{
                    display : 'flex',
                    justifyContent : 'flex-end'
                }}>
                    <Closewindow onClick={_goBack} />
                </div>
            </div>
            <Underline gap='col-1' className='col-3' />
            
            <div >


                <div className='row' style={{ marginTop: 0 }}>
                    <div className='col-1'>
                    </div>
                    <div className='col-3'>
                        <Label title="Name" required />
                        <Input placeholder='Name' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-1'>
                    </div>
                    <div className='col-3'>
                        <Label title="Email" required />
                        <Input placeholder='Email' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-1'>
                    </div>
                    <div className='col-3'>
                        <Label title="Role" required />
                        <Input placeholder='Name' />
                    </div>
                </div>
                <Underline gap='col-1' className='col-3' />
                <div className='row' style={{ marginBottom: 30 }}>
                    <div className='col-1'>
                    </div>
                    <div className='col-3' style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <Button class="btn btn-success" text="Save" /> &nbsp;
                        <Button class="btn btn-outline-primary" text="Cancel" onclick={_goBack} />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from '@/app/components/input/Input'
import Button from '@/app/components/button/Button'
import Select from '@/app/components/select/Select'
import styles from './page.style'

const selectData = [
    {
        id: 1,
        name: "Sort"
    }
]

const files = [
    {
        id : 1,
        name : "Employee Uploads ",
        number : "0 Items"
    },
    {
        id : 2,
        name : "Other Uploads ",
        number : "5 Items"
    }
]

export default function page() {
    return (
        <div style={styles.conatiner}>
            <div style={styles.title}>
                <div style={{ color: '' }}><i className='fas fa-file-alt'></i></div>&nbsp;
                <div className='text-table font-weight-700' style={{ marginTop: 5 }}>Documents</div>
            </div>
            <div style={styles.buttonGroups}>
                <div style={{
                    display: 'flex',
                    // width : '16%',
                    // justifyContent : 'space-between'
                }}>
                    <Button class="btn btn-outline-success text-lg" text="upload" height={50} />
                    &nbsp;
                    <Select data={selectData} height={50} style={{ borderRadius: 8, width: 400 }} />
                </div>
                <div style={{
                    display: 'flex',
                }}>
                    <Input placeholder='search ' height={45} />
                    <Button class="btn btn-warning text-table" text="search" height={50} />
                </div>

            </div>
            <hr />

            <div style={styles.mainBody}>
               <div style={styles.insideMainBody}>
                    <i className='fas fa-file fa-2x'></i>
                    <div className='text-table'>Employee Uploads</div>
                    <div className='text-table'>0 Items</div>
               </div>
               <div style={styles.insideMainBody}>
                    <i className='fas fa-file fa-2x'></i>
                    <div className='text-table'>Employee Uploads</div>
                    <div className='text-table'>5 Items</div>
               </div>
            </div>

        </div>
    )
}

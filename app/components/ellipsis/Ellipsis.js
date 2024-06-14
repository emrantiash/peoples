"use client"
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Ellipsis = props => {
    const [flag, setFlag] = useState(false)

    const _changeFlag = () => {
        setFlag(!flag)
    }
    return (
        <div >
            <i className='fas fa-edit' style={{cursor : 'pointer'}} onClick={props.onClick}></i>
            {/* <i className='fas fa-ellipsis-h' style={{ cursor: 'pointer' }} onClick={_changeFlag} />
            {
                flag &&
                props.ellipsis.map((data, index) =>
                    <div key={index}>
                        <div className='text-xs' >{data.name}</div>
                    </div>
                )

            } */}

        </div>
    )

}

Ellipsis.propTypes = {}

export default Ellipsis
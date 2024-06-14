import React,{useState} from 'react'
import PropTypes from 'prop-types'

const Checkbox = props => {
    const [value,setValue] = useState(props.checked)

    const _change = () =>{
        setValue(!value)
    }
    return (
        <div >
            <input className="form-check-input" type="checkbox" value="" id={props.id} checked={props.checked && "checked"} onChange={_change} />
            <label className="form-check-label text-table" htmlFor="flexCheckChecked">
                {props.text}
            </label>

        </div>

    )
}

Checkbox.propTypes = {}

export default Checkbox
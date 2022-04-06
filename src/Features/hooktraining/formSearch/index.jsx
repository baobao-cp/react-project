import React, { useRef, useState } from 'react'
import { PropTypes } from 'prop-types';
import './style.scss'


FormFilter.prototype = {
    onSubmitFilter: PropTypes.func,
}

FormFilter.defaultProps = {
    onSubmitFilter: null,
}

function FormFilter({ onSubmitFilter }) {
    const [value, setValue] = useState('')
    const globalState = useRef(null)
    // console.log(value)
    const handleSubmit = (e) => {
        e.preventDefault()
        const keyboardEvent = e.target.value
        setValue(keyboardEvent)
        if (!onSubmitFilter) return;

        if (globalState.current) {
            clearTimeout(globalState.current);
        }
        globalState.current = setTimeout(() => {
            const formValue = {
                searchValue: keyboardEvent
            }
            onSubmitFilter(formValue)
        }, 300)


    }
    return (
        <>
            <div className="form-outline">
                <input
                    type="text"
                    id="form12"
                    className="form"
                    placeholder="Search"
                    onChange={handleSubmit}
                />
            </div>
        </>
    )
}

export default FormFilter
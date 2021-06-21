import React, { useMemo, useState } from 'react'

import Select from 'react-select'
import countryList from 'react-select-country-list'

import './FeedForm.css'

const FeedForm = ({ setFormActive }) => {
    const [countrySL, setCountrySL] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setCountrySL(value)
    }

    const formClose = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setFormActive(false)
        }
    }
    return (
        <div className="container__Form backdrop" onClick={formClose}>
            <div className="form__Wrap">
                <h1>Thank you so much for taking the time!</h1>
                <p>Please provide the below details</p>
                <div className="form">
                    <div className="input__Group">
                        <div className="label">First Name : </div>
                        <input 
                            type="text" 
                            placeholder="John" 
                            required 
                        />
                    </div>
                    <div className="input__Group">
                        <div className="label">Last Name : </div>
                        <input 
                            type="text" 
                            placeholder="Doe" 
                            required 
                        />
                    </div>
                    <div className="input__Group">
                        <div className="label">Address : </div>
                        <textarea 
                            type="text" 
                            placeholder="Enter your full address :" 
                            className="address"
                            required 
                        />
                    </div>
                    <div className="input__Group">
                        <div className="label">Country : </div>
                        <div className="country">
                        <div className="select">
                        <Select options={options} countrySL={countrySL} onChange={changeHandler} />
                        </div>
                        </div>
                    </div>
                    <div className="input__Group">
                        <div className="label">Email Id : </div>
                        <input 
                            type="email" 
                            placeholder="example@sample.com"  
                            required
                        />
                    </div>
                    <div className="input__Group">
                        <div className="label">Phone Number</div>
                        <div className="phoneNumber">
                            <input 
                                type="text" 
                                placeholder="+91" 
                                className="code" 
                                pattern="[0-9]{2}"
                            />
                            <input 
                                type="text" 
                                placeholder="1234567890" 
                                className="number"
                                pattern="[7-9]{1}[0-9]{9}"
                            />
                        </div>
                    </div>
                    <button>Submit Feedback</button>
                </div>
            </div>
        </div>
    )
}

export default FeedForm

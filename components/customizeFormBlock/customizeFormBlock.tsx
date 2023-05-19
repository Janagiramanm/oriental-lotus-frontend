import next from "next";
import styles from "./customizeFormBlock.module.scss";
import React, {useState, useEffect} from 'react'
import Link from "next/link";
import { ApiService } from "../../services/api.service";
import axios from 'axios';

export default function CustomizeFormBlock() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isEmailValid, setEmailValid] = useState(true); 
    const [mobileNumber, setMobileNumber] = useState('');
    const [isMobileValid, setMobileValid] = useState(true);
    const [companyName, setCompanyName] = useState('');
    const [location, setLocation] = useState('');
    const [city, setCity] = useState('');
    const [remarks, setRemarks] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e:any) => {
        setEmail(e.target.value);
      };
    
      // Function to handle mouse out event and perform validation
      const handleMouseOut = () => {
        if (email&&!validateEmail(email)) {
            setEmailValid(false);
        } else {
            setEmailValid(true);
        }
      };
    
      // Function to validate email format
      const validateEmail = (email:any) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      };


      // Function to handle mobile number input change
  const handleMobileNumberChange = (e:any) => {
    const value = e.target.value;

    // Validate and update the mobile number if it meets the requirements
    if (value.length <= 13 && /^[0-9]*$/.test(value)) {
      setMobileNumber(value);
    }
  };

  // Function to handle blur event and perform validation
  const handleBlur = () => {
    if (!validateMobileNumber(mobileNumber)) {
        setMobileValid(false);
    } else {
        setMobileValid(true);
    }
  };

  // Function to validate mobile number format
  const validateMobileNumber = (number:any) => {
    // Customize the validation logic according to your requirements
    const regex = /^\d{10}$/; // Validates a 10-digit number
    return regex.test(number);
  };

    const handleSubmit = async (e:any ) => {
          const baseUrl = new ApiService();
            e.preventDefault();

            // Create a payload object with the form data
            const payload = {
                    name,
                    email,
                    mobileNumber,
                    companyName,
                    location,
                    city,
                    remarks
            };
            try {

              if(name !='' && email !="" && mobileNumber !=""){
                const response = await fetch( baseUrl.getFrotendUrl() + `/api/customizeForm`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                  });
                  if (response.ok) {
                    console.log('Form data submitted to WordPress');
                    setName('');
                    setEmail('');
                    setMobileNumber('');
                    setCompanyName('');
                    setLocation('');
                    setCity('');
                    setRemarks('');
                    setSuccess('Mail sent successfully');
                  } else {
                    const errorData = await response.json();
                    setError(errorData.message || 'Failed to submit form data');
                  }
             }
                
          
               
              } catch (error) {
                // Handle network or other errors
                console.error('Error:', error);
              }

           
    }
    return (
        <div>
            <div className={styles.form}>
                <div className={`container`}>
                    <div className={`row`}>
                        <div className={styles.EnquiryTitle}>
                            <h4>Customize Enquiry</h4>
                        </div>
                    </div>
                    <div className={`row`}>
                        <div className={`col-7 mx-auto`}>
                            <div className={`row`}>
                                <div className={`col-md-6`}>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInput"
                                               placeholder="Full Name"
                                               onChange={(e) => setName(e.target.value)} 
                                               value={name}/>
                                        <label htmlFor="floatingInput">Full Name</label>
                                    </div>

                                </div>
                                <div className={`col-md-6`}>
                                    <div className="form-floating mb-3">
                                    <input
                                            type="email"
                                            value={email}
                                            onChange={handleEmailChange}
                                            onMouseOut={handleMouseOut}
                                            className="form-control"
                                            placeholder="Email Address" 
                                        />
                                        <label htmlFor="floatingInput">Email Address</label>
                                        {!isEmailValid && <span style={{ color: 'red' }}>Invalid email format</span>}
                                    </div>
                                </div>
                            </div>
                            <div className={`row`}>
                                <div className={`col-md-6`}>
                                    <div className="form-floating mb-3">
                                    <input
                                        type="tel"
                                        value={mobileNumber}
                                        onChange={handleMobileNumberChange}
                                        onBlur={handleBlur}
                                        maxLength={13}
                                        className="form-control"
                                        placeholder="Mobile Number"
                                    />
                                     {!isMobileValid && <span style={{ color: 'red' }}>Invalid mobile number</span>}
                                        <label htmlFor="floatingInput">Mobile Number</label>
                                    </div>

                                </div>
                                <div className={`col-md-6`}>
                                    <div className="form-floating mb-3">
                                        <input type="Name" className="form-control" id="floatingInput"
                                               placeholder="Company Name"
                                               onChange={(e) => setCompanyName(e.target.value)}
                                               value={companyName} />
                                        <label htmlFor="floatingInput">Company Name</label>
                                    </div>
                                </div>
                            </div>
                            <div className={`row`}>
                                <div className={`col-md-6`}>
                                    <div className="form-floating mb-3">
                                        <input type="Name" className="form-control" id="floatingInput"
                                               placeholder="Location"
                                               onChange={(e) => setLocation(e.target.value)}
                                               value={location} />
                                        <label htmlFor="floatingInput">Location</label>
                                    </div>

                                </div>
                                <div className={`col-md-6`}>
                                    <div className="form-floating mb-3">
                                        <input type="Name" className="form-control" id="floatingInput"
                                               placeholder="City" 
                                               onChange={(e) => setCity(e.target.value)}
                                               value={city}/>
                                        <label htmlFor="floatingInput">City</label>
                                    </div>
                                </div>
                            </div>
                            <div className={`row`}>
                                <div className={`col-md-12`}>
                                    <div className="form-floating mb-3">
                                        <textarea  className="form-control" id="floatingInput"
                                               placeholder="Remark" 
                                               onChange={(e) => setRemarks(e.target.value)}
                                               value={remarks}/>
                                        <label htmlFor="floatingInput">Remark</label>
                                    </div>

                                </div>

                            </div>
                            <div className={`row`}>
                                <div className={`col-12 text-center`}>
                                    <button className={`btn btn-primary`} onClick={handleSubmit}>Sumbit</button>
                                </div>
                            </div>
                            <div className={`row`}>
                                <div className="col-12 text-center">
                                  {success ?
                                     <label className={`${styles.successMsg}`}>{success}</label>
                                  :''}

                                </div>

                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
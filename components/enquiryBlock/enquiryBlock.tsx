import next from "next";
import styles from "./enquiryBlock.module.scss";
import React, {} from 'react'
import Link from "next/link";

export default function EnquiryBlock() {
    return (
        <div>
            <div className={styles.form}>
                <div className={`container`}>
                    <div className={`row`}>
                        <div className={styles.EnquiryTitle}>
                            <h4>Make and Enquiry</h4>
                        </div>
                    </div>
                    <div className={`row`}>
                        <div className={`col-7 mx-auto`}>
                            <div className={`row`}>
                                <div className={`col-md-6`}>
                                    <div className="form-floating mb-3">
                                        <input type="Name" className="form-control" id="floatingInput"
                                               placeholder="Full Name" />
                                        <label htmlFor="floatingInput">Full Name</label>
                                    </div>

                                </div>
                                <div className={`col-md-6`}>
                                    <div className="form-floating mb-3">
                                        <input type="Name" className="form-control" id="floatingInput"
                                               placeholder="Email Address" />
                                        <label htmlFor="floatingInput">Email Address</label>
                                    </div>
                                </div>
                            </div>
                            <div className={`row`}>
                                <div className={`col-md-6`}>
                                    <div className="form-floating mb-3">
                                        <input type="Name" className="form-control" id="floatingInput"
                                               placeholder="Phone Number" />
                                        <label htmlFor="floatingInput">Phone Number</label>
                                    </div>

                                </div>
                                <div className={`col-md-6`}>
                                    <div className="form-floating mb-3">
                                        <input type="Name" className="form-control" id="floatingInput"
                                               placeholder="Company Name" />
                                        <label htmlFor="floatingInput">Company Name</label>
                                    </div>
                                </div>
                            </div>
                            <div className={`row`}>
                                <div className={`col-md-6`}>
                                    <div className="form-floating mb-3">
                                        <input type="Name" className="form-control" id="floatingInput"
                                               placeholder="Location" />
                                        <label htmlFor="floatingInput">Location</label>
                                    </div>

                                </div>
                                <div className={`col-md-6`}>
                                    <div className="form-floating mb-3">
                                        <input type="Name" className="form-control" id="floatingInput"
                                               placeholder="City" />
                                        <label htmlFor="floatingInput">City</label>
                                    </div>
                                </div>
                            </div>
                            <div className={`row`}>
                                <div className={`col-md-12`}>
                                    <div className="form-floating mb-3">
                                        <textarea  className="form-control" id="floatingInput"
                                               placeholder="Remark" />
                                        <label htmlFor="floatingInput">Remark</label>
                                    </div>

                                </div>

                            </div>
                            <div className={`row`}>
                                <div className={`col-12 text-center`}>
                                    <button className={`btn btn-primary`}>Sumbit</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
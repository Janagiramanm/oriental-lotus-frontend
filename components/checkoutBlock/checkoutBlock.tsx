import next from "next";
import styles from "./checkoutBlock.module.scss";
import React, {} from 'react'
import Link from "next/link";

export default function CheckoutBlock() {
    return (
        <div>
            <div className={styles.checkoutTitle}>
                <div className={`container`}>
                    <div className={`row`}>
                        <div className={`col-12`}>
                            <h3>My Enquiry List</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.orderTitle}>
                <div className={`container`}>
                    <div className={`row`}>
                        <div className={`col-12`}>
                            <h3 className={`text-secondary`}>YOUR ORDER</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.orderListBlock}>
                <div className={`container`}>
                    <div className={styles.orderHead}>
                        <div className={`row`}>
                        <div className={`col-10`}>
                            <div className={styles.tableTitle}><h4>Product Information</h4></div>
                        </div>
                        <div className={`col-2`}>
                            <div className={styles.tableTitle}><h4>MOQ</h4></div>
                        </div>
                    </div>
                    </div>

                    <div className={styles.orderBody}>
                        <div className={`row justify-content-center align-items-center`}>
                        <div className={`col-1`}>
                            <img src={`/images/smallimg.png`} />
                        </div>
                        <div className={`col-8`}>
                            <h4>Simplicity Dispenser</h4>
                            <h5>Item Code - 83320012342</h5>
                        </div>
                        <div className={`col-2`}>
                                <div className={`${styles.threeInput} input-group`}>
                                    <span className="input-group-text"> <i className="bi bi-dash"></i></span>
                                    <input type="text" aria-label="First name" className="form-control text-center" />
                                    <span className="input-group-text"> <i className="bi bi-plus"></i></span>
                                </div>
                        </div>
                    </div>
                    </div>
                    <div className={styles.orderBody}>
                        <div className={`row justify-content-center align-items-center`}>
                            <div className={`col-1`}>
                                <img src={`/images/smallimg.png`} />
                            </div>
                            <div className={`col-8`}>
                                <h4>Simplicity Dispenser</h4>
                                <h5>Item Code - 83320012342</h5>
                            </div>
                            <div className={`col-2`}>
                                <div className={`${styles.threeInput} input-group`}>
                                    <span className="input-group-text"> <i className="bi bi-dash"></i></span>
                                    <input type="text" aria-label="First name" className="form-control text-center" />
                                    <span className="input-group-text"> <i className="bi bi-plus"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.orderBody}>
                        <div className={`row justify-content-center align-items-center`}>
                            <div className={`col-1`}>
                                <img src={`/images/smallimg.png`} />
                            </div>
                            <div className={`col-8`}>
                                <h4>Simplicity Dispenser</h4>
                                <h5>Item Code - 83320012342</h5>
                            </div>
                            <div className={`col-2`}>
                                <div className={`${styles.threeInput} input-group`}>
                                    <span className="input-group-text"> <i className="bi bi-dash"></i></span>
                                    <input type="text" aria-label="First name" className="form-control text-center" />
                                    <span className="input-group-text"> <i className="bi bi-plus"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.orderBody}>
                        <div className={`row justify-content-center align-items-center`}>
                            <div className={`col-1`}>
                                <img src={`/images/smallimg.png`} />
                            </div>
                            <div className={`col-8`}>
                                <h4>Simplicity Dispenser</h4>
                                <h5>Item Code - 83320012342</h5>
                            </div>
                            <div className={`col-2`}>
                                <div className={`${styles.threeInput} input-group`}>
                                    <span className="input-group-text"> <i className="bi bi-dash"></i></span>
                                    <input type="text" aria-label="First name" className="form-control text-center" />
                                    <span className="input-group-text"> <i className="bi bi-plus"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.orderBody}>
                        <div className={`row justify-content-center align-items-center`}>
                            <div className={`col-1`}>
                                <img src={`/images/smallimg.png`} />
                            </div>
                            <div className={`col-8`}>
                                <h4>Simplicity Dispenser</h4>
                                <h5>Item Code - 83320012342</h5>
                            </div>
                            <div className={`col-2`}>
                                <div className={`${styles.threeInput} input-group`}>
                                    <span className="input-group-text"> <i className="bi bi-dash"></i></span>
                                    <input type="text" aria-label="First name" className="form-control text-center" />
                                    <span className="input-group-text"> <i className="bi bi-plus"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
import next from "next";
import styles from "./MainNav.module.scss";
import React, {} from 'react'
export default function MainNav() {
    return (
        <div className={styles.mainNav}>
            <div className="container-fluid">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img src={"/images/logo.png"} width={"100px"} />
                    </a>
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 ">PRODUCTS</a></li>
                        <li><a href="#" className="nav-link px-2 ">BRANDS</a></li>
                        <li><a href="#" className="nav-link px-2 ">CUSTOMISE</a></li>
                        <li><a href="#" className="nav-link px-2 ">ABOUT</a></li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <div className="d-flex justify-content-end align-items-center">
                            <div className={styles.cartIcon}><img src={"/images/cart.svg"} /></div>
                            <button type="button" className="btn btn-primary">CONTACT</button>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}
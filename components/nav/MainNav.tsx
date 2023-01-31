import next from "next";
import styles from "./MainNav.module.scss";
import React, { useState, useEffect } from 'react'
import Link from "next/link";
export default function MainNav() {

    const [scroll, setScroll] = useState('')
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck) {
                setScroll('whitemenu');
            } else {
                setScroll('');
            }
        })

    },[])
    return (
        <div className={styles.mainNav +' '+ scroll} >
            <div className="container-fluid">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                    <Link href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img src={"/images/logo.png"} width={"100px"} />
                    </Link>
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><Link href="#" className="nav-link px-2 ">PRODUCTS</Link></li>
                        <li><Link href="#" className="nav-link px-2 ">BRANDS</Link></li>
                        <li><Link href="#" className="nav-link px-2 ">CUSTOMISE</Link></li>
                        <li><Link href="#" className="nav-link px-2 ">ABOUT</Link></li>
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
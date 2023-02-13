import next from "next";
import styles from "./MainNav.module.scss";
import React, { useState, useEffect } from 'react'
import Link from "next/link";
import Image from "next/image";
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
                <header className="d-flex flex-wrap justify-content-between align-items-center py-0 py-sm-4">
                    <Link href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img width={`120`} src={"/images/logo.png"}  alt={`image`} />
                    </Link>
                    <ul className="d-none d-md-flex nav col-6 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><Link href="#" className="nav-link px-2 ">PRODUCTS</Link></li>
                        <li><Link href="#" className="nav-link px-2 ">BRANDS</Link></li>
                        <li><Link href="#" className="nav-link px-2 ">CUSTOMISE</Link></li>
                        <li><Link href="#" className="nav-link px-2 ">ABOUT</Link></li>
                    </ul>

                    <div className="col-md-3  text-end">
                        <div className="d-flex justify-content-end align-items-center">
                            <div className={styles.cartIcon}><img alt={`image`} src={"/images/cart.svg"} /></div>
                            <div className={`${styles.cartIcon} d-block d-md-none`}><img alt={`image`} src={"/images/menu.svg"} /></div>
                            <button type="button" className="d-none d-md-block btn btn-primary">CONTACT</button>
                        </div>
                    </div>
                </header>
            </div>

        </div>
    );
}
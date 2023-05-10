import next from "next";
import styles from "./MainNav.module.scss";
import React, { useState, useEffect } from 'react'
import Link from "next/link";
import Image from "next/image";
import { ApiService } from "../../services/api.service";
import axios from "axios";
export default function MainNav({categories, products, brands, cartItems, menu}: any) {
  
    console.log('MENUA==',menu[0].acf)
   
    const [scroll, setScroll] = useState('')
    const [dblock, setDblock] = useState(" d-none");
    const [bmenu, setBrandblock] = useState(" d-none");
    const [cartCount, setCartItems] = useState<string | null >('');
    
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck) {
                setScroll('whitemenu');
            } else {
                setScroll('');
            }
        })
        const count = window.localStorage.getItem('cartCount');
        setCartItems(count);

    },[cartItems])
    const showMenu = (() =>{
        hideMenu();
        setDblock(" d-block");
    });
    const hideMenu = (() =>{
        setDblock(" d-none");
        setBrandblock(" d-none");
    });

    const showBrandMenu = (()=>{
        hideMenu();
        setBrandblock("");
    })
    return (
        <div className={`${styles.mainNav +' '+ scroll } animate__animated animate__delay-4s animate__fadeInDown`} >
            <div className="container-fluid">
                <header className="d-flex flex-wrap justify-content-between align-items-center py-0 py-sm-4">
                    <Link href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img width={`120`} src={"/images/logo.png"}  alt={`image`} />
                    </Link>
                    <ul className="d-none d-md-flex nav col-6 col-md-auto mb-2 justify-content-center mb-md-0">
                         {menu[0].acf.main_menu?.map((element:any, index:any)=>(
                              <li key={index}><Link href='' onMouseOver={showMenu} onClick={hideMenu}>{element.main_menu_name}</Link>
                                <div className={ "menuDrop product-menu "+dblock } onMouseLeave={hideMenu}>
                                        <div className={styles.menuWhite}>
                                            <div className={`container`}>
                                                <div className={`row`}>
                                                    <div className={`col-md-3`}>
                                                            <ul>
                                                                {
                                                                element.sub_menu&&element.sub_menu?.map((elem:any, ind:any)=>(
                                                                    <li key={ind}><Link href='' onClick={hideMenu}>{elem.sub_menu_title}</Link></li>
                                                                ))
                                                            }
                                                            </ul>

                                                    </div>
                                                
                                                </div>
                                            </div>
                                        </div>
                                        

                                </div>
                          </li>
                        ))}
                         
                    </ul>
                

                    <div className="col-md-3  text-end">
                        <div className="d-flex justify-content-end align-items-center">
                            <div className={styles.cartIcon}>
                                {cartCount !='0' ? 
                                <a className={`position-relative`} href={'/checkout'}><span className={styles.counter}>{cartCount}</span><img alt={`image`} src={"/images/cart.svg"} /></a>
                                   :''            }
                                </div>
                            <div className={`${styles.cartIcon} d-block d-md-none`}><img alt={`image`} src={"/images/menu.svg"} /></div>
                            <button type="button" className="d-none d-md-block btn btn-primary">CONTACT</button>
                        </div>
                    </div>
                </header>
            </div>

        </div>
    );
}


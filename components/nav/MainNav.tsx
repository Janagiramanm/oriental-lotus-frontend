import next from "next";
import styles from "./MainNav.module.scss";
import React, { useState, useEffect } from 'react'
import Link from "next/link";
import Image from "next/image";
import { ApiService } from "../../services/api.service";
import axios from "axios";
export default function MainNav({categories, products, brands}: any) {
  
    // console.log('BRANDS==',brands)
   
    const [scroll, setScroll] = useState('')
    const [dblock, setDblock] = useState(" d-none");
    const [bmenu, setBrandblock] = useState(" d-none");
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
    const showMenu = (() =>{
        hideMenu();
        setDblock("");
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
        <div className={styles.mainNav +' '+ scroll } >
            <div className="container-fluid">
                <header className="d-flex flex-wrap justify-content-between align-items-center py-0 py-sm-4">
                    <Link href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img width={`120`} src={"/images/logo.png"}  alt={`image`} />
                    </Link>
                    <ul className="d-none d-md-flex nav col-6 col-md-auto mb-2 justify-content-center mb-md-0">

                        <li>
                            <Link href="#" className="nav-link px-2 " onMouseOver={showMenu}>PRODUCTS</Link>
                            <div className={ "menuDrop product-menu "+dblock } onMouseLeave={hideMenu}>
                                <div className={`row`}>
                                    <div className={`col-md-3`}>
                                        <h4>Products</h4>
                                        <ul>
                                            {categories?.map((element:any, index:any)=>(
                                               
                                                 <li key={index}><Link href={`/product/`+element.slug} onClick={hideMenu}>{element.acf.title}</Link></li>
                                               
                                            ))}
                                           
                                        </ul>
                                        <Link href={`/`} className={styles.viewMore}>View More Products</Link>
                                    </div>
                                    <div className={`col-md-9`}>
                                        <h4 className={`text-center`}>Products by Brand</h4>
                                        <div className={`row`}>
                                               {products?.map((element:any, index:any)=>(
                                                    <div className={`col-3`} key={index}>
                                                        <Link href={`/product/`+element.acf.product_overview?.post_name} onClick={hideMenu}>
                                                            <div className={styles.MenuCard}>
                                                                <div className={styles.MenuImage}>
                                                                    <img src={element.acf.product_image.url} />
                                                                </div>
                                                                <h5>{element.acf.product_title}</h5>
                                                            </div>
                                                        </Link>
                                                       
                                                    </div>
                                               ))}
                                                
                                            
                                            
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </li>
                        <li><Link href="#" className="nav-link px-2 " onMouseOver={showBrandMenu}>BRANDS</Link>
                        
                        <div className={ "menuDrop product-menu brandMenu "+bmenu } onMouseLeave={hideMenu}>
                                <div className={`row`}>
                                    <div className={`col-md-3`}>
                                        <h4>Brands</h4>
                                        <ul>
                                            {brands?.map((element:any, index:any)=>(
                                               
                                                 <li key={index}><Link href={`/brand/`+element.slug} onClick={hideMenu}>{element.acf.brands.brand_title}</Link></li>
                                               
                                            ))}
                                           
                                        </ul>
                                        <Link href={`/`} className={styles.viewMore}>View More Products</Link>
                                    </div>
                                    <div className={`col-md-9`}>
                                        <div className={`row`}>
                                               {brands?.map((element:any, index:any)=>(
                                                    <div className={`col-4`} key={index}>
                                                        <Link href={`/brand/`+element.slug} onClick={hideMenu}>
                                                           
                                                                <div className={styles.MenuImage}>
                                                                    <img src={element.acf.brands.brand_logo.url} />
                                                                </div>
                                                               
                                                            
                                                        </Link>
                                                       
                                                    </div>
                                               ))}
                                                
                                            
                                            
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </li>
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


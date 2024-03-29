import next from "next";
import styles from "./MainNav.module.scss";
import React, { useState, useEffect } from 'react'
import Link from "next/link";
import Image from "next/image";
import { ApiService } from "../../services/api.service";
import axios from "axios";
import Router from 'next/router'
export default function MainNav({cartItems, menu}: any) {
  

    const [scroll, setScroll] = useState('')
    const [dblock, setDblock] = useState(" invisible");
    const [bmenu, setBrandblock] = useState(" invisible");
    const [cartCount, setCartItems] = useState<string | null >('0');
   

    const [activeMainIndex, setActivemainIndex] = useState(-1);
    const [activeSubmenuIndex, setActiveSubmenuIndex] = useState(-1);
    
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
        // setDblock(" d-block");
        setDblock(" visible");
    });
    const hideMenu = (() =>{
        // setDblock(" d-none");
        // setBrandblock(" d-none");

        setDblock(" invisible");
        setBrandblock(" invisible");
    });

    const showBrandMenu = (()=>{
        hideMenu();
        setBrandblock("");
    })
    
    const handleMouseOver = (arg:any,index:any) =>{
        setActivemainIndex(index);
        showMenu();
    }

    const currentMenu = (arg:any, index:any) =>{
        return () => handleMouseOver(arg,index)
    }

    const handleSubMenu = (index:any) =>{
        setActiveSubmenuIndex(index);
        showMenu();

    }
    const selectSubMenu = (index:any) => {
        return () => handleSubMenu(index);
    }

    const handleContact = () => {
        Router.push('/contact')
    }
    const baseUrl = new ApiService();
  

    return (
        <div className={`${styles.mainNav +' '+ scroll } `} >
            <div className="container-fluid">
                    <header className="d-flex flex-wrap justify-content-between align-items-center py-0 py-sm-4">
                    <title>OLHS</title>
                    <Link href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img width={`120`} src={"/images/logo.png"}  alt={`image`} />
                    </Link>
                    <ul className="d-none d-md-flex nav col-6 col-md-auto mb-2 justify-content-center mb-md-0">
                         {menu[0]?.acf.main_menu?.map((element:any, index:any)=>(
                              <li key={index}>
                            {element.sub_menu ? 

                                <Link href={baseUrl.getFrotendUrl()}
                                
                                onMouseOver={ currentMenu(element.main_menu_name.toLowerCase(),index) } 
                                onClick={hideMenu}
                                >
                                    {element.main_menu_name}
                                </Link>:
                                 <Link href={baseUrl.getFrotendUrl()+`/`+element.main_menu_link}
                                        onClick={hideMenu}
                                        onMouseOver={hideMenu} 
                                 >
                                     {element.main_menu_name}
                                 </Link>
                                }

                                <div className={ activeMainIndex == index ? dblock+' '+ element.main_menu_name.toLowerCase()+'-menu'+ " menuDrop  ":' invisible menuDrop'  } onMouseLeave={hideMenu}>
                                        <div className={styles.menuWhite}>
                                            <div className={`container`} >
                                                <div className="row py-5">
                                                             <div className="col-md-3">
                                                                {element.sub_menu&&element.sub_menu?.map((elem:any, ind:any)=>{
                                                                       
                                                                        if(element.main_menu_name == 'PRODUCTS') { 
                                                                          return(<div key={ind} className={activeSubmenuIndex == ind ?`${styles.active} `+`${styles.subMenu}`:`${styles.subMenu}`}  onMouseOver={selectSubMenu(ind)}>
                                                                                            {elem.sub_menu_title}
                                                                              </div>)
                                                                        }else{
                                                                            return(<div key={ind} >
                                                                                            <Link  href={baseUrl.getFrotendUrl()+`/`+elem.sub_menu_link} className={`row ${styles.subMenu}`} >{elem.sub_menu_title}</Link> 
                                                                              </div>)
                                                                        }
                                                                    

                                                                })}

                                                             </div>
                                                             <div className="col-md-8">
                                                             {element.sub_menu&&element.sub_menu?.map((elem:any, ind:any)=>{
                                                                    return (<div key={ind} className={activeSubmenuIndex == ind ? dblock +` columnCount `:'d-none '}>
                                                                          
                                                                           {elem.child_menu&&elem.child_menu?.map((childMenu:any, childInd:any )=>{
                                                                             
                                                                                return(<div className="row" key={childInd}>
                                                                                    <Link  href={baseUrl.getFrotendUrl()+'/'+childMenu.link} onClick={hideMenu}>{childMenu.child_menu_label}</Link> 

                                                                                </div>
                                                                                                  
                                                                                    )   
                                                                            })}

                                                                    </div>)
                                                            })}

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
                               
                                <a className={`position-relative`} href={'/checkout'}>
                                {cartCount != '0' && cartCount !=null ? 
                                    <span className={styles.counter}>{cartCount}</span>
                                    :''}
                                    <img alt={`image`} src={"/images/cart.svg"} /></a>
                                  
                                </div>
                            <div className={`${styles.cartIcon} d-block d-md-none`}><img alt={`image`} src={"/images/menu.svg"} /></div>
                            <button type="button" className="d-none d-md-block btn btn-primary" onClick={handleContact}>CONTACT</button>
                        </div>
                    </div>

                        <div className="accordion d-none" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                        PRODUCTS
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show"
                                     data-bs-parent="#accordionExample">
                                    <div className="accordion-body">


                                        <p>
                                            <a data-bs-toggle="collapse"
                                               href="#collapseExample" role="button" aria-expanded="false"
                                               aria-controls="collapseExample">
                                                WET AMENITIES
                                            </a>

                                        </p>
                                        <div className="collapse" id="collapseExample">
                                            <div className="card card-body">
                                              <ul>
                                                  <li><Link href={``}>Shampoo</Link></li>
                                                  <li><Link href={``}>Shampoo</Link></li>
                                                  <li><Link href={``}>Shampoo</Link></li>
                                                  <li><Link href={``}>Shampoo</Link></li>
                                                  <li><Link href={``}>Shampoo</Link></li>
                                                  <li><Link href={``}>Shampoo</Link></li>
                                                  <li><Link href={``}>Shampoo</Link></li>

                                              </ul>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse"
                                     data-bs-parent="#accordionExample">
                                    <div className="accordion-body">

                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                            aria-expanded="false" aria-controls="collapseThree">

                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                     data-bs-parent="#accordionExample">
                                    <div className="accordion-body">

                                    </div>
                                </div>
                            </div>
                        </div>
                </header>
            </div>

        </div>
    );
}


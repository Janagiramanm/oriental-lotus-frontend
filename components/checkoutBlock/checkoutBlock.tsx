import next from "next";
import styles from "./checkoutBlock.module.scss";
import React, { useEffect, useState } from 'react'
import Link from "next/link";
// import { isAnyArrayBuffer } from "util/types";
import EnquiryBlock from "../../components/enquiryBlock/enquiryBlock";

export default function CheckoutBlock({cartItems}:any) {

    
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

                    
                    {cartItems?.map((element:any, index:any)=>{

                       
                        return(
                                <CartSection key={index} item={element} />
                        )
                        
                        
                        
                        // const plusQuanity = () =>{
                        //     if(quantity >= 100){
                        //      setQuantity(quantity + 100)
                        //     }
                        // }
                    
                        // const minusQuanity = () =>{
                        //     if(quantity > 100){
                        //      setQuantity(quantity - 100)
                        //     }
                        // }

                        // return(
                        //     <div className={styles.orderBody} key={index}>
                        //         <div className={`row justify-content-center align-items-center`} >
                        //         <div className={`col-1`}>
                        //             <img src={product.image} />
                        //         </div>
                        //         <div className={`col-8`}>
                        //             <h4>{product.name}</h4>
                        //             <h5>Item Code - 83320012342</h5>
                        //         </div>
                        //         <div className={`col-2`}>
                        //                 <div className={`${styles.threeInput} input-group`}>
                        //                     <span className="input-group-text" onClick={minusQuanity}> <i className="bi bi-dash"></i></span>
                        //                     <input type="text" aria-label="First name" className="form-control text-center"  value={quantity}/>
                        //                     <span className="input-group-text" onClick={plusQuanity}> <i className="bi bi-plus"></i></span>
                        //                 </div>
                        //         </div>
                        //     </div>
                        //     </div>
                        // )
                    })}
                   
                </div>
            </div>
            <EnquiryBlock/>
        </div>
    );
}
function CartSection(item:any) {
    
    const items =window.localStorage.getItem(item.item);    
    const product = JSON.parse(items || '{}');
    const [quantity, setQuantity] = useState(100);
        const plusQuanity = () =>{
            if(quantity >= 100){
             setQuantity(quantity + 100)
            }
        }
    
        const minusQuanity = () =>{
            if(quantity > 100){
             setQuantity(quantity - 100)
            }
        }

        return(
            <div className={styles.orderBody}>
                <div className={`row justify-content-center align-items-center`} >
                <div className={`col-1`}>
                    <img src={product.image} />
                </div>
                <div className={`col-8`}>
                    <h4>{product.name}</h4>
                    <h5>Item Code - 83320012342</h5>
                </div>
                <div className={`col-2`}>
                        <div className={`${styles.threeInput} input-group`}>
                            <span className="input-group-text" onClick={minusQuanity}> <i className="bi bi-dash"></i></span>
                            <input type="text" aria-label="First name" className="form-control text-center"  value={quantity}/>
                            <span className="input-group-text" onClick={plusQuanity}> <i className="bi bi-plus"></i></span>
                        </div>
                </div>
            </div>
            </div>
        )
  }
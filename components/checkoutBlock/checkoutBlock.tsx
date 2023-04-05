import next from "next";
import styles from "./checkoutBlock.module.scss";
import React, { useEffect, useState } from 'react'
import { Toast, ToastContainer } from "react-bootstrap";
import Link from "next/link";
// import Modal from "react-bootstrap/Modal";
// import { isAnyArrayBuffer } from "util/types";
import EnquiryBlock from "../../components/enquiryBlock/enquiryBlock";
import Modal from '../../components/modalPopup/index';

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
                        
                    })}
                   
                </div>
            </div>
            <EnquiryBlock/>
            
        </div>
    );
}
function CartSection(item:any,cartItems:any) {
    
        const items =window.localStorage.getItem(item.item);    
        const product = JSON.parse(items || '{}');
        const [quantity, setQuantity] = useState(100);
        const [isRemove, setIsRemove] = useState(false);
        const [message, setMessage] = useState('Are you sure want to remove?');
        const [openPopup, setOpenPopup] = useState('d-none');

        const [removeItem, setRemoveItem] = useState('');

        const [cartProducts, setCartProducts] = useState(cartItems);
        console.log('CTI==',cartProducts)
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
        const removeFromCart = (item:any) =>{
            console.log('DDDWW==',item);
            //setIsRemove(false);
            // setOpenPopup('');
            setIsRemove(true);
            setOpenPopup('d-block');
            setRemoveItem(item);


            // if(isRemove){
                // const cartProducts =window.localStorage.getItem('ids');  
                // console.log('CTPRO==',cartProducts);
                // const cartIds = JSON.parse(cartProducts || `{}`);
               
                // let index = cartIds.indexOf( item )
                // if( index !== -1 ){
                //     // remove it from state
                //     cartIds.splice(index, 1 )
    
                //     console.log('CKKKK=',cartIds);
                //     window.localStorage.setItem('cartCount', cartIds.length);
    
                //     // update localStorage
                //     window.localStorage.setItem( 'ids', JSON.stringify(cartIds) )
                //     // update reptiles State to re-render the list
                //     // setCartProducts( [...cartItems] )
                //   }
            // }
           
        }
       

       const changeStatus = () =>{
        setIsRemove(false);
       }
       console.log('REEEE===',removeItem)
    //    useEffect(()=>{
    //     if(isRemove){
    //         const cartProducts =window.localStorage.getItem('ids');  
    //             console.log('CTPRO==',cartProducts);
    //             const cartIds = JSON.parse(cartProducts || `{}`);
               
    //             let index = cartIds.indexOf( removeItem )
    //             if( index !== -1 ){
    //                 // remove it from state
    //                 cartIds.splice(index, 1 )
    
    //                 console.log('CKKKK=',cartIds);
    //                 window.localStorage.setItem('cartCount', cartIds.length);
    
    //                 // update localStorage
    //                 window.localStorage.setItem( 'ids', JSON.stringify(cartIds) )
    //                 // update reptiles State to re-render the list
    //                 // setCartProducts( [...cartItems] )
    //               }
    //     }

    //    },[isRemove,removeItem])

        return(
            <div className={styles.orderBody}>
                <div className={`row justify-content-center align-items-center`} >
                <div className={`col-1`}>
                    <img src={product.image} />
                </div>
                <div className={`col-8`}>
                    <h4>{product.name}</h4>
                    <h5><span data-bs-toggle="modal" 
                      data-bs-target={"#exampleModal"+item.item}
                      className={`${styles.removeBtn}`} 
                      onClick={()=>removeFromCart(item.item)}
                    >Remove</span>
                    
                    </h5>
                </div>
                <div className={`col-2`}>
                        <div className={`${styles.threeInput} input-group`}>
                            <span className="input-group-text" onClick={minusQuanity}> <i className="bi bi-dash"></i></span>
                            <input type="text" aria-label="First name" className="form-control text-center"  value={quantity}/>
                            <span className="input-group-text" onClick={plusQuanity}> <i className="bi bi-plus"></i></span>
                        </div>
                </div>
            </div>
            {isRemove ? <Modal message={message} action={'remove'} popup={openPopup} changeStatus={changeStatus} removeItem={removeItem}/> : ''}

                    
            </div>
        )
  }
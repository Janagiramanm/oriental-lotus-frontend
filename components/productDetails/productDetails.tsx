import next from "next";
import styles from "./productDetails.module.scss";
import React, {} from 'react'
import Link from "next/link";

export default function ProductDetails({productDetails,addToCart}:any) {
    // console.log('prodDetials==',productDetails);
    return (
        <div className={styles.productDetails}>
            <div className={styles.breadcrumb}>
                <p> <Link href={'/'}>Home</Link> / 
                <Link href={`../`+ productDetails[0]?.acf.product_overview.post_name}> {productDetails[0]?.acf.product_overview.post_title}</Link>
                    / {productDetails[0]?.acf.product_title}</p>
            </div>

            <div className={styles.productDetailsBlock}>
                <div className={`container`}>
                    <div className={`row justify-content-center align-items-center`}>
                        {/* {productDetails[0]?.map((element:any, index:any)=>( */}
                             
                                    <div className={`col-md-6`}>
                                        <div className={styles.productImage}>
                                            <img src={productDetails[0]?.acf.product_image.url} />
                                        </div>
                                        </div>
                                        <div className={`col-md-6`}>
                                        <div className={styles.proContent}>
                                            <h2>{productDetails[0]?.acf.product_title}</h2>
                                            <div dangerouslySetInnerHTML={{__html:productDetails[0]?.acf.product_description}} ></div>
                                            <button className={`btn btn-primary`} 
                                               onClick={()=>addToCart(productDetails[0]?.id,productDetails[0]?.acf.product_image.url,productDetails[0]?.acf.product_title)}
                                               >Add to Enquiry</button>
                                        </div>
                                        </div>
                               
                               

                        {/* ))} */}
                       
                    </div>
                </div>
            </div>

        </div>
    );
}
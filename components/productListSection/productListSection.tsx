import next from "next";
import styles from "./productListSection.module.scss";
import React, { useState} from 'react'
import Link from "next/link";

export default function ProductListSection({productList}:any) {

     
    console.log('PRODLIST==', productList);
    const [pcount, setPcount] = useState(productList.length);
    return (
        <div className={styles.productList}>

            <div className={`container`}>
                <div className={styles.productHeader}>
                    <div className={`row`}>
                        <div className={`col-9`}>
                            <div className={styles.productItemsTitle}>
                                <h3>{pcount}{pcount > 1 ? ` Items` : ` Item` }</h3>
                            </div>
                        </div>
                        <div className={`col-3 text-end`}>
                            <div className={styles.productItemsTitle}>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.productsCardBlock}>
                    <div className={`row gx-5 gy-5 justify-content-center`}>
                        {productList?.map((element:any, index:any)=>(
                            <div className={`col-md-4`} key={index}>
                                    <div className={styles.productCard}>
                                        <div className={styles.productImage}>
                                            <img src={element.acf.product_image.url} />
                                        </div>
                                        <div className={styles.protitle}>
                                            <h5>{element.acf.product_title}</h5>
                                        </div>
                                        <div className={`row pb-4`}>
                                            <div className={`col-md-6`}>
                                                <div className={styles.brandImage}>
                                                    <img src={element.acf.brand?.brands?.brand_logo?.url} />
                                                </div>
                                            </div>
                                            <div className={`col-md-6`}>
                                                <div className={styles.shopNow}>
                                                    <Link href={`/`}>
                                                        <img src={`/images/readmore.svg`} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        ))}
                    </div>
                    {pcount > 9 ? 
                    <div className={`row pt-5 pb-5`}>
                        <div className={`col-12 text-center`}>
                            <button className={`btn btn-primary`}>Load More</button>
                        </div>
                    </div>
                    :''}
                </div>
            </div>
        </div>
    );
}
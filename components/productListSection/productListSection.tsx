import next from "next";
import styles from "./productListSection.module.scss";
import React, { useState, useEffect} from 'react'
import Link from "next/link";
import { ApiService } from "../../services/api.service";
import axios from "axios";

export default function ProductListSection({productList, mainId, parent}:any) {

     
    // console.log('PRODLIST==', productList.count);
    // console.log('MAIN===',mainId);
    const baseUrl = new ApiService();
    
    const [visiblePosts, setVisiblePosts] = useState(productList.data);
    const [paged, setPaged] = useState(2);
    // console.log('DDDDaaaa==',visiblePosts);

    useEffect(() => {
        setVisiblePosts(productList.data)
    }, [mainId]);
    
    const getProducts  = async () => {
        console.log('URL',baseUrl.getBaseUrl() + `/wp-json/wl/v1/products?meta_key=${parent}&meta_value=${mainId}&paged=${paged}`);
        const moreProducts =  await fetch(baseUrl.getBaseUrl() + `/wp-json/wl/v1/products?meta_key=${parent}&meta_value=${mainId}&paged=${paged}`);
        const moreProductList = await moreProducts.json();
        return moreProductList;

    }
    
    const handleLoadMore = async () => {
        const newPosts = await getProducts();
        if(newPosts?.data){
            setVisiblePosts([ ...visiblePosts, ...newPosts.data]);
        }
    };

    const handleClick = () => {
        // event.preventDefault();
        setPaged(paged+1);
        handleLoadMore();
    };
    // console.log('VISIBLE==',visiblePosts.length);
    return (
        <div className={styles.productList}>

            <div className={`container`}>
                <div className={styles.productHeader}>
                    <div className={`row`}>
                        <div className={`col-9`}>
                            <div className={styles.productItemsTitle}>
                                <h3>{productList.count}{productList.count > 1 ? ` Items` : ` Item` }</h3>
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
                        {visiblePosts?.map((element:any, index:any)=>(
                            <div className={`col-md-4`} key={index}>
                                    <div className={styles.productCard}>
                                        <div className={styles.productImage}>
                                            <img src={element.acf?.product_image?.url} />
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
                    {visiblePosts?.length < productList.count ? 
                    <div className={`row pt-5 pb-5`}>
                        <div className={`col-12 text-center`}>
                            <button className={`btn btn-primary`} onClick={handleClick}>Load More</button>
                        </div>
                    </div>
                    :''}
                </div>
            </div>
        </div>
    );
}
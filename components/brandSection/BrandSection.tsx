import next from "next";
import styles from "./BrandSection.module.scss";
import React, {} from 'react'
import Link from "next/link";
import Image from "next/image";

export default function BrandSection({brandTitle, brands}:any) {

    return (
       <div className={styles.brandSection}>

           <div className={`container`}>
               <div className={`row`}>
                   <div className={`col-md-12 text-center`}>
                       <h3>{brandTitle}</h3>
                   </div>
               </div>
              <div className={`row justify-content-center align-items-center`}>
                  {brands?.map((element:any, index:any)=>(
                        <div className={`col-6 col-md-2`} key={index}>
                            <div className={styles.brandBlock}>
                                <img src={element.acf.brands.brand_logo.url} alt={`image`} />
                            </div>
                        </div>
                  ))}
                 

              </div>
           </div>
       </div>
    );
}


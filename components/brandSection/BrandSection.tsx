import next from "next";
import styles from "./BrandSection.module.scss";
import React, {} from 'react'
import Link from "next/link";
import Image from "next/image"
export default function BrandSection({brand}:any) {
    return (
       <div className={styles.brandSection}>

           <div className={`container`}>
               <div className={`row`}>
                   <div className={`col-md-12 text-center`}>
                       <h3>{brand.title}</h3>
                   </div>
               </div>
              <div className={`row justify-content-center align-items-center`}>
                  {brand.brand_list?.map((element:any, index:any)=>(
                        <div className={`col-6 col-md-2`}>
                            <div className={styles.brandBlock}>
                                <img src={element.image.url} alt={`image`} />
                            </div>
                        </div>
                  ))}
                 

              </div>
           </div>
       </div>
    );
}
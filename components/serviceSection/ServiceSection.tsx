import next from "next";
import styles from "./ServiceSection.module.scss";
import React, {} from 'react'
import Link from "next/link";
import Image from "next/image";
export default function ServiceSection({service}:any) {
    return (
       <div className={styles.serviceSection}>
           <div className={`container`}>
              <div className={`row`}>
                  {service?.map((element:any, index:any)=>(
                        <div className={`col-md-3`} key={index}>
                            <div className={styles.serviceBlock}>
                                <img src={element.image.url}  alt={`image`}/>
                                <h5>{element.title}</h5>
                                <div dangerouslySetInnerHTML={{__html:element.description}}></div>
                            </div>
                        </div>
                  ))}
                 
              </div>
           </div>
       </div>
    );
}
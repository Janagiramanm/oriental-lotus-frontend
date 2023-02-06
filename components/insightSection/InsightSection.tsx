import next from "next";
import styles from "./InsightSection.module.scss";
import React, {} from 'react'
import Link from "next/link";
import Image from 'next/image';
import { format } from 'date-fns';
import Moment from 'moment';
export default function InsightSection({insight}:any) {
    return (
       <div className={styles.insightSection}>
           <div className={`container`}>
               <div className={`row pb-5`}>
                   <div className={`col-6 text-left`}>
                       <h3>{insight.title}</h3>
                   </div>
                   <div className={`col-6 justify-content-end text-end`}>
                      <Link href={insight.button_link}> <button className={`btn btn-primary`}>{insight.button_label}</button> </Link> 
                   </div>
               </div>
              <div className={`row justify-content-center align-items-center`}>
                  {insight.insight_list?.map((element:any, index:any)=>(
                    <div className={`col-md-4`} key={index}>
                        <div className={styles.InsightBlock}>
                            <div className={styles.image1}>
                            <img src={element.image.url} alt={element.image.title} />
                            </div>
                            <h6>{Moment(element.date).format('MMMM Do YYYY')}</h6>
                            <p>{element.title}</p>
                        </div>
                    </div>
                  ))}
                 

              </div>
           </div>
       </div>
    );
}
import next from "next";
import styles from "./aboutBlock.module.scss";
import React, {useState} from 'react'
import Link from "next/link";

export default function AboutBlock({aboutUs}:any) {
   
   
    
    return (
        <div>
          <div className={styles.aboutBlock}>
              <div className={`container`}>
                 
                    {aboutUs.map((element:any, index:any)=>(
                         <div className="row" key={index}>
                                <div className={`col-md-12`}>
                                    <div className={styles.aboutContent}>
                                        <h4>{element.acf.about_us.title}</h4>
                                        <div dangerouslySetInnerHTML={{__html: element.acf.about_us.header_content}}></div>
                                    </div>
                                </div>
                                {element.acf.about_us.flexible_content.map((elem:any, ind:any)=>(
                                      <div className={`col-md-6`}  key={ind}>
                                            {elem.acf_fc_layout == 'left_content' ? 
                                            <div className={`col-md-12 ${styles.aboutThree}`} >
                                               <div dangerouslySetInnerHTML={{__html:elem.content}}></div>
                                            </div>
                                            :''}
                                             {elem.acf_fc_layout == 'right_content' ? 
                                            <div className={`col-md-12 ${styles.aboutThree}`} >
                                               <div dangerouslySetInnerHTML={{__html:elem.content}}></div>
                                            </div>
                                            :''}
                                      </div>
                                ))}
                                 {element.acf.about_us.flexible_content.map((elem:any, ind:any)=>(
                                      <div   key={ind}>
                                            {elem.acf_fc_layout == 'full_content' ? 
                                               <div dangerouslySetInnerHTML={{__html:elem.content}}></div>
                                            :''}
                                            {elem.acf_fc_layout == 'left_image_right_content' ? 
                                              <div className="row" >
                                                 <div className="col-md-6">
                                                    <img src={elem.image.url} alt="" />
                                                </div>
                                                <div className="col-md-6">
                                                <div dangerouslySetInnerHTML={{__html:elem.content}}></div>
                                                </div>
                                              </div>
                                            
                                            :''}
                                            {elem.acf_fc_layout == 'right_image_left_content' ? 
                                              <div className="row" >
                                                <div className="col-md-6">
                                                    <div dangerouslySetInnerHTML={{__html:elem.content}}></div>
                                                </div>
                                                <div className="col-md-6">
                                                    <img src={elem.image.url} alt="" />
                                                </div>
                                              </div>
                                            :''}
                                            
                                      </div>
                                ))}
                         </div>
                   ))}
                   
              </div>
          </div>
        </div>
    );
}
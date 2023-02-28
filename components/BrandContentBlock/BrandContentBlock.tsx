import next from "next";
import styles from "./BrandContentBlock.module.scss";
import React, {} from 'react'
export default function BrandContentBlock({content}:any) {
    return (
        <div className={styles.RightImageBlock}>
            { content?
              content?.map((element:any, index:any)=>(
                 element.acf_fc_layout == 'left_content_right_image' ?
                <div className={`row justify-content-center align-items-center g-0  bg-primary`} key={index}>
                      
                        <div className={`col-md-6`}>
                            <div className={styles.RightContent}>
                                <h3>{element.content.title}</h3>
                                <div dangerouslySetInnerHTML={{__html:element.content.description}}></div>
                            </div>
                        </div>
                        <div className={`col-md-6`}>
                            <div className={styles.RightImage}>
                                <img src={element.image_section.image.url} />
                            </div>
                        </div>
               </div>
               : element.acf_fc_layout == 'right_content_left_image' ?
               <div className={`row justify-content-center align-items-center g-0  bg-primary`} key={index}>
                       <div className={`col-md-6`}>
                            <div className={styles.RightImage}>
                                <img src={element.image_section.image.url} />
                            </div>
                        </div> 
                        <div className={`col-md-6`}>
                            <div className={styles.RightContent}>
                                <h3>{element.content.title}</h3>
                                <div dangerouslySetInnerHTML={{__html:element.content.description}}></div>
                            </div>
                        </div>
                </div>
                :''

              )):''}
        </div>
    );
}
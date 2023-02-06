import next from "next";
import styles from "./AboutSection.module.scss";
import React, {} from 'react'
export default function AboutSection({aboutUs}:any) {
    return (
        <div className={styles.aboutSection}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-md-6`}>
                        <h2>{aboutUs.title}</h2>
                    </div>
                    <div className={`col-md-6`}>
                        <div dangerouslySetInnerHTML={{__html:aboutUs.description}} ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
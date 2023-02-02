import next from "next";
import styles from "./BrandSingleImageBlock.module.scss";
import React, {} from 'react'
export default function BrandSingleImageBlock() {
    return (
        <div className={styles.RightImageBlock}>

                <div className={`row justify-content-center align-items-center g-0  bg-primary`}>
                    <div className={`col-md-12`}>
                        <div className={styles.RightImage}>
                            <img src={`/images/brandSingle.png`} />
                        </div>
                    </div>
                </div>

        </div>
    );
}
import next from "next";
import styles from "./aboutBlock.module.scss";
import React, {} from 'react'
import Link from "next/link";

export default function AboutBlock() {
    return (
        <div>
          <div className={styles.aboutBlock}>
              <div className={`container`}>
                  <div className={`row`}>
                      <div className={`col-md-12`}>
                          <div className={styles.aboutContent}>
                              <h4>About</h4>
                              <p>Lotus is a leading direct manufacturer of premium hotel amenities founded in 1997. From the start, our company's motto and goal has been six small words: "Quality and Service You Can Trust." We pride ourselves in supplying amenities that deliver on quality, luxury, and sophistication.</p>
                          </div>
                      </div>
                  </div>
                  <div className={`row pt-4 pb-4`}>
                      <div className={`col-md-6`}>
                          <div className={styles.aboutThree}>
                              <h3>Design</h3>
                              <p>Today the opportunities are greater than ever. Places of accommodation all around the world are depending on brand loyalty and recognition and we have the expertise to act as your very own concierge of amenities. Our in-house design team allows us to capture a hotel’s individuality and reflect that essence into unique customized guest room amenities. In addition to having our own design team and manufacturing capabilities we have also pre-selected the best vendors in the business, making us your one-direct source for all guest amenities and guest room items.</p>
                          </div>
                      </div>
                      <div className={`col-md-6`}>
                          <div className={styles.aboutThree}>
                              <h3>Design</h3>
                              <p>Today the opportunities are greater than ever. Places of accommodation all around the world are depending on brand loyalty and recognition and we have the expertise to act as your very own concierge of amenities. Our in-house design team allows us to capture a hotel’s individuality and reflect that essence into unique customized guest room amenities. In addition to having our own design team and manufacturing capabilities we have also pre-selected the best vendors in the business, making us your one-direct source for all guest amenities and guest room items.</p>
                          </div>
                      </div>
                  </div>
                  <div className={`row pt-4 pb-4`}>
                      <div className={`col-12 text-center`}>
                          <h2>Lotus is a leading direct manufacturer of premium hotel amenities founded in 1997. From the start, our company's motto and goal has been six small words: "Quality and Service You Can Trust." We pride ourselves in supplying amenities that deliver on quality, luxury, and sophistication.</h2>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
}
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
                              <p>Oriental Lotus is the industry benchmark for manufacturing and production of world class hotel amenities, catering the largest client base of 1500+ premium 5-star and luxury boutique hotels in India since 2014.
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className={`row pt-4 pb-4`}>
                      <div className={`col-md-6`}>
                          <div className={styles.aboutThree}>
                              <h3>With a total 57,000 sq ft of manufacturing area seamlessly operated by a dedicated workforce of 150 people, we offer one of the largest production capacities in India.</h3>
                          </div>
                      </div>
                      <div className={`col-md-6`}>
                          <div className={styles.aboutThree}>
                              <h3>Our full-fledged dedicated in-house laboratory develops custom formulations for private labels and produces third-party licensed hotel toiletries either in partnership or through the contract manufacturing route for luxury and couture International Amenities Brands.</h3>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
}
'use client'

import styles from "./page.module.css";
import Title from "../app/components/title/index.js"
import Input from "../app/components/input/index.js"
export default function Home() {
  return (
    <div>
    <div className={styles.cardContainer}>
      <Title/>
      <Input/>

    </div>
         {/* <div className={styles.buttonContainer}></div> */}
      <div className={styles.buttonContainer}> </div>
    
  </div>
  );
}

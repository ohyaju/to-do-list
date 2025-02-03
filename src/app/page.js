import styles from "./page.module.css";
import Title from "../app/components/title/index.js"
import Input from "../app/components/input/index.js"
export default function Home() {
  return (
    <div>
    <div className={styles.cardContainer}></div>
         {/* <div className={styles.buttonContainer}></div> */}
      <Title/>
      <Input/>
      <div className={styles.buttonContainer}> </div>
    
  </div>
  );
}

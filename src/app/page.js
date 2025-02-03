import styles from "./page.module.css";
import Title from "../app/components/title/index.js"
import Input from "../app/components/input/index.js"
export default function Home() {
  return (
    <div className={styles.cardContainer}>
      <Title/>
      <Input/>
    </div>
  );
}

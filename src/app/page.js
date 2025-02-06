'use client'
import styles from "./page.module.css";
import Title from "../app/components/title/index.js"
import Input from "../app/components/input/index.js"
import TaskList from "../app/components/tasklist/index.js"
import { Filter } from "../app/components/filter/index.js"
import { useState } from "react";
export default function Home() {
  const [tasks,setTasks]=useState([]);
  const [inputValue, setInputValue]=useState('');
  return (
    <div>
      <div className={styles.cardContainer}>
        <div className="inputAdd">
          <Title />
          <Input setTasks setInputValue={setInputValue}/>
          <TaskList tasks={tasks}/>
          <Filter />

        </div>
        <div>
          <span>Powered by</span>
          <span style={{ color: "blue" }}> Pinecone academy</span>
        </div>
      </div>
      {/* <div className={styles.buttonContainer}></div> */}
      <div className={styles.buttonContainer}> </div>

    </div>
  );
}

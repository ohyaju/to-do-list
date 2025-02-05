'use client'
import styles from "./page.module.css";
import Title from "../app/components/title/index.js"
import Input from "../app/components/input/index.js"
import TaskList from "../app/components/tasklist/index.js"
import { Filter } from "../app/components/filter/index.js"
import { useState } from "react";
export default function Home() {
  return (
    <div>
      <div className={styles.cardContainer}>
        <div className="inputAdd">
          <Title />
          {/* <div className="tabsPosition"> */}
          <Input />
          <TaskList />
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

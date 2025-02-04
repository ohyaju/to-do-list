import styles from './index.module.css'
import { useState } from 'react'

const Tabs = () => {
    const TABS = ['All', 'Active', 'Completed'];
    const [selectedStatus, setSelectedStatus] = useState("Completed");

    return (
        <div>
            {TABS.map((currentStatus) => (
                <button
                    key={currentStatus}
                    onClick={() => setSelectedStatus(currentStatus)}
                    className={`${styles.btn} ${selectedStatus === currentStatus ? styles.btnActive : ""}`}>
                    {currentStatus}
                </ button>
            ))}
        </div >
    )
}

export default Tabs
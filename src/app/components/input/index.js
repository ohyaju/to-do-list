import Tabs from '../tabs'
import styles from './index.module.css'
const Input = () => {
    return (
        <div>
            <div className='inpuT'>
                <input placeholder="Add a new task..." />
            </div>
            <div>
                <button className={styles.buttonContainer}>Add</button>
            </div>
            {/* <div>
                <button>All</button>

                <button>Active</button>
                <button>Completed</button>
            </div> */}
            <Tabs />
        </div>
    )
}

export default Input
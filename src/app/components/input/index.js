import Tabs from '../tabs'
import styles from './index.module.css'
const Input = () => {
    return (
        <div>
            <div className='inpuT'>
                <input placeholder="Add a new task..." />
                <button className={styles.buttonContainer}>Add</button>
            </div>

            <Tabs />
        </div>
    )
}

export default Input
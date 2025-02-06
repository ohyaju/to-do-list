import Tabs from '../tabs'
import styles from './index.module.css'
const Input = () => {
    const onChange = (event) => {
        props.setInputValue(event.target.value)
    }
    const onSubmit = ()=> {
        
    }
    return (
        <div className={styles.inputContainer}>
            <input className={styles.input} placeholder="Add a new task..."
                onChange={onChange} />
            <button className={styles.button}>Add</button>
        </div>
    )
}

export default Input
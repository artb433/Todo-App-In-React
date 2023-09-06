import styles from '../style.module.css';

const Form = ()=>{
    return (
        <div className={styles.todoform}>
            <form>
                <input className={styles.todoinput} placeholder="Add Todo item"></input>
                <button className={styles.todobotton}>Add</button>
            </form>
        </div>
    )
}

export default Form; 
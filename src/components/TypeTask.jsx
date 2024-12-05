
import styles from './TypeTask.module.css'
import {AddButton} from './Add.jsx'

export function TypeTask() {

  return (
    <div className={styles.createBox}>
      <div className={styles.typeNewTask}>
        <input 
          id={styles.inputType}
          placeholder='Adicionar nova tarefa'
         />
      </div>
      <AddButton />
    </div>  
  )
}
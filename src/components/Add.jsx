import More from '../assets/more.svg'
import styles from './Add.module.css'

export function AddButton() {
  return (
    <div>
      <button className= {styles.buttonAdd}>
        <p>Criar</p>
        <img src={More} alt="" />
      </button>  
    </div>

  )
}
import {Header} from './components/Header.jsx'

import {TypeTask} from './components/TypeTask.jsx'

import styles from './App.module.css'

import "./global.css"

function App() {
  return (
    <div>
      <Header />
      <TypeTask />
      <div className={styles.wrapper}>
      

      </div>
    </div>
  )
}

export default App

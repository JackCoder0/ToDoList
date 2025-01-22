import { Header } from './components/Header.tsx'
import { Input } from './components/Input.tsx'

import styles from './App.module.css'

import './global.css'

export function App() {

  return (
    <div>
      <Header />
      <Input />

      <div className={styles.wrapper}>
        <div className={styles.labelWrapper}>
          <div className={styles.toDoCreated}>
            <span>Tarefas criadas</span>
            <p>0</p>
          </div>

          <div className={styles.completed}>
            <span>Concluídas</span>
            <p>2 de 5</p>
          </div>
        </div>
        <hr />
      </div>

    </div>
  )
}
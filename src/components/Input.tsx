import { CreateButton } from './Buttons'

import styles from './Input.module.css'

export function Input() {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        placeholder='Adicione uma nova tarefa'
        type="text"
      />
      <CreateButton />
    </div>
  )
}
import styles from './Buttons.module.css'
import { PlusCircle, Trash } from "@phosphor-icons/react";

export function CreateButton() {
  return (
    <div>
      <button type='submit' className={styles.createButton}>
        Criar
        <PlusCircle size={20} />
      </button>
    </div>
  )
}

export function TrashButton() {
  return (
    <div>
      <button type='submit' className={styles.trashButton}>
        <Trash size={20} />
      </button>
    </div>
  )
}
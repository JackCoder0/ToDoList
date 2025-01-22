import styles from './Header.module.css'
import toDoLogo from '../assets/logo.svg'


export function Header() {
  return (
    <header className={styles.container}>
      <img src={toDoLogo} />
    </header>
  )
}
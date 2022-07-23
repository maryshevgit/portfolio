import React from 'react'
import styles from './Header.module.scss'
import { GitHub } from '@mui/icons-material'

const Header = () => {
  return (
    <div className={styles.header}>
      <a href='https://github.com/maryshevgit' rel="noreferrer" target="_blank" className={styles.github}>
        <GitHub />
      </a>
      <div className={styles.body}>
        <div className={styles.body__title}>
            Привет, меня зовут Андрей Марышев
            <div>Я начинающий frontend-разработчик</div>
        </div>
      </div>
    </div>
  )
}

export default Header
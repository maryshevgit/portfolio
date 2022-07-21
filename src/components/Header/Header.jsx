import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
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
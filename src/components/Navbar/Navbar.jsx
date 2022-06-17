import React, { useState } from 'react'
import styles from './Navbar.module.scss'
import { navIcons } from './navIcons'



const Navbar = () => {
  const [active, setActive] = useState('')

  return (
    <div className={styles.navbar}>
      {navIcons.map((icon) =>
        <a href={icon.href} key={icon.id}>
          <div 
            className={`${styles.img} ${active === icon.href ? styles.active : ''}`}
            onClick={() => setActive(icon.href)}
          >
            {icon.img}
          </div>
        </a>
      )} 
    </div>
  )
}

export default Navbar
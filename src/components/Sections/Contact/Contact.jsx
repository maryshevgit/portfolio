import React from 'react'
import telegram from '../../../assets/icons8-telegram-app.svg'
import email from '../../../assets/icons8-mail-50.png'
import phone from '../../../assets/icons8-phone-50.png'
import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <section id='contact' className={styles.contact}>
      <div className={styles.contact_title}>
          Если у вас есть вопросы, я с радостью отвечу на них!<br/>
          Для этого свяжитесь со мной удобным для вас способом и я отвечу Вам в ближайшее время!
      </div>
      <div className={styles.contact_body}>
        <div className={styles.contact_item}>
          <img src={email} alt='email' />
          <div className={styles.title}>
            Email
          </div>
          <div className={styles.info}>
            maryshevgit@gmail.com
          </div>
        </div> 
        <div className={styles.contact_item}>
          <img src={telegram} alt='email' />
          <div className={styles.title}>
            Telegram
          </div>
          <div className={styles.info}>
            @maryshevgit
          </div>
        </div>  
        <div className={styles.contact_item}>
          <img src={phone} alt='email' />
          <div className={styles.title}>
            Phone
          </div>
          <div className={styles.info}>
            +7 999 168-05-26
          </div>
        </div>   
      </div>  
    </section>
  )
}

export default Contact
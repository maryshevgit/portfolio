import React, { useState } from 'react'
import foodStore from '../../../assets/Food-store.PNG'
import blog from '../../../assets/blog.PNG'
import shop from '../../../assets/shop.PNG'
import game from '../../../assets/game.PNG'
import {ReactComponent as Info} from '../../../assets/216648_i_icon.svg'
import classNames from 'classnames'

const Portfolio = () => {
  const [activeFood, setActiveFood] = useState(false)
  const [activeGame, setActiveGame] = useState(false)
  const [activeShop, setActiveShop] = useState(false)
  const [activeBlog, setActiveBlog] = useState(false)

  return (
    <section id='portfolio' className='portfolio'>
      Мои проекты
      <div className='portfolio_cnt'>
        <div className='portfolio_body'>
          <a href='https://maryshevgit.github.io/food-store/' rel="noreferrer" target="_blank" className='portfolio_item'>
            <img src={foodStore} alt='food-store' />
          </a>
          <div className={classNames('portfolio_info', {activeInfo: activeFood})} onClick={() => setActiveFood(!activeFood)}>
            <Info />
          </div>
          <div className={classNames('portfolio_info_text', {active: activeFood})}>
            Stack: <span>Firebase-auth, Redux-toolkit, RTK query, TypeScript, mockAPI</span> 
          </div>
        </div>
        <div className='portfolio_body'>
          <a href='https://maryshevgit.github.io/blog/' rel="noreferrer" target="_blank" className='portfolio_item'>
            <img src={blog} alt='blog' />
          </a>
          <div className={classNames('portfolio_info', {activeInfo: activeBlog})} onClick={() => setActiveBlog(!activeBlog)}>
            <Info />
          </div>
          <div className={classNames('portfolio_info_text', {active: activeBlog})}>
            Stack: <span>Firebase-auth, Redux-toolkit, mockApi</span>
          </div>
        </div>  
        <div className='portfolio_body'>
          <a href='https://maryshevgit.github.io/game/' rel="noreferrer" target="_blank" className='portfolio_item'>
            <img src={game} alt='game' />
          </a>
          <div className={classNames('portfolio_info', {activeInfo: activeGame})} onClick={() => setActiveGame(!activeGame)}>
            <Info />
          </div>
          <div className={classNames('portfolio_info_text', {active: activeGame})}>
            Stack: <span>Html, Css</span>
          </div>
        </div>
        <div className='portfolio_body'>
          <a href='https://maryshevgit.github.io/shop/' rel="noreferrer" target="_blank" className='portfolio_item'>
            <img src={shop} alt='shop' />
          </a>
          <div className={classNames('portfolio_info', {activeInfo: activeShop})} onClick={() => setActiveShop(!activeShop)}>
            <Info />
          </div>
          <div className={classNames('portfolio_info_text', {active: activeShop})}>
            Stack: <span>Firebase-auth, Mobx, Axios, mockAPI</span>
          </div>
        </div> 
      </div>
        
    </section>
  )
}

export default Portfolio
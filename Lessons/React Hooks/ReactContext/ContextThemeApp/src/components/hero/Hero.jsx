import React, { useContext } from 'react'
import styles from './Hero.module.css'
import { ThemeContext } from '../../Manger'
const Hero = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`${styles.hero_container} ${styles[theme]}`}>Hero</div>
  )
}

export default Hero
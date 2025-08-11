import React from 'react'
import styles from './Category.module.css'

const Category = () => {
  return (
    <div className={styles.category_container}>
      <div className={styles.category_form}>
        <div className={styles.form_title}>Add category</div>
        <input className={styles.form_inp} type="text" name="" id="" placeholder='Enter category'/>
        <button className={styles.form_btn}>Submit</button>
      </div>
    </div>
  )
}

export default Category
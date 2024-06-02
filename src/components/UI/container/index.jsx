import React from 'react'
import styles from './index.module.css'
const Container = (props) => {
  return (
    <div className={styles.background}>{props.children}</div>

  )
}

export default Container
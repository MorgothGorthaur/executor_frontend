import styles from './Input.module.css'
import React from 'react'

const Input = ({searchText, setSearchText}) =>
    <input
        type="text"
        placeholder="Search..."
        className={styles.searchInput}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
    />

export default Input
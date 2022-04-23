import React from 'react'
import css from './LangDropdown.module.css'

function LangDropdown() {
  return (
    <div>
      <div className={css.dropdown}>
        <button className={css.dropbtn}>Dropdown</button>
        <div className={css.dropcontent}>
          <a href="">English</a>
          <a href="">Hindi</a>
        </div>
      </div>
      
    </div>
  )
}

export default LangDropdown
import React from 'react'
import styles from './Header.scss'

const Header = props =>
  <div className='container'>
    <ul className='links'>
      {props.links.map(link => (
        <li className='link' key={link}>
          {link}
        </li>
      ))}
    </ul>
  </div>

export default Header

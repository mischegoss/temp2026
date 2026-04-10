import React from 'react'
import Link from '@docusaurus/Link'
import styles from './styles.module.css'

export default function NavigationDropdowns() {
  return (
    <>
      {/* Product Learning Dropdown */}
      <div
        className={`navbar__item dropdown dropdown--hoverable ${styles.dropdown}`}
      >
        <a
          href='#'
          aria-haspopup='true'
          aria-expanded='false'
          role='button'
          className={`navbar__link ${styles.navbarLink}`}
        >
          Product Learning
        </a>
        <ul className={`dropdown__menu ${styles.dropdownMenu}`}>
          <li>
            <Link
              className={`dropdown__link ${styles.dropdownLink}`}
              to='/learning/actions'
            >
              Actions
            </Link>
          </li>
          <li>
            <Link
              className={`dropdown__link ${styles.dropdownLink}`}
              to='/learning/express'
            >
              Express
            </Link>
          </li>
          <li>
            <Link
              className={`dropdown__link ${styles.dropdownLink}`}
              to='/learning/pro'
            >
              Pro
            </Link>
          </li>
        </ul>
      </div>

      {/* Customer Hub Link */}
      <div className={`navbar__item ${styles.navbarItem}`}>
        <a
          href='https://help.resolve.io'
          className={`navbar__link ${styles.navbarLink}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          Customer Hub
        </a>
      </div>
    </>
  )
}

// components
import Link from 'next/link'
import { Wrapper } from '@components'

// styles
import styles from './header.module.css'

// utils
import { Routes } from '@constants'

function Header(): JSX.Element {
  return (
    <header className={styles.container}>
      <Wrapper>
        <h1>
          <Link href={Routes.HOME}>Notes Application</Link>
        </h1>
      </Wrapper>
    </header>
  )
}

export default Header

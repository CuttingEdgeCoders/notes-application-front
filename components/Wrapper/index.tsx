// styles
import styles from './wrapper.module.css'

// types
import type { PropsWithChildren } from 'react'

function Wrapper({ children }: PropsWithChildren<unknown>): JSX.Element {
  return <div className={styles['main-container']}>{children}</div>
}

export default Wrapper

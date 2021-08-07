// components
import { Note } from '@components'

// styles
import styles from './notelist.module.css'

function NoteList(): JSX.Element {
  return (
    <ul className={styles.container}>
      <Note />
    </ul>
  )
}

export default NoteList

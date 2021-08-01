// components
import { Note } from '@components'

// styles
import styles from './notelist.module.css'

function NoteList(): JSX.Element {
  return (
    <ul className={styles.container}>
      {new Array(2).fill('').map((_, index) => (
        <Note key={index} />
      ))}
    </ul>
  )
}

export default NoteList

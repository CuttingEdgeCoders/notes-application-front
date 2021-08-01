// style
import styles from './note.module.css'

function Note(): JSX.Element {
  return (
    <li className={styles.container}>
      <h2 className={styles.title}>This is my title</h2>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati enim
        assumenda consequatur atque dicta cumque a dolores iusto nisi officia
        quo quibusdam ab nobis temporibus, iure minus, mollitia sit nulla alias
        ipsam.
      </p>
    </li>
  )
}

export default Note

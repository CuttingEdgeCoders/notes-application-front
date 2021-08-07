import { useRef, useState } from 'react'

// style
import styles from './note.module.css'

// types
import type { ChangeEvent } from 'react'

function Note(): JSX.Element {
  // states
  const [isEditMode, setIsEditMode] = useState(false)
  const [description, setDescription] = useState('Hola mundo')
  const descriptionRef = useRef<HTMLInputElement>(null)

  // helper functions
  const handleChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setDescription(value)
  }

  const handleChangeToEditMode = () => {
    setIsEditMode(true)
  }

  const handleBlur = () => {
    if (description) {
      setIsEditMode(false)
    }
  }

  return (
    <li className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>This is my title</h2>
        <time className={styles.date}>
          <small>Sábado 31 de julio</small>
        </time>
      </div>

      <div className={styles.body} onDoubleClick={handleChangeToEditMode}>
        {isEditMode ? (
          <input
            autoFocus
            className={styles.descriptionInput}
            onBlur={handleBlur}
            onChange={handleChangeDescription}
            placeholder="Add a description..."
            ref={descriptionRef}
            type="text"
            value={description}
          />
        ) : (
          <p>{description}</p>
        )}
      </div>
    </li>
  )
}

export default Note

import { render } from '@testing-library/react'

// components
import Note from '.'

const TestComponent = () => {
  return <Note />
}

describe('Note component', () => {
  test('should render correctly', () => {
    render(<TestComponent />)
  })
})

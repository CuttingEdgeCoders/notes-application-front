import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { lorem } from 'faker/locale/en_US'

// components
import Note, { Props } from '.'

const TestComponent = ({ initialDescription = '' }: Partial<Props>) => {
  return <Note initialDescription={initialDescription} />
}

describe('Note component', () => {
  test('should render correctly', () => {
    render(<TestComponent />)
  })

  test('should have a textbox when initialDescription prop is a string empty', () => {
    render(<TestComponent initialDescription="" />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  test("should have a paragraph when initialDescription isn't empty ", () => {
    const fakeInitialDescription = lorem.paragraph()
    render(<TestComponent initialDescription={fakeInitialDescription} />)
    expect(screen.getByText(fakeInitialDescription)).toBeInTheDocument()
  })

  test('should render the description input on double click in the description paragraph', () => {
    const fakeInitialDescription = lorem.paragraph()
    render(<TestComponent initialDescription={fakeInitialDescription} />)
    user.dblClick(screen.getByText(fakeInitialDescription))
    expect(screen.getByDisplayValue(fakeInitialDescription)).toBeInTheDocument()
  })

  test('should hide the description input on blur', () => {
    const fakeInitialDescription = lorem.paragraph()
    render(<TestComponent initialDescription={fakeInitialDescription} />)
    user.dblClick(screen.getByText(fakeInitialDescription))
    user.click(screen.getByRole('heading'))
    expect(
      screen.queryByDisplayValue(fakeInitialDescription)
    ).not.toBeInTheDocument()
  })
})

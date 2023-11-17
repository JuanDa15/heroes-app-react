import { MemoryRouter } from 'react-router-dom'
import Search from '../../../heroes/pages/Search'
import { render, screen } from '@testing-library/react'

describe('Test in <Search /> component', () => {
  test('Should render default value', () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    )
    expect(screen.getAllByTestId('default-message')).toBeTruthy()
  })
  test('Should match with snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    )
    expect(container).toMatchSnapshot()
  })
  test('Should show batman and the input with the same value', () => {
    const query = 'batman'
    render(
      <MemoryRouter initialEntries={[`/search?q=${query}`]}>
        <Search />
      </MemoryRouter>
    )

    const input: HTMLInputElement = screen.getByTestId('search-input')
    screen.debug()
    expect(input.value).toBe(query)
  })
})

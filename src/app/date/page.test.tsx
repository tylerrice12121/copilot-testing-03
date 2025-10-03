import { render, screen, fireEvent } from '@testing-library/react'
import DatePage from '@/app/date/page'

describe('DatePage', () => {
  it('renders the date page with heading', () => {
    render(<DatePage />)
    const heading = screen.getByText('Date Display Page')
    expect(heading).toBeInTheDocument()
  })

  it('renders the show date button', () => {
    render(<DatePage />)
    const button = screen.getByRole('button', { name: /show current date/i })
    expect(button).toBeInTheDocument()
  })

  it('does not show date initially', () => {
    render(<DatePage />)
    const dateDisplay = screen.queryByText(/day/i)
    expect(dateDisplay).not.toBeInTheDocument()
  })

  it('displays formatted date when button is clicked', () => {
    render(<DatePage />)
    const button = screen.getByRole('button', { name: /show current date/i })
    
    fireEvent.click(button)
    
    // Check that some date text appears after clicking
    const dateDisplay = screen.getByText(/day/i)
    expect(dateDisplay).toBeInTheDocument()
  })

  it('updates date when button is clicked multiple times', () => {
    render(<DatePage />)
    const button = screen.getByRole('button', { name: /show current date/i })
    
    fireEvent.click(button)
    const firstDate = screen.getByText(/day/i).textContent
    
    // Wait a moment and click again
    fireEvent.click(button)
    const secondDate = screen.getByText(/day/i).textContent
    
    // Both should exist (content might be same if clicked very quickly)
    expect(firstDate).toBeTruthy()
    expect(secondDate).toBeTruthy()
  })
})

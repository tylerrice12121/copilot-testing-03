import { render, screen } from '@testing-library/react'
import RootLayout from '@/app/layout'

// Mock next/font since it's not needed for testing
jest.mock('next/font/google', () => ({
  Inter: () => ({ className: 'inter' }),
}))

describe('RootLayout', () => {
  it('renders children correctly', () => {
    render(
      <RootLayout>
        <div data-testid="test-child">Test Content</div>
      </RootLayout>
    )
    
    const child = screen.getByTestId('test-child')
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Content')
  })

  it('renders with proper structure', () => {
    const { container } = render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    )
    
    // Check that the content is rendered
    expect(container).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('renders multiple children correctly', () => {
    render(
      <RootLayout>
        <div>First Child</div>
        <div>Second Child</div>
      </RootLayout>
    )
    
    expect(screen.getByText('First Child')).toBeInTheDocument()
    expect(screen.getByText('Second Child')).toBeInTheDocument()
  })
})

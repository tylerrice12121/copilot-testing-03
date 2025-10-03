import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
  it('renders the main heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { name: /welcome to copilot testing 03/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders the header with logo and title', () => {
    render(<Home />)
    const title = screen.getAllByText('Copilot Testing 03')[0]
    expect(title).toBeInTheDocument()
  })

  it('renders navigation links in header', () => {
    render(<Home />)
    const featuresLink = screen.getByRole('link', { name: /features/i })
    const aboutLink = screen.getByRole('link', { name: /about/i })
    const contactLink = screen.getByRole('link', { name: /contact/i })
    
    expect(featuresLink).toBeInTheDocument()
    expect(aboutLink).toBeInTheDocument()
    expect(contactLink).toBeInTheDocument()
  })

  it('renders the hero section description', () => {
    render(<Home />)
    const description = screen.getByText(/a modern web application built with next.js, react, and tailwind css/i)
    expect(description).toBeInTheDocument()
  })

  it('renders call-to-action buttons', () => {
    render(<Home />)
    const getStartedButton = screen.getByRole('button', { name: /get started/i })
    const learnMoreButton = screen.getByRole('button', { name: /learn more/i })
    
    expect(getStartedButton).toBeInTheDocument()
    expect(learnMoreButton).toBeInTheDocument()
  })

  it('renders features section', () => {
    render(<Home />)
    const featuresHeading = screen.getByRole('heading', { name: /key features/i })
    expect(featuresHeading).toBeInTheDocument()
  })

  it('renders all three feature cards', () => {
    render(<Home />)
    const fastPerformance = screen.getByText(/fast performance/i)
    const modernDesign = screen.getByText(/modern design/i)
    const typeSafe = screen.getByText(/type safe/i)
    
    expect(fastPerformance).toBeInTheDocument()
    expect(modernDesign).toBeInTheDocument()
    expect(typeSafe).toBeInTheDocument()
  })

  it('renders about section', () => {
    render(<Home />)
    const aboutHeading = screen.getByRole('heading', { name: /about this project/i })
    expect(aboutHeading).toBeInTheDocument()
  })

  it('renders technology badges', () => {
    render(<Home />)
    const nextjsBadge = screen.getByText('Next.js 15')
    const reactBadge = screen.getByText('React 19')
    const tailwindBadges = screen.getAllByText('Tailwind CSS')
    const typescriptBadge = screen.getByText('TypeScript')
    
    expect(nextjsBadge).toBeInTheDocument()
    expect(reactBadge).toBeInTheDocument()
    expect(tailwindBadges.length).toBeGreaterThan(0)
    expect(typescriptBadge).toBeInTheDocument()
  })

  it('renders footer with links', () => {
    render(<Home />)
    const datePageLink = screen.getByRole('link', { name: /date page/i })
    const nextjsLink = screen.getByRole('link', { name: /^next\.js$/i })
    const reactLink = screen.getByRole('link', { name: /^react$/i })
    
    expect(datePageLink).toBeInTheDocument()
    expect(datePageLink).toHaveAttribute('href', '/date')
    expect(nextjsLink).toHaveAttribute('href', 'https://nextjs.org')
    expect(reactLink).toHaveAttribute('href', 'https://reactjs.org')
  })

  it('renders footer links with correct target attributes', () => {
    render(<Home />)
    const nextjsLink = screen.getByRole('link', { name: /^next\.js$/i })
    
    expect(nextjsLink).toHaveAttribute('target', '_blank')
    expect(nextjsLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
})

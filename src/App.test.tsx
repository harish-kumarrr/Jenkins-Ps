import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App Component', () => {
  it('renders the "Get started" heading', () => {
    render(<App />)
    expect(screen.getByText(/Get started/i)).toBeInTheDocument()
  })

  it('renders the initial count as 0', () => {
    render(<App />)
    expect(screen.getByText(/Count is 0/i)).toBeInTheDocument()
  })

  it('increments the count when the button is clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /Count is 0/i })
    fireEvent.click(button)
    expect(screen.getByText(/Count is 1/i)).toBeInTheDocument()
  })

  it('renders the major links', () => {
    render(<App />)
    const viteLink = screen.getByRole('link', { name: /Explore Vite/i })
    const reactLink = screen.getByRole('link', { name: /Learn more/i })
    const githubLink = screen.getByRole('link', { name: /GitHub/i })

    expect(viteLink).toHaveAttribute('href', 'https://vite.dev/')
    expect(reactLink).toHaveAttribute('href', 'https://react.dev/')
    expect(githubLink).toHaveAttribute('href', 'https://github.com/vitejs/vite')
  })

  it('renders the logos', () => {
    render(<App />)
    expect(screen.getByAltText(/React logo/i)).toBeInTheDocument()
    expect(screen.getByAltText(/Vite logo/i)).toBeInTheDocument()
  })
})

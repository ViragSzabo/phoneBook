import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '../menu/Button'

describe('Button', () => {
    test('renders with the correct text', () => {
        render(<Button text="Click Me" onClick={() => {}} />)

        const buttonElement = screen.getByText(/click me/i)
        expect(buttonElement).toBeInTheDocument()
    })

    test('calls onClick function when clicked', () => {
        const mockOnClick = jest.fn()
        render(<Button text="Click Me" onClick={mockOnClick} />)

        const buttonElement = screen.getByText(/click me/i)
        fireEvent.click(buttonElement)

        expect(mockOnClick).toHaveBeenCalledTimes(1)
    })
})
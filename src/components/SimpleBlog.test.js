import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

test('renders blog', () => {
    const blog = {
        title: 'test',
        author: 'test author',
        likes: 4
    }

    const component = render(
        <SimpleBlog blog={blog} />
    )

    component.debug()

    expect(component.container).toHaveTextContent(
        'test test authorblog has 4 likeslike'
    )
})
test('clicking like increments', () => {
        const blog = {
            title: 'test',
            author: 'test author',
            likes: 4
        }

        const mockHandler = jest.fn()

        const { getByText } = render(
            <SimpleBlog blog={blog} onClick={mockHandler} />
        )

        const button = getByText('like')
        fireEvent.click(button)
        fireEvent.click(button)
        
        expect(mockHandler.mock.calls.length).toBe(2)
})
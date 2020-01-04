import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

test('renders blog', () => {
    const blog = {
        title: 'test',
        author: 'test author',
        likes: 4
    }

    const component = render(
        <Blog blog={blog} />
    )

    component.debug()

    expect(component.container).toHaveTextContent(
        '"test" by test author'
    )
})
test('clicking like increments', () => {
        const blog = {
            title: 'test',
            author: 'test author',
            likes: 4,
            url: 'test.com',
            user: {
                username: 'test'
            }
        }

        const mockHandler = jest.fn()

        const component = render(
            <Blog blog={blog} onClick={mockHandler} />
        )

        const div = component.container.querySelector('.showMore')
        fireEvent.click(div)
        
        expect(component.container).toHaveTextContent(
            'test.com'
        )
})
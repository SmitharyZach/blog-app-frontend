import React from 'react'
import {
    render, waitForElement
} from "@testing-library/react"
jest.mock('./services/blogs')
import App from './App'

describe('<App />', () => {
    test('if no user logged, blogs are not rendered', async () => {
        const component = render(
            <App />
        )
        component.rerender(<App />)

        await waitForElement(
            () => component.getByText('login')
        )

        expect(component.container).toContain('"<div><div><form><h1> Log into blog app </h1><div>Username<input name="Username" type="text" value="" /></div><div>password<input name="Password" type="password" value="" /></div><button type="submit">login</button></form></div></div>"')
    })
    test('if user is logged in, blogs are rendered', async () => {

        const user = {
            username: 'tester',
            token: '1231231214',
            name: 'Donald Tester'
          }
          
          localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))


        const component = render(
            <App />
        )
        component.rerender(<App />)

        await waitForElement(
            () => component.getByText('login')
        )

        expect(component).toContain('blah')
    })

})
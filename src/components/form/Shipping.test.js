import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { reduxForm, reducer as form } from 'redux-form'
import renderer from 'react-test-renderer'
import Shipping from './Shipping'

test('matching a snapshot of Shipping', () => {
    const store = createStore(combineReducers({ form }), { form: {} })
    const Decorated = reduxForm({ form: 'testForm' })(Shipping)

    const component = renderer.create(
    <Provider store={ store }>
      <Decorated />
    </Provider>
  )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

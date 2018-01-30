import React from 'react'
import renderer from 'react-test-renderer'
import { OtherMaterials } from './OtherMaterials'

test('matching a snapshot of OtherMaterials', () => {
  const component = renderer.create(
    <OtherMaterials />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

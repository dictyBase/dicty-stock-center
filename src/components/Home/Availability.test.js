import React from 'react'
import renderer from 'react-test-renderer'
import { Availability } from './Availability'

test('matching a snapshot of Availability', () => {
  const availability = {
    type: 'data',
    id: '1',
    attributes: {
      availability: [
        { name: 'Strains', amount: 1927 },
        { name: 'Plasmids', amount: 882 },
        { name: 'Antibodies', amount: 12 },
        { name: 'cDNA library', amount: 1 },
        { name: 'Genomic library', amount: 1 }
      ]
    }
  }

  const fetchAvailability = () => {}

  const component = renderer.create(
    <Availability
      availability={availability}
      fetchAvailability={fetchAvailability}
    />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

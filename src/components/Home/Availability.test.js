import React from 'react'
import renderer from 'react-test-renderer'
import Availability from './Availability'
import * as stockCenterActions from '../../actions/stockCenter'

test('matching a snapshot of Availability', () => {
    const stockCenter = {
        availability: {
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
    }
    const component = renderer.create(
    <Availability
      stockCenter={ stockCenter }
      stockCenterActions={ stockCenterActions }
    />
  )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

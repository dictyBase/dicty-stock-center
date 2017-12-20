import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Home from './index'
import * as stockCenterActions from '../../actions/stockCenter'

test('matching a snapshot of Home', () => {
    const auth = {
        user: 'Jane Doe'
    }

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
    <BrowserRouter>
        <Home auth={ auth } stockCenterActions={ stockCenterActions } stockCenter={ stockCenter } />
    </BrowserRouter>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

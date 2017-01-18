import React from 'react'
import { shallow } from 'enzyme'
import StrainDetail from 'components/Strains/StrainDetail'

describe('components', () => {
    describe('strains/StrainDetail', () => {
        const wrapper = shallow(<StrainDetail
            { ...stockCenter }
        />)
    })
})

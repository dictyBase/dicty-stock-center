import React from 'react'
import Organization from 'components/form/Organization'
import FormGroupInput from 'components/form/FormGroupInput'
import { shallow } from 'enzyme'

describe('components', () => {
    describe('form/Organization', () => {
        const org = {value: 'Northwestern', touched: true}
        const group = {value: 'dictybase', touched: true}

        const wrapper = shallow(<Organization
            org={ org }
            group={ group }
        />)

        it('should render organization field', () => {
            expect(wrapper.contains(
                <FormGroupInput field={ org } >
                    <span className="text-danger" title="required field">* </span>
                    Organization:
                </FormGroupInput>
            )).to.equal(true)
        })
        it('should render lab/group field', () => {
            expect(wrapper.contains(
                <FormGroupInput field={ group } >
                    <span className="text-danger" title="required field">* </span>
                    Lab/Group:
                </FormGroupInput>
            )).to.equal(true)
        })
    })
})

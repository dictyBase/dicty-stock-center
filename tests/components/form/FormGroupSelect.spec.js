import React from 'react'
import FormGroupSelect from 'components/form/FormGroupSelect'
import { shallow } from 'enzyme'

describe('components', () => {
    describe('form/FormGroupSelect', () => {
        let wrapper = shallow(<FormGroupSelect
            field ={ {value: '', touched: true} }
            list={ ['USA', 'Japan', 'England'] }
        />)

        it('should render a select element', () => {
            expect(wrapper.find('select')).to.exist
        })

        it('should add has-error class when there is a validation error', () => {
            expect(wrapper.find('.form-group').hasClass('has-error')).to.equal(false)
            wrapper.setProps({field: {touched: true, error: 'error'}})
            expect(wrapper.find('.form-group').hasClass('has-error')).to.equal(true)
        })
        it('should render validation error messages properly', () => {
            expect(wrapper.hasClass('help-block')).to.equal(false)

            const field = {value: '', touched: true, error: 'required'}
            wrapper.setProps({field})
            expect(wrapper.contains(
                <div className="help-block">{ field.error }</div>
            )).to.equal(true)
        })
    })
})

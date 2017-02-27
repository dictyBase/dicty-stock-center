import React from 'react'
import User from 'components/form/User'
import Contact from 'components/form/Contact'
import Personal from 'components/form/Personal'
import Organization from 'components/form/Organization'
import Address from 'components/form/Address'
import { shallow } from 'enzyme'

describe('components', () => {
    describe('form/User', () => {
        let wrapper

        beforeEach(() => {
            wrapper = shallow(<User
                firstName={ {value: 'John'} }
                lastName={ {value: 'Smith'} }
                email={ {value: 'john@gmail.com'} }
                org={ {value: 'NU'} }
                group={ {value: 'Bio'} }
                address={ {value: 'N Michigan Ave'} }
                address2={ {value: ''} }
                city={ {value: 'Chicago'} }
                state={ {value: 'IL'} }
                zip={ {value: '60555'} }
                country={ {value: 'USA'} }
                phone={ {value: '7778859988'} }
                title={ 'User' }
            />)
        })

        it('should render <Personal> with correct props', () => {
            expect(wrapper.contains(
                <Personal
                    firstName={ {value: 'John'} }
                    lastName={ {value: 'Smith'} }
                    email={ {value: 'john@gmail.com'} }
                />
            )).to.equal(true)
        })

        it('should render <Organization> with correct props', () => {
            expect(wrapper.contains(
                <Organization
                    org={ {value: 'NU'} }
                    group={ {value: 'Bio'} }
                />
            )).to.equal(true)
        })

        it('should render <Address> with correct props', () => {
            expect(wrapper.contains(
                <Address
                    address={ {value: 'N Michigan Ave'} }
                    address2={ {value: ''} }
                    city={ {value: 'Chicago'} }
                    state={ {value: 'IL'} }
                    zip={ {value: '60555'} }
                    country={ {value: 'USA'} }
                />
            )).to.equal(true)
        })

        it('should render <Contact> with correct props', () => {
            expect(wrapper.contains(
                <Contact phone={ {value: '7778859988'} } />
            )).to.equal(true)
        })
    })
})

import React from 'react'
import { shallow } from 'enzyme'
import PlasmidDetail from 'components/Plasmids/PlasmidDetail'
import StockDetailRow from 'components/Strains/StockDetailRow'
import sinon from 'sinon'

describe('components', () => {
    describe('plasmids/PlasmidDetail', () => {
        const props = {
            params: {
                id: 'ID number'
            },
            cartActions: {
                addToCart: sinon.spy()
            },
            stockCenterActions: {
                fetchPlasmid: () => {}
            },
            stockCenter: {
                plasmid: {
                    isFetching: false,
                    name: 'aca',
                    genotypes: ['genotype 1', 'genotype 2'],
                    characteristics: 'characteristics',
                    id: 'ID number'
                }
            }
        }
        const wrapper = shallow(<PlasmidDetail { ...props }/>)
        it('should have 4 <StrainDetailRow />s', () => {
            expect(wrapper.find(StockDetailRow)).to.have.length(4)
        })
        it('should dispatch an action when "Add to Cart" button is clicked', () => {
            wrapper.find('.add-to-cart').simulate('click')
            expect(props.cartActions.addToCart.calledOnce).to.equal(true)
        })
    })
})

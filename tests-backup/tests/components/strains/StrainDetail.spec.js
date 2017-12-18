import React from 'react'
import { shallow } from 'enzyme'
import StrainDetail from 'components/Strains/StrainDetail'
import StrainDetailRow from 'components/StockDetailRow'
import PhenotypeRow from 'components/Strains/PhenotypeRow'
import sinon from 'sinon'

describe('components', () => {
    describe('strains/StrainDetail', () => {
        const props = {
            match: {
                params: {
                    id: 'ID number'
                }
            },
            cartActions: {
                addToCart: sinon.spy()
            },
            stockCenterActions: {
                fetchStrain: () => {}
            },
            stockCenter: {
                strain: {
                    isFetching: false,
                    name: 'aca',
                    genotypes: ['genotype 1', 'genotype 2'],
                    phenotypes: [
                        {
                            name: 'phenotype name',
                            observation: 'phenotype observation',
                            attribute: 'attribute',
                            notes: 'value',
                            evidence: 'evidence',
                            reference: 'placeholder'
                        },
                        {
                            name: 'phenotype name',
                            observation: 'phenotype observation',
                            attribute: 'attribute',
                            notes: 'value',
                            evidence: 'evidence',
                            reference: 'placeholder'
                        }
                    ],
                    characteristics: 'characteristics',
                    id: 'ID number'
                }
            }
        }
        const wrapper = shallow(<StrainDetail { ...props }/>)
        it('should have 8 <StrainDetailRow />s', () => {
            expect(wrapper.find(StrainDetailRow)).to.have.length(8)
        })
        it('has as many <PhenotypeRow />s as there are phenotypes', () => {
            expect(wrapper.find(PhenotypeRow)).to.have.length(props.stockCenter.strain.phenotypes.length)
        })
        it('should dispatch an action when "Add to Cart" button is clicked', () => {
            wrapper.find('.add-to-cart').simulate('click')
            expect(props.cartActions.addToCart.calledOnce).to.equal(true)
        })
    })
})

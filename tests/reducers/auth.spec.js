import reducer from 'reducers/auth'
import types from 'constants'
import simpleStorage from 'simplestorage.js'

describe('reducers', () => {
    describe('auth reducer', () => {
        it('should return the initial state', () => {
            const authenticated = () => {
                return simpleStorage.hasKey('token')
            }
            expect(
              reducer(undefined, {})
            ).to.eql({
                isFetching: false,
                isAuthenticated: authenticated()
            })
        })

        it('should handle LOGIN_REQUEST', () => {
            expect(
                reducer({}, {
                    type: types.LOGIN_REQUEST,
                    isFetching: true,
                    isAuthenticated: false,
                    provider: 'google'
                })
            ).to.eql({
                isFetching: true,
                isAuthenticated: false,
                provider: 'google'
            })
        })

        it('should handle LOGIN_SUCCESS', () => {
            expect(
                reducer({}, {
                    type: types.LOGIN_SUCCESS,
                    isFetching: false,
                    isAuthenticated: true,
                    user: {name: 'John'}
                })
            ).to.eql({
                isFetching: false,
                isAuthenticated: true,
                user: {name: 'John'}
            })
        })

        it('should handle LOGIN_FAILURE', () => {
            expect(
                reducer({}, {
                    type: types.LOGIN_FAILURE,
                    isFetching: false,
                    isAuthenticated: false,
                    error: 'danger'
                })
            ).to.eql({
                isFetching: false,
                isAuthenticated: false,
                error: 'danger'
            })
        })

        it('should handle LOGOUT_REQUEST', () => {
            expect(
                reducer({}, {
                    type: types.LOGOUT_REQUEST,
                    isFetching: true,
                    isAuthenticated: true
                })
            ).to.eql({
                isFetching: true,
                isAuthenticated: true
            })
        })

        it('should handle LOGOUT_SUCCESS', () => {
            expect(
                reducer({}, {
                    type: types.LOGOUT_SUCCESS,
                    isFetching: false,
                    isAuthenticated: false
                })
            ).to.eql({
                isFetching: false,
                isAuthenticated: false,
                provider: null,
                user: null
            })
        })
    })
})

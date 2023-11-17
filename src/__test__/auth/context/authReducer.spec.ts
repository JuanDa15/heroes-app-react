import { authReducer } from '../../../auth/context/authReducer'
import { types } from '../../../auth/types/types'

describe('Test in AuthReducer', () => {
  const initialState = { logged: false, name: '' }
  test('Should return default value', () => {
    const action = { type: '', payload: null }
    const state = authReducer(initialState, action)
    expect(state).toEqual({ logged: false, name: '' })
  })

  test('Should call login action and stablish user', () => {
    const action = { type: types.login, payload: 'Juan' }
    const state = authReducer(initialState, action)
    expect(state).toEqual({ logged: true, name: 'Juan' })
  })

  test('Should call logout action and remove user', () => {
    const loggedState = { logged: true, name: 'Juan' }
    const action = { type: types.logout, payload: null }
    const state = authReducer(loggedState, action)
    expect(state).toEqual({ logged: false, name: '' })
  })
})

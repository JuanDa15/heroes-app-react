import { types } from '../../../auth/types/types'

describe('Test for AuthTypes', () => {
  test('Test in Auth/types.ts', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout'
    })
  })
})

import { types } from '../types/types'

export interface IAuthState {
  logged: boolean
  name: string
}

interface IAction {
  payload: any
  type: string
}

export const authReducerInitialState: IAuthState = {
  logged: false,
  name: ''
}
const authActions = {
  [types.login]: (state: IAuthState, payload: string): IAuthState => {
    return {
      ...state,
      logged: true,
      name: payload
    }
  },
  [types.logout]: (state: IAuthState): IAuthState => {
    return {
      ...state,
      logged: false,
      name: ''
    }
  }
}

export const authReducer = (state: IAuthState, action: IAction): any => {
  return (action.type in authActions) ? authActions[action.type](state, action.payload) : state
}

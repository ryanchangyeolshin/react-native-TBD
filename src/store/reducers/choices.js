import { ADD_CHOICE, DELETE_ALL_CHOICES } from '../actions/actionTypes'

const initialState = {
  choices: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHOICE:
      return {
        ...state,
        choices: state.choices.concat(action.choice)
      }
      break
    case DELETE_ALL_CHOICES:
      return {
        ...state,
        choices: []
      }
      break
    default:
      return state
  }
}

export default reducer

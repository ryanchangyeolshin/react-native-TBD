import { ADD_CHOICE, DELETE_ALL_CHOICES, GET_WINNING_CHOICE } from '../actions/actionTypes'

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
    case GET_WINNING_CHOICE:
      return {
        ...state,
        choices: state.choices.filter((choice, index) => index === action.winningIndex)
      }
    default:
      return state
  }
}

export default reducer

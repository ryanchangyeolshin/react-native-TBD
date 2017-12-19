import { ADD_CHOICE, DELETE_ALL_CHOICES, GET_WINNING_CHOICE } from './actionTypes'

export const addChoice = choice => {
  return {
    type: ADD_CHOICE,
    choice: choice
  }
}

export const deleteAllChoices = () => {
  return {
    type: DELETE_ALL_CHOICES
  }
}

export const getWinningChoice = winningIndex => {
  return {
    type: GET_WINNING_CHOICE,
    winningIndex: winningIndex
  }
}

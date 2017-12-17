import { ADD_CHOICE, DELETE_ALL_CHOICES } from './actionTypes'

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

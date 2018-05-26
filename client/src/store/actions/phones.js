import * as actionTypes from './actionTypes'

export const getPhones = () => {
  return {
    type: actionTypes.GET_PHONES
  }
}

export const selectPhone = (id) => {
  return {
    type: actionTypes.SELECT_PHONE,
    id: id
  }
}

export const phonesFailed = () => {
  return {
    type: actionTypes.SET_PHONES_FAILED
  }
}

export const setPhones = (phones) => {
  return {
    type: actionTypes.SET_PHONES,
    phones: phones
  }
}

export const selectImage = (index) => {
  return {
    type: actionTypes.SELECT_IMAGE,
    index: index
  }
}

export const slideImage = (direction) => {
  return {
    type: actionTypes.SLIDE_IMAGE,
    direction: direction
  }
}

import * as actionTypes from '../actions/actionTypes'

const initialState = {
  phones: null,
  selectedPhone: null,
  error: false,
  selectedImage:null
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PHONES:
      return {
        ...state,
        phones: action.phones,
        error: false
      }

    case actionTypes.SET_PHONES_FAILED:
      return {
        ...state,
        error: true
      }

    case actionTypes.SELECT_PHONE:
      const phoneId = state.phones.findIndex(elem  => elem.id === action.id)
      const selected = { ...state.phones[phoneId]}
      return {
        ...state,
        selectedPhone: selected,
        selectedImage: selected.images[0]
      }

    case actionTypes.SELECT_IMAGE:
      const image = [...state.selectedPhone.images][action.index]
      return {
        ...state,
        selectedImage: image
      }

    case actionTypes.SLIDE_IMAGE:
      let currentIndex = state.selectedPhone.images.indexOf(state.selectedImage)
      let nextImageIndex
      if (action.direction === 'right') {
         nextImageIndex = currentIndex === state.selectedPhone.images.length - 1 ? 0 :  currentIndex + 1
      } else {
         nextImageIndex = currentIndex === 0 ? state.selectedPhone.images.length - 1 :  currentIndex - 1
      }
      const newImage = [...state.selectedPhone.images][nextImageIndex]
      return {
        ...state,
        selectedImage: newImage
      }

    default:
      return initialState

  }
}

export default reducer

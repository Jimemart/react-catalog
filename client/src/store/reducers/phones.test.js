import reducer from './phones'
import * as actionTypes from '../actions/actionTypes'
import { stateWithSelectedPhone,
        stateWithoutSelectedPhone,
        stateWithOtherImageSelected,
        stateWithNextImageSelected} from '../../mocks/mocktests'
describe('phones reducer', () => {

  let initialState;
  let statePhones;
  beforeEach(() => {
    initialState = {
      phones: null,
      selectedPhone: null,
      error: false,
      selectedImage: null
    }
  })

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should set the desired phone as the selected one', () => {
    expect(reducer(stateWithoutSelectedPhone, { type: actionTypes.SELECT_PHONE, id: 2 }))
      .toEqual(stateWithSelectedPhone)
  })

  it('should set the phones passed to it in the state', () => {
    expect(reducer(initialState, { type: actionTypes.SET_PHONES, phones: [
      {id: 1,
      images: ['a', 'b', 'c']},
      {id: 2,
      images: ['c', 'a', 'b']},
      {id: 3,
      images: ['b', 'c', 'a']}
    ]}))
      .toEqual(stateWithoutSelectedPhone)
  })

  it('should set error to true', () => {
    expect(reducer(initialState, { type: actionTypes.SET_PHONES_FAILED}))
      .toEqual({
        phones: null,
        selectedPhone: null,
        error: true,
        selectedImage: null
      })
  })

  it('should set the image with the index passed to it as the selected image', () => {
    expect(reducer(stateWithSelectedPhone, { type: actionTypes.SELECT_IMAGE, index: 2}))
      .toEqual(stateWithOtherImageSelected)
  })

  it('should set the next image as the selected image', () => {
    expect(reducer(stateWithSelectedPhone, {type: actionTypes.SLIDE_IMAGE, direction: 'right'}))
      .toEqual(stateWithNextImageSelected)
  })

  it('should set the previous image as the selected image', () => {
    expect(reducer(stateWithNextImageSelected, {type: actionTypes.SLIDE_IMAGE, direction: 'left'}))
      .toEqual(stateWithSelectedPhone)
  })

  it('should set the first image as selected if the current is the last one', () => {
    expect(reducer(stateWithOtherImageSelected, {type: actionTypes.SLIDE_IMAGE, direction: 'right'}))
      .toEqual(stateWithSelectedPhone)
  })

  it('should set the last image as selected if the current is the first one', () => {
    expect(reducer(stateWithSelectedPhone, {type: actionTypes.SLIDE_IMAGE, direction: 'left'}))
      .toEqual(stateWithOtherImageSelected)
  })
})

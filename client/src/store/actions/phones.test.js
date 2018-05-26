import * as actionTypes from './actionTypes';
import * as actions from './phones'

describe('phones actions', () => {
  it('finds phones', () => {
    const action = actions.getPhones()
    expect(action).toEqual({
      type: actionTypes.GET_PHONES
    })
  })

  it('selects a phone', () => {
    const mockId = '1'
    const action = actions.selectPhone(mockId)
    expect(action).toEqual({
      type: actionTypes.SELECT_PHONE,
      id: mockId
    })
  })

  it('set the phones', () => {
    const phones = [{id: '1'}, {id:'2'}]
    const action = actions.setPhones(phones)
    expect(action).toEqual({
      type: actionTypes.SET_PHONES,
      phones
    })
  })

  it('set image', () => {
    const index = 2
    const action = actions.selectImage(index)
    expect(action).toEqual({
      type: actionTypes.SELECT_IMAGE,
      index
    })
  })

  it('slides image', () => {
    const direction = 'right'
    const action = actions.slideImage(direction)
    expect(action).toEqual({
      type: actionTypes.SLIDE_IMAGE,
      direction
    })
  })

})

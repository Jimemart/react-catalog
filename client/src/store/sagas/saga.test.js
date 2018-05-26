import { expectSaga, testSaga } from 'redux-saga-test-plan'
import { call as mockCall, select as mockSelect } from 'redux-saga-test-plan/matchers'
import { throwError } from 'redux-saga-test-plan/providers'
import { combineReducers } from 'redux'

import { fetchPhones } from './saga'
import { getPhones } from '../../api/phones-api'
import { reducer as phonesReducer} from '../reducers/phones'
import * as actions from '../actions/phones'
import info from '../../mocks/mocktests'

describe('findPhones saga', () => {
  const reducer = combineReducers({ phonesReducer })
  const state = {}

  it('should set the phones state', () => {
    const response = info
    const expectedFinalState = {
      phonesReducer: {
        phones: response,
        selectedPhone: null,
        error: false,
        selectedImage: null
      }
    }

    const expectedAction = actions.setPhones(response)

    return expectSaga(fetchPhones, {})
      .withReducer(reducer)
      .withState(state)
      .provide([
        [mockCall.fn(getPhones), response]
      ])
      .put(expectedAction)
      .hasFinalState(expectedFinalState)
      .run()
  })
})

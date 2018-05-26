import { call, put, takeLatest } from 'redux-saga/effects'
import { getPhones } from '../../api/phones-api'

export function* fetchPhones() {
  try {
    const phones = yield call(getPhones);
    yield put({ type: "SET_PHONES", phones: phones})
  } catch(e) {
    yield put({ type: "SET_PHONES_FAILED"})
  }
}

function* phonesSaga () {
  yield takeLatest("GET_PHONES", fetchPhones)
}

export default phonesSaga

import { all, put, takeEvery } from "redux-saga/effects";
import { Effect, SagaIterator } from "redux-saga";
import { SAMPLE_ACTION_REQUEST, SAMPLE_ACTION_RESPONSE } from "src/reducers/actions";
export function * helloSaga() : SagaIterator {
    yield takeEvery(SAMPLE_ACTION_REQUEST, (action : any) => {
        console.log(action)
        put({type: SAMPLE_ACTION_RESPONSE, text: "hello this is saga"})
    })
}

export default function * rootSaga()  {
    yield all([helloSaga()])
}
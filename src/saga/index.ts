import { all, put, takeEvery } from "redux-saga/effects";
import { CLEAR_ACTION, SAMPLE_ACTION_REQUEST, SAMPLE_ACTION_RESPONSE } from "src/reducers/actions";
import { SagaIterator } from "redux-saga";
export function * helloSaga(action : any) : SagaIterator {
    // yield takeEvery(SAMPLE_ACTION_REQUEST, (action : any) => {
    console.log(action);
    yield put({type: SAMPLE_ACTION_RESPONSE, text: "hello this is saga"});
    // })
}

export function * clearTextSaga(action : any) : SagaIterator {
    // yield takeEvery(SAMPLE_ACTION_REQUEST, (action : any) => {
    console.log(action);
    yield put({type: SAMPLE_ACTION_RESPONSE, text: "the text cleared"});
    // })
}

export default function * rootSaga() : any {
    yield all([
        takeEvery(SAMPLE_ACTION_REQUEST, helloSaga),
        takeEvery(CLEAR_ACTION, clearTextSaga)
    ]);
}
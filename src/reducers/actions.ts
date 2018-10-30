export const SAMPLE_ACTION_REQUEST = 'SAY_HELLO'
export const SAMPLE_ACTION_RESPONSE = 'SAY_HELLO1'

export const sayHello = (text : string) => ({type: SAMPLE_ACTION_REQUEST, text})

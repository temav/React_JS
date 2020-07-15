import { Actions } from './emailValidation';
describe('Test actions', () => {
  it(' Action sendRequestToServer return type and payload email', () => {
    const sendReq = Actions.sendRequestToServer('tema@mail.ru');
    expect(sendReq).toEqual({
      type: 'SEND_REQUEST_TO_SERVER',
      payload: 'tema@mail.ru',
      meta: '',
    });
  });
  //   it('+++ actionCreator subtractInputs', () => {
  //     const subtract = subtractInputs(-50);
  //     expect(subtract).toEqual({ type: 'SUBTRACT_INPUTS', output: -50 });
  //   });
});

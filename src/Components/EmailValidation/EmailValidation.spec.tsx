import * as React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { createStore, Store, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

import * as Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { cleanup, fireEvent, render, getByText } from '@testing-library/react';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

import { Actions } from '../../actions/emailValidation';
import Form from './EmailValidation';
import { ResetForm, RenderField } from './EmailValidation';

const rootReducer = combineReducers({
  form: formReducer,
});

describe('Redux Form', () => {
  let store;
  beforeEach(() => {
    store = createStore(rootReducer);
  });

  it('Call onSubmit from props form with submit event', () => {
    const onSubmit = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <Form onSubmit={onSubmit} />
      </Provider>
    );
    // button = wrapper.container.querySelector('button');
    const form = wrapper.find('form');
    form.simulate('submit');
    // const submitButton = wrapper.find('button');
    // fireEvent.click(wrapper.queryByTestId('subbutton'));
    // wrapper.queryByTestId('subbutton').dispatchEvent(new MouseEvent('click'));
    expect(onSubmit).toHaveBeenCalled();
  });
  it('Default input is empty ', () => {
    const onSubmit = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <Form onSubmit={onSubmit} />
      </Provider>
    );
    const input = wrapper.find('input');
    expect(input.get(0).props.value).toEqual('');
  });
  it.only('Input could be changed ', () => {
    const onSubmit = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <Form onSubmit={onSubmit} />
      </Provider>
    );
    const input = wrapper.find('input');
    const event = { target: { value: 'Test' } };
    input.simulate('change', event);
    // wrapper.find('form').simulate('submit');
    // console.log('wede', wrapper.find('form').props());
    expect(
      wrapper.props().store.getState().form.resetPasswordForm.values.email
    ).toEqual('Test');
    // expect(wrapper.text()).toContain('Incorrect email');
    // expect(wrapper.find('div.sc-AxgMl.bygbgc')).toHaveLength(1);
  });
});

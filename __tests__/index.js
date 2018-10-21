// import { createTypesAndActions, createAsyncTypesAndActions } from '../index';
const { createAsyncTypesAndActions, createTypesAndActions } = require('../index');

describe('createTypesAndActions', () => {
  const { types, actions } = createTypesAndActions('A_NAMESPACE', [ 'FIRST_TYPE', 'SECOND_TYPE', 'THIRD_TYPE' ]);

  test('Action types', () => {
    expect(types).toEqual({
      FIRST_TYPE: 'A_NAMESPACE/FIRST_TYPE',
      SECOND_TYPE: 'A_NAMESPACE/SECOND_TYPE',
      THIRD_TYPE: 'A_NAMESPACE/THIRD_TYPE',
    });
  });

  test('Action creators', () => {
    expect(actions.FIRST_TYPE()).toEqual({ type: 'A_NAMESPACE/FIRST_TYPE' });
    expect(actions.SECOND_TYPE('asdf')).toEqual({ type: 'A_NAMESPACE/SECOND_TYPE', payload: 'asdf' });
    expect(actions.THIRD_TYPE({ value: 5 })).toEqual({ type: 'A_NAMESPACE/THIRD_TYPE', payload: { value: 5 } });
  });
});

describe('createAsyncTypesAndActions', () => {
  const { types, actions } = createAsyncTypesAndActions('A_NAMESPACE', [ 'FIRST_TYPE', 'SECOND_TYPE', 'THIRD_TYPE' ]);

  test('Action types', () => {
    expect(types).toEqual({
      FIRST_TYPE: {
        request: 'A_NAMESPACE/FIRST_TYPE_REQUEST',
        success: 'A_NAMESPACE/FIRST_TYPE_SUCCESS',
        failure: 'A_NAMESPACE/FIRST_TYPE_FAILURE',
      },
      SECOND_TYPE: {
        request: 'A_NAMESPACE/SECOND_TYPE_REQUEST',
        success: 'A_NAMESPACE/SECOND_TYPE_SUCCESS',
        failure: 'A_NAMESPACE/SECOND_TYPE_FAILURE',
      },
      THIRD_TYPE: {
        request: 'A_NAMESPACE/THIRD_TYPE_REQUEST',
        success: 'A_NAMESPACE/THIRD_TYPE_SUCCESS',
        failure: 'A_NAMESPACE/THIRD_TYPE_FAILURE',
      },
    });
  });

  test('Action creators', () => {
    expect(actions.FIRST_TYPE.request()).toEqual({ type: 'A_NAMESPACE/FIRST_TYPE_REQUEST' });
    expect(actions.SECOND_TYPE.success('asdf')).toEqual({ type: 'A_NAMESPACE/SECOND_TYPE_SUCCESS', payload: 'asdf' });
    expect(actions.THIRD_TYPE.failure({ value: 5 })).toEqual({ type: 'A_NAMESPACE/THIRD_TYPE_FAILURE', payload: { value: 5 } });
  });
});

## Usage

```javascript
import { createTypesAndActions, createAsyncTypesAndActions } from 'redux-type-action-creator';

const nameSpace = 'ONBOARDING';
const { types } = createTypesAndActions(nameSpace, [ 'GO_TO_NEXT', 'GO_TO_PREV' ]);
const { types: aTypes, actions: aActions } = createAsyncTypesAndActions(nameSpace, [ 'GET_USER' ]);

const reducer = (state = { page: 0, user: null, isLoading: false }, { type, payload }) => {
  switch (type) {
    case types.GO_TO_NEXT:
      return { ...state, page: state.page + 1 };
    case types.GO_TO_PREV:
      return { ...state, page: state.page - 1 };
    case aTypes.GET_USER.request:
      return { ...state, user: null, isLoading: true };
    case aTypes.GET_USER.success:
      return { ...state, user: payload, isLoading: false };
    case aTypes.GET_USER.failure:
      return { ...state, user: null, isLoading: false };
    default:
      return state;
  }
}

```

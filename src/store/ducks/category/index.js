import {CATEGORIES} from '~/constants/grocery';

export const Types = {
  ADD_CATEGORY: 'ADD_CATEGORY',
};

const INITIAL_STATE = {
  categoryList: CATEGORIES,
};

export default function reducer(state = INITIAL_STATE, {type}) {
  switch (type) {
    default:
      return state;
  }
}

import {CATEGORIES} from '~/constants/categories';

export const Types = {};

const INITIAL_STATE = {
  categoryList: CATEGORIES,
};

export default function reducer(state = INITIAL_STATE, {type}) {
  switch (type) {
    default:
      return state;
  }
}

import {PRODUCTS_LIST} from '~/constants/grocery';

export const Types = {
  INSERT_ITEM_LIST: 'INSERT_ITEM_LIST',
  REMOVE_ITEM_LIST: 'REMOVE_ITEM_LIST',
  RESET_LIST: 'RESET_LIST',
};

const INITIAL_STATE = {
  groceryList: PRODUCTS_LIST,
};

export default function reducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case Types.INSERT_ITEM_LIST:
      return {
        ...state,
        groceryList: payload.groceryList,
      };
    case Types.REMOVE_ITEM_LIST:
      return {
        ...state,
        groceryList: payload.groceryList,
      };
    case Types.RESET_LIST:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
}

export const insertItemAction = (groceryList) => ({
  type: Types.INSERT_ITEM_LIST,
  payload: {groceryList},
});

export const removeItemAction = (groceryList) => ({
  type: Types.REMOVE_ITEM_LIST,
  payload: {groceryList},
});

export const resetListAction = () => ({
  type: Types.RESET_LIST,
});

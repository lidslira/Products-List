export const Types = {
  INSERT_ITEM_LIST: 'INSERT_ITEM_LIST',
  EDIT_ITEM_LIST: 'EDIT_ITEM_LIST',
  REMOVE_ITEM_LIST: 'REMOVE_ITEM_LIST',
};

const INITIAL_STATE = {
  groceryList: [],
};

export default function reducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case Types.INSERT_ITEM_LIST:
      return {
        ...state,
        groceryList: payload.groceryList,
      };
    default:
      return state;
  }
}

export const insertItemAction = (groceryList) => ({
  type: Types.INSERT_ITEM_LIST,
  payload: {groceryList},
});

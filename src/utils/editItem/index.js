import cloneDeep from 'lodash/cloneDeep';

export const editItem = (groceryList, item, name, amount) => {
  const list = cloneDeep(groceryList);

  list.filter((currentCategory) => {
    currentCategory.data.filter((currentItem) => {
      if (currentItem.id === item.id) {
        currentItem.name = name;
        currentItem.amount = amount;
      }
      return null;
    });
    return null;
  });
  return list;
};

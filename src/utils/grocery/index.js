import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import cloneDeep from 'lodash/cloneDeep';

export const insertItem = (groceryList, category, name, amount) => {
  const newList = cloneDeep(groceryList);

  newList.forEach((newCategory) => {
    if (newCategory.id === category.id) {
      return newCategory.data.push({
        id: uuidv4(),
        name,
        amount,
        category: {id: category.id, name: category.name},
      });
    }
    return null;
  });
  return newList;
};

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

export const removeItem = (groceryList, item) => {
  const updateList = cloneDeep(groceryList);

  updateList.filter((currentCategory) => {
    currentCategory.data = currentCategory.data.filter(
      (currentItem) => currentItem.id !== item.id,
    );
    return null;
  });
  return updateList;
};

/*
  const categoryIndex = updateList.findIndex((obj) => obj.id === category.id);
  const categoryIndex.data = categoryIndex.data;
  const itemIndex = categoryIndex.data.findIndex((obj) => obj.id === item.id);

  console.tron.log('item a ser remov', itemIndex);

  // updateList.splice(itemIndex, 1);

  return updateList;
*/

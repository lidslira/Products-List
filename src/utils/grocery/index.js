import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import cloneDeep from 'lodash/cloneDeep';

export const insertItem = (groceryList, category, name, amount, price) => {
  const newList = cloneDeep(groceryList);

  newList.forEach((newCategory) => {
    if (newCategory.id === category.id) {
      return newCategory.data.push({
        id: uuidv4(),
        name,
        amount,
        price,
        isSelected: false,
        category: {id: category.id, name: category.name},
      });
    }
    return null;
  });
  return newList;
};

export const editItem = (groceryList, item, name, amount, price) => {
  const list = cloneDeep(groceryList);

  list.filter((currentCategory) => {
    currentCategory.data.filter((currentItem) => {
      if (currentItem.id === item.id) {
        currentItem.name = name;
        currentItem.amount = amount;
        currentItem.price = price;
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

export const checkItem = (groceryList, item) => {
  const checkedList = cloneDeep(groceryList);

  checkedList.forEach((currentCategory) => {
    currentCategory.data.forEach((currentItem) => {
      if (currentItem.id === item.id) {
        currentItem.isSelected = !currentItem.isSelected;
      }
      return null;
    });
    return null;
  });
  return checkedList;
};

export const categoriesFilled = (groceryList) => {
  const completeList = groceryList.filter(
    (category) => category.data.length !== 0,
  );
  return completeList;
};

export const searchItem = (groceryList) => {
  const itemsList = [];
  groceryList.forEach((category) => {
    category.data.forEach((item) => {
      return itemsList.push(item);
    });
    return null;
  });
  return itemsList;
};

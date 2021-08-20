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
      });
    }
    return null;
  });
  return newList;
};

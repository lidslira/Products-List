import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as S from './styles';

const Picker = ({itemSelect, setItem, categories, disabled}) => {
  const [showList, setShowList] = useState(false);

  const selectItem = (item) => {
    setItem(item);
    setShowList(false);
  };

  const renderItems = ({item}) => {
    return (
      <S.Touchable onPress={() => selectItem(item)}>
        <S.ContainerList>
          <S.TitleItem>{item.name}</S.TitleItem>
        </S.ContainerList>
      </S.Touchable>
    );
  };

  return (
    <S.Container>
      <S.Label>Categoria</S.Label>
      <S.ContainerPicker>
        <S.Touchable onPress={() => setShowList(!showList)} disabled={disabled}>
          <S.PlaceholderText>
            {itemSelect || 'Escolha a categoria'}
          </S.PlaceholderText>
          <Icon name={showList ? 'angle-up' : 'angle-down'} size={20} />
        </S.Touchable>

        {showList && (
          <S.List
            data={categories}
            extraData={categories}
            renderItem={renderItems}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        )}
      </S.ContainerPicker>
    </S.Container>
  );
};

export default Picker;

import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {styles, Container, CategoryContainer} from './styles';

const CategoryPicker = () => {
  const [category, setCategory] = useState('');

  // const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <Container>
      <CategoryContainer>
        <Picker
          style={styles.picker}
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}>
          {/* {category.map((cr) => {
              return <Picker.Item label={cr} value={cr} />;
            })} */}
          <Picker.Item label="Frutas" value="frutas" />
          <Picker.Item label="Carnes" value="carnes" />
          <Picker.Item label="Vegetais/Legumes" value="vegleg" />
          <Picker.Item label="Cereais" value="cereais" />
          <Picker.Item label="Limpeza" value="limpeza" />
          <Picker.Item label="Outros" value="outros" />
        </Picker>
      </CategoryContainer>
    </Container>
  );
};

export default CategoryPicker;

import * as React from 'react';
import {FAB, Portal, Provider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/core';
// import {FabButton} from './styles';
import {PROFILE} from '../../constants/routes';

const FloatButton = (props) => {
  const navigation = useNavigation();
  const {actionButton} = props;

  const [state, setState] = React.useState({open: false});

  const onStateChange = ({open}) => setState({open});

  const {open} = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'close' : 'menu'}
          actions={[
            {
              icon: 'account',
              label: 'Perfil',
              onPress: () => navigation.navigate(PROFILE),
            },
            {
              icon: 'plus-box-multiple',
              label: 'Novo item',
              onPress: () => actionButton(),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {}}
        />
      </Portal>
    </Provider>
  );
};

export default FloatButton;
/*
const FloatButton = () => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        position: 'absolute',
        bottom: 10,
        right: 10,
        height: 70,
        backgroundColor: '#53b175',
        borderRadius: 100,
      }}
      onPress={() => navigation.navigate (REGISTER)}>
      <Icon name="plus" size={40} color="#000" />

    </TouchableOpacity>
  );
}
*/

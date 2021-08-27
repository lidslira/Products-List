import * as React from 'react';
import {FAB, Portal, Provider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/core';
import {styles} from './styles';
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
          fabStyle={[styles.fab]}
          color="white"
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
        />
      </Portal>
    </Provider>
  );
};

export default FloatButton;

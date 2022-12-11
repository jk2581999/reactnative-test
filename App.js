
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabs } from './navigators';
import {store} from './store';
import {Provider} from 'react-redux';
import {Provider as RNProvider} from 'react-native-paper';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RNProvider>
          <BottomTabs/>
        </RNProvider>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

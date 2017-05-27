import MainScreen from './MainScreen'
import WorkingScreen from './WorkingScreen'

import {
  createRouter
} from '@expo/ex-navigation';

export default createRouter(() => ({
  home: () => MainScreen,
  working: () => WorkingScreen
}));

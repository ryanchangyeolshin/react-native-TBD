import { Navigation } from 'react-native-navigation'
import startMainTabs from './src/screens/MainTabs/startMainTabs'
import ChoiceInputScreen from './src/screens/ChoiceInput/ChoiceInput'
import ChoiceListScreen from './src/screens/ChoiceList/ChoiceList'

Navigation.registerComponent(
  'tbd.ChoiceListScreen',
  () => ChoiceListScreen
)

Navigation.registerComponent(
  'tbd.ChoiceInputScreen',
  () => ChoiceInputScreen
)

startMainTabs()

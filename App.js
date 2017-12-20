import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import startMainTabs from './src/screens/MainTabs/startMainTabs'
import ChoiceInputScreen from './src/screens/ChoiceInput/ChoiceInput'
import ChoiceListScreen from './src/screens/ChoiceList/ChoiceList'
import ChoiceDetailScreen from './src/screens/ChoiceDetail/ChoiceDetail'
import configureStore from './src/store/configureStore'

const store = configureStore()

Navigation.registerComponent(
  'tbd.ChoiceListScreen',
  () => ChoiceListScreen,
  store,
  Provider
)

Navigation.registerComponent(
  'tbd.ChoiceInputScreen',
  () => ChoiceInputScreen,
  store,
  Provider
)

Navigation.registerComponent(
  'tbd.ChoiceDetailScreen',
  () => ChoiceDetailScreen,
  store,
  Provider
)

startMainTabs()

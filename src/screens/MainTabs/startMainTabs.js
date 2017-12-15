import { Navigation } from 'react-native-navigation'
import { Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const startMainTabs = () => {
  Promise.all([
    Icon.getImageSource(Platform.OS === 'android' ? 'md-map' : 'ios-map', 30),
    Icon.getImageSource(Platform.OS === 'android' ? 'md-share-alt' : 'ios-share', 30)
  ])
  .then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'tbd.ChoiceInputScreen',
          label: 'Provide Choice',
          title: 'Provide Choice',
          icon: sources[0]
        },
        {
          screen: 'tbd.ChoiceListScreen',
          label: 'Choice List',
          title: 'Choice List',
          icon: sources[1]
        }
      ],
      appStyle: {
        tabBarSelectedButtonColor: 'red'
      }
    })
  })
}

export default startMainTabs

import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { Groups } from '../screens/groups/Groups'
import { NewGroup } from '../screens/new-groups/NewGroup'
import { Players } from '../screens/players/Players'

const {Navigator, Screen} = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
              name = 'groups'
              component={Groups}
            />
            <Screen
              name = 'new'
              component={NewGroup}
            />
            <Screen
              name = 'players'
              component={Players}
            />
        </Navigator>
    )
}


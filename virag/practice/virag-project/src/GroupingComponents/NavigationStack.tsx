import App from "../App"
import LearnMore from "./LearnMore"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const NavigationStack = () => {
    return (
        <NavigationContainer>
            <Stack.Screen
                name="Home"
                component={App}
                options={{ title: 'Welcome' }}
            />
            <Stack.Screen
                name="More"
                component={LearnMore}
                options={{ title: 'Learn' }}
            />
        </NavigationContainer>
    )
}
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "./routes";
import { RootStackParamList } from "./navigationTypes";

export const Navigation = () => {

    const Stack = createNativeStackNavigator<RootStackParamList>()

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Start"
                screenOptions={{
                    headerShown: false
                }}
            >
                {
                    routes.map(route =>
                        <Stack.Screen
                            key={route.name}
                            name={route.name}
                            component={route.component}
                        />
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}
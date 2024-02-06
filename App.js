import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Start from "./screens/Start";
import AllActivities from "./screens/AllActivities";
import SpecialActivities from "./screens/SpecialActivities";
import AddAnActivity from "./screens/AddAnActivity";
import ActivitiesTabBar from "./components/ActivitiesTabBar";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const ActivitiesStack = () => {
  return (
    <Tab.Navigator tabBar={(props) => <ActivitiesTabBar {...props} />}>
      <Tab.Screen name="All Activities" component={AllActivities} />
      <Tab.Screen name="Special Activities" component={SpecialActivities} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Activities" component={ActivitiesStack} />
        <Stack.Screen
          name="Add An Activity"
          component={AddAnActivity}
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

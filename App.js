import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Start from "./screens/Start";
import AllActivities from "./screens/AllActivities";
import SpecialActivities from "./screens/SpecialActivities";
import AddAnActivity from "./screens/AddAnActivity";
import ActivitiesTabBar from "./components/ActivitiesTabBar";
import AddButton from "./components/AddButton";
import { ActivitiesListProvider } from "./components/ActivitiesListContext";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const ActivitiesStack = ({ navigation }) => {
  function handleAdd() {
    navigation.navigate("Add An Activity");
  }
  return (
    <Tab.Navigator tabBar={(props) => <ActivitiesTabBar {...props} />}>
      <Tab.Screen
        name="All Activities"
        component={AllActivities}
        options={({ navigation }) => ({
          headerRight: () => <AddButton onAdd={handleAdd} />,
        })}
      />
      <Tab.Screen
        name="Special Activities"
        component={SpecialActivities}
        options={({ navigation }) => ({
          headerRight: () => <AddButton onAdd={handleAdd} />,
        })}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <ActivitiesListProvider>
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
    </ActivitiesListProvider>
  );
}

const styles = StyleSheet.create({});

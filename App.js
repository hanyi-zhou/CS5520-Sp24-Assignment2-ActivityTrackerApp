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
import PressableButton from "./components/PressableButton";
import { ActivitiesListProvider } from "./components/ActivitiesListContext";
import {
  navigationBackgroundColor,
  navigationTintColor,
  appStyles,
} from "./Styles";

// Create the navigation stack and tab navigator
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

// The ActivitiesStack component is a tab navigator that contains
// the AllActivities and SpecialActivities screens. It also contains
// a button to add a new activity.
const ActivitiesStack = ({ navigation }) => {
  function handleAdd() {
    navigation.navigate("Add An Activity", { editMode: false });
  }
  return (
    <Tab.Navigator
      tabBar={(props) => <ActivitiesTabBar {...props} />}
      screenOptions={({ navigation }) => ({
        headerRight: () => (
          <PressableButton
            customStyle={appStyles.addButton}
            onPressFunction={() => handleAdd()}
          >
            <Text style={appStyles.addTextStyle}>+</Text>
          </PressableButton>
        ),
        headerStyle: {
          backgroundColor: navigationBackgroundColor,
        },
        headerTintColor: navigationTintColor,
      })}
    >
      <Tab.Screen name="All Activities" component={AllActivities} />
      <Tab.Screen name="Special Activities" component={SpecialActivities} />
    </Tab.Navigator>
  );
};

// The App component is the root component of the application. It
// wraps the entire application with the ActivitiesListProvider and
// contains the navigation stack for the Start, Activities, and
// Add An Activity screens.
export default function App() {
  return (
    <ActivitiesListProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Activities" component={ActivitiesStack} />
          <Stack.Screen
            name="Add An Activity"
            component={AddAnActivity}
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: navigationBackgroundColor,
              },
              headerTintColor: navigationTintColor,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ActivitiesListProvider>
  );
}

const styles = StyleSheet.create();

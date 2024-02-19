import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { activitiesTabBarStyles } from "../Styles";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

// The ActivitiesTabBar component is a custom tab bar that takes in
// the navigation, state, and descriptors from the useTabBar hook.
export default function ActivitiesTabBar({ navigation, state, descriptors }) {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          // Check if the tab is focused
          const isFocused = state.index === index;

          // Define the onPress and onLongPress functions for each tab
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          // Define the icon for each tab
          const icon =
            route.name === "All Activities" ? (
              <FontAwesome
                name="dollar"
                size={activitiesTabBarStyles.iconSize}
              />
            ) : (
              <Ionicons name="alert" size={activitiesTabBarStyles.iconSize} />
            );

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabItem}
            >
              <View style={styles.textContainer}>
                <Text
                  style={{
                    color: isFocused
                      ? activitiesTabBarStyles.tabFocusedColor
                      : activitiesTabBarStyles.tabUnfocusedColor,
                    fontWeight: activitiesTabBarStyles.fontWeight,
                  }}
                >
                  {icon}
                </Text>
                <Text
                  style={{
                    color: isFocused
                      ? activitiesTabBarStyles.tabFocusedColor
                      : activitiesTabBarStyles.tabUnfocusedColor,
                    fontWeight: activitiesTabBarStyles.fontWeight,
                    fontSize: activitiesTabBarStyles.fontSize,
                  }}
                >
                  {label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: activitiesTabBarStyles.container,
  tabContainer: activitiesTabBarStyles.tabContainer,
  tabItem: activitiesTabBarStyles.tabItem,
  textContainer: activitiesTabBarStyles.textContainer,
});

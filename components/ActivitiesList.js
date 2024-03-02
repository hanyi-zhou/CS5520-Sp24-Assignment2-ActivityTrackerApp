import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import PressableButton from "./PressableButton";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { database } from "../firebase-files/firebaseSetup";
import { activitiesListStyles } from "../Styles";

export default function ActivitiesList({ type, navigation }) {
  const [activities, setActivities] = useState([]);

  // Fetch the activities from the database
  useEffect(() => {
    const activitiesCollection = collection(database, "activities");

    // Create a query based on the type
    let queryActivities;
    if (type === "special") {
      queryActivities = query(
        activitiesCollection,
        where("special", "==", true)
      );
    } else {
      queryActivities = activitiesCollection;
    }

    // Subscribe to the query
    const unsubscribe = onSnapshot(queryActivities, (snapshot) => {
      const fetchedActivities = [];
      snapshot.forEach((doc) => {
        fetchedActivities.push({ id: doc.id, ...doc.data() });
      });
      // Sort the activities by date
      fetchedActivities.sort((a, b) => new Date(b.date) - new Date(a.date));
      setActivities(fetchedActivities);
    });

    return () => unsubscribe();
  }, [type]); // Dependency array includes 'type' to re-run effect when type changes

  // Handle the edit activity press
  function handleEditActivity(item) {
    navigation.navigate("Add An Activity", {
      editMode: true,
      activityId: item.id,
    });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PressableButton
            customStyle={styles.itemContainer}
            onPressFunction={() => handleEditActivity(item)}
          >
            <Text style={styles.typeText}>{item.type}</Text>
            {item.special && <Text>⚠️</Text>}
            <View style={styles.detailContainer}>
              <Text style={styles.dateText}>{item.date}</Text>
              <Text style={styles.detailText}>{item.duration} min</Text>
            </View>
          </PressableButton>
        )}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: activitiesListStyles.container,
  itemContainer: activitiesListStyles.itemContainer,
  typeText: activitiesListStyles.typeText,
  dateText: activitiesListStyles.dateText,
  detailText: activitiesListStyles.detailText,
  flatListContainer: activitiesListStyles.flatListContainer,
  detailContainer: activitiesListStyles.detailContainer,
});

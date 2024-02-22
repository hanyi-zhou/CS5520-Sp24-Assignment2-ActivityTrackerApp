import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { database } from "../firebase-files/firebaseSetup";
import { activitiesListStyles } from "../Styles";

export default function ActivitiesList({ type }) {
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

    const unsubscribe = onSnapshot(queryActivities, (snapshot) => {
      const fetchedActivities = [];
      snapshot.forEach((doc) => {
        fetchedActivities.push({ id: doc.id, ...doc.data() });
      });
      setActivities(fetchedActivities);
    });

    return () => unsubscribe();
  }, [type]); // Dependency array includes 'type' to re-run effect when type changes

  return (
    <View style={styles.container}>
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.typeText}>{item.type}</Text>
            {item.special && <Text>⚠️</Text>}
            <View style={styles.detailContainer}>
              <Text style={styles.dateText}>{item.date}</Text>
              <Text style={styles.detailText}>{item.duration} min</Text>
            </View>
          </View>
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

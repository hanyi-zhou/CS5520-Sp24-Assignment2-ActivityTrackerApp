// Purpose: To store all the styles used in the application.

// The styles for the StartScreen component.
export const startScreenStyles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 20,
    backgroundColor: "lavender",
  },
  inputContainer: {
    width: "98%",
  },
  text: {
    marginBottom: 10,
    color: "darkslateblue",
    fontWeight: "bold",
    fontSize: 15,
  },
  errorText: {
    color: "gray",
    fontSize: 15,
  },
  errorTextContainer: {
    height: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "60%",
    marginTop: 20,
    justifyContent: "space-between",
  },
  resetButton: {
    backgroundColor: "red",
    width: "45%",
  },
  startButton: {
    backgroundColor: "darkslateblue",
    width: "45%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
};

// The styles for the input components.
export const inputContainerStyle = {
  borderWidth: 2,
  borderColor: "darkslateblue",
  borderRadius: 5,
  height: 40,
  backgroundColor: "white",
  color: "darkslateblue",
  fontSize: 18,
};

// The styles for the ActivitiesScreen component.
export const activitiesScreenStyles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lavender",
  },
};

// The styles for the ActivitiesList component.
export const activitiesListStyles = {
  container: {
    flex: 1,
    width: "85%",
    marginTop: 30,
    borderRadius: 5,
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "darkslateblue",
    borderRadius: 10,
    marginBottom: 18,
    justifyContent: "space-between",
    alignItems: "center",
  },
  typeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  dateText: {
    color: "darkslateblue",
    fontWeight: "bold",
    fontSize: 15,
    backgroundColor: "white",
    padding: 5,
    textAlign: "center",
    width: 140,
  },
  detailText: {
    color: "darkslateblue",
    fontWeight: "bold",
    fontSize: 15,
    backgroundColor: "white",
    padding: 5,
    width: 80,
    textAlign: "center",
  },
  flatListContainer: {
    flexDirection: "column-reverse",
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 5,
  },
};

// The styles for the ActivitiesTabBar component.
export const activitiesTabBarStyles = {
  container: {
    flexDirection: "row",
    backgroundColor: "darkslateblue",
    justifyContent: "space-between",
  },
  tabContainer: {
    flexDirection: "row",
    width: "100%",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    rowGap: 5,
  },
  textContainer: {
    alignItems: "center",
    rowGap: 10,
    padding: 10,
    marginBottom: 10,
  },
  tabFocusedColor: "gold",
  tabUnfocusedColor: "gray",
  fontWeight: "bold",
  fontSize: 15,
  iconSize: 20,
};

// The styles for the AddActivityScreen component.
export const addAnActivityStyles = {
  formContainer: {
    flex: 1,
    width: "85%",
    marginTop: 70,
    rowGap: 30,
  },
  text: {
    marginBottom: 10,
    color: "darkslateblue",
    fontWeight: "bold",
    fontSize: 15,
  },
  dropDownContainer: {
    zIndex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: "red",
    width: "45%",
  },
  saveButton: {
    backgroundColor: "darkslateblue",
    width: "45%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  paragraph: {
    color: "darkslateblue",
    fontSize: 15,
    fontWeight: "bold",
  },
  bottomContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 200,
  },
};

//  The styles for the ActivityDropDownPicker component.
export const activityDropDownPickerStyles = {
  boxStyles: {
    backgroundColor: "white",
  },
  inputStyles: {
    color: "darkslateblue",
    fontSize: 18,
  },
  dropdownStyles: {
    backgroundColor: "white",
  },
  dropdownTextStyles: {
    color: "darkslateblue",
    fontSize: 18,
  },
};

// The styles for the PressableButton component.
export const pressableButtonStyles = {
  defaultStyle: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
  },
  pressed: { opacity: 0.5 },
  disabled: { opacity: 0.5 },
};

// The styles for the App.js
export const appStyles = {
  addButton: {
    backgroundColor: null,
    paddingRight: 20,
  },
  addTextStyle: {
    color: "white",
    fontSize: 25,
  },
};

export const editStyles = {
  deleteButton: {
    backgroundColor: null,
    paddingRight: 20,
  },
};

// The styles for the colors used in the application.
export const navigationBackgroundColor = "darkslateblue";
export const navigationTintColor = "white";
export const addButtonColor = "gold";
export const resetButtonColor = "red";
export const cancelButtonColor = "red";
export const startButtonColor = "darkslateblue";
export const saveButtonColor = "darkslateblue";
export const androidRippleColor = "rgba(0, 0, 0, 0.2)";

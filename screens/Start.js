import { StyleSheet, Text, View } from "react-native";
import React from "react";
import EmailInput from "../components/EmailInput";
import PhoneNumberInput from "../components/PhoneNumberInput";
import PressableButton from "../components/PressableButton";
import { startScreenStyles } from "../Styles";

// The Start screen is a simple screen that displays a form to
// enter an email address and a phone number.
export default function Start({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [phoneNumberError, setPhoneNumberError] = React.useState("");

  // Handle the email input change
  function handleEmailChange(email) {
    setEmail(email);
  }

  // Validate the email input
  function validateEmailInput(email) {
    if (
      email.length === 0 ||
      !email.includes("@") ||
      !email.includes(".") ||
      email.indexOf("@") === 0 ||
      email.lastIndexOf(".") === email.length - 1 ||
      email.lastIndexOf(".") < email.indexOf("@") ||
      email.lastIndexOf(".") - email.indexOf("@") === 1
    ) {
      setEmailError("Please enter a valid email address.");
      return false;
    }
    return true;
  }

  // Handle the phone number input change
  function handlePhoneNumberChange(phoneNumber) {
    setPhoneNumber(phoneNumber);
  }

  // Validate the phone number input
  function validatePhoneNumberInput(phoneNumber) {
    const isNumber = /^[0-9]+$/.test(phoneNumber);
    // If the phone number is not a number or is empty or is less than 10 digits
    if (!isNumber || phoneNumber.length === 0 || phoneNumber.length < 10) {
      setPhoneNumberError("Please enter a valid phone number.");
      return false;
    }
    return true;
  }

  // Reset the form
  function handleReset() {
    setEmail("");
    setPhoneNumber("");
    setEmailError("");
    setPhoneNumberError("");
  }

  // Handle the start button click
  function handleStart() {
    setEmailError("");
    setPhoneNumberError("");
    // Validate the email and phone number
    const isEmailValid = validateEmailInput(email);
    const isPhoneNumberValid = validatePhoneNumberInput(phoneNumber);
    if (isEmailValid && isPhoneNumberValid) {
      // Navigate to the next screen
      navigation.navigate("Activities");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Email Address</Text>
        <EmailInput value={email} onEmailChange={handleEmailChange} />
        <View style={styles.errorTextContainer}>
          {emailError !== "" ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Phone Number</Text>
        <PhoneNumberInput
          value={phoneNumber}
          onPhoneNumberChange={handlePhoneNumberChange}
        />
        <View style={styles.errorTextContainer}>
          {phoneNumberError !== "" ? (
            <Text style={styles.errorText}>{phoneNumberError}</Text>
          ) : null}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <PressableButton
          customStyle={styles.resetButton}
          onPressFunction={handleReset}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </PressableButton>
        <PressableButton
          customStyle={styles.startButton}
          onPressFunction={handleStart}
          isDisabled={!email && !phoneNumber}
        >
          <Text style={styles.buttonText}>Start</Text>
        </PressableButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: startScreenStyles.container,
  inputContainer: startScreenStyles.inputContainer,
  text: startScreenStyles.text,
  errorTextContainer: startScreenStyles.errorTextContainer,
  errorText: startScreenStyles.errorText,
  buttonContainer: startScreenStyles.buttonContainer,
  resetButton: startScreenStyles.resetButton,
  startButton: startScreenStyles.startButton,
  buttonText: startScreenStyles.buttonText,
});

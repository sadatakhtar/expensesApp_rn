import { Text, StyleSheet, View, Button } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

const ErrorOverlay = ({message, onConfirm}) => {
  return (
    <View style={styles.container}>
     <Text style={[styles.text, styles.title]}>An Error occurred!</Text>
     <Text style={styles.text}>{message}</Text>
     <Button title="Okay" onPress={onConfirm}/>
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: GlobalStyles.colors.primary700
    },
    text: {
        textAlign: 'center',
        marginBottom: 8,
        color: 'white'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },


});

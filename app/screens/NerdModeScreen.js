import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';

import colors from '../config/colors';

function NerdModeScreen(props) {
  return (
    <View style={styles.container}>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteIllusion,
  },
  mainHeader: {
    flex: 0.37,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  NavBar: {
    backgroundColor: colors.white,
    height: 70,
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: "absolute",
    bottom: 0,
 }
});

export default NerdModeScreen;
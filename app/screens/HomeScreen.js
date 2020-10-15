import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Platform } from 'react-native';

import colors from '../config/colors';

function HomeScreen(props) {
  return (
    <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <View style={styles.mainHeader}>
            </View>
            
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteIllusion,
  },
  scrollView: {

  },
  mainHeader: {
    height: 1250,
    top: -1000,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
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

export default HomeScreen;
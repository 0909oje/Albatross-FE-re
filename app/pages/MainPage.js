import React, { Component, useEffect, useState } from "react";
import { Text, View, Button, StyleSheet, Image,
  TouchableOpacity, ScrollView,
} from "react-native";

import drawer from "../assets/MainPage/apps.png";
import profile from "../assets/MainPage/profile.png";
import literature from "../assets/MainPage/literature.png";

import literList from "../components/ExLiterature/literList";

import * as Font from "expo-font";

const MainPage = ({navigation}) => {
  const [isReady, setIsReady] = useState(true);

  useEffect(async () => {
    await Font.loadAsync({
        'SeoulHangangL': require('../assets/fonts/SeoulHangangL.ttf'),
    });
    setIsReady(true);
}, []);

  const fontPath = "SeoulHangangL"; // 초기 폰트 설정
  
    return (
      
      <View style={styles.container}>
        {isReady && (
          <>
        <View style={styles.headerRow}>
          <TouchableOpacity
            onPress={() => navigation.navigate("PROFILE_LOGIN")}
          >
            <Image source={profile} style={{width: 60, height: 60}} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("DRAWER")}
          >
            <Image source={drawer} style={{width: 90, height: 90}} />
          </TouchableOpacity>
        </View>

        <Text style={{
            fontSize: 30,
            marginTop: 20,
            marginLeft: 30,
            marginBottom: 80,
            letterSpacing: 15,
            fontFamily : fontPath,
          }} >바른글씨</Text>

        <View style={styles.practiceRow}>
          <TouchableOpacity
            onPress={() => navigation.navigate("LINE")}
            style={{
              height: 130,
              width: "45%",
              backgroundColor: "#80AE92",
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                letterSpacing: 15,
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 50,
              }}>
              {" "}
              줄 긋기 연습{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("WORD")}
            style={{
              height: 130,
              width: "45%",
              backgroundColor: "#80AE92",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                letterSpacing: 15,
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 50,
              }}
            >
              {" "}
              자음모음 연습{" "}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.wordRow}>
          <Text style={{ color: "#C4C4C4" }}> New </Text>
          <View style={styles.line}></View>
        </View>

        <ScrollView style={styles.scrollView} indicatorStyle={"white"}> 
        <View style={styles.literatureRow}>
        {literList.new.map(s=>(
            <TouchableOpacity key={s.id}
              onPress={() => navigation.navigate("LITER",{
                category: "new",
                id: s.id,
                text: s.text,
              })}
              style={styles.iconbutton} >
              <Image source={literature} style={{marginLeft: 10, marginRight: 10}} />
            </TouchableOpacity>
          ))}
        </View>
        </ScrollView>

        <View style={styles.wordRow}>
          <Text style={{ color: "#C4C4C4" }}> Best </Text>
          <View style={styles.line}></View>
        </View>

        <ScrollView style={styles.scrollView} indicatorStyle={"white"}> 
        <View style={styles.literatureRow}>
        {literList.best.map(s=>(
            <TouchableOpacity key={s.id}
              onPress={() => navigation.navigate("LITER",{
                category: "best",
                id: s.id,
                text: s.text,
              })}
              style={styles.iconbutton} >
              <Image source={literature} style={{marginLeft: 10, marginRight: 10}} />
            </TouchableOpacity>
          ))}
        </View>
        </ScrollView>
        </>
        )}
      </View>
    );
}

export default MainPage;

const styles = StyleSheet.create({
  // 배경색 넣은 컨테이너
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F9F9F9",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  // 세로줄 컴포넌트
  column: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  // 컴포넌트를 양쪽에 배치하는 컴포넌트
  headerRow: {
    marginTop: 30,
    width: "95%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  practiceRow: {
    marginBottom: 30,
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wordRow: {
    marginBottom: 5,
    marginTop: 5,
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  line: {
    width: "94%",
    height: 1,
    backgroundColor: "#C4C4C4",
  },
  literatureRow: {
    marginTop: 10,
    marginBottom: 10,
    width: "85%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scrollView: {
    marginTop: 10,
    marginBottom: 10,
    width: "85%",
    display: "flex",
    flexDirection: "row",
  },
});

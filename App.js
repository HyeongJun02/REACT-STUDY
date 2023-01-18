import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Button,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from  'react-native';

import img from './image/thisis_logo.png';

const createAlert = () => {
  Alert.alert(
    "Alert 제목",
    "Alert 내용"
  )
}

const createTwoButtonAlert = () => {
  Alert.alert(
    "Alert 제목",
    "Alert 내용",
    [
      {
        text: "취소",
        style: "cancel",
        onPress: () => console.log("취소..")
      },
      {
        text: "확인",
        onPress: () => console.log("확인..")
      }
    ]
  )
}

const createThreeButtonAlert = () => {
  Alert.alert(
    "Alert 제목",
    "Alert 내용",
    [
      {
        text: "취소",
        style: "cancel",
        onPress: () => console.log("취소..")
      },
      {
        text: "확인",
        onPress: () => console.log("확인..")
      },
      {
        text: "오잉?",
        onPress: () => console.log("오잉??")
      }
    ]
  )
}

const App = () => {
  return (
    <SafeAreaView style={styles.f}>

      <Image source={img} style={styles.img}></Image>

      <View style={{alignItems: 'center', margin: 10}}>
        <Text style={{fontSize: 35}}>버튼 클릭</Text>
      </View>

      <Button 
        onPress={() => console.log('버튼 클릭됨')}
        title = 'Button'
        color = 'gray'
      />

      <TouchableOpacity
        onPress={() => console.log('터치 됐음')}
        style={styles.center}
      >
        <Text>눌 러</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style = {[styles.touch, {backgroundColor: 'red'}]}
        onPress = {createAlert}
      >
        <Text style={styles.center}>눌러!!!</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style = {[styles.touch, {backgroundColor: 'green'}]}
        onPress = {createTwoButtonAlert}
      >
        <Text style={styles.center}>확인/취소</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style = {[styles.touch, {backgroundColor: 'pink'}]}
        onPress = {createThreeButtonAlert}
      >
        <Text style={styles.center}>세개</Text>
      </TouchableOpacity>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create ( { 
  img: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    alignItems: 'center',
  },

  f: {
    flex: 1,
    //alignItems: 'center'
  },

  touch: {
    backgroundColor:"pink",
    paddingHorizontal: 50,
    paddingVertical: 20,
    margin: 20
  },

  center: {
    alignItems: 'center',
    alignContent: 'center'
  }
})

export default App;



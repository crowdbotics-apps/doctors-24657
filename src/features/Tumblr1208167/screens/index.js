import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b73/8cf5/1e5d19b08d7c0f4377d2e0a163854d26"
        }}
        style={styles.ImageBackground_169_1}
      />
      <View style={styles.View_169_12}>
        <Text style={styles.Text_169_12}>
          Profile photo 212x212 Cover 2534x700
        </Text>
      </View>
      <View style={styles.View_169_13} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e114/18bb/534cbdfd9e56e478a3955d4d31ef58b8"
        }}
        style={styles.ImageBackground_169_133}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9e3/7af1/54bee09e840586a89cf9a5b31fa03036"
        }}
        style={styles.ImageBackground_169_14}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4095/6767/d28f9aaf280ed8941fa9c17eb581f668"
        }}
        style={styles.ImageBackground_169_23}
      />
      <View style={styles.View_169_24} />
      <View style={styles.View_169_117} />
      <View style={styles.View_169_118} />
      <View style={styles.View_169_119} />
      <View style={styles.View_169_15} />
      <View style={styles.View_169_27} />
      <View style={styles.View_169_28} />
      <View style={styles.View_169_29} />
      <View style={styles.View_169_53} />
      <View style={styles.View_169_128} />
      <View style={styles.View_169_129} />
      <View style={styles.View_169_130} />
      <View style={styles.View_169_131} />
      <View style={styles.View_169_121} />
      <View style={styles.View_169_122} />
      <View style={styles.View_169_123} />
      <View style={styles.View_169_124} />
      <View style={styles.View_169_125} />
      <View style={styles.View_169_126} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cec/9b69/5f1b7929935fe63f9f00ab89c1ee958e"
        }}
        style={styles.ImageBackground_169_61}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cec/9b69/5f1b7929935fe63f9f00ab89c1ee958e"
        }}
        style={styles.ImageBackground_169_62}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cec/9b69/5f1b7929935fe63f9f00ab89c1ee958e"
        }}
        style={styles.ImageBackground_169_63}
      />
      <View style={styles.View_169_116} />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_169_1: {
    width: 1551,
    minWidth: 1551,
    height: 1237,
    minHeight: 1237,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_169_12: {
    width: 219,
    minWidth: 219,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 394,
    top: 97
  },
  Text_169_12: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_169_13: {
    width: 1,
    minWidth: 1,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 362,
    top: 98,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_169_133: {
    width: 125,
    minWidth: 125,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142,
    top: 111
  },
  ImageBackground_169_14: {
    width: 1267,
    minWidth: 1267,
    height: 949,
    minHeight: 949,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142,
    top: 288
  },
  ImageBackground_169_23: {
    width: 1267,
    minWidth: 1267,
    height: 43,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142,
    top: 245
  },
  View_169_24: {
    width: 1267,
    minWidth: 1267,
    height: 175,
    minHeight: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142,
    top: 288,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_169_117: {
    width: 252.76136779785156,
    minWidth: 252.76136779785156,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 649,
    top: 551,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_169_118: {
    width: 232.49998474121094,
    minWidth: 232.49998474121094,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 659,
    top: 575,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_169_119: {
    width: 137.60316467285156,
    minWidth: 137.60316467285156,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 707,
    top: 599,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_169_15: {
    width: 382,
    minWidth: 382,
    height: 256,
    minHeight: 256,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 446,
    top: 647,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_169_27: {
    width: 256,
    minWidth: 256,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 481,
    top: 823,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_169_28: {
    width: 236,
    minWidth: 236,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 481,
    top: 847,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_169_29: {
    width: 138,
    minWidth: 138,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 481,
    top: 871,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_169_53: {
    width: 382,
    minWidth: 382,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 446,
    top: 647,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_169_128: {
    width: 382,
    minWidth: 382,
    height: 256,
    minHeight: 256,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 446,
    top: 919,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_169_129: {
    width: 256,
    minWidth: 256,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 481,
    top: 954,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_169_130: {
    width: 168,
    minWidth: 168,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 481,
    top: 978,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_169_131: {
    width: 191,
    minWidth: 191,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 481,
    top: 1002,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_169_121: {
    width: 81,
    minWidth: 81,
    height: 76,
    minHeight: 76,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 853,
    top: 647,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_169_122: {
    width: 81,
    minWidth: 81,
    height: 76,
    minHeight: 76,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 938,
    top: 647,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_169_123: {
    width: 81,
    minWidth: 81,
    height: 76,
    minHeight: 76,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1024,
    top: 647,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_169_124: {
    width: 81,
    minWidth: 81,
    height: 76,
    minHeight: 76,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 853,
    top: 727,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_169_125: {
    width: 81,
    minWidth: 81,
    height: 76,
    minHeight: 76,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 938,
    top: 727,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_169_126: {
    width: 81,
    minWidth: 81,
    height: 76,
    minHeight: 76,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1024,
    top: 727,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  ImageBackground_169_61: {
    width: 6,
    minWidth: 6,
    height: 6,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 161,
    top: 264
  },
  ImageBackground_169_62: {
    width: 6,
    minWidth: 6,
    height: 6,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 181,
    top: 264
  },
  ImageBackground_169_63: {
    width: 6,
    minWidth: 6,
    height: 6,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 201,
    top: 264
  },
  View_169_116: {
    width: 106,
    minWidth: 106,
    height: 106,
    minHeight: 106,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 722,
    top: 421,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2: { height: 1237 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

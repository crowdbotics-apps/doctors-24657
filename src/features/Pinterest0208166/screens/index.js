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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3312/8a6d/6c02f664c5d4a2df207df94cd85ae1de"
        }}
        style={styles.ImageBackground_169_217}
      />
      <View style={styles.View_169_220}>
        <Text style={styles.Text_169_220}>Profile photo 250x250</Text>
      </View>
      <View style={styles.View_169_221} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46f6/bfb5/cf168c63e23d34b97dc94e46db3b3a55"
        }}
        style={styles.ImageBackground_172_305}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9e3/7af1/54bee09e840586a89cf9a5b31fa03036"
        }}
        style={styles.ImageBackground_169_222}
      />
      <View style={styles.View_169_224} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7205/3280/1c558d1fd547240b532bba24b736f747"
        }}
        style={styles.ImageBackground_169_223}
      />
      <View style={styles.View_169_225} />
      <View style={styles.View_169_226} />
      <View style={styles.View_169_227} />
      <View style={styles.View_169_232} />
      <View style={styles.View_172_307} />
      <View style={styles.View_172_308} />
      <View style={styles.View_172_310} />
      <View style={styles.View_172_311} />
      <View style={styles.View_172_313} />
      <View style={styles.View_172_312} />
      <View style={styles.View_172_314} />
      <View style={styles.View_172_304} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a743/f35b/4d2162980839d75edc99440be22e0345"
        }}
        style={styles.ImageBackground_169_243}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a743/f35b/4d2162980839d75edc99440be22e0345"
        }}
        style={styles.ImageBackground_169_244}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a743/f35b/4d2162980839d75edc99440be22e0345"
        }}
        style={styles.ImageBackground_169_245}
      />
      <View style={styles.View_169_246} />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_169_217: {
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
  View_169_220: {
    width: 219,
    minWidth: 219,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 394,
    top: 97
  },
  Text_169_220: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_169_221: {
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
  ImageBackground_172_305: {
    width: 150,
    minWidth: 150,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142,
    top: 104
  },
  ImageBackground_169_222: {
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
  View_169_224: {
    width: 1267,
    minWidth: 1267,
    height: 228,
    minHeight: 228,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142,
    top: 288,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  ImageBackground_169_223: {
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
  View_169_225: {
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
  View_169_226: {
    width: 232.49998474121094,
    minWidth: 232.49998474121094,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 649,
    top: 575,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_169_227: {
    width: 137.60316467285156,
    minWidth: 137.60316467285156,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 649,
    top: 599,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_169_232: {
    width: 213,
    minWidth: 213,
    height: 308,
    minHeight: 308,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 446,
    top: 647,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_172_307: {
    width: 213,
    minWidth: 213,
    height: 180,
    minHeight: 180,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 669,
    top: 647,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_172_308: {
    width: 213,
    minWidth: 213,
    height: 252,
    minHeight: 252,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 892,
    top: 647,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_172_310: {
    width: 213,
    minWidth: 213,
    height: 272,
    minHeight: 272,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 446,
    top: 965,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_172_311: {
    width: 213,
    minWidth: 213,
    height: 180,
    minHeight: 180,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 669,
    top: 837,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_172_313: {
    width: 213,
    minWidth: 213,
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 669,
    top: 1027,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_172_312: {
    width: 213,
    minWidth: 213,
    height: 252,
    minHeight: 252,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 892,
    top: 909,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_172_314: {
    width: 213,
    minWidth: 213,
    height: 66,
    minHeight: 66,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 892,
    top: 1171,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_172_304: {
    width: 114,
    minWidth: 114,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 994,
    top: 539,
    backgroundColor: "rgba(222, 105, 105, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_169_243: {
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
  ImageBackground_169_244: {
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
  ImageBackground_169_245: {
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
  View_169_246: {
    width: 125,
    minWidth: 125,
    height: 125,
    minHeight: 125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 446,
    top: 452,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 85,
    borderTopRightRadius: 85,
    borderBottomLeftRadius: 85,
    borderBottomRightRadius: 85
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

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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3563/7176/bf7dcac73b10b93edf9cf546ff3ccc87"
        }}
        style={styles.ImageBackground_93_113}
      />
      <View style={styles.View_175_2}>
        <Text style={styles.Text_175_2}>Profile photo 320x320</Text>
      </View>
      <View style={styles.View_95_12} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6226/5e2d/63db16df23e5a861b4170f64d508e3e8"
        }}
        style={styles.ImageBackground_95_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d15/4d02/7b3fa877d2849952b2ef5c61c9f0932c"
        }}
        style={styles.ImageBackground_93_117}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/139d/72e7/b10710514a5fbafa5204031cbc3e8538"
        }}
        style={styles.ImageBackground_93_118}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66f7/305d/cbae76dc9b76ec1dc7a1569689666f54"
        }}
        style={styles.ImageBackground_93_119}
      />
      <View style={styles.View_93_125} />
      <View style={styles.View_93_200} />
      <View style={styles.View_93_130} />
      <View style={styles.View_93_131} />
      <View style={styles.View_93_132} />
      <View style={styles.View_93_198} />
      <View style={styles.View_93_199} />
      <View style={styles.View_48_28} />
      <View style={styles.View_51_3} />
      <View style={styles.View_51_4} />
      <View style={styles.View_51_5} />
      <View style={styles.View_51_6} />
      <View style={styles.View_51_7} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4c4/a714/34350cd7bba7c39687a03827c295efb4"
        }}
        style={styles.ImageBackground_93_160}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4c4/a714/34350cd7bba7c39687a03827c295efb4"
        }}
        style={styles.ImageBackground_93_161}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4c4/a714/34350cd7bba7c39687a03827c295efb4"
        }}
        style={styles.ImageBackground_93_162}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d33e/1047/61081850a98328ca3e3a8cf258655933"
        }}
        style={styles.ImageBackground_93_289}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d33e/1047/61081850a98328ca3e3a8cf258655933"
        }}
        style={styles.ImageBackground_93_290}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d33e/1047/61081850a98328ca3e3a8cf258655933"
        }}
        style={styles.ImageBackground_93_291}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f4a/40c7/dfe7c9ee83fcca116e6997995c09db66"
        }}
        style={styles.ImageBackground_93_120}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_93_113: {
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
  View_175_2: {
    width: 219,
    minWidth: 219,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 394,
    top: 97
  },
  Text_175_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_12: {
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
  ImageBackground_95_16: {
    width: 185,
    minWidth: 185,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 132,
    top: 107
  },
  ImageBackground_93_117: {
    width: 1287,
    minWidth: 1287,
    height: 949,
    minHeight: 949,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 132,
    top: 288
  },
  ImageBackground_93_118: {
    width: 1287,
    minWidth: 1287,
    height: 43,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 132,
    top: 245
  },
  ImageBackground_93_119: {
    width: 1287,
    minWidth: 1287,
    height: 55,
    minHeight: 55,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 132,
    top: 288
  },
  View_93_125: {
    width: 280,
    minWidth: 280,
    height: 31,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 525,
    top: 300,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_93_200: {
    width: 160,
    minWidth: 160,
    height: 31,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 308,
    top: 300,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_93_130: {
    width: 499,
    minWidth: 499,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 525,
    top: 435,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_93_131: {
    width: 459,
    minWidth: 459,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 525,
    top: 459,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_93_132: {
    width: 469,
    minWidth: 469,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 525,
    top: 483,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_93_198: {
    width: 269,
    minWidth: 269,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 525,
    top: 507,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_93_199: {
    width: 279,
    minWidth: 279,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 525,
    top: 531,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_48_28: {
    width: 293,
    minWidth: 293,
    height: 293,
    minHeight: 293,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 308,
    top: 623,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_51_3: {
    width: 293,
    minWidth: 293,
    height: 293,
    minHeight: 293,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 629,
    top: 623,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_51_4: {
    width: 293,
    minWidth: 293,
    height: 293,
    minHeight: 293,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 950,
    top: 623,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_51_5: {
    width: 293,
    minWidth: 293,
    height: 293,
    minHeight: 293,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 308,
    top: 944,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_51_6: {
    width: 293,
    minWidth: 293,
    height: 293,
    minHeight: 293,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 629,
    top: 944,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_51_7: {
    width: 293,
    minWidth: 293,
    height: 293,
    minHeight: 293,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 950,
    top: 944,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  ImageBackground_93_160: {
    width: 6,
    minWidth: 6,
    height: 6,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 151,
    top: 264
  },
  ImageBackground_93_161: {
    width: 6,
    minWidth: 6,
    height: 6,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 171,
    top: 264
  },
  ImageBackground_93_162: {
    width: 6,
    minWidth: 6,
    height: 6,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 191,
    top: 264
  },
  ImageBackground_93_289: {
    width: 31,
    minWidth: 31,
    height: 31,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1212,
    top: 300
  },
  ImageBackground_93_290: {
    width: 31,
    minWidth: 31,
    height: 31,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1173,
    top: 300
  },
  ImageBackground_93_291: {
    width: 31,
    minWidth: 31,
    height: 31,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1134,
    top: 300
  },
  ImageBackground_93_120: {
    width: 160,
    minWidth: 160,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 308,
    top: 410
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

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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3196/28fc/b0d939d149a0ef9bae3ee9a354f116cd"
        }}
        style={styles.ImageBackground_89_1}
      />
      <View style={styles.View_89_6}>
        <Text style={styles.Text_89_6}>
          Profile photo 356x356 Cover 1640x624{" "}
        </Text>
      </View>
      <View style={styles.View_95_10} />
      <View style={styles.View_95_0}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11b4/bdfd/95a0305b399ec2e847c856a94109c8c7"
          }}
          style={styles.ImageBackground_95_2}
        />
      </View>
      <View style={styles.View_89_16} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d15/4d02/7b3fa877d2849952b2ef5c61c9f0932c"
        }}
        style={styles.ImageBackground_89_78}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8736/9912/74fdcf8285dd7286a0ac56bde8e6f95b"
        }}
        style={styles.ImageBackground_89_76}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bca6/fd25/12dc31c6b2d48b31d389c8a31f2590f5"
        }}
        style={styles.ImageBackground_89_88}
      />
      <View style={styles.View_89_11} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/000e/0092/567b9b78912ac684aefddb95b6135cf3"
        }}
        style={styles.ImageBackground_89_81}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fac6/264c/7e7b648d8ecd7efdc0cb4899e1a539a0"
        }}
        style={styles.ImageBackground_89_21}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1c8/8d85/c413645b07305ca9a84eeb3d10238edb"
        }}
        style={styles.ImageBackground_89_15}
      />
      <View style={styles.View_89_12} />
      <View style={styles.View_89_82} />
      <View style={styles.View_89_83} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7dc/c7ce/a2253a639fe07d70aab2902024dbd7a9"
        }}
        style={styles.ImageBackground_89_13}
      />
      <View style={styles.View_89_80} />
      <View style={styles.View_89_17} />
      <View style={styles.View_89_18} />
      <View style={styles.View_89_19} />
      <View style={styles.View_89_20} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d83/9f8d/c16aeb8ab2cf634bcac75b814440e8ad"
        }}
        style={styles.ImageBackground_89_14}
      />
      <View style={styles.View_89_84} />
      <View style={styles.View_89_85} />
      <View style={styles.View_89_113} />
      <View style={styles.View_89_114} />
      <View style={styles.View_89_115} />
      <View style={styles.View_89_116} />
      <View style={styles.View_89_117} />
      <View style={styles.View_89_118} />
      <View style={styles.View_89_119} />
      <View style={styles.View_89_120} />
      <View style={styles.View_91_23} />
      <View style={styles.View_91_24} />
      <View style={styles.View_89_95} />
      <View style={styles.View_89_92} />
      <View style={styles.View_89_93} />
      <View style={styles.View_89_89} />
      <View style={styles.View_89_90} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0868/83f7/5206e16c504ad09df19f7315eb3f9491"
        }}
        style={styles.ImageBackground_89_110}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0868/83f7/5206e16c504ad09df19f7315eb3f9491"
        }}
        style={styles.ImageBackground_89_111}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0868/83f7/5206e16c504ad09df19f7315eb3f9491"
        }}
        style={styles.ImageBackground_89_112}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3860/b97f/676f457c86b526adfb4d03b2c711f7d2"
        }}
        style={styles.ImageBackground_89_86}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3860/b97f/676f457c86b526adfb4d03b2c711f7d2"
        }}
        style={styles.ImageBackground_91_25}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdaa/5613/35f8451ccf2596351425574c5b69d6fe"
        }}
        style={styles.ImageBackground_89_96}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdaa/5613/35f8451ccf2596351425574c5b69d6fe"
        }}
        style={styles.ImageBackground_89_97}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdaa/5613/35f8451ccf2596351425574c5b69d6fe"
        }}
        style={styles.ImageBackground_89_98}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdaa/5613/35f8451ccf2596351425574c5b69d6fe"
        }}
        style={styles.ImageBackground_89_99}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3860/b97f/676f457c86b526adfb4d03b2c711f7d2"
        }}
        style={styles.ImageBackground_89_94}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_89_1: {
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
  View_89_6: {
    width: 219,
    minWidth: 219,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 394,
    top: 97
  },
  Text_89_6: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_10: {
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
  View_95_0: {
    width: 142,
    minWidth: 142,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 132,
    top: 105
  },
  ImageBackground_95_2: {
    width: 142,
    minWidth: 142,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_89_16: {
    width: 501,
    minWidth: 501,
    height: 190,
    minHeight: 190,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 455,
    top: 882,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_89_78: {
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
  ImageBackground_89_76: {
    width: 820,
    minWidth: 820,
    height: 366,
    minHeight: 366,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 455,
    top: 338
  },
  ImageBackground_89_88: {
    width: 820,
    minWidth: 820,
    height: 312,
    minHeight: 312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 455,
    top: 338
  },
  View_89_11: {
    width: 500,
    minWidth: 500,
    height: 154,
    minHeight: 154,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 455,
    top: 716,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_89_81: {
    width: 500,
    minWidth: 500,
    height: 170,
    minHeight: 170,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 455,
    top: 882
  },
  ImageBackground_89_21: {
    width: 501,
    minWidth: 501,
    height: 173,
    minHeight: 173,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 454,
    top: 1064
  },
  ImageBackground_89_15: {
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
  View_89_12: {
    width: 308,
    minWidth: 308,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 967,
    top: 716,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_89_82: {
    width: 488,
    minWidth: 488,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 467,
    top: 662,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_89_83: {
    width: 296,
    minWidth: 296,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 967,
    top: 662,
    backgroundColor: "rgba(73, 103, 173, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_89_13: {
    width: 308,
    minWidth: 308,
    height: 304,
    minHeight: 304,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 967,
    top: 784
  },
  View_89_80: {
    width: 178,
    minWidth: 178,
    height: 178,
    minHeight: 178,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 265,
    top: 338,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_89_17: {
    width: 110,
    minWidth: 110,
    height: 110,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 467,
    top: 930,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_89_18: {
    width: 110,
    minWidth: 110,
    height: 110,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 589,
    top: 930,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_89_19: {
    width: 110,
    minWidth: 110,
    height: 110,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 711,
    top: 930,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_89_20: {
    width: 110,
    minWidth: 110,
    height: 110,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 833,
    top: 930,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_89_14: {
    width: 308,
    minWidth: 308,
    height: 137,
    minHeight: 137,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 967,
    top: 1100
  },
  View_89_84: {
    width: 209,
    minWidth: 209,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 526,
    top: 745,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_89_85: {
    width: 169,
    minWidth: 169,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 526,
    top: 762,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_89_113: {
    width: 149,
    minWidth: 149,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 266,
    top: 572,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_89_114: {
    width: 109,
    minWidth: 109,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 266,
    top: 596,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_89_115: {
    width: 119,
    minWidth: 119,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 266,
    top: 620,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_89_116: {
    width: 129,
    minWidth: 129,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 266,
    top: 644,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_89_117: {
    width: 149,
    minWidth: 149,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 266,
    top: 668,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_89_118: {
    width: 109,
    minWidth: 109,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 266,
    top: 692,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_89_119: {
    width: 119,
    minWidth: 119,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 266,
    top: 716,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_89_120: {
    width: 109,
    minWidth: 109,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 266,
    top: 740,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_91_23: {
    width: 159,
    minWidth: 159,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1038,
    top: 813,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_91_24: {
    width: 99,
    minWidth: 99,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1038,
    top: 830,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_89_95: {
    width: 113,
    minWidth: 113,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1071,
    top: 740,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_89_92: {
    width: 99,
    minWidth: 99,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 525,
    top: 1093,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_89_93: {
    width: 149,
    minWidth: 149,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 525,
    top: 1110,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_89_89: {
    width: 209,
    minWidth: 209,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 467,
    top: 894,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_89_90: {
    width: 169,
    minWidth: 169,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 467,
    top: 910,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_89_110: {
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
  ImageBackground_89_111: {
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
  ImageBackground_89_112: {
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
  ImageBackground_89_86: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 479,
    top: 740
  },
  ImageBackground_91_25: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 991,
    top: 808
  },
  ImageBackground_89_96: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 991,
    top: 740
  },
  ImageBackground_89_97: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1011,
    top: 740
  },
  ImageBackground_89_98: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1031,
    top: 740
  },
  ImageBackground_89_99: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1051,
    top: 740
  },
  ImageBackground_89_94: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 478,
    top: 1088
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

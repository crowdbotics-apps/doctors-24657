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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b25/9914/84849e0acf146ed290cb20d457d18033"
        }}
        style={styles.ImageBackground_138_169}
      />
      <View style={styles.View_138_175}>
        <Text style={styles.Text_138_175}>Profile photo 240x240</Text>
      </View>
      <View style={styles.View_138_176} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b5c/d191/d2d75abaacb8572f2d0d95af7a98951d"
        }}
        style={styles.ImageBackground_138_263}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d15/4d02/7b3fa877d2849952b2ef5c61c9f0932c"
        }}
        style={styles.ImageBackground_138_177}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/139d/72e7/b10710514a5fbafa5204031cbc3e8538"
        }}
        style={styles.ImageBackground_138_178}
      />
      <View style={styles.View_138_179} />
      <View style={styles.View_138_265} />
      <View style={styles.View_138_269} />
      <View style={styles.View_138_270} />
      <View style={styles.View_138_271} />
      <View style={styles.View_138_272} />
      <View style={styles.View_138_273} />
      <View style={styles.View_138_274} />
      <View style={styles.View_138_275} />
      <View style={styles.View_138_276} />
      <View style={styles.View_138_277} />
      <View style={styles.View_138_278} />
      <View style={styles.View_138_279} />
      <View style={styles.View_138_280} />
      <View style={styles.View_138_183} />
      <View style={styles.View_138_184} />
      <View style={styles.View_138_186} />
      <View style={styles.View_138_187} />
      <View style={styles.View_138_189} />
      <View style={styles.View_138_190} />
      <View style={styles.View_138_192} />
      <View style={styles.View_138_193} />
      <View style={styles.View_138_195} />
      <View style={styles.View_138_196} />
      <View style={styles.View_138_282} />
      <View style={styles.View_138_198} />
      <View style={styles.View_138_267} />
      <View style={styles.View_138_281} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66f7/305d/cbae76dc9b76ec1dc7a1569689666f54"
        }}
        style={styles.ImageBackground_138_199}
      />
      <View style={styles.View_138_206} />
      <View style={styles.View_138_208} />
      <View style={styles.View_138_268} />
      <View style={styles.View_138_209} />
      <View style={styles.View_138_210} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3860/b97f/676f457c86b526adfb4d03b2c711f7d2"
        }}
        style={styles.ImageBackground_138_185}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3860/b97f/676f457c86b526adfb4d03b2c711f7d2"
        }}
        style={styles.ImageBackground_138_188}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3860/b97f/676f457c86b526adfb4d03b2c711f7d2"
        }}
        style={styles.ImageBackground_138_191}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3860/b97f/676f457c86b526adfb4d03b2c711f7d2"
        }}
        style={styles.ImageBackground_138_194}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3860/b97f/676f457c86b526adfb4d03b2c711f7d2"
        }}
        style={styles.ImageBackground_138_197}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e569/a981/b2a52cc653d35989fd6c6c912e222a25"
        }}
        style={styles.ImageBackground_138_222}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e569/a981/b2a52cc653d35989fd6c6c912e222a25"
        }}
        style={styles.ImageBackground_138_223}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e569/a981/b2a52cc653d35989fd6c6c912e222a25"
        }}
        style={styles.ImageBackground_138_224}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4676/46d6/319e98399100b4cc7532220f1517ae6b"
        }}
        style={styles.ImageBackground_138_230}
      />
      <View style={styles.View_138_226}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1669/9140/28da8c9eaca351510335dab947f12975"
          }}
          style={styles.ImageBackground_138_227}
        />
        <View style={styles.View_138_228}>
          <View style={styles.View_138_229}>
            <View style={styles.View_I138_229_95_154}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd91/299e/7cd844ba2fca27199d87d17596dd79cb"
                }}
                style={styles.ImageBackground_I138_229_95_155}
              />
              <View style={styles.View_I138_229_95_738}>
                <Text style={styles.Text_I138_229_95_738}>Photo</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_138_169: {
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
  View_138_175: {
    width: 219,
    minWidth: 219,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 394,
    top: 97
  },
  Text_138_175: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_176: {
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
  ImageBackground_138_263: {
    width: 130,
    minWidth: 130,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 132,
    top: 111
  },
  ImageBackground_138_177: {
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
  ImageBackground_138_178: {
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
  View_138_179: {
    width: 292,
    minWidth: 292,
    height: 742,
    minHeight: 742,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 292,
    top: 436,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_138_265: {
    width: 660,
    minWidth: 660,
    height: 742,
    minHeight: 742,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 599,
    top: 436,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_138_269: {
    width: 129,
    minWidth: 129,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 647,
    top: 484,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_138_270: {
    width: 129,
    minWidth: 129,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 792,
    top: 484,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_138_271: {
    width: 129,
    minWidth: 129,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 937,
    top: 484,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_138_272: {
    width: 129,
    minWidth: 129,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1082,
    top: 484,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_138_273: {
    width: 129,
    minWidth: 129,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 647,
    top: 652,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_138_274: {
    width: 129,
    minWidth: 129,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 792,
    top: 652,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_138_275: {
    width: 129,
    minWidth: 129,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 937,
    top: 652,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_138_276: {
    width: 129,
    minWidth: 129,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1082,
    top: 652,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_138_277: {
    width: 129,
    minWidth: 129,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 647,
    top: 820,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_138_278: {
    width: 129,
    minWidth: 129,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 792,
    top: 820,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_138_279: {
    width: 129,
    minWidth: 129,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 937,
    top: 820,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_138_280: {
    width: 129,
    minWidth: 129,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1082,
    top: 820,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_138_183: {
    width: 149,
    minWidth: 149,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 387,
    top: 761,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_184: {
    width: 89,
    minWidth: 89,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 387,
    top: 778,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_186: {
    width: 149,
    minWidth: 149,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 387,
    top: 821,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_187: {
    width: 89,
    minWidth: 89,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 387,
    top: 838,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_189: {
    width: 149,
    minWidth: 149,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 387,
    top: 881,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_190: {
    width: 89,
    minWidth: 89,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 387,
    top: 898,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_192: {
    width: 149,
    minWidth: 149,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 387,
    top: 941,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_193: {
    width: 89,
    minWidth: 89,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 387,
    top: 958,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_195: {
    width: 149,
    minWidth: 149,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 387,
    top: 1001,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_196: {
    width: 89,
    minWidth: 89,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 387,
    top: 1018,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_282: {
    width: 55,
    minWidth: 55,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 292,
    top: 303,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_138_198: {
    width: 96,
    minWidth: 96,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 292,
    top: 399,
    backgroundColor: "rgba(32, 91, 246, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_138_267: {
    width: 96,
    minWidth: 96,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 404,
    top: 399,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_138_281: {
    width: 96,
    minWidth: 96,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1163,
    top: 399,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  ImageBackground_138_199: {
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
  View_138_206: {
    width: 460,
    minWidth: 460,
    height: 12,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 546,
    top: 309,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_138_208: {
    width: 177,
    minWidth: 177,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 340,
    top: 636,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_268: {
    width: 177,
    minWidth: 177,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 340,
    top: 484,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_209: {
    width: 162.81166076660156,
    minWidth: 162.81166076660156,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 340,
    top: 660,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_210: {
    width: 96.35871887207031,
    minWidth: 96.35871887207031,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 340,
    top: 684,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_138_185: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 340,
    top: 756
  },
  ImageBackground_138_188: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 340,
    top: 816
  },
  ImageBackground_138_191: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 340,
    top: 876
  },
  ImageBackground_138_194: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 340,
    top: 936
  },
  ImageBackground_138_197: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 340,
    top: 996
  },
  ImageBackground_138_222: {
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
  ImageBackground_138_223: {
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
  ImageBackground_138_224: {
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
  ImageBackground_138_230: {
    width: 80,
    minWidth: 80,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 340,
    top: 524
  },
  View_138_226: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1235,
    top: 304
  },
  ImageBackground_138_227: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_138_228: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_138_229: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I138_229_95_154: {
    flexGrow: 1,
    width: 124,
    height: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -50,
    top: -10
  },
  ImageBackground_I138_229_95_155: {
    width: 24,
    height: 24,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50,
    resizeMode: "cover"
  },
  View_I138_229_95_738: {
    width: 124,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I138_229_95_738: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5.820000171661377,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
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

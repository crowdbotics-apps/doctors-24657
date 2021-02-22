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
        style={styles.ImageBackground_138_1}
      />
      <View style={styles.View_138_77}>
        <Text style={styles.Text_138_77}>
          Profile photo 400x400 Cover 1584x396
        </Text>
      </View>
      <View style={styles.View_138_7} />
      <View style={styles.View_138_94}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a531/b25e/1ad036c1634f5a55633cdc881ece4238"
          }}
          style={styles.ImageBackground_172_316}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f59/1ac4/2fbd68a435951fba3e36ecf60ceefe29"
          }}
          style={styles.ImageBackground_138_96}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a5e/af7c/a4c613674b97e21d0bea40a12ef3dcf9"
          }}
          style={styles.ImageBackground_138_97}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d15/4d02/7b3fa877d2849952b2ef5c61c9f0932c"
        }}
        style={styles.ImageBackground_138_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/139d/72e7/b10710514a5fbafa5204031cbc3e8538"
        }}
        style={styles.ImageBackground_138_9}
      />
      <View style={styles.View_138_10} />
      <View style={styles.View_138_162} />
      <View style={styles.View_138_167} />
      <View style={styles.View_138_132} />
      <View style={styles.View_138_147} />
      <View style={styles.View_138_148} />
      <View style={styles.View_138_150} />
      <View style={styles.View_138_151} />
      <View style={styles.View_138_153} />
      <View style={styles.View_138_154} />
      <View style={styles.View_138_156} />
      <View style={styles.View_138_157} />
      <View style={styles.View_138_159} />
      <View style={styles.View_138_160} />
      <View style={styles.View_138_11} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66f7/305d/cbae76dc9b76ec1dc7a1569689666f54"
        }}
        style={styles.ImageBackground_138_12}
      />
      <View style={styles.View_138_15} />
      <View style={styles.View_138_17} />
      <View style={styles.View_138_18} />
      <View style={styles.View_138_19} />
      <View style={styles.View_138_164} />
      <View style={styles.View_138_165} />
      <View style={styles.View_138_144} />
      <View style={styles.View_138_145} />
      <View style={styles.View_138_146} />
      <View style={styles.View_138_140} />
      <View style={styles.View_138_141} />
      <View style={styles.View_138_142} />
      <View style={styles.View_138_25} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2472/cdc4/5e5f3b515a4e6db1681178882bd49dc1"
        }}
        style={styles.ImageBackground_138_133}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2472/cdc4/5e5f3b515a4e6db1681178882bd49dc1"
        }}
        style={styles.ImageBackground_138_134}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2472/cdc4/5e5f3b515a4e6db1681178882bd49dc1"
        }}
        style={styles.ImageBackground_138_135}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2472/cdc4/5e5f3b515a4e6db1681178882bd49dc1"
        }}
        style={styles.ImageBackground_138_136}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2472/cdc4/5e5f3b515a4e6db1681178882bd49dc1"
        }}
        style={styles.ImageBackground_138_137}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2472/cdc4/5e5f3b515a4e6db1681178882bd49dc1"
        }}
        style={styles.ImageBackground_138_138}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b163/9863/d687720eec75abc2bab3932f8059d831"
        }}
        style={styles.ImageBackground_138_22}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b163/9863/d687720eec75abc2bab3932f8059d831"
        }}
        style={styles.ImageBackground_138_23}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b163/9863/d687720eec75abc2bab3932f8059d831"
        }}
        style={styles.ImageBackground_138_24}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3860/b97f/676f457c86b526adfb4d03b2c711f7d2"
        }}
        style={styles.ImageBackground_138_149}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3860/b97f/676f457c86b526adfb4d03b2c711f7d2"
        }}
        style={styles.ImageBackground_138_152}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3860/b97f/676f457c86b526adfb4d03b2c711f7d2"
        }}
        style={styles.ImageBackground_138_155}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3860/b97f/676f457c86b526adfb4d03b2c711f7d2"
        }}
        style={styles.ImageBackground_138_158}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3860/b97f/676f457c86b526adfb4d03b2c711f7d2"
        }}
        style={styles.ImageBackground_138_161}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8172/a5be/ed3285e84ea90371aeb5151e793e225e"
        }}
        style={styles.ImageBackground_138_13}
      />
      <View style={styles.View_138_40}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1669/9140/28da8c9eaca351510335dab947f12975"
          }}
          style={styles.ImageBackground_138_41}
        />
        <View style={styles.View_138_42}>
          <View style={styles.View_138_43}>
            <View style={styles.View_I138_43_95_154}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd91/299e/7cd844ba2fca27199d87d17596dd79cb"
                }}
                style={styles.ImageBackground_I138_43_95_155}
              />
              <View style={styles.View_I138_43_95_738}>
                <Text style={styles.Text_I138_43_95_738}>Photo</Text>
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
  ImageBackground_138_1: {
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
  View_138_77: {
    width: 219,
    minWidth: 219,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 394,
    top: 97
  },
  Text_138_77: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_7: {
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
  View_138_94: {
    width: 151.0001220703125,
    minWidth: 151.0001220703125,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 132,
    top: 105
  },
  ImageBackground_172_316: {
    width: 39.7442626953125,
    minWidth: 39.7442626953125,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 111.255859375,
    top: 0
  },
  ImageBackground_138_96: {
    width: 68.14867401123047,
    minWidth: 68.14867401123047,
    height: 26.768964767456055,
    minHeight: 26.768964767456055,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 6.7373046875
  },
  ImageBackground_138_97: {
    width: 39.342411041259766,
    minWidth: 39.342411041259766,
    height: 26.64777946472168,
    minHeight: 26.64777946472168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66.03466796875,
    top: 7.2822265625
  },
  ImageBackground_138_8: {
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
  ImageBackground_138_9: {
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
  View_138_10: {
    width: 792,
    minWidth: 792,
    height: 537,
    minHeight: 537,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 244,
    top: 404,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_138_162: {
    width: 792,
    minWidth: 792,
    height: 271,
    minHeight: 271,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 244,
    top: 965,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_138_167: {
    width: 669,
    minWidth: 669,
    height: 94,
    minHeight: 94,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 306,
    top: 1089,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_138_132: {
    width: 239,
    minWidth: 239,
    height: 271,
    minHeight: 271,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1068,
    top: 492,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_138_147: {
    width: 159,
    minWidth: 159,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1115,
    top: 800,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_148: {
    width: 99,
    minWidth: 99,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1115,
    top: 817,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_150: {
    width: 159,
    minWidth: 159,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1115,
    top: 860,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_151: {
    width: 99,
    minWidth: 99,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1115,
    top: 877,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_153: {
    width: 159,
    minWidth: 159,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1115,
    top: 920,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_154: {
    width: 99,
    minWidth: 99,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1115,
    top: 937,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_156: {
    width: 159,
    minWidth: 159,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1115,
    top: 980,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_157: {
    width: 99,
    minWidth: 99,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1115,
    top: 997,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_159: {
    width: 159,
    minWidth: 159,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1115,
    top: 1040,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_160: {
    width: 99,
    minWidth: 99,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1115,
    top: 1057,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_11: {
    width: 176,
    minWidth: 176,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 306,
    top: 827,
    backgroundColor: "rgba(50, 118, 176, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_138_12: {
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
  View_138_15: {
    width: 266,
    minWidth: 266,
    height: 31,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 244,
    top: 300,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_138_17: {
    width: 177,
    minWidth: 177,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 305,
    top: 731,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_18: {
    width: 162.81166076660156,
    minWidth: 162.81166076660156,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 305,
    top: 755,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_19: {
    width: 96.35871887207031,
    minWidth: 96.35871887207031,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 305.000244140625,
    top: 779,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_164: {
    width: 177,
    minWidth: 177,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 305,
    top: 1011,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_165: {
    width: 162.81166076660156,
    minWidth: 162.81166076660156,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 305,
    top: 1035,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_144: {
    width: 177,
    minWidth: 177,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 798,
    top: 731,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_145: {
    width: 162.81166076660156,
    minWidth: 162.81166076660156,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 798,
    top: 755,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_146: {
    width: 96.35871887207031,
    minWidth: 96.35871887207031,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 798.000244140625,
    top: 779,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_140: {
    width: 177,
    minWidth: 177,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1068,
    top: 404,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_141: {
    width: 162.81166076660156,
    minWidth: 162.81166076660156,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1068,
    top: 428,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_142: {
    width: 96.35871887207031,
    minWidth: 96.35871887207031,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1068,
    top: 452,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_138_25: {
    width: 792,
    minWidth: 792,
    height: 198,
    minHeight: 198,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 244,
    top: 404,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  ImageBackground_138_133: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 574,
    top: 304
  },
  ImageBackground_138_134: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 614,
    top: 304
  },
  ImageBackground_138_135: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 654,
    top: 304
  },
  ImageBackground_138_136: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 694,
    top: 304
  },
  ImageBackground_138_137: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 734,
    top: 304
  },
  ImageBackground_138_138: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 774,
    top: 304
  },
  ImageBackground_138_22: {
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
  ImageBackground_138_23: {
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
  ImageBackground_138_24: {
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
  ImageBackground_138_149: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1068,
    top: 795
  },
  ImageBackground_138_152: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1068,
    top: 855
  },
  ImageBackground_138_155: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1068,
    top: 915
  },
  ImageBackground_138_158: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1068,
    top: 975
  },
  ImageBackground_138_161: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1068,
    top: 1035
  },
  ImageBackground_138_13: {
    width: 200,
    minWidth: 200,
    height: 200,
    minHeight: 200,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 304,
    top: 483
  },
  View_138_40: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1283,
    top: 304
  },
  ImageBackground_138_41: {
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
  View_138_42: {
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
  View_138_43: {
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
  View_I138_43_95_154: {
    flexGrow: 1,
    width: 124,
    height: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -50,
    top: -10
  },
  ImageBackground_I138_43_95_155: {
    width: 24,
    height: 24,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50,
    resizeMode: "cover"
  },
  View_I138_43_95_738: {
    width: 124,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I138_43_95_738: {
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

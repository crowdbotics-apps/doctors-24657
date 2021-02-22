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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df0a/f19d/81239e45362f831ff3de0fc9acc83fb0"
        }}
        style={styles.ImageBackground_140_3}
      />
      <View style={styles.View_140_113}>
        <Text style={styles.Text_140_113}>
          Profile photo 400x400 Cover 1900x225
        </Text>
      </View>
      <View style={styles.View_140_7} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a43/f580/ea14530d2b9d80ffad3f7dc462f4a1e1"
        }}
        style={styles.ImageBackground_140_89}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9e3/7af1/54bee09e840586a89cf9a5b31fa03036"
        }}
        style={styles.ImageBackground_140_8}
      />
      <View style={styles.View_140_11} />
      <View style={styles.View_140_135} />
      <View style={styles.View_140_142} />
      <View style={styles.View_140_149} />
      <View style={styles.View_140_156} />
      <View style={styles.View_140_163} />
      <View style={styles.View_140_170} />
      <View style={styles.View_140_177} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4095/6767/d28f9aaf280ed8941fa9c17eb581f668"
        }}
        style={styles.ImageBackground_140_9}
      />
      <View style={styles.View_140_132} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ab0/3c60/f7282b9544b46cd883ca0f13a96101f7"
        }}
        style={styles.ImageBackground_140_43}
      />
      <View style={styles.View_140_44} />
      <View style={styles.View_140_46} />
      <View style={styles.View_140_48} />
      <View style={styles.View_140_49} />
      <View style={styles.View_140_138} />
      <View style={styles.View_140_139} />
      <View style={styles.View_140_140} />
      <View style={styles.View_140_145} />
      <View style={styles.View_140_146} />
      <View style={styles.View_140_147} />
      <View style={styles.View_140_152} />
      <View style={styles.View_140_153} />
      <View style={styles.View_140_154} />
      <View style={styles.View_140_159} />
      <View style={styles.View_140_160} />
      <View style={styles.View_140_161} />
      <View style={styles.View_140_166} />
      <View style={styles.View_140_167} />
      <View style={styles.View_140_168} />
      <View style={styles.View_140_173} />
      <View style={styles.View_140_174} />
      <View style={styles.View_140_175} />
      <View style={styles.View_140_180} />
      <View style={styles.View_140_181} />
      <View style={styles.View_140_182} />
      <View style={styles.View_140_51} />
      <View style={styles.View_140_42} />
      <View style={styles.View_140_12} />
      <View style={styles.View_140_136} />
      <View style={styles.View_140_143} />
      <View style={styles.View_140_150} />
      <View style={styles.View_140_157} />
      <View style={styles.View_140_164} />
      <View style={styles.View_140_171} />
      <View style={styles.View_140_178} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4538/90aa/e5cb1faf58e445c3d1be504ea2cee1d3"
        }}
        style={styles.ImageBackground_140_50}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4538/90aa/e5cb1faf58e445c3d1be504ea2cee1d3"
        }}
        style={styles.ImageBackground_140_52}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4538/90aa/e5cb1faf58e445c3d1be504ea2cee1d3"
        }}
        style={styles.ImageBackground_140_53}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a603/a068/f9b8b7d133fad825f0540ac01f3a9b47"
        }}
        style={styles.ImageBackground_140_58}
      />
      <View style={styles.View_140_54}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1669/9140/28da8c9eaca351510335dab947f12975"
          }}
          style={styles.ImageBackground_140_55}
        />
        <View style={styles.View_140_56}>
          <View style={styles.View_140_57}>
            <View style={styles.View_I140_57_95_154}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd91/299e/7cd844ba2fca27199d87d17596dd79cb"
                }}
                style={styles.ImageBackground_I140_57_95_155}
              />
              <View style={styles.View_I140_57_95_738}>
                <Text style={styles.Text_I140_57_95_738}>Photo</Text>
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
  ImageBackground_140_3: {
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
  View_140_113: {
    width: 219,
    minWidth: 219,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 394,
    top: 97
  },
  Text_140_113: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_7: {
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
  ImageBackground_140_89: {
    width: 129.99981689453125,
    minWidth: 129.99981689453125,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 132,
    top: 113
  },
  ImageBackground_140_8: {
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
  View_140_11: {
    width: 264,
    minWidth: 264,
    height: 256,
    minHeight: 256,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 212,
    top: 549,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_140_135: {
    width: 264,
    minWidth: 264,
    height: 256,
    minHeight: 256,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 500,
    top: 549,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_140_142: {
    width: 264,
    minWidth: 264,
    height: 256,
    minHeight: 256,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 788,
    top: 549,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_140_149: {
    width: 264,
    minWidth: 264,
    height: 256,
    minHeight: 256,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1076,
    top: 549,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_140_156: {
    width: 264,
    minWidth: 264,
    height: 256,
    minHeight: 256,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 212,
    top: 829,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_140_163: {
    width: 264,
    minWidth: 264,
    height: 256,
    minHeight: 256,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 500,
    top: 829,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_140_170: {
    width: 264,
    minWidth: 264,
    height: 256,
    minHeight: 256,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 788,
    top: 829,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_140_177: {
    width: 264,
    minWidth: 264,
    height: 256,
    minHeight: 256,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1076,
    top: 829,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_140_9: {
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
  View_140_132: {
    width: 1267,
    minWidth: 1267,
    height: 150,
    minHeight: 150,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142,
    top: 343,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  ImageBackground_140_43: {
    width: 1267,
    minWidth: 1267,
    height: 55,
    minHeight: 55,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142,
    top: 288
  },
  View_140_44: {
    width: 118,
    minWidth: 118,
    height: 12,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 717,
    top: 309,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_140_46: {
    width: 177,
    minWidth: 177,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 236,
    top: 725,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_140_48: {
    width: 162.81166076660156,
    minWidth: 162.81166076660156,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 236,
    top: 749,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_140_49: {
    width: 96.35871887207031,
    minWidth: 96.35871887207031,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 236,
    top: 773,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_140_138: {
    width: 177,
    minWidth: 177,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 524,
    top: 725,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_140_139: {
    width: 162.81166076660156,
    minWidth: 162.81166076660156,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 524,
    top: 749,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_140_140: {
    width: 96.35871887207031,
    minWidth: 96.35871887207031,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 524,
    top: 773,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_140_145: {
    width: 177,
    minWidth: 177,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 812,
    top: 725,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_140_146: {
    width: 162.81166076660156,
    minWidth: 162.81166076660156,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 812,
    top: 749,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_140_147: {
    width: 96.35871887207031,
    minWidth: 96.35871887207031,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 812,
    top: 773,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_140_152: {
    width: 177,
    minWidth: 177,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1100,
    top: 725,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_140_153: {
    width: 162.81166076660156,
    minWidth: 162.81166076660156,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1100,
    top: 749,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_140_154: {
    width: 96.35871887207031,
    minWidth: 96.35871887207031,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1100,
    top: 773,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_140_159: {
    width: 177,
    minWidth: 177,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 236,
    top: 1005,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_140_160: {
    width: 162.81166076660156,
    minWidth: 162.81166076660156,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 236,
    top: 1029,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_140_161: {
    width: 96.35871887207031,
    minWidth: 96.35871887207031,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 236,
    top: 1053,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_140_166: {
    width: 177,
    minWidth: 177,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 524,
    top: 1005,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_140_167: {
    width: 162.81166076660156,
    minWidth: 162.81166076660156,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 524,
    top: 1029,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_140_168: {
    width: 96.35871887207031,
    minWidth: 96.35871887207031,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 524,
    top: 1053,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_140_173: {
    width: 177,
    minWidth: 177,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 812,
    top: 1005,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_140_174: {
    width: 162.81166076660156,
    minWidth: 162.81166076660156,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 812,
    top: 1029,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_140_175: {
    width: 96.35871887207031,
    minWidth: 96.35871887207031,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 812,
    top: 1053,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_140_180: {
    width: 177,
    minWidth: 177,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1100,
    top: 1005,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_140_181: {
    width: 162.81166076660156,
    minWidth: 162.81166076660156,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1100,
    top: 1029,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_140_182: {
    width: 96.35871887207031,
    minWidth: 96.35871887207031,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1100,
    top: 1053,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_140_51: {
    width: 55,
    minWidth: 55,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 158,
    top: 304,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_140_42: {
    width: 96,
    minWidth: 96,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1297,
    top: 304,
    backgroundColor: "rgba(109, 194, 182, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_140_12: {
    width: 264,
    minWidth: 264,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 212,
    top: 549,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_140_136: {
    width: 264,
    minWidth: 264,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 500,
    top: 549,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_140_143: {
    width: 264,
    minWidth: 264,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 788,
    top: 549,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_140_150: {
    width: 264,
    minWidth: 264,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1076,
    top: 549,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_140_157: {
    width: 264,
    minWidth: 264,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 212,
    top: 829,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_140_164: {
    width: 264,
    minWidth: 264,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 500,
    top: 829,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_140_171: {
    width: 264,
    minWidth: 264,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 788,
    top: 829,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_140_178: {
    width: 264,
    minWidth: 264,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1076,
    top: 829,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  ImageBackground_140_50: {
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
  ImageBackground_140_52: {
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
  ImageBackground_140_53: {
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
  ImageBackground_140_58: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 222,
    top: 393
  },
  View_140_54: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1257,
    top: 304
  },
  ImageBackground_140_55: {
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
  View_140_56: {
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
  View_140_57: {
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
  View_I140_57_95_154: {
    flexGrow: 1,
    width: 124,
    height: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -50,
    top: -10
  },
  ImageBackground_I140_57_95_155: {
    width: 24,
    height: 24,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50,
    resizeMode: "cover"
  },
  View_I140_57_95_738: {
    width: 124,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I140_57_95_738: {
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

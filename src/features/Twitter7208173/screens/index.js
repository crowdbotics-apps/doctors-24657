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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51ca/129e/9061588d055dffdc71e5c3cd4e998b19"
        }}
        style={styles.ImageBackground_92_319}
      />
      <View style={styles.View_92_321}>
        <Text style={styles.Text_92_321}>
          Profile photo 400x400 Cover 1287x489
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c8e/032a/c19ce0cf8b76c8ea7b220a7e4f8d07d2"
        }}
        style={styles.ImageBackground_95_7}
      />
      <View style={styles.View_92_320}>
        <Text style={styles.Text_92_320}>Twitter</Text>
      </View>
      <View style={styles.View_95_11} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d15/4d02/7b3fa877d2849952b2ef5c61c9f0932c"
        }}
        style={styles.ImageBackground_92_324}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/139d/72e7/b10710514a5fbafa5204031cbc3e8538"
        }}
        style={styles.ImageBackground_92_325}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a23/2082/39284acc2fdf4f43f45f9b707abae1e6"
        }}
        style={styles.ImageBackground_92_326}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9d2/79d9/1c8a3f0078fc9e9c95487c7d4dee1503"
        }}
        style={styles.ImageBackground_92_327}
      />
      <View style={styles.View_92_329} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2604/d672/99a71fb034a0d9db9f5f5ddebdfa00a6"
        }}
        style={styles.ImageBackground_92_332}
      />
      <View style={styles.View_92_334} />
      <View style={styles.View_92_335} />
      <View style={styles.View_92_336} />
      <View style={styles.View_92_341} />
      <View style={styles.View_92_342} />
      <View style={styles.View_92_343} />
      <View style={styles.View_92_344} />
      <View style={styles.View_92_345} />
      <View style={styles.View_92_346} />
      <View style={styles.View_92_347} />
      <View style={styles.View_92_348} />
      <View style={styles.View_92_349} />
      <View style={styles.View_92_350} />
      <View style={styles.View_93_15} />
      <View style={styles.View_93_16} />
      <View style={styles.View_93_18} />
      <View style={styles.View_93_19} />
      <View style={styles.View_92_352} />
      <View style={styles.View_92_353} />
      <View style={styles.View_93_5} />
      <View style={styles.View_93_6} />
      <View style={styles.View_93_8} />
      <View style={styles.View_93_9} />
      <View style={styles.View_93_11} />
      <View style={styles.View_93_12} />
      <View style={styles.View_92_363} />
      <View style={styles.View_92_364} />
      <View style={styles.View_93_14} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6b9/0060/5c180f2e3289835610c6bc5024ebe062"
        }}
        style={styles.ImageBackground_92_365}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6b9/0060/5c180f2e3289835610c6bc5024ebe062"
        }}
        style={styles.ImageBackground_92_366}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6b9/0060/5c180f2e3289835610c6bc5024ebe062"
        }}
        style={styles.ImageBackground_92_367}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8172/a5be/ed3285e84ea90371aeb5151e793e225e"
        }}
        style={styles.ImageBackground_93_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3860/b97f/676f457c86b526adfb4d03b2c711f7d2"
        }}
        style={styles.ImageBackground_92_351}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3860/b97f/676f457c86b526adfb4d03b2c711f7d2"
        }}
        style={styles.ImageBackground_93_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3860/b97f/676f457c86b526adfb4d03b2c711f7d2"
        }}
        style={styles.ImageBackground_93_20}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3860/b97f/676f457c86b526adfb4d03b2c711f7d2"
        }}
        style={styles.ImageBackground_92_354}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3860/b97f/676f457c86b526adfb4d03b2c711f7d2"
        }}
        style={styles.ImageBackground_93_7}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3860/b97f/676f457c86b526adfb4d03b2c711f7d2"
        }}
        style={styles.ImageBackground_93_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3860/b97f/676f457c86b526adfb4d03b2c711f7d2"
        }}
        style={styles.ImageBackground_93_13}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_92_319: {
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
  View_92_321: {
    width: 219,
    minWidth: 219,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 394,
    top: 97
  },
  Text_92_321: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_95_7: {
    width: 45,
    minWidth: 45,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 101
  },
  View_92_320: {
    width: 179,
    minWidth: 179,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 201,
    top: 98
  },
  Text_92_320: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30.815223693847656,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_11: {
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
  ImageBackground_92_324: {
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
  ImageBackground_92_325: {
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
  ImageBackground_92_326: {
    width: 1287,
    minWidth: 1287,
    height: 55,
    minHeight: 55,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 132,
    top: 777
  },
  ImageBackground_92_327: {
    width: 1287,
    minWidth: 1287,
    height: 489,
    minHeight: 489,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 132,
    top: 288
  },
  View_92_329: {
    width: 520,
    minWidth: 520,
    height: 393,
    minHeight: 393,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 455,
    top: 844,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_92_332: {
    width: 288,
    minWidth: 288,
    height: 304,
    minHeight: 304,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 987,
    top: 844
  },
  View_92_334: {
    width: 110,
    minWidth: 110,
    height: 110,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 526,
    top: 920,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_92_335: {
    width: 280,
    minWidth: 280,
    height: 31,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 455,
    top: 789,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_92_336: {
    width: 93,
    minWidth: 93,
    height: 31,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1182,
    top: 789,
    backgroundColor: "rgba(45, 170, 225, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_92_341: {
    width: 209,
    minWidth: 209,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 526,
    top: 873,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_92_342: {
    width: 169,
    minWidth: 169,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 526,
    top: 890,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_92_343: {
    width: 149,
    minWidth: 149,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 266,
    top: 894,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_92_344: {
    width: 109,
    minWidth: 109,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 266,
    top: 918,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_92_345: {
    width: 119,
    minWidth: 119,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 266,
    top: 942,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_92_346: {
    width: 129,
    minWidth: 129,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 266,
    top: 966,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_92_347: {
    width: 149,
    minWidth: 149,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 266,
    top: 990,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_92_348: {
    width: 109,
    minWidth: 109,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 266,
    top: 1014,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_92_349: {
    width: 119,
    minWidth: 119,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 266,
    top: 1038,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_92_350: {
    width: 109,
    minWidth: 109,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 266,
    top: 1062,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_93_15: {
    width: 89,
    minWidth: 89,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 526,
    top: 1067,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_93_16: {
    width: 139,
    minWidth: 139,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 526,
    top: 1084,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_93_18: {
    width: 132,
    minWidth: 132,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 526,
    top: 1119,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_93_19: {
    width: 169,
    minWidth: 169,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 526,
    top: 1136,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_92_352: {
    width: 159,
    minWidth: 159,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1058,
    top: 873,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_92_353: {
    width: 99,
    minWidth: 99,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1058,
    top: 890,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_93_5: {
    width: 159,
    minWidth: 159,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1058,
    top: 925,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_93_6: {
    width: 99,
    minWidth: 99,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1058,
    top: 942,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_93_8: {
    width: 159,
    minWidth: 159,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1058,
    top: 977,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_93_9: {
    width: 99,
    minWidth: 99,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1058,
    top: 994,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_93_11: {
    width: 159,
    minWidth: 159,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1058,
    top: 1029,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_93_12: {
    width: 99,
    minWidth: 99,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1058,
    top: 1046,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_92_363: {
    width: 209,
    minWidth: 209,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 658,
    top: 920,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_92_364: {
    width: 169,
    minWidth: 169,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 658,
    top: 936,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_93_14: {
    width: 109,
    minWidth: 109,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 658,
    top: 952,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_92_365: {
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
  ImageBackground_92_366: {
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
  ImageBackground_92_367: {
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
  ImageBackground_93_2: {
    width: 200,
    minWidth: 200,
    height: 200,
    minHeight: 200,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 243,
    top: 665
  },
  ImageBackground_92_351: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 479,
    top: 868
  },
  ImageBackground_93_17: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 479,
    top: 1062
  },
  ImageBackground_93_20: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 479,
    top: 1114
  },
  ImageBackground_92_354: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1011,
    top: 868
  },
  ImageBackground_93_7: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1011,
    top: 920
  },
  ImageBackground_93_10: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1011,
    top: 972
  },
  ImageBackground_93_13: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1011,
    top: 1024
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

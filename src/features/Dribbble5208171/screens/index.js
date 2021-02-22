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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b10/168b/52dbeecb22238a96550d4119a71ca159"
        }}
        style={styles.ImageBackground_95_893}
      />
      <View style={styles.View_175_5}>
        <Text style={styles.Text_175_5}>Profile photo 160x160</Text>
      </View>
      <View style={styles.View_95_900} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d10/c117/5c9e5cb695ca5d5f9b79b0c018657118"
        }}
        style={styles.ImageBackground_95_945}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d15/4d02/7b3fa877d2849952b2ef5c61c9f0932c"
        }}
        style={styles.ImageBackground_95_901}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/139d/72e7/b10710514a5fbafa5204031cbc3e8538"
        }}
        style={styles.ImageBackground_95_902}
      />
      <View style={styles.View_133_1} />
      <View style={styles.View_133_14} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66f7/305d/cbae76dc9b76ec1dc7a1569689666f54"
        }}
        style={styles.ImageBackground_95_903}
      />
      <View style={styles.View_95_905} />
      <View style={styles.View_95_906} />
      <View style={styles.View_95_908} />
      <View style={styles.View_95_909} />
      <View style={styles.View_95_910} />
      <View style={styles.View_95_911} />
      <View style={styles.View_95_912} />
      <View style={styles.View_133_2} />
      <View style={styles.View_133_3} />
      <View style={styles.View_133_4} />
      <View style={styles.View_133_5} />
      <View style={styles.View_133_6} />
      <View style={styles.View_133_7} />
      <View style={styles.View_133_8} />
      <View style={styles.View_133_9} />
      <View style={styles.View_133_10} />
      <View style={styles.View_133_11} />
      <View style={styles.View_133_12} />
      <View style={styles.View_133_13} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38b2/2df5/7ea5ccc72f85b3271033534e12bc3249"
        }}
        style={styles.ImageBackground_95_913}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38b2/2df5/7ea5ccc72f85b3271033534e12bc3249"
        }}
        style={styles.ImageBackground_95_914}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38b2/2df5/7ea5ccc72f85b3271033534e12bc3249"
        }}
        style={styles.ImageBackground_95_915}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2472/cdc4/5e5f3b515a4e6db1681178882bd49dc1"
        }}
        style={styles.ImageBackground_95_922}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2472/cdc4/5e5f3b515a4e6db1681178882bd49dc1"
        }}
        style={styles.ImageBackground_95_923}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2472/cdc4/5e5f3b515a4e6db1681178882bd49dc1"
        }}
        style={styles.ImageBackground_95_924}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4676/46d6/319e98399100b4cc7532220f1517ae6b"
        }}
        style={styles.ImageBackground_95_904}
      />
      <View style={styles.View_98_2}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1669/9140/28da8c9eaca351510335dab947f12975"
          }}
          style={styles.ImageBackground_98_3}
        />
        <View style={styles.View_98_4}>
          <View style={styles.View_98_5}>
            <View style={styles.View_I98_5_95_154}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd91/299e/7cd844ba2fca27199d87d17596dd79cb"
                }}
                style={styles.ImageBackground_I98_5_95_155}
              />
              <View style={styles.View_I98_5_95_738}>
                <Text style={styles.Text_I98_5_95_738}>Photo</Text>
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
  ImageBackground_95_893: {
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
  View_175_5: {
    width: 219,
    minWidth: 219,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 394,
    top: 97
  },
  Text_175_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_900: {
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
  ImageBackground_95_945: {
    width: 157,
    minWidth: 157,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 132,
    top: 107
  },
  ImageBackground_95_901: {
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
  ImageBackground_95_902: {
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
  View_133_1: {
    width: 225,
    minWidth: 225,
    height: 573,
    minHeight: 573,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 276,
    top: 386,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_133_14: {
    width: 93,
    minWidth: 93,
    height: 31,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 342,
    top: 698,
    backgroundColor: "rgba(237, 101, 152, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_95_903: {
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
  View_95_905: {
    width: 173,
    minWidth: 173,
    height: 31,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1233,
    top: 300,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_95_906: {
    width: 266,
    minWidth: 266,
    height: 31,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 150,
    top: 300,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_95_908: {
    width: 177,
    minWidth: 177,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 300,
    top: 554,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_95_909: {
    width: 162.81166076660156,
    minWidth: 162.81166076660156,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 307.16204833984375,
    top: 578,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_95_910: {
    width: 166.3587188720703,
    minWidth: 166.3587188720703,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 305.1153259277344,
    top: 602,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_95_911: {
    width: 95.4168472290039,
    minWidth: 95.4168472290039,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 340.925537109375,
    top: 626,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_95_912: {
    width: 98.96395874023438,
    minWidth: 98.96395874023438,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 338.87884521484375,
    top: 650,
    backgroundColor: "rgba(224, 229, 241, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_133_2: {
    width: 234,
    minWidth: 234,
    height: 176,
    minHeight: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 525,
    top: 386,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_133_3: {
    width: 234,
    minWidth: 234,
    height: 176,
    minHeight: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 783,
    top: 386,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_133_4: {
    width: 234,
    minWidth: 234,
    height: 176,
    minHeight: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1041,
    top: 386,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_133_5: {
    width: 234,
    minWidth: 234,
    height: 176,
    minHeight: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 525,
    top: 586,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_133_6: {
    width: 234,
    minWidth: 234,
    height: 176,
    minHeight: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 783,
    top: 586,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_133_7: {
    width: 234,
    minWidth: 234,
    height: 176,
    minHeight: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1041,
    top: 586,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_133_8: {
    width: 234,
    minWidth: 234,
    height: 176,
    minHeight: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 525,
    top: 786,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_133_9: {
    width: 234,
    minWidth: 234,
    height: 176,
    minHeight: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 783,
    top: 786,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_133_10: {
    width: 234,
    minWidth: 234,
    height: 176,
    minHeight: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1041,
    top: 786,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_133_11: {
    width: 234,
    minWidth: 234,
    height: 176,
    minHeight: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 525,
    top: 986,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_133_12: {
    width: 234,
    minWidth: 234,
    height: 176,
    minHeight: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 783,
    top: 986,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  View_133_13: {
    width: 234,
    minWidth: 234,
    height: 176,
    minHeight: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1041,
    top: 986,
    backgroundColor: "rgba(224, 229, 241, 1)"
  },
  ImageBackground_95_913: {
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
  ImageBackground_95_914: {
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
  ImageBackground_95_915: {
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
  ImageBackground_95_922: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1184,
    top: 304
  },
  ImageBackground_95_923: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1148,
    top: 304
  },
  ImageBackground_95_924: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1112,
    top: 304
  },
  ImageBackground_95_904: {
    width: 80,
    minWidth: 80,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 349,
    top: 439
  },
  View_98_2: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1076,
    top: 304
  },
  ImageBackground_98_3: {
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
  View_98_4: {
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
  View_98_5: {
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
  View_I98_5_95_154: {
    flexGrow: 1,
    width: 124,
    height: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -50,
    top: -10
  },
  ImageBackground_I98_5_95_155: {
    width: 24,
    height: 24,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50,
    resizeMode: "cover"
  },
  View_I98_5_95_738: {
    width: 124,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I98_5_95_738: {
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

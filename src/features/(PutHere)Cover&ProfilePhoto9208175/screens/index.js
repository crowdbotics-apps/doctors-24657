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
      <View style={styles.View_94_39}>
        <View style={styles.View_94_0} />
        <View style={styles.View_94_1}>
          <Text style={styles.Text_94_1}>Drag photo and cover here</Text>
        </View>
        <View style={styles.View_94_4} />
      </View>
      <View style={styles.View_30_103}>
        <View style={styles.View_95_154}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7734/bbce/0499cb1809bdee7a822f69d2cd43ce7c"
            }}
            style={styles.ImageBackground_95_155}
          />
          <View style={styles.View_95_738}>
            <Text style={styles.Text_95_738}>Photo</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_90_13}>
        <View style={styles.View_95_127}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e948/698d/7e9e6fffe7c6e73e5058f27346cda358"
            }}
            style={styles.ImageBackground_95_37}
          />
          <View style={styles.View_95_101}>
            <View style={styles.View_95_102}>
              <Text style={styles.Text_95_102}>Your cover</Text>
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
  View_94_39: {
    width: 1327,
    minWidth: 1327,
    height: 814,
    minHeight: 814,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: 0
  },
  View_94_0: {
    width: 1327,
    minWidth: 1327,
    height: 814,
    minHeight: 814,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_94_1: {
    width: 336,
    minWidth: 336,
    minHeight: 85,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 496,
    top: 144
  },
  Text_94_1: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  View_94_4: {
    width: 1038,
    minWidth: 1038,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 145,
    top: 309,
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_30_103: {
    width: 170,
    minWidth: 170,
    height: 170,
    minHeight: 170,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 144,
    top: 358,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_95_154: {
    flexGrow: 1,
    width: 170,
    height: 170,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_95_155: {
    width: 170,
    height: 170,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    resizeMode: "cover"
  },
  View_95_738: {
    width: 124,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 63
  },
  Text_95_738: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_90_13: {
    width: 820,
    minWidth: 820,
    height: 312,
    minHeight: 312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 362,
    top: 358,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_95_127: {
    flexGrow: 1,
    width: 820,
    height: 312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_95_37: {
    width: 820,
    height: 312,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_95_101: {
    width: 333,
    minWidth: 333,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 243,
    top: 131
  },
  View_95_102: {
    width: 333,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_95_102: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 814 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

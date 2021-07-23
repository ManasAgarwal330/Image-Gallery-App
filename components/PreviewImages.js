import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

class PreviewImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.previewContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Icon name="arrowleft" size={30} color={'white'} />
            </TouchableOpacity>{' '}
            Back
          </Text>
         
        </View>
        <View style={styles.body}>
          <ScrollView>
            <Image
              source={{ uri: this.props.route.params.url }}
              style={{flex:1}}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  previewContainer: { flex: 1 },
  header: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingLeft: 10,
  },
  headerText: { color: 'white', fontSize: 30 },
  body: { flex: 9 },
});

export default PreviewImages;

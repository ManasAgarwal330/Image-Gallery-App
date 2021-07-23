import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  ScrollView,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import axios from 'axios';

class CollectionImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activityIndicator: true,
      images: [],
      currentPage: 1,
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://picsum.photos/v2/list?page=${this.state.currentPage}&limit=20`
      )
      .then((res) => {
        this.setState({
          images: [...this.state.images, ...((res && res.data) || [])],
          activityIndicator:false,
        });
      });
  }
  componentDidUpdate() {
    axios
      .get(
        `https://picsum.photos/v2/list?page=${this.state.currentPage}&limit=20`
      )
      .then((res) => {
        this.setState({
          images: [...this.state.images, ...((res && res.data) || [])],
          activityIndicator: false,
        });
      });
  }
  render() {
    const isCloseToBottom = ({
      layoutMeasurement,
      contentOffset,
      contentSize,
    }) => {
      const paddingToBottom = 20;
      return (
        layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom
      );
    };
    return (
      <View style={styles.collectionImagesContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            {this.props.route.params.collectionName} <Icon name="images" size={34} color={'white'} />
          </Text>
          {this.state.activityIndicator && (
            <View style={{ position: 'absolute', right: 20 }}>
              <ActivityIndicator color="white" size={30} />
            </View>
          )}
        </View>
        <View style={styles.body}>
          <ScrollView
            onScroll={(nativeElement) => {
              console.log('yes')
              if (isCloseToBottom) {
                this.setState({
                  currentPage: this.state.currentPage + 1,
                  activityIndicator: true,
                });
              }
            }}
            contentContainerStyle={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            {this.state.images &&
              this.state.images.map((item, index) => {
                let imageUrl = item.download_url;
                imageUrl = imageUrl.substring(0, imageUrl.lastIndexOf('/'));
                imageUrl = imageUrl.substring(0, imageUrl.lastIndexOf('/'));
                imageUrl = imageUrl + '/100';
    
                return (
                  <View style={styles.mapView}>
                    <Pressable
                      android_ripple={{
                        color: 'lightgray',
                        borderless: true,
                        radius: 100,
                      }}
                      onPress = {() => {this.props.navigation.navigate('PreviewImages',({url:item.download_url}))}}>
                      <Image source={{ uri : imageUrl}} style={styles.collectionImageStyle}/>
                      </Pressable>
                  </View>
                );
              })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  collectionImagesContainer: { flex: 1,backgroundColor: '#ecf0f1', },
  header: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  body: { flex: 9, paddingTop: 10 },
  headerText: { color: 'white', fontSize: 30 },
  mapView: {
    height: 100,
    width: '30%',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: 'gray',
    shadowOffset: { width: 1.5, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  collectionImageStyle:{
    height:'100%',
    width:'100%',
    borderRadius:10,
  },
});

export default CollectionImages;

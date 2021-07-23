import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: [
        'Camera',
        'Screenshots',
        'WhatsApp',
        'Instagram',
        'Snapchat',
        'ShareIt',
        'Downloads',
        'Bluetooth',
      ],
    };
  }

  render() {
    return (
      <View style={styles.collectionContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Collection <Icon name="appstore1" size={35} color={'white'} />
          </Text>
        </View>
        <View style={styles.body}>
          <ScrollView
            contentContainerStyle={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            {this.state.collection.map((item, index) => {
              return (
                <View style={styles.mapView}>
                  <Pressable android_ripple={{color: 'lightgray', borderless: true,radius:100}}
                  onPress={() => {this.props.navigation.navigate('CollectionImages',{collectionIndex:index,collectionName:item})}}>
                    <Image
                      source={{
                        uri: `https://picsum.photos/seed/${100 + index}/200`,
                      }}
                      style={styles.collectionImage}
                    />
                    <Text style={styles.collectionText}>{item}</Text>
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
  collectionContainer: { flex: 1, backgroundColor: 'green' },
  header: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  body: { flex: 9, backgroundColor: '#ecf0f1', paddingTop: 10 },
  headerText: { color: 'white', fontSize: 30 },
  mapView: {
    height: 200,
    width: '48%',
    marginBottom: 30,
    borderRadius: 20,
  },
  collectionImage: { height: '100%', width: '100%', borderRadius: 20 },
  collectionText: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: '#09090963',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default Collection;

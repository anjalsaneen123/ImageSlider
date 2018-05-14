import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import ScaleImage from 'react-native-scalable-image';

const image_1 = require('./assets/1.jpg');
const image_2 = require('./assets/2.jpg');
const image_3 = require('./assets/3.jpg');
const image_4 = require('./assets/4.jpg');
const image_5 = require('./assets/5.jpg');
const image_7 = require('./assets/7.jpg');
const image_8 = require('./assets/8.jpg');
const image_9 = require('./assets/9.jpg');
const image_10 = require('./assets/10.jpg');

const images = [image_1, image_2, image_3, image_4, image_5, image_7, image_8, image_9, image_10];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
            <FlatList
                style={{height: Dimensions.get('window').height}}
                data={images}
                renderItem={({ item }) => 
                    <TouchableOpacity>
                        <ScaleImage
                            height={Dimensions.get('window').height}
                            style={{height: Dimensions.get('window').height, resizeMode: 'contain', marginRight: 10}}
                            source={item} />
                    </TouchableOpacity>}
                horizontal
                keyExtractor={(item, index) => index.toString()}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

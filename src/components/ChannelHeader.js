import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';
import iconSearch from '../images/icon-search.png';
import iconThreeDots from '../images/icon-3-dots.png';
import {getChannelDisplayName} from '../utils';

export const ChannelHeader = ({goBack, channel}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <TouchableOpacity
          onPress={() => {
            goBack && goBack();
          }}>
          <Text style={styles.hamburgerIcon}>{'‹'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.centerContent}>
        <Text style={styles.channelTitle}>
          {getChannelDisplayName(channel, true)}
        </Text>
        {channel && channel.state && (
          <Text style={styles.channelSubTitle}>
            {Object.keys(channel.state.members).length} Members
          </Text>
        )}
      </View>
      <View style={styles.rightContent}>
        <TouchableOpacity style={styles.searchIconContainer}>
          <Image source={iconSearch} style={styles.searchIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuIconContainer}>
          <Image source={iconThreeDots} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  leftContent: {
    flexDirection: 'row',
  },
  hamburgerIcon: {
    fontSize: 35,
    textAlign: 'left',
  },
  channelTitle: {
    color: 'black',
    marginLeft: 10,
    fontWeight: '900',
    fontSize: 17,
    fontFamily: 'Lato-Regular',
    alignSelf: 'center',
  },
  channelSubTitle: {},
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContent: {
    flexDirection: 'row',
    marginRight: 10,
  },
  searchIconContainer: {marginRight: 15, alignSelf: 'center'},
  searchIcon: {
    height: 18,
    width: 18,
  },
  menuIcon: {
    height: 18,
    width: 18,
  },
  menuIconContainer: {alignSelf: 'center'},
});

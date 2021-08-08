import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export const InstagramHome = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={{paddingHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 22}}>Fareez Jasmi</Text>
            <Image
              style={{width: 50, height: 50}}
              source={{
                uri: 'https://pics.freeicons.io/uploads/icons/png/9311412861606062171-512.png',
              }}
            />
          </View>

          {/* Followers Row */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              paddingTop: 20,
            }}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold'}}>234</Text>
              <Text style={{color: 'gray'}}>posts</Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                paddingHorizontal: 40,
              }}>
              <Text style={{fontWeight: 'bold'}}>234</Text>
              <Text style={{color: 'gray'}}>followers</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold'}}>234</Text>
              <Text style={{color: 'gray'}}>following</Text>
            </View>
          </View>
          {/* Followers Row */}

          {/* Button Row */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#10A5F5',
                paddingVertical: 5,
                paddingHorizontal: 30,
                borderRadius: 30,
              }}>
              <Text style={{color: 'white'}}>Send Message</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: 'gray',
                paddingVertical: 5,
                paddingHorizontal: 30,
                borderRadius: 30,
                marginHorizontal: 20,
              }}>
              <Text>Right</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: 'gray',
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 30,
              }}>
              <Text>=></Text>
            </TouchableOpacity>
          </View>
          {/* Button Row */}

          <View
            style={{
              backgroundColor: '#9ac5d6',
              height: '8%',
              marginTop: 20,
              marginBottom: 5,
            }}></View>

          {/* Grid Row */}
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1, height: 100, backgroundColor: 'red'}}>
                <Image
                  style={{flex: 1, resizeMode: 'cover'}}
                  source={{
                    uri: 'https://images.unsplash.com/photo-1422464804701-7d8356b3a42f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80',
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  height: 100,
                  marginHorizontal: 5,
                  backgroundColor: 'blue',
                }}>
                <Image
                  style={{flex: 1, resizeMode: 'cover'}}
                  source={{
                    uri: 'https://images.unsplash.com/photo-1422464804701-7d8356b3a42f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80',
                  }}
                />
              </View>
              <View style={{flex: 1, height: 100, backgroundColor: 'green'}}>
                <Image
                  style={{flex: 1, resizeMode: 'cover'}}
                  source={{
                    uri: 'https://images.unsplash.com/photo-1422464804701-7d8356b3a42f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80',
                  }}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <View style={{flex: 1, height: 100, backgroundColor: 'red'}}>
                <Image
                  style={{flex: 1, resizeMode: 'cover'}}
                  source={{
                    uri: 'https://images.unsplash.com/photo-1422464804701-7d8356b3a42f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80',
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  height: 100,
                  marginHorizontal: 5,
                  backgroundColor: 'blue',
                }}>
                <Image
                  style={{flex: 1, resizeMode: 'cover'}}
                  source={{
                    uri: 'https://images.unsplash.com/photo-1422464804701-7d8356b3a42f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80',
                  }}
                />
              </View>
              <View style={{flex: 1, height: 100, backgroundColor: 'green'}}>
                <Image
                  style={{flex: 1, resizeMode: 'cover'}}
                  source={{
                    uri: 'https://images.unsplash.com/photo-1422464804701-7d8356b3a42f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80',
                  }}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <View style={{flex: 1, height: 100, backgroundColor: 'red'}}>
                <Image
                  style={{flex: 1, resizeMode: 'cover'}}
                  source={{
                    uri: 'https://images.unsplash.com/photo-1422464804701-7d8356b3a42f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80',
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  height: 100,
                  marginHorizontal: 5,
                  backgroundColor: 'blue',
                }}>
                <Image
                  style={{flex: 1, resizeMode: 'cover'}}
                  source={{
                    uri: 'https://images.unsplash.com/photo-1422464804701-7d8356b3a42f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80',
                  }}
                />
              </View>
              <View style={{flex: 1, height: 100, backgroundColor: 'green'}}>
                <Image
                  style={{flex: 1, resizeMode: 'cover'}}
                  source={{
                    uri: 'https://images.unsplash.com/photo-1422464804701-7d8356b3a42f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80',
                  }}
                />
              </View>
            </View>
          </View>
          {/* Grid Row */}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

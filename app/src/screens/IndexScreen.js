import React, { useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useBlogContext } from '../hooks/useBlogContext';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function IndexScreen() {
  const { blogPosts, getBlogPosts, deleteBlogPost } = useBlogContext();
  const navigation = useNavigation();

  useEffect(() => {
    getBlogPosts();

    // if i back to the home screen then this function runs
    const listener = navigation.addListener('focus', () => {
      getBlogPosts();
    });

    return () => listener.remove();
  }, []);

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Create')}
        style={styles.btn}
      >
        <Feather name='plus' color='#fff' size={30} />
      </TouchableOpacity>
      <FlatList
        data={blogPosts}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.row}
              onPress={() => navigation.navigate('ShowScreen', { id: item.id })}
            >
              <Text style={styles.title}>
                {item.title} - {item.id}
              </Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather style={styles.icon} name='trash' />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

export default IndexScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },

  title: {
    fontSize: 18,
  },

  icon: {
    fontSize: 24,
  },

  btn: {
    backgroundColor: '#0012ef',
    margin: 10,
    padding: 10,
    borderRadius: 6,

    width: '15%',
    marginLeft: 'auto',
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
});

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useBlogContext } from '../hooks/useBlogContext';

import { EvilIcons } from '@expo/vector-icons';

function ShowScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const id = route.params.id;
  const { blogPosts, getBlogPosts } = useBlogContext();

  const singleBlog = blogPosts.find((blogPost) => blogPost.id === id);

  useEffect(() => {
    const listener = navigation.addListener('focus', () => {
      getBlogPosts();
    });

    return () => listener.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text>
        {singleBlog.title} - {singleBlog.id}
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id })}>
        <EvilIcons name='pencil' style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

export default ShowScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  icon: {
    fontSize: 34,
  },
});

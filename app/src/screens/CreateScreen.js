import React from 'react';
import { StyleSheet } from 'react-native';
import { useBlogContext } from '../hooks/useBlogContext';
import { useNavigation } from '@react-navigation/native';
import BlogPostForm from '../components/BlogPostForm';

function CreateScreen() {
  const { addBlogPost } = useBlogContext();
  const navigation = useNavigation();

  const handleSubmit = (title, content) => {
    const newBlog = {
      // id: new Date().getTime(),
      title,
      content,
    };

    addBlogPost(newBlog, () => {
      navigation.navigate('Blogs');
    });
  };

  return <BlogPostForm onSubmit={handleSubmit} />;
}

export default CreateScreen;

const styles = StyleSheet.create({});

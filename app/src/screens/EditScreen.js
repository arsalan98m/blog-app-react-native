import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useBlogContext } from '../hooks/useBlogContext';
import { useNavigation } from '@react-navigation/native';
import BlogPostForm from '../components/BlogPostForm';

function EditScreen() {
  const route = useRoute();
  const id = route.params.id;
  const navigation = useNavigation();
  const { blogPosts, editBlogPost } = useBlogContext();

  const blogPost = blogPosts.find((blogPost) => blogPost.id === id);

  const handleSubmit = (title, content) => {
    editBlogPost(id, title, content, () => {
      navigation.goBack();
    });
  };

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={handleSubmit}
    />
  );
}

export default EditScreen;

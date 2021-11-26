import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

function BlogPostForm({ onSubmit, initialValues }) {
  // 1st way
  // const [title, setTitle] = useState(initialValues?.title || '');
  // const [content, setContent] = useState(initialValues?.content || '');

  // 2nd way (using default props)
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>Enter title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />

      <Button
        style={styles.btn}
        title='Save Blog Post'
        onPress={() => onSubmit(title, content)}
      />
    </View>
  );
}

export default BlogPostForm;

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    padding: 5,
  },

  label: {
    fontSize: 20,
    margin: 10,
    marginBottom: 10,
  },

  btn: {
    margin: 15,
    padding: 10,
  },
});

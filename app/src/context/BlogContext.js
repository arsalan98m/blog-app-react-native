import React, { createContext, useReducer } from 'react';
import { initialState, reducer } from './BlogReducer';
import jsonServer from '../api/json-server';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getBlogPosts = async () => {
    const resp = await jsonServer.get('/blogposts');

    // response.data = [{},{}]

    dispatch({ type: 'GET_BLOG_POST', payload: resp.data });
  };

  const addBlogPost = async (newBlog, navigate) => {
    // dispatch({ type: 'ADD_BLOG_POST', payload: newBlog });

    await jsonServer.post('/blogposts', newBlog);
    navigate();
  };

  const deleteBlogPost = async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: 'DELETE_BLOG_POST', payload: id });
  };

  const editBlogPost = async (id, title, content, navigate) => {
    // dispatch({ type: 'EDIT_BLOG_POST', payload: { id, title, content } });
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    navigate();
  };

  return (
    <BlogContext.Provider
      value={{
        ...state,
        addBlogPost,
        deleteBlogPost,
        editBlogPost,
        getBlogPosts,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const initialState = {
  blogPosts: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_BLOG_POST':
      return { ...state, blogPosts: action.payload };

    case 'ADD_BLOG_POST':
      return {
        ...state,
        blogPosts: [...state.blogPosts, action.payload],
      };

    case 'DELETE_BLOG_POST':
      return {
        ...state,
        blogPosts: state.blogPosts.filter(
          (blogPost) => blogPost.id !== action.payload
        ),
      };

    case 'EDIT_BLOG_POST':
      return {
        ...state,
        blogPosts: state.blogPosts.map((blogPost) => {
          if (blogPost.id === action.payload.id) {
            return action.payload;
          }
          return blogPost;
        }),
      };

    default:
      return state;
  }
};

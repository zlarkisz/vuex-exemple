export default {
  allPosts: state => state.posts,
  postsCount: (_, getters) => getters.validPost.length,
  validPost: state =>
    state.posts.filter(post => {
      return post.title && post.body
    })
};

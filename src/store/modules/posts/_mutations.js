export default {
    updatePosts(state, posts) {
        state.posts = posts
    },
    createPost(state, newPost) {
        state.posts.unshift(newPost)
    }
}
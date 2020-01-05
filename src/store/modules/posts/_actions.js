export default {
  async fetchPosts({ commit, getters, dispatch }, limit = 3) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const posts = await res.json();

    dispatch("sayPedro");

    commit("updatePosts", posts);
  },
  sayPedro() {
    console.log("Pedro_Kokaines");
  }
};

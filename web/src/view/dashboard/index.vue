<template>
  <div class="big">
  </div>
</template>

<script>
//import TodoList from "./component/todoList";
import { mapGetters } from "vuex";
export default {
  name: "Dashboard",
  computed: {
    ...mapGetters("user", ["userInfo"]),
  },
  components: {
    // Sunburst, //旭日图
  },
  methods: {
    toTarget(name) {
      this.$router.push({ name });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
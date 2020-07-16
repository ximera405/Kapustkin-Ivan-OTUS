<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p>Успешных тренировок сегодня {{ trainingResult }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data: function() {
    return {
      trainingResult: this.$store.getters.trainingResult,
    }
  }
};
</script>

<template>
  <div class="settings-wrapper">
    <form class="settings-form">
      <div class="settings-form__checkbox-container">
        <span>Выберите тип вычеслений</span>
        <div>
          <input
            v-model="type"
            class="settings-form__checkbox"
            type="checkbox"
            id="plus"
            value="+"
          />
          <label class="settings-form__label" for="+">+</label>
        </div>
        <div>
          <input
            v-model="type"
            class="settings-form__checkbox"
            type="checkbox"
            id="minus"
            value="-"
          />
          <label class="settings-form__label" for="scales">-</label>
        </div>
        <div>
          <input
            v-model="type"
            class="settings-form__checkbox"
            type="checkbox"
            id="multiple"
            value="*"
          />
          <label class="settings-form__label" for="*">*</label>
        </div>
        <div>
          <input
            v-model="type"
            class="settings-form__checkbox"
            type="checkbox"
            id="drop"
            value="/"
          />
          <label class="settings-form__label" for="/">/</label>
        </div>
      </div>
      <div>
        <label for="difficult">Выберите сложность</label>
        <select name="difficult" id="difficult" v-model="difficult">
          <option value="easy">Легкая</option>
          <option value="normal">Нормальная</option>
          <option value="hard">Сложная</option>
        </select>
      </div>
      <div>
        <label for="time">Введите время раунда</label>
        <input v-model="time" id="time" type="number" />
      </div>
      <button type="button" v-on:click="onSaveClick()">СОХРАНИТЬ</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Settings",
  data: function() {
    return {
      type: [],
      difficult: "",
      time: 0
    };
  },
  methods: {
    onSaveClick() {
      this.$store.commit("SET_TYPE", this.type);
      this.$store.commit("SET_DIFFICULT", this.difficult);
      this.$store.commit("SET_TIME", this.time);
      console.log(this.type, this.difficult, this.time);
    }
  }
};
</script>

<style>
.settings-form {
  margin-top: 50px;
  font-size: 26px;
}

.settings-form__checkbox-container {
  margin: 30px 0;
  display: flex;
  flex-direction: column;
}
</style>

<template>
  <div class="settings-wrapper">
    <form class="settings-form">
      <div class="settings-form__checkbox-container">
        <span>Выберите тип вычеслений</span>
        <div>
        <input
          class="settings-form__checkbox"
          type="checkbox"
          id="plus"
          name="plus"
        />
        <label class="settings-form__label" for="+">+</label>
        </div>
        <div>
        <input
          class="settings-form__checkbox"
          type="checkbox"
          id="minus"
          name="minus"
        />
        <label class="settings-form__label" for="scales">-</label>
        </div>
        <div>
        <input
          class="settings-form__checkbox"
          type="checkbox"
          id="multiple"
          name="multiple"
        />
        <label class="settings-form__label" for="*">*</label>
        </div>
        <div>
        <input
          class="settings-form__checkbox"
          type="checkbox"
          id="drop"
          name="drop"
        />
        <label class="settings-form__label" for="/">/</label>
        </div>
      </div>
      <div>
        <label for="difficult">Выберите сложность</label>
        <select name="difficult" id="difficult">
          <option value="easy">Легкая</option>
          <option value="normal">Нормальная</option>
          <option value="hard">Сложная</option>
        </select>
      </div>
      <div>
        <label for="time">Введите время раунда</label>
        <input id="time" type="number" />
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Settings"
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

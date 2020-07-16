<template>
  <div class="home">
    <h2>Game will comming soon....</h2>

    <div v-if="type && difficult && time">
      <p>
        Типы вычеслений: {{ type }}
        <br />
        Выбранная сложность: {{ difficult }}
        <br />
        Время на ответ: {{ time }} секунд
        <br />
      </p>
      <div v-if="status === 1">
        <div v-if="type.length === 1">
          <div v-if="difficult === 'easy'">
            <p>{{ `${number1Easy} ${type[0]} ${number2Easy}` }}</p>
            <input v-model="answear" type="number" />
          </div>
          <div v-else-if="difficult === 'normal'">
            <p>{{ `${number1Normal} ${type[0]} ${number2Normal}` }}</p>
            <input v-model="answear" type="number" />
          </div>
          <div v-else-if="difficult === 'hard'">
            <p>{{ `${number1Hard} ${type[0]} ${number2Hard}` }}</p>
            <input v-model="answear" type="number" />
          </div>
        </div>
        <div v-if="type.length === 2">
          <div v-if="difficult === 'easy'">
            <p>
              {{
              `${number1Easy} ${type[0]} ${number2Easy} ${type[1]} ${number3Easy}`
              }}
            </p>
            <input v-model="answear" type="number" />
          </div>
          <div v-else-if="difficult === 'normal'">
            <p>
              {{
              `${number1Normal} ${type[0]} ${number2Normal} ${type[1]} ${number3Normal}`
              }}
            </p>
            <input v-model="answear" type="number" />
          </div>
          <div v-else-if="difficult === 'hard'">
            <p>
              {{
              `${number1Hard} ${type[0]} ${number2Hard} ${type[1]} ${number3Hard}`
              }}
            </p>
            <input v-model="answear" type="number" />
          </div>
        </div>
        <div v-if="type.length === 3">
          <div v-if="difficult === 'easy'">
            <p>
              {{
              `${number1Easy} ${type[0]} ${number2Easy} ${type[1]} ${number3Easy} ${type[2]} ${number4Easy}`
              }}
            </p>
            <input v-model="answear" type="number" />
          </div>
          <div v-else-if="difficult === 'normal'">
            <p>
              {{
              `${number1Normal} ${type[0]} ${number2Normal} ${type[1]} ${number3Normal} ${type[2]} ${number4Normal}`
              }}
            </p>
            <input v-model="answear" type="number" />
          </div>
          <div v-else-if="difficult === 'hard'">
            <p>
              {{
              `${number1Hard} ${type[0]} ${number2Hard} ${type[1]} ${number3Hard} ${type[2]} ${number4Hard}`
              }}
            </p>
            <input v-model="answear" type="number" />
          </div>
        </div>
        <div v-if="type.length === 4">
          <div v-if="difficult === 'easy'">
            <p>
              {{
              `${number1Easy} ${type[0]} ${number2Easy} ${type[1]} ${number3Easy} ${type[2]} ${number4Easy} ${type[3]} ${number5Easy}`
              }}
            </p>
            <input v-model="answear" type="number" />
          </div>
          <div v-else-if="difficult === 'normal'">
            <p>
              {{
              `${number1Normal} ${type[0]} ${number2Normal} ${type[1]} ${number3Normal} ${type[2]} ${number4Normal} ${type[3]} ${number5Normal}`
              }}
            </p>
            <input v-model="answear" type="number" />
          </div>
          <div v-else-if="difficult === 'hard'">
            <p>
              {{
              `${number1Hard} ${type[0]} ${number2Hard} ${type[1]} ${number3Hard} ${type[2]} ${number4Hard} ${type[3]} ${number5Hard}`
              }}
            </p>
            <input v-model="answear" type="number" />
          </div>
        </div>
      </div>
    </div>
    <button type="button" v-on:click="onClickResult()">показать результат</button>
    <button type="button" v-on:click="onClickStart()">Начать!</button>
  </div>
</template>

<script>
export default {
  name: "Game",
  data: function() {
    return {
      trainingResult: this.$store.getters.trainingResult,
      answear: 0,
      status: 0,
      result: 0,
      type: this.$store.getters.type,
      difficult: this.$store.getters.difficult,
      time: this.$store.getters.time,
      number1Easy: 0,
      number2Easy: 0,
      number3Easy: 0,
      number4Easy: 0,
      number5Easy: 0,
      number1Normal: 0,
      number2Normal: 0,
      number3Normal: 0,
      number4Normal: 0,
      number5Normal: 0,
      number1Hard: 0,
      number2Hard: 0,
      number3Hard: 0,
      number4Hard: 0,
      number5Hard: 0,
      mathItUp: {
        "+": function(x, y) {
          return x + y;
        },
        "-": function(x, y) {
          return x - y;
        },
        "*": function(x, y) {
          return x * y;
        },
        "/": function(x, y) {
          return x / y;
        }
      }
    };
  },

  methods: {
    onClickResult() {
      if (this.result !== 0) {
        if (Number(this.answear) === Math.round(this.result)) {
          this.$store.commit("SET_TRAINING_RESULT", this.trainingResult + 1);
          alert("Поздравляем. Ваш ответ верен!");
        } else
          alert(
            `К сожалению, ваш ответ не верен... \nОтвет: ${Math.round(
              this.result
            )}`
          );
      } else alert(`Вы еще не играли в игру`);
    },
    calcResult() {
      if (this.difficult === "easy") {
        if (this.type.length === 1) {
          return (this.result = this.mathItUp[this.type[0]](
            this.number1Easy,
            this.number2Easy
          ));
        }
        if (this.type.length === 2) {
          return (this.result = this.mathItUp[this.type[1]](
            this.mathItUp[this.type[0]](this.number1Easy, this.number2Easy),
            this.number3Easy
          ));
        }
        if (this.type.length === 3) {
          return (this.result = this.mathItUp[this.type[2]](
            this.mathItUp[this.type[1]](
              this.mathItUp[this.type[0]](this.number1Easy, this.number2Easy),
              this.number3Easy
            ),
            this.number4Easy
          ));
        }
        if (this.type.length === 4) {
          return (this.result = this.mathItUp[this.type[3]](
            this.mathItUp[this.type[2]](
              this.mathItUp[this.type[1]](
                this.mathItUp[this.type[0]](this.number1Easy, this.number2Easy),
                this.number3Easy
              ),
              this.number4Easy
            ),
            this.number5Easy
          ));
        }
      }
      if (this.difficult === "normal") {
        if (this.type.length === 1) {
          return (this.result = this.mathItUp[this.type[0]](
            this.number1Normal,
            this.number2Normal
          ));
        }
        if (this.type.length === 2) {
          return (this.result = this.mathItUp[this.type[1]](
            this.mathItUp[this.type[0]](this.number1Normal, this.number2Normal),
            this.number3Normal
          ));
        }
        if (this.type.length === 3) {
          return (this.result = this.mathItUp[this.type[2]](
            this.mathItUp[this.type[1]](
              this.mathItUp[this.type[0]](
                this.number1Normal,
                this.number2Normal
              ),
              this.number3Normal
            ),
            this.number4Normal
          ));
        }
        if (this.type.length === 4) {
          return (this.result = this.mathItUp[this.type[3]](
            this.mathItUp[this.type[2]](
              this.mathItUp[this.type[1]](
                this.mathItUp[this.type[0]](
                  this.number1Normal,
                  this.number2Normal
                ),
                this.number3Normal
              ),
              this.number4Normal
            ),
            this.number5Normal
          ));
        }
      }
      if (this.difficult === "hard") {
        if (this.type.length === 1) {
          return (this.result = this.mathItUp[this.type[0]](
            this.number1Hard,
            this.number2Hard
          ));
        }
        if (this.type.length === 2) {
          return (this.result = this.mathItUp[this.type[1]](
            this.mathItUp[this.type[0]](this.number1Hard, this.number2Hard),
            this.number3Hard
          ));
        }
        if (this.type.length === 3) {
          return (this.result = this.mathItUp[this.type[2]](
            this.mathItUp[this.type[1]](
              this.mathItUp[this.type[0]](this.number1Hard, this.number2Hard),
              this.number3Hard
            ),
            this.number4Hard
          ));
        }
        if (this.type.length === 4) {
          return (this.result = this.mathItUp[this.type[3]](
            this.mathItUp[this.type[2]](
              this.mathItUp[this.type[1]](
                this.mathItUp[this.type[0]](this.number1Hard, this.number2Hard),
                this.number3Hard
              ),
              this.number4Hard
            ),
            this.number5Hard
          ));
        }
      }
    },
    onClickStart() {
      this.status = 1;
      (this.number1Easy = Math.floor(Math.random() * Math.floor(10) + 1)),
        (this.number2Easy = Math.floor(Math.random() * Math.floor(10) + 1)),
        (this.number3Easy = Math.floor(Math.random() * Math.floor(10) + 1)),
        (this.number4Easy = Math.floor(Math.random() * Math.floor(10) + 1)),
        (this.number5Easy = Math.floor(Math.random() * Math.floor(10) + 1)),
        (this.number1Normal = Math.floor(Math.random() * Math.floor(100))),
        (this.number2Normal = Math.floor(Math.random() * Math.floor(100))),
        (this.number3Normal = Math.floor(Math.random() * Math.floor(100))),
        (this.number4Normal = Math.floor(Math.random() * Math.floor(100))),
        (this.number5Normal = Math.floor(Math.random() * Math.floor(100))),
        (this.number1Hard = Math.floor(Math.random() * Math.floor(1000))),
        (this.number2Hard = Math.floor(Math.random() * Math.floor(1000))),
        (this.number3Hard = Math.floor(Math.random() * Math.floor(1000))),
        (this.number4Hard = Math.floor(Math.random() * Math.floor(1000))),
        (this.number5Hard = Math.floor(Math.random() * Math.floor(1000)));
      this.calcResult();
      setTimeout(() => {
        this.status = 0;
      }, this.time * 1000);
    }
  }
};
</script>

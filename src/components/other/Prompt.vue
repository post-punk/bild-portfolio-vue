<template>
  <div>
    <transition name="modal">
      <div v-if="!isOpen">
        <div class="overlay" @click.self="closePrompt">
          <div id="modal">
            <h1>{{ title }}</h1>
            <p>{{ text }}</p>
            <button type="button" class="btn btn-secondary" @click="closePrompt">{{ cancel }}</button>
            <button type="button" class="btn btn-danger" @click="onSubmit(); closePrompt()">{{ danger }}</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      // isOpen: false
    };
  },
  methods: {
    
    deleteSomething(arg) {
      
    },
    closePrompt() {
      this.$store.dispatch('closePrompt', false)
    },
    
  },
  computed: {
    isOpen() {
      this.$store.getters.getPromptIsOpen;
    },
    modalInfo() {
      this.$store.getters.getModalInfo;
    }
  },
    // props: ['title', 'text', 'cancel', 'danger', 'arg', 'buttonInfo', 'function'],
    props: {
      title: String,
      text: String,
      cancel: String,
      danger: String,
      arg: String,
      buttonInfo: String,
      onSubmit: Function,
    },

  created() {
    // console.log(this.$store)
  },
 
};
</script>

<style scoped>
#modal {
  width: 500px;
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px 3px;
  transition: all 0.2s ease-in;
  font-family: Helvetica, Arial, sans-serif;
}
.fadeIn-enter {
  opacity: 0;
}

.fadeIn-leave-active {
  opacity: 0;
  transition: all 0.2s step-end;
}

.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
  transform: scale(1.1);
}
#open-modal {
  padding: 7px;
  margin-top: 10px;
  /* background-color: green; */
  color: rgb(255, 255, 255);
  background-color: rgb(156, 47, 47);
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
}
button {
  padding: 7px;
  margin-top: 10px;
  /* background-color: green; */
  color: rgb(255, 255, 255);
  
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 999;
  transition: opacity 0.2s ease;
}
</style>
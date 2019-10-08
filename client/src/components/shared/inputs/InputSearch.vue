<template>
  <div class="input-group form-group">
    <vue-simple-suggest
      :type="type"
      :class="classInput"
      v-model="itemSelecionado"
      :list="lista"
      :styles="autoCompleteStyle"
      :placeholder="placeholder"
      :mode="mode"
      :nullable-select="nullableSelect"
      :prevent-submit="preventSubmit"
      :display-attribute="displayAttribute"
      @select="emitSelected($event)"
      @input="emitValue"
    ></vue-simple-suggest>
    <div class="input-group-append">
      <button class="btn" type="button" @click="emitValue('')">
        <font-awesome-icon icon="search" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemSelecionado: "",
      autoCompleteStyle: {
        vueSimpleSuggest: "position-relative",
        inputWrapper: "",
        defaultInput: "form-control",
        suggestions: "position-absolute list-group z-1000",
        suggestItem: "list-group-item"
      }
    };
  },
  props: {
    placeholder: {
      required: true,
      type: String
    },
    lista: {
      required: true,
      type: Array
    },
    mode: "select",
    preventSubmit: true,
    nullableSelect: true,
    displayAttribute: {
      required: true,
      type: String
    },
    classInput: "",
    type: "search"
  },
  methods: {
    emitValue(val) {
      this.$emit("input", val);
    },
    emitSelected(val) {
      this.$emit("select", val);
    }
  }
};
</script>

<style scoped>
.btn {
  background-color: #939996;
}
</style>
<style>
.z-1000 {
  z-index: 1000;
}
.hover {
  background-color: #007bff;
  color: #80bdff;
}
.suggestions {
  opacity: 1;
}

.vue-simple-suggest-enter-active.suggestions,
.vue-simple-suggest-leave-active.suggestions {
  transition: opacity 0.3s;
}

.vue-simple-suggest-enter.suggestions,
.vue-simple-suggest-leave-to.suggestions {
  opacity: 0;
}
</style>
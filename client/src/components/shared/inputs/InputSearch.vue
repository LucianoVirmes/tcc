<template>
    <div class="input-group form-group">
    <input class="form-control" :placeholder="placeholder" />
    <div class="input-group-append">
      <button class="btn" type="button">
        <font-awesome-icon icon="search"/> 
      </button>
    </div>
  </div> 
</template>

<script>
    export default {
        props: {
            placeholder: {
                required: true,
                type: String
            }
        }
    }
</script>

<style scoped>
    .btn {
      background-color: #939996;
    }
</style>

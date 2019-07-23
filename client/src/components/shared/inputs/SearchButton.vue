<template>
    <div class="input-group">
    <input type="text" class="form-control" :placeholder=placeholder>
    <div class="input-group-append">
      <button class="btn btn-secondary" type="button">
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

<style>
 
</style>

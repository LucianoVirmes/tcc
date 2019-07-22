<template>
    <div class="input-group">
    <input type="text" class="form-control" :placeholder=placeholder>
    <div class="input-group-append">
      <button class="btn btn-secondary" type="button">
        <i class="fa fa-search"></i>
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
 
.main {
    width: 50%;
    margin: 50px auto;
}

.has-search .form-control {
    padding-left: 2.375rem;
}

.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}
</style>

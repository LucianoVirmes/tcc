<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="4">
          <b-list-group>
            <router-link
              :to="rota.path"
              v-for="(rota, index) in rotas"
              :key="index"
              class="text-decoration-none"
            >
              <b-list-group-item>{{rota.titulo}}</b-list-group-item>
            </router-link>
          </b-list-group>
        </b-col>
        <b-col cols="8">
          <transition>
            <router-view></router-view>
          </transition>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    rotas: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
a.router-link-active div {
  font-weight: 900;
  color: #fff;
  background-color: rgb(123, 201, 224);
}
</style>

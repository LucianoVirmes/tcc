<template>
  <div id="tabela clearfix">
    <b-table striped hover responsive :items="items" :busy="carregando" :fields="headers" outlined>
      <div slot="table-busy" class="text-center text-success my-2">
        <b-spinner class="align-middle"></b-spinner>
        <strong>Carregando...</strong>
      </div>
      <template slot="datahora" slot-scope="data">
      {{data.item.datahora | moment('DD/MM/YYYY')}}
      </template>
      <template slot="actions" slot-scope="row" v-if="mostrarBotoes">
        <router-link :to="linkEditar+'/'+row.item[paramRowEditar]">
          <b-button size="sm" class="mr-1" variant="info">
            <font-awesome-icon icon="pen" />
          </b-button>
        </router-link>
        <b-button size="sm" variant="danger" @click="excluir(row.item[paramRowExcluir])">
          <font-awesome-icon icon="trash" />
        </b-button>
      </template>
      <template slot="dataDemissao" slot-scope="data">
        <b-badge variant="danger" v-if="data.item.dataDemissao">Inativo</b-badge>
        <b-badge variant="success" v-else>Ativo</b-badge>
      </template>
    </b-table>
    <div class="text-center">
      <span v-if="items.length <= 0 && !carregando" class="text-center">Ainda não há nada aqui.</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      required: true,
      type: Array
    },
    headers: {
      required: true
    },
    linkEditar: {
      type: String,
      required: false
    },
    mostrarBotoes: {
      type: Boolean,
      default: true
    },
    carregando: {
        type: Boolean,
        default: false
    },
    paramRowEditar: "",

    paramRowExcluir: "",
    tituloModalExcluir: ""
  },
  methods: {
    excluir: function(codExcluir) {
      this.$emit("codExcluir", codExcluir);
      this.$bvModal.show("modal-excluir");
    }
  }
};
</script>

<style>
</style>

<template>
    <b-modal :id=id :title=title header-bg-variant="danger" header-text-variant="white">
            <p class="my-4">{{texto}}</p>
             <template slot="modal-footer" slot-scope="{ ok, cancel }">
      <b-button size="sm" @click="cancel()">
        {{btnVoltar}}
      </b-button>
      <b-button size="sm" variant="danger" @click="ok()">
        {{btnExcluir}}
      </b-button>
      
    </template>
    </b-modal>    
</template>

<script>
export default {
    props: {
        id: {
            required: true,
            type: String
        },
        title: {
            default: "Excluir"
        },
        texto: {
            default: "Deseja mesmo excluir?"
        },
        btnExcluir: {
            default: "Excluir"
        },
        btnVoltar: {
            default: "Voltar"
        },
        urlExclusao: ""
    }
}
</script>

<style>

</style>

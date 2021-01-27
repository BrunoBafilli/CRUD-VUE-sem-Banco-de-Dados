<template>
  <div class="content">
    <h5>Todos os produtos</h5>
    <table class="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nome</th>
          <th scope="col">Preco</th>
          <th scope="col">Categoria</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="produto in produtos" :key="produto.id">
          <th scope="row">{{ produto.id }}</th>
          <td>{{ produto.nome }}</td>
          <td>{{ produto.preco }}</td>
          <td>{{ produto.categoria }}</td>
          <td>
            <button class="btn btn-danger" @click="deleteElemento(produto.id)">
              Deletar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Barramento from "../Barramento";

export default {
  data() {
    return {
      produtos: [],
      idDeleteElemento: "",
    };
  },

  created() {
    Barramento.selectProdutosClick((callBack) => {
      this.produtos = callBack;
    });
  },

  methods: {
    deleteElemento(idProduto) {
      Barramento.deleteProdutos(idProduto);
    },
  },
};
</script>

<style scoped>
</style>
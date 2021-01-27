<!-- DATABASE.VUE CRIADO A PENAS PARA APRENDIZADO SIMULACAO DE UM DATABASE 
PARA DEIXAR MAIS DINAMICO A COMUNICACAO ENTRE COMPONENTES -->

<template>
  <div class="content"></div>
</template>

<script>
import Barramento from "../Barramento";

export default {
  props: ["PRODUTO"],
  data() {
    return {
      DATABASEPOPULADO: [],
      id: 0,
    };
  },
  watch: {
    PRODUTO(NOVOPRODUTO) {
      this.id++;

      NOVOPRODUTO.id = this.id;

      this.DATABASEPOPULADO.push(NOVOPRODUTO);

      Barramento.selectProdutos(this.DATABASEPOPULADO);
    },
  },

  created() {
    Barramento.deleteProdutosClick((callBack) => {
      this.DATABASEPOPULADO = this.DATABASEPOPULADO.filter((el) => {
        return el.id !== callBack;
      });

      Barramento.selectProdutos(this.DATABASEPOPULADO);
    });
  },
};
</script>

<style>
</style>
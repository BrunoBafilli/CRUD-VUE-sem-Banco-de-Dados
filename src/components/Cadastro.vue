<template>
  <div class="content">
    <app-data-base :PRODUTO="database" />
    <div
      class="miniBox shadow p-1 mb-5 bg-white rounded"
      @click="openBox = !openBox"
      v-if="!openBox"
    >
      <p>Cadastrar</p>
    </div>
    <template v-if="openBox">
      <div class="shadow-lg p-3 mb-5 bg-white rounded box">
        <span
          class="fechar shadow p-1 mb-5 bg-white rounded"
          @click="openBox = !openBox"
          >X</span
        >

        <h4>Cadastro de produto</h4>
        <input type="text" class="form-control" placeholder="nome" v-model="nome" />
        <input type="text" class="form-control" placeholder="preco" v-model="preco" />
        <select class="custom-select" v-model="categoria">
          <option value="promocao" selected> Promocao</option>
          <option value="destaque">Destaque</option>
        </select>
        <button class="btn btn-dark" @click="cadastrarProduto">
          Cadastrar
        </button>
      </div>
    </template>
  </div>
</template>

<script>
import AppDataBase from "./DATABASE";

export default {
  components: { AppDataBase },
  data() {
    return {
      openBox: false,
      id: 0,
      nome: "",
      preco: "",
      categoria: "",
      database: "",
    };
  },

  methods: {
    cadastrarProduto() {
      this.database = {
        id: this.id,
        nome: this.nome,
        preco: this.preco,
        categoria: this.categoria,
      };
    },
  },
};
</script>

<style scoped>
.box {
  position: absolute;
  width: 50%;
  border: solid 1px #666;
  background-color: #fff;
  margin: 5px;
}

.miniBox {
  width: 20px;
  height: 100px;
  position: absolute;
  cursor: pointer;
  margin-top: 10%;
}

.miniBox p {
  transform: rotate(-270deg);
}

input {
  margin-bottom: 5%;
}
button {
  margin-top: 5%;
}

.fechar {
  width: 30px;
  text-align: center;
  float: right;
  background-color: red !important;
  color: #fff;
  border: solid 1px #666;
  cursor: pointer;
}

.fechar:hover {
  background-color: #ce0101 !important;
}
</style>
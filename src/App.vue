<template>
  <div id="app">
    <button class="btn btn-dark" @click="selecionado = 'todos' ">Todos</button>
    <button class="btn btn-dark" @click="selecionado = 'promocao' ">Promocao</button>
    <button class="btn btn-dark" @click="selecionado = 'destaque' ">Destaque</button>
    <app-cadastro/>
    <app-todos-produtos v-show="selecionado == 'todos'"/>
    <app-destaques v-show="selecionado == 'destaque'"/>
    <app-promocao v-show="selecionado == 'promocao' "/>
  </div>
</template>

<script>
import appCadastro from "./components/Cadastro";
import AppDestaques from "./components/Destaques";
import AppTodosProdutos from "./components/TodosProdutos";
import AppPromocao from "./components/Promocao";

export default {
  components: { AppDestaques, appCadastro, AppTodosProdutos, AppPromocao },
  data(){
    return {
      selecionado: 'todos'
    }
  }
};
</script>

<style scoped>

  button{
    margin: 0.5%;
  }

</style>
import Vue from 'vue'

export default new Vue({

    methods: {

        //Registra um novo evento personalizado
        selectProdutos(produtos) {

            this.$emit('selectProdutos', produtos)

        },

        //Executa evento personalizado
        selectProdutosClick(callBack) {

            this.$on('selectProdutos', callBack)

        },

        deleteProdutos(produto){

            this.$emit('deleteProduto', produto)

        },

        deleteProdutosClick(callBack){
         
            this.$on('deleteProduto', callBack)
        }

    }

})
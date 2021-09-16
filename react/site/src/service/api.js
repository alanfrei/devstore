import axios from axios;

const api = axios.create({
    baseURL: 'http://localhost:3030/'
})


export default class Api{
    async inserir() {
        let r = await api.get('/matricula');
        return r.data;
    }

    async listar( produto, categoria, precoDe, precoPor, avaliacao, descricao, estoque, imagem, ativo, inclusao ){
        let r = await api.post('/matricula',{ produto, categoria, precoDe, precoPor, avaliacao, descricao, estoque, imagem, ativo, inclusao })
        return r.data;
    }

    async alterar(id, produto, categoria, precoDe, precoPor, avaliacao, descricao, estoque, imagem, ativo, inclusao ){
        let r = await api.put('/matricula/' + id,{ produto, categoria, precoDe, precoPor, avaliacao, descricao, estoque, imagem, ativo, inclusao })
        return r.data;
    }

    async remover(){
        let r = await api.delete('/matricula/' + id)
        return r.data;
    }
}
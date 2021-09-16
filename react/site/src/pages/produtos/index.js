
import Cabecalho from '../../components/cabecalho'
import Menu from '../../components/menu'
import edit from '../../assets/images/edit.svg'
import trash from '../../assets/images/trash.svg'
import { useEffect, useState } from 'react'
import { Container, Conteudo } from './styled'

import Api from '../../service/api'
const api = new Api()

export default function Index() {
    const[produtos, setProdutos]= useState([])
    const[nome, setNome] = useState('')
    const[categoria, setCategoria] = useState('')
    const[precoPor, setPrecoPor] = useState('')
    const[precoDe, setPrecoDe] = useState('')
    const[avaliacao, setAvaliacao] = useState('')
    const[estoque, setEstoque] = useState('')
    const[imgLink, setImgLink] = useState('')
    const[descricao, setDescricao] = useState('')
    const[idAlterando, setIdAlterando] = useState(0)
    
    async function listar(){
        let r = await api.listar();
        console.log(r)
        setProdutos(r)
    }

    const ativo = true;
    const data = new Date();

    async function inserir(){
        if(idAlterando == 0){
            let r = await api.inserir(nome, categoria, precoDe, precoPor, avaliacao, descricao, estoque, imgLink, ativo, data)
            alert('produto inserido')
        }
        else{
            let r = await api.alterar(idAlterando, nome, categoria, precoDe, precoPor, avaliacao, descricao, estoque, imgLink, ativo, data)
            alert('produto alterado')
        }

        limparCampos()
        listar()
    }

    async function limparCampos(){
        setNome('')
        setCategoria('')
        setPrecoPor('')
        setPrecoDe('')
        setAvaliacao('')
        setEstoque('')
        setImgLink('')
        setDescricao('')
        setIdAlterando(0)
    }

    async function remover(id) {
        let r = await api.remover(id)
        alert('produto removido')
        listar()
    }
    async function alterar(item){
        setNome(item.nm_produto)
        setCategoria(item.ds_categoria)
        setPrecoPor(item.vl_preco_por)
        setPrecoDe(item.vl_preco_de)
        setAvaliacao(item.vl_avaliacao)
        setEstoque(item.qtd_estoque)
        setImgLink(item.img_produto)
        setDescricao(item.ds_produto)
        setIdAlterando(item.id_produto)
    }

    useEffect(()=>{
        listar();
    }, [])

    return (
        <Container>
            <Menu />
            <Conteudo>
                <Cabecalho />
                <div className="body-right-box">
                    <div className="new-product-box">
                        
                        <div className="text-new-product">
                            <div className="bar-new-product"></div>
                            <div className="text-new-product">Novo Produto</div>
                        </div>
                        
                        <div className="input-new-product"> 
                            <div className="input-left">
                                <div className="agp-input"> 
                                    <div className="name-product"> Nome: </div>  
                                    <div className="input"> <input type="text" value={nome} onChange={ e => setNome(e.target.value)} /> </div>  
                                </div> 
                                <div className="agp-input">
                                    <div className="number-product"> Categoria: </div>  
                                    <div className="input"> <input type="text" value={categoria} onChange={ e => setCategoria(e.target.value)}/> </div> 
                                </div>
                                <div className="agp-input">
                                    <div className="avaliacao-product"> Avaliação: </div>  
                                    <div className="input"> <input type="text" value={avaliacao} onChange={ e => setAvaliacao(e.target.value)}/> </div> 
                                </div>
                            </div>

                            <div className="input-right">
                                <div className="agp-input">
                                    <div className="preco-product2"> Preço De: </div>  
                                    <div className="input"> <input type="text" value={precoDe} onChange={ e => setPrecoDe(e.target.value)}/> </div>  
                                </div>
                                <div className="agp-input">
                                    <div className="preco-product"> Preco Por: </div>  
                                    <div className="input"> <input type="text" value={precoPor} onChange={ e => setPrecoPor(e.target.value)}/> </div> 
                                </div>
                                <div className="agp-input">
                                    <div className="estoque-product"> Estoque: </div>  
                                    <div className="input"> <input type="text" value={estoque} onChange={ e => setEstoque(e.target.value)}/> </div> 
                                </div>
                            </div>
                            
                            
                        </div>
                        <div className="img-desc">
                            <div className="agp-input">
                                <div className="img-product2"> link imagem: </div>  
                                <div className="img-product"> <input type="text" value={imgLink} onChange={ e => setImgLink(e.target.value)} /> </div>  
                            </div>
                            <div className="agp-input">
                                <div className="desc-product"> Descrição: </div>  
                                <div className="input"> <textarea type="text" value={descricao} onChange={ e => setDescricao(e.target.value)} /> </div> 
                                <div className="button-create"> <button onClick={inserir}>Cadastrar</button> </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="product-registered-box">
                        <div className="row-bar"> 
                            <div className="bar-new-product"> </div>
                            <div className="text-registered-product"> Produtos Cadastrados </div>
                        </div>
                    
                        <table className ="table-user">
                            <thead>
                                <tr>
                                    <th className="coluna-acao"> </th>
                                    <th> ID </th>
                                    <th> Produto</th>
                                    <th> Categoria </th>
                                    <th> Preço </th>
                                    <th> Estoque </th>
                                    
                                    <th className="coluna-acao"> </th>
                                    <th className="coluna-acao"> </th>
                                </tr>
                            </thead>
                            {produtos.map(item =>
                                    <tr>
                                        <td className="coluna-img"> <img src={item.img_produto} alt=""/> </td>
                                        <td>{item.id_produto}</td>
                                        <td> {item.nm_produto}</td>
                                        <td> {item.ds_categoria}</td>
                                        <td> {item.vl_preco_por}</td>
                                        <td> {item.qtd_estoque}</td>
                                        <td className="coluna-acao"> <button onClick={() => alterar(item)} > <img src={edit} alt="" /> </button> </td>
                                        <td className="coluna-acao"> <button onClick={() => remover(item.id_produto)} > <img src={trash} alt="" /> </button> </td>
                                    </tr>
                                )}
                            <tbody>
                                
                            </tbody> 
                        </table>
                    </div>
                </div>
            </Conteudo>
        </Container>
    )
}

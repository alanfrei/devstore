
import Cabecalho from '../../components/cabecalho'
import Menu from '../../components/menu'
import { useEffect, useState } from 'react'
import { Container, Conteudo } from './styled'

import Api from '../../service/api'
const api = new Api()

export default function Index() {
    const[produtos, setProdutos]= useState([])
    
    console.log(produtos)
    async function listar(){
        let r = await api.listar();
        console.log(r)
        setProdutos(r)
    }

    useEffect(() =>{
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
                                    <div className="input"> <input  /> </div>  
                                </div> 
                                <div className="agp-input">
                                    <div className="number-product"> Categoria: </div>  
                                    <div className="input"> <input /> </div> 
                                </div>
                                <div className="agp-input">
                                    <div className="avaliacao-product"> Avaliação: </div>  
                                    <div className="input"> <input /> </div> 
                                </div>
                            </div>

                            <div className="input-right">
                                <div className="agp-input">
                                    <div className="preco-product2"> Preço De: </div>  
                                    <div className="input"> <input /> </div>  
                                </div>
                                <div className="agp-input">
                                    <div className="preco-product"> Preco Por: </div>  
                                    <div className="input"> <input /> </div> 
                                </div>
                                <div className="agp-input">
                                    <div className="estoque-product"> Estoque: </div>  
                                    <div className="input"> <input /> </div> 
                                </div>
                            </div>
                            
                            
                        </div>
                        <div className="img-desc">
                            <div className="agp-input">
                                <div className="img-product2"> link imagem: </div>  
                                <div className="img-product"> <input /> </div>  
                            </div>
                            <div className="agp-input">
                                <div className="desc-product"> Descrição: </div>  
                                <div className="input"> <textarea /> </div> 
                                <div className="button-create"> <button>Cadastrar</button> </div>
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
                    
                            <tbody>
                                
                            </tbody> 
                        </table>
                    </div>
                </div>
            </Conteudo>
        </Container>
    )
}

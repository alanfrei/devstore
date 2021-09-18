import styled from 'styled-components'

const Container = styled.div`

    display: flex;
    flex-direction: row;
    min-width: 100%;

    .new-product-box {
        display: flex;
        flex-direction: column;

        background-color: white;
        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
        padding: 2em;
            
    }

    .bar-new-product {
        border: 3px solid #119FDC;
        border-radius: .5em;
        margin-right: .4em;
        background-color: #119FDC;
    }

    .text-new-product {
        display: flex;
        flex-direction: row;

        font-size: 32px;
    }
    .text-new-product div {
        font-weight: bolder;
    }

    .input-new-product {
        display: flex;
        flex-direction: row;
        padding-top: 2.4em;
    }

    .agp-input {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .input {
        margin-top: .5em;
        margin-bottom: .5em;
    }

    .input textarea{
        width: 43em;
        height: 154px;

        background: #FFFFFF;
        border: 1px solid #A8A8A8;
        box-sizing: border-box;
        border-radius: 5px;
        padding-left: .5em;

        margin-left: .7em;
        margin-top: .5em;
        margin-bottom: .5em;
        resize: none;   
    }


    .input-left {
        display: flex;
        flex-direction: column;
        margin-right: 3em;
    }

    .input-right {
        display: flex;
        flex-direction: column;
        margin-bottom: 1em;
    }

    input {
        width: 209px;
        height: 36px;

        background: #FFFFFF;
        border: 1px solid #A8A8A8;
        box-sizing: border-box;
        border-radius: 5px;
        padding-left: .5em;
        

    }

    .name-product {
        font-size: 18px;
        color: #615858;
        width: 5.5em;
        padding-left: 1em;
        font-weight: 800;
    }


    .number-product {
        font-size: 18px;
        color: #615858;
        width: 5.5em;
        font-weight: 800;
        margin-left: 1em;
    }

    .avaliacao-product {
        font-size: 18px;
        color: #615858;
        margin-right: 0.8em;
        font-weight: 800;
        margin-left: .6em;
    }

    .estoque-product {
        font-size: 18px;
        color: #615858;
        margin-right: 0.8em;
        font-weight: 800;
        margin-left: .7em;
    }

    .preco-product {
        font-size: 18px;
        color: #615858;
        margin-right: 0.8em;
        font-weight: 800;
        margin-left: -0.2em;
    }

    .desc-product {
        font-size: 18px;
        color: #615858;
        margin-right: 0.8em;
        margin-bottom: 7em;
        font-weight: 800;
    }

    .corse-product {
        font-size: 18px;
        color: #615858;
        margin-right: 1em;
        font-weight: 800;
    }

    .preco-product2 {
        font-size: 18px;
        color: #615858;
        margin-right: 1em;
        font-weight: 800;
    }

    .img-product2 {
        font-size: 18px;
        color: #615858;
        margin-right: .5em;
        margin-left: -0.5em;
        font-weight: 800;
    }

    .img-product input{
        width: 43em;
    }


    .button-create {
        align-self: flex-end;
        justify-self: flex-end;
        padding-bottom: 1.5em;
    }

    .button-create  button {
        width: 106px;
        height: 36px;

        background: #E911C6;
        border-radius: 44px;
        border: none;
        color: white;
        font-size: 14px;
        margin-left: 2em;
        font-weight: bold;
    }

    .product-registered-box {
        display: flex;
        flex-direction: column;

        background-color: white;
        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
        padding: 2em;
        margin-top: 2em;
        
    }
    .text-registered-product {
        display: flex;
        flex-direction: row;
        font-weight: bolder;
        font-size: 32px;
        padding-left: .3em;
    }

    .row-bar {
        display: flex;
        flex-direction: row;
    }

    .information-purple {
        display: flex;
        flex-direction: row;
        background: #119FDC;
        width: 1454px;
        height: 67px;
        color: #FFFFFF;
        justify-content: space-evenly;
        margin-top: 2em;
        align-items: center;
        font-size: 18px ;
        margin-bottom: 1em;
    }



    .gray{
        width: 1454px;
        height: 61.93px;
        background: #F5F5F5;
        display: flex;
        flex-direction: row;
        
        align-items: center;
        font-size: 18px;
    }

    .white {
        width: 1454px;
        height: 61.93px;
        background: #FFFFFF;
        display: flex;
        flex-direction: row;
        
        align-items: center;
        font-size: 18px;
    }

    .box-information {
        border: 1px solid #E2E2E2;
    }

    .body-right-box {
        display: flex;
        flex-direction: column;

        background-color: #F5F5F5;

        height: 100%;
        padding: 3em;
        
        margin-bottom: 0em;
        margin-right: 0em;
    }


    .reader-right-box {
        margin-top: 0em;
        padding-right: 0em;
        
    }

    td button {
        border-radius: 50%;
        background-color: #565656;
        border: none;
        width: 31px;
        height: 31px;
    }
    
    .box-image {
        margin-right: 2em;
    }

    thead {
        background-color: #6CC3DF;
    }

    table {
        margin-top: 2em;
    }


    tbody {
        background-color: #F5F5F5;
    }

    td {
        text-align: left;
        height:  61.93px;
        padding: 1em;
        color: #6D6868;
        font-weight: 600;
    }

    th {
        height: 61.93px;
        text-align: left;
        padding: 1em;
        color: #ffff;
        font-weight: 800;
    } 
    
    .table-user {
        border-collapse: collapse;
    }

    .linha-alternada {
        background-color: #F5F5F5;
    }

    .coluna-acao {
        width: .1em;
    }

    .coluna-img img{
        width: 4em;
        height: 4em;
    }

    .coluna-acao > button{
        visibility: hidden;
        
    }

    tr:hover {
        .coluna-acao > button{
            visibility: visible;
            transition: 0.3s;
        }
    }



    button {
        cursor: pointer;

    }

    .button-create button{
        background-color: #119FDC;
    }

    .button-create button:hover {
        background-color: #0150DB;
        transition: 0.2s;
    }

    img {
        cursor: pointer;
    }

    .absolute {
        color: white;
        background-color: #119FDC;
        border: 3px solid white;
        border-radius: 50%;
        position: absolute;
        width: 20px;
        height: 20px;
        text-align: center;
        font-size: .7em;
    }

    .user-image {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        border-radius: 50%;
        
    }

    .user-image img {
        width: 57px;
        height: 57px;
        border-radius: 50%;
        height: 57px;
        
    }
`

const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export { Container, Conteudo }
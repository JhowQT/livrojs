import "./ItemLista.css"

const ItemLista = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.titulo}</td>
            <td>{props.autor}</td>
            <td>{props.ano}</td>
            <td class="text-center">
                <img src={props.foto} alt="Capa do Livro" width="75"/>
            </td>
            <td class="text-center">
                <i 
                    onClick={props.excluirClick()}
                    className="exclui text-danger fw-bold" 
                    title="Excluir">&#10008;
                </i>
                <i  
                    onClick={props.alterarClick}
                    className="altera text-success fw-bold ms-2" 
                    titulo="Alterar">&#36;
                </i>
            </td>
        </tr>
    );
};
export default ItemLista;
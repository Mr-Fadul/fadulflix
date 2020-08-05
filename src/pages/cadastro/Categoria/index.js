import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome:'',
    descricao:'',
    cor:'',
  }
  const [categorias, setCategorias] = useState([]);
  const  [values, setValues] = useState(valoresIniciais);
  function setValue(key, value){
    //key pode ser o nome, descricao ou a cor, ou demais campos 
    setValues({
      ...values,
     [key]: value,
    })
  }
  //console.log('[nomeDaCategoria]',nomeDaCategoria);
  function handlerChange(infoDoEvento){
    const {getAttribute, value} = infoDoEvento.target;
    setValue(
      infoDoEvento.target.getAttribute('name'),
      infoDoEvento.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form style={{background: values.cor }} onSubmit={function handleSubimit(infoDoEvento){
        infoDoEvento.preventDefault();
        console.log('enviar o form sem reload');
        setCategorias([
          ...categorias, // três pontinhos '...' faz com que todo o valor já existente na lista n seja apagado ou sobreposto
          values
        ]);
        setValues(valoresIniciais)
      }}>

      <FormField 
        component="input"
        label="Nome da Categoria"
        type='text'
        name='nome'
        value={values.nome}
        onChange={handlerChange} 

      />
      <FormField 
        component="textarea"
        label="Descrição"
        type="text"
        name="descricao"
        value={values.descricao}
        onChange={handlerChange} 

      />
      <FormField 
        component="input"
        label="Cor"
        type='color'
        name='cor'
        value={values.cor}
        onChange={handlerChange} 

      />

        <button>
          Cadastrar
        </button>
      </form>
      <ul>
      {categorias.map((categoria, indice) => {
        return (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
          </li>
        )
      })}         
      </ul>  

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;
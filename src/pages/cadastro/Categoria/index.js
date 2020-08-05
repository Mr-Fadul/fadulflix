/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  function setValue(key, value) {
    // key pode ser o nome, descricao ou a cor, ou demais campos
    setValues({
      ...values,
      [key]: value,
    });
  }
  // console.log('[nomeDaCategoria]',nomeDaCategoria);
  function handlerChange(infoDoEvento) {
    // const { getAttribute, value } = infoDoEvento.target;
    setValue(
      infoDoEvento.target.getAttribute('name'),
      infoDoEvento.target.value,
    );
  }

  useEffect(() => {
    // console.log('alo alo w brasil');
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias' : 'https://fadulflix.herokuapp.com/categorias';
    fetch(URL_TOP)
      .then(async (retorno) => {
        const resposta = await retorno.json();
        // console.log(resposta);
        setCategorias([
          ...resposta,
        ]);
      });
    // setTimeout(() => {
    //   setCategorias([
    //     // '...' faz com que todo o valor já existente na lista n seja apagado ou sobreposto
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front End',
    //       descricao: 'Uma categoria show de bola',
    //       cor: '#cbd1ff',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back End',
    //       descricao: 'Uma categoria mais show de bola ainda',
    //       cor: '#cbd1ff',
    //     },
    //   ]);
    // }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form
        style={{ background: values.cor }}
        onSubmit={function handleSubimit(infoDoEvento) {
          infoDoEvento.preventDefault();
          // console.log('enviar o form sem reload');
          setCategorias([
            ...categorias, // três pontinhos '...' faz com que todo o valor já existente na lista n seja apagado ou sobreposto
            values,
          ]);
          setValues(valoresIniciais);
        }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handlerChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handlerChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handlerChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>
      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;

/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handlerChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);
  // console.log(categorias);
  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form
        onSubmit={function handleSubimit(infoDoEvento) {
          infoDoEvento.preventDefault();
          // console.log('enviar o form sem reload');
          categoriasRepository.create({
            titulo: values.titulo,
            descricao: values.descricao,
            cor: values.cor,
          }).then(() => {
            setCategorias([
              ...categorias,
              values,
            ]);
            clearForm();
          });
        }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
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
        <Button as={Link} className="ButtonLink" to="/" style={{ float: 'right' }}>
          Ir para home
        </Button>
      </form>

      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}

      {/* <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul> */}
      <div style={{ padding: '20px' }}>
        <table style={{ border: 'solid', width: '100%' }}>
          <thead>
            <th>Id</th>
            <th>Cor</th>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Edit</th>
            <th>Del</th>
          </thead>
          <tbody>
            {categorias.map((categoria, indice) => (
              <tr key={`${categoria}${indice}`}>
                <td>{categoria.id}</td>
                <td><input type="color" value={categoria.cor} readOnly /></td>
                <td>{categoria.titulo}</td>
                <td>{categoria.descricao}</td>
                <td><FontAwesomeIcon icon="edit" className="edit" /></td>
                <td>x</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageDefault>
  );
}

export default CadastroCategoria;

/* eslint-disable linebreak-style */
import { useState } from 'react';

function useForm(valoresIniciais) {
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
  // limpa o formulario
  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handlerChange,
    clearForm,
  };
}

export default useForm;

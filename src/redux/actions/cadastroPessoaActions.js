import { CADASTRO_POSSOA_ACTION } from './types/cadastroPessoaTypes';

export function cadastroPessoaAction(){

  return dispatch => {

    dispatch({
      type: CADASTRO_POSSOA_ACTION,
      result: 'cadastrando pessoa.'
    });

    return new Promise((resolve, reject) => {

      setTimeout(() => {

        resolve(true);

      }, 2000);

    });

  }

}

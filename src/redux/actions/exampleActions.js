import {EXAMPE_ACTION} from './types/exampleTypes';

export function exampleAction(){

  return dispatch => {

    dispatch({
      type: EXAMPE_ACTION,
      result: 'estamos sinalizando no estado geral que algo está acontecendo.'
    });

    return new Promise((resolve, reject) => {

      setTimeout(() => {

        resolve(true);

      }, 2000);

    });

  }

}

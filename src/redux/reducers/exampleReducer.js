import {EXAMPE_ACTION} from '../actions/types/exampleTypes';

const inicialState = {exampleParamInState: 'some-value'};

export default function (state = inicialState, action) {

  switch (action.type) {

    // O reducer é sinalizado de que algo está acontecendo (algo do tipo EXAMPLE_ACTION), então ele toma a ação de utilizar os dados recebidos, e alterar
    // o estado geral da aplicação.
    case EXAMPE_ACTION:

      return {
        ...state,
        exampleParamInState: action.result
      };

      break;

    default:
      return state;

  }

}

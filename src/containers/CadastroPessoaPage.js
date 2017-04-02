import React from 'react';
import PageBase from '../components/PageBase';
import CadastroPessoaForm from '../components/cadastroPessoa/CadastroPessoaForm';
import { cadastroPessoaAction } from '../redux/actions/cadastroPessoaActions';

import {connect} from 'react-redux';

@connect(state => {
  return {
    cadastroPessoaForm: state.form.CadastroPessoaForm
  }
}, {cadastroPessoaAction})
export class CadastroPessoaPage extends React.Component {

  static propTypes = {
    cadastroPessoaAction: React.PropTypes.func.isRequired
  };

  constructor(props){
    super(props);
    this.onFormCancel = this.onFormCancel.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormCancel(){

  }

  onFormSubmit(formValues) {

    this.props.cadastroPessoaAction(formValues).then(() => {
      alert(formValues.nome + ' cadastada com sucesso');
    });

  }

  render() {

    let title = 'Formulário de Cadastro de Pessoa';
    let navigationTitle =  'Aplicação / Formulário de Cadastro de Pessoa';

    return (
      <PageBase title={title}
                navigation={navigationTitle}>

        <CadastroPessoaForm onCancel={this.onFormCancel} onSubmit={this.onFormSubmit} />

      </PageBase>
    );

  }

}

export default CadastroPessoaPage;

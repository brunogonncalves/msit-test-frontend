import React from 'react';
import PageBase from '../components/PageBase';
import ExampleForm from '../components/example/ExampleForm';
import {exampleAction} from '../redux/actions/exampleActions';

import {connect} from 'react-redux';

@connect(state => {
  return {
    exampleForm: state.form.ExampleForm
  }
}, {exampleAction})
export class ExamplePage extends React.Component {

  static propTypes = {
    exampleAction: React.PropTypes.func.isRequired
  };

  constructor(props){
    super(props);
    this.onFormCancel = this.onFormCancel.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormCancel(){

  }

  onFormSubmit(formValues) {

    this.props.exampleAction(formValues).then(() => {
      alert('formulário enviado');
    });

  }

  render() {

    let title = 'Formulário de Exemplo';
    let navigationTitle =  'Aplicação / Formulário de Exemplo';

    return (
      <PageBase title={title}
                navigation={navigationTitle}>

        <ExampleForm onCancel={this.onFormCancel} onSubmit={this.onFormSubmit}/>

      </PageBase>
    );

  }

}

export default ExamplePage;

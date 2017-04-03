import React from 'react';
import {Field, reduxForm, change} from 'redux-form';
import { TextField, Checkbox, DatePicker } from 'redux-form-material-ui';
import { FlatButton } from 'material-ui';

let DateTimeFormat = global.Intl.DateTimeFormat;
const validate = values => {
  const errors = {};
  const requiredFields = ['nome','dataNascimento'];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Este campo é obrigatório';
    }
  });

  return errors
};

const form = reduxForm({
  form: 'CadastroPessoaForm',
  destroyOnUnmount: false,
  fields: ['nome','dataNascimento', 'trabalhador'],
  validate
});

@form
export default class CadastroPessoaForm extends React.Component {

  static propTypes = {
    onCancel: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired
  };

  constructor(props) {

    super(props);

    this.handleClose = this.handleClose.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);

  }

  handleClose() {

    this.props.reset();

    if (this.props.onCancel) {
      this.props.onCancel();
    }

  }

  onSubmit(values){
    this.props.onSubmit(values);
  }

  onCancel(){
    this.handleClose();
    this.props.onCancel();
  }

  componentDidMount(){
    this.props.reset();
    this.props.initialize({
      nome: 'Mariana Aparecida de Miranda Barros'
    });
  }

  render() {

    const {handleSubmit, pristine, submitting, valid} = this.props;

    return (
      <div>

        <form>

          <div>
            <Field name="nome"
                   component={TextField}
                   hintText="Nome"
                   floatingLabelText="Nome"
                   fullWidth={true}
                   disabled={false} />
          </div>
          <div>
            <Field name="dataNascimento"
                  component={DatePicker}
                  floatingLabelText="Data Nascimento"
                  DateTimeFormat={DateTimeFormat}
                  format={null}
                  locale="pt-BR"
                  formatDate={new DateTimeFormat('pt-BR', {
                                                              day: 'numeric',
                                                              month: 'long',
                                                              year: 'numeric',}).format}
                  hintText="Data Nascimento"
                  fullWidth={true}
                  disabled={false} />

          </div>
          <div>
              <Field name="trabalhador"
                     component={Checkbox}
                     label="Trabalhador?"
                     disabled={false} />
          </div>

          <div style={{float: 'right'}}>
            <FlatButton
              label="Cancelar"
              primary={true}
              onTouchTap={this.onCancel}
              disabled={false}
            />

            <FlatButton
              label="Concluir"
              primary={true}
              keyboardFocused={true}
              onTouchTap={handleSubmit(this.onSubmit)}
              disabled={pristine || submitting || !valid}
            />
          </div>

        </form>

      </div>
    )
  }

}

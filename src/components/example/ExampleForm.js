import React from 'react';
import {Field, reduxForm, change} from 'redux-form';
import {
  TextField
} from 'redux-form-material-ui';
import {
  FlatButton
} from 'material-ui';

const validate = values => {
  const errors = {};
  const requiredFields = ['example_field'];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Este campo é obrigatório';
    }
  });

  return errors
};

const form = reduxForm({
  form: 'ExampleForm',
  destroyOnUnmount: false,
  fields: ['example_field'],
  validate
});

@form
export default class ExampleForm extends React.Component {

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
      example_field: 'Valor inicial de exemplo'
    });
  }

  render() {

    const {handleSubmit, pristine, submitting, valid} = this.props;

    return (
      <div>

        <form>

          <div>
            <Field name="example_field"
                   component={TextField}
                   hintText="Nome"
                   floatingLabelText="Nome"
                   fullWidth={true}
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


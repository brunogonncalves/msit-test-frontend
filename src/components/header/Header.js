import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import {white} from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';

class Header extends React.Component {

  static propTypes = {
    styles: PropTypes.object,
    handleChangeRequestNavDrawer: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      logoutModalOpen: false
    };
    this.onLogout = this.onLogout.bind(this);
    this.handleClose = this.handleClose.bind(this);

  }

  onLogout() {

    alert('sair');

  }

  handleClose(){
    this.setState({
      logoutModalOpen: false
    })
  }

  render() {
    const {styles, handleChangeRequestNavDrawer} = this.props;

    const style = {
      appBar: {
        position: 'fixed',
        top: 0,
        overflow: 'hidden',
        maxHeight: 57
      },
      menuButton: {
        marginLeft: 10
      },
      iconsRightContainer: {
        marginLeft: 20
      }
    };

    const logoutActions = [
      <FlatButton
        label="Não"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Sim"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.onLogout}
      />,
    ];

    return (
      <div>
        <AppBar
          style={{...styles, ...style.appBar}}
          title="Test Frontend React"
          iconElementLeft={
            <IconButton style={style.menuButton} onClick={handleChangeRequestNavDrawer}>
              <Menu color={white}/>
            </IconButton>
          }
        />
        <Dialog
          title="Atenção"
          actions={logoutActions}
          modal={false}
          open={this.state.logoutModalOpen}
          onRequestClose={this.handleClose}
        >
          Deseja realmente sair do sistema ?
        </Dialog>
      </div>
    );
  }
}

export default Header;

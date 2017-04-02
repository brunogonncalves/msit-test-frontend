import React from 'react';
import Drawer from 'material-ui/Drawer';
import {spacing, typography} from 'material-ui/styles';
import {blue600, darkBlack} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import {withRouter} from 'react-router';
import {List, ListItem, Subheader} from 'material-ui';

@withRouter
class LeftDrawer extends React.Component {

  static propTypes = {
    navDrawerOpen: React.PropTypes.bool,
    menus: React.PropTypes.array,
    username: React.PropTypes.string
  };

  constructor(props) {
    super(props);

    this.onClickItem = this.onClickItem.bind(this);

    this.styles = {
      logo: {
        cursor: 'pointer',
        fontSize: 22,
        color: typography.textFullWhite,
        lineHeight: `${spacing.desktopKeylineIncrement}px`,
        fontWeight: typography.fontWeightLight,
        backgroundColor: blue600,
        paddingLeft: 40,
        height: 56,
      },
      menuItem: {
        color: darkBlack,
        fontSize: 14
      },
      avatar: {
        div: {
          padding: '15px 0 20px 15px',
          backgroundImage: 'url(' + require('../images/material_bg.png') + ')',
          height: 45
        },
        icon: {
          float: 'left',
          display: 'block',
          marginRight: 15,
          boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
        },
        span: {
          paddingTop: 12,
          display: 'block',
          color: 'white',
          fontWeight: 300,
          textShadow: '1px 1px #444'
        }
      }
    };

  }

  onClickItem(route){
    this.props.router.push(route);
  }

  render() {

    return (
      <Drawer
        docked={true}
        open={this.props.navDrawerOpen}>
        <div style={this.styles.logo}>
          Test Frontend React
        </div>
        <div style={this.styles.avatar.div}>
          <Avatar src="http://www.material-ui.com/images/uxceo-128.jpg"
                  size={50}
                  style={this.styles.avatar.icon}/>
          <span style={this.styles.avatar.span}>Teste</span>
        </div>

        <List>
          <Subheader>Menu</Subheader>
          <ListItem primaryText="Home" onClick={() => this.onClickItem('/')}/>
          <ListItem primaryText="Formulário de Exemplo" onClick={() => this.onClickItem('/example-page')}/>
          <ListItem primaryText="Cadastro de Pessoas" onClick={() => this.onClickItem('/cadastro-pessoa-page')}/>
        </List>

      </Drawer>
    )
  }

}

export default LeftDrawer;

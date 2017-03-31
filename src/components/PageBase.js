import React from 'react';
import {
  Paper,
  Divider
} from 'material-ui';
import globalStyles from '../styles';

class PageBase extends React.Component {

  static PropTypes = {
    title: React.PropTypes.string,
    navigation: React.PropTypes.string,
    children: React.PropTypes.element
  };

  render() {
    const {title, navigation} = this.props;

    return (
      <div>
        <span style={globalStyles.navigation}>{navigation}</span>

        <Paper id="paper" style={globalStyles.paper} ref={(el) => this.paper = el}>
          <h3 style={globalStyles.title}>{title}</h3>

          <Divider/>
          {this.props.children}

          <div style={globalStyles.clear}/>

        </Paper>

      </div>
    );
  }

}

export default PageBase;

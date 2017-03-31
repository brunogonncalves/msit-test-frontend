import {typography} from 'material-ui/styles';
import {grey600} from 'material-ui/styles/colors';

const styles = {
  tableList: {
    height: '63vh'
  },
  modal: {
    fullscreen: {
      overflowX: 'hidden',
      overflowY: 'auto'
    },
    fullWidth: {
      width: '98%',
      maxWidth: 'none'
    },
    content: {
      minHeight: 600
    }
  },
  navigation: {
    fontSize: 15,
    fontWeight: typography.fontWeightLight,
    color: grey600,
    paddingBottom: 15,
    display: 'block'
  },
  title: {
    fontSize: 24,
    fontWeight: typography.fontWeightLight,
    marginBottom: 20
  },
  paper: {
    padding: 30,
    position: 'relative',
    height: '79vh',
    overflowY: 'auto'
  },
  clear: {
    clear: 'both'
  },
  floatingActionButton: {
    margin: 0,
    top: 125,
    left: 'auto',
    right: 25,
    position: 'fixed',
  }
};

export default styles;

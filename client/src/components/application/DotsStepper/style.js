import { makeStyles } from '@material-ui/core/styles';

const dotStyle = makeStyles((theme) => ({
  steper: {
    width: '1009px',
    height: '751px',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 9px #00000033',
    borderRadius: '5px',
  },
  content: {
    padding: '92px 42px 41px 92px',
    width: '926px',
    height: '384px',
  },
  buttons: {
    display: 'flex',
    padding: '2rem',
    justifyContent: 'flex-end',
  },
  buttonNext: {
    width: '210px',
    margin: '.5rem',
    height: '60px',
    background: '#ED6D23 0% 0% no-repeat padding-box',
    borderRadius: '5px',
  },
  buttonBack: {
    width: '210px',
    margin: '.5rem',
    height: '60px',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    border: '1px solid #ED6D23',
    borderRadius: '5px',
  },

  dots: {
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default dotStyle;

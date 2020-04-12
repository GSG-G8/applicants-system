import { makeStyles } from '@material-ui/core/styles';

const dotStyle = makeStyles((theme) => ({
  steper: {
    width: '63rem',
    height: '47rem',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 9px #00000033',
    borderRadius: '5px',
  },
  content: {
    padding: '5.75rem 2.6rem 2.6rem 5.75rem',
    width: '57.8rem',
    height: '24rem',
  },
  buttons: {
    display: 'flex',
    padding: '2rem',
    justifyContent: 'flex-end',
  },
  buttonNext: {
    width: '13rem',
    margin: '.5rem',
    height: '3.75rem',
    background: '#ED6D23 0% 0% no-repeat padding-box',
    borderRadius: '5px',
  },
  buttonBack: {
    width: '13rem',
    margin: '.5rem',
    height: '3.75rem',
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

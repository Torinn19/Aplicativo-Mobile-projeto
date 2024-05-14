import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f5f5'
  },

  containerLogo: {
    flex: 1,
    justifyContent: 'center'
  },

  /*
  logo: {
    width: 170,
    height: 195
  },
  */

  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 25
  },

  input: {
    backgroundColor: '#a63030',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 22,
    borderRadius: 7,
    padding: 10
  },

  buttonSubmit: {
    backgroundColor: '#a63030',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },

  submitText: {
    color: '#f7f5f5',
    fontSize: 19
  },

  buttonRegister: {
    marginTop: 10
  },

  registerText: {
    color: '#050505'
  }
});
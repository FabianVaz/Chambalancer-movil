import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#005DFF',
    padding: 15,
    alignItems: 'flex-start',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#005DFF',
    marginBottom: 10,
    marginLeft: 15,
  },
  email: {
    fontSize: 16,
    color: '#B3B3B3',
    marginBottom: 20,
    marginLeft: 15,
  },
  screenText: {
    fontSize: 18,
    marginBottom: 20,
    marginLeft: 15,
  },
  phoneNumber: {
    fontSize: 16,
    color: '#B3B3B3',
    marginBottom: 20,
    marginLeft: 15,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#B3B3B3',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    width: '80%',
    marginTop: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#005DFF',
    marginBottom: 40,
    textAlign: 'center',
    margin: 15,  // Añadir separación de 15px
  },
});


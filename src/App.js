import './scss/App.scss';
import FormAddUser from './components/form/FormAddUser';
import UsersList from './components/usersList/UsersList';
import Header from './components/header/Header';

function App() {

  return (
    <div className='app'>
      < div className='conteiner'>
        <Header />
        <UsersList />
      </div>
      <FormAddUser />
    </div>
  )
}

export default App;

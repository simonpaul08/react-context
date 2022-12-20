
import { createContext, useState } from 'react';
import Header from './components/Header/Header'
import Form from './scenes/Form';


export const UsernameContext = createContext({
  username: 'bob',
  setUsername: () => {}
})

function App() {

  const [username, setUsername] = useState('bob')

  return (
    <UsernameContext.Provider value={{ username, setUsername }}>
      <Header />
      <Form />
    </UsernameContext.Provider>
  );
}

export default App;

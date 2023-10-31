// App.jsx
import { useState } from 'react';
import './App.css';
import FormAddMoney from './components/FormAddMoney';
import Header from './components/Header';
import MainControl from './components/MainControl';
import LoginForm from './components/LoginForm';

function App() {
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(false);

  return (
    <div className="App">
      <Header />

      {isValid ? (
        <>
          <MainControl count={count} />
          <FormAddMoney setCount={setCount} />
        </>
      ) : (
        <LoginForm setIsValid={setIsValid} />
      )}
    </div>
  );
}

export default App;
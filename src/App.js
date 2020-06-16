import React from 'react';
import {Provider} from 'react-redux'
import generateStore from './redux/store'
import Layout from './components/Layout';
import Tableros from './pages/Tableros';


function App() {
  const store = generateStore()
  return (
    <Provider store={store}>
      <Layout >
        <Tableros />
      </Layout>
  </Provider>
  );
}

export default App;

import {Provider} from 'react-redux';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import Error404 from "containers/errors/Error404";
import home from "containers/pages/home";





function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          {/* Error display  */}
          <Route path='*' element={Error404}/>

          <Route path='/' element={home} />

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

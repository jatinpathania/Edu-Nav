import { Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import Store from './components/SagaRedux/Store'
import PersistentAuth from './util/PersistentAuth'
import ProtectedRoute from './util/ProtectedRoute'
import MainLayout from './components/MainLayout/MainLayout';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login'

const App = () => {
  return (
    <Provider store={Store}>
      <PersistentAuth>
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          {/* <Route path="/aboutus" element={<MainLayout><AboutUs /></MainLayout>} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <MainLayout><Dashboard /></MainLayout>
              </ProtectedRoute>
            } 
          />
        </Routes>
      </PersistentAuth>
    </Provider>
  );
};

export default App;
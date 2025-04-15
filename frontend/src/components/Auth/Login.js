import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
            localStorage.setItem('token', response.data.token);
            alert('Login successful!');
        } catch (err) {
            setError('Invalid email or password.');
        }
    };

    return (
        <div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-6 col-lg-4">
      <div className="card shadow-sm border-0 rounded-4">
        <div className="card-body p-4 p-md-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-primary">Welcome Back</h2>
            <p className="text-muted">Please enter your credentials</p>
          </div>
          
          {error && <div className="alert alert-danger alert-dismissible fade show">
            {error}
            <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
          </div>}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="loginEmail" className="form-label">Email Address</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-envelope"></i>
                </span>
                <input 
                  type="email" 
                  className="form-control py-2" 
                  id="loginEmail" 
                  placeholder="your@email.com"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="loginPassword" className="form-label">Password</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-lock"></i>
                </span>
                <input 
                  type="password" 
                  className="form-control py-2" 
                  id="loginPassword" 
                  placeholder="••••••••"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>
              <div className="text-end mt-2">
                <a href="/" className="text-decoration-none small">Forgot password?</a>
              </div>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary w-100 py-2 mb-3 fw-semibold"
            >
              Sign In
            </button>
            
            <div className="text-center mt-4">
              <p className="text-muted">Don't have an account? 
                <a href="/Register" className="text-decoration-none ms-1 fw-semibold">Sign up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;






// import React, { useState, useContext } from 'react';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import { AuthContext } from '../../context/AuthContext';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState(null);
//     const { setAuth } = useContext(AuthContext);
//     const history = useHistory();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError(null);

//         try {
//             const response = await axios.post('/api/login', { email, password });
//             setAuth(response.data);
//             history.push('/tasks');
//         } catch (err) {
//             setError('Invalid email or password');
//         }
//     };

//     return (
//         <div className="login-container">
//             <h2>Login</h2>
//             {error && <p className="error">{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="email">Email</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;
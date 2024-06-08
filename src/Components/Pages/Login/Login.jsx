import React from 'react'

import './Login.css'

const Login = () => {
  // const [userEmailInput, setUserEmailInput] = useState('')
  // const [userPasswordInput, setUserPasswordInput] = useState('')
  // const [errorMessage, setErrorMessage] = useState('')

  // useEffect(() => {
  //   if (userEmailInput.includes('')) {
  //     setErrorMessage('This is not an Email format')
  //   } else {
  //     setErrorMessage('')
  //   }
  // }, [userEmailInput])

  // const handleSubmit = (e) => {
  //   e.preventDefault('')
  // }

  return (
    <body>
      <div>
        <div className="login-container">
          <div className="login-card">
            <img
              src="/public/assets/img/mic2.JPG"
              alt="Logo-img"
              className="login-logo-img"
            />
            <h1>Podcast Voting</h1>
            <form
              className="Login"
              // onSubmit={handleSubmit}
            >
              <div className="input-group">
                <label
                //  htmlFor="email"
                >
                  Email
                </label>
                <input
                  // value={userEmailInput}
                  // placeholder="Please insert Email"
                  type="email"
                  // onchange={(e) => setUserEmailInput(e.target.value)}
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="input-group">
                <label
                //  htmlFor="password"
                >
                  Password
                </label>
                <input
                  // value={userPasswordInput}
                  type="password"
                  // onchange={(e) => setUserPasswordInput(e.target.value)}
                  id="password"
                  name="password"
                  // placeholder="Please insert PassWord "
                  required
                />
              </div>
              {/* {errorMessage && <h3>{errorMessage}</h3>} */}
              <button type="submit" className="login-button weave">
                Login
              </button>
            </form>
          </div>
          {/* {isLoading && <Spinner />} */}
        </div>
      </div>
    </body>
  )
}

export default Login

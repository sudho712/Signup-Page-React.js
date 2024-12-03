import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logo-box">
        <img src="./twitter.png" alt="Twitter logo" />
        <img src="../twitter/logo/apple.png" alt="Apple logo" />
        <h2>Sign In Twitter</h2>
        <button>
          <img src="./google.png" alt="" />
          Sign in with  google
        </button>
        <button>
          <img src="./apple.png" alt="" />
          Sign in with  google
        </button>
       <hr></hr><span>Or</span>
       <form>
        <input type="text" placeholder="Phone or username" />
        <button>Next</button>
       </form>
       
       <button>Forget Password</button>
       <p>Don't Have account <a>Signup</a> </p>
      </div>
    </div>
  );
}

export default App;

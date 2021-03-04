import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="main">
      <div class="form">
        <input type="text" name="name" autocomplete="off" required></input>
        <label for="name" class="label-name">
          <span class="content-name">Name</span>
        </label>
        <a href="#gallary">click</a>
      </div>
    </div>
  );
}

export default App;

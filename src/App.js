import logo from './logo.svg';
import './App.css';
import './style.css'

function App() {
  return (
    <div>
      <header>
        <meta charSet="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Simple Game Using Html and CSS only</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
      </header>
      <body>
        <div class='background'>
          <i class="fa-solid fa-van-shuttle"></i>
          <i class="fa-solid fa-motorcycle motor1" style={{"--i": 1}}></i>
          <i class="fa-solid fa-motorcycle motor2" style={{"--i": 3}}></i>
          <i class="fa-solid fa-cloud" style={{"--i": 1}}></i>
          <i class="fa-solid fa-cloud" style={{"--i": 2}}></i>
          <i class="fa-solid fa-cloud" style={{"--i": 3}}></i>
          <i class="fa-solid fa-cloud" style={{"--i": 4}}></i>
          <i class="fa-solid fa-cloud" style={{"--i": 5}}></i>
          <i class="fa-solid fa-tree" style={{"--i": 1}}></i>
          <i class="fa-solid fa-tree" style={{"--i": 2}}></i>
          <i class="fa-solid fa-tree" style={{"--i": 3}}></i>
          <i class="fa-solid fa-tree" style={{"--i": 4}}></i>
          <i class="fa-solid fa-tree" style={{"--i": 5}}></i>
          <i class="fa-solid fa-tree" style={{"--i": 6}}></i>
          <i class="fa-solid fa-tree" style={{"--i": 7}}></i>
          <i class="fa-solid fa-mountain" style={{"--i": 1}}></i>
          <i class="fa-solid fa-mountain" style={{"--i": 2}}></i>
          <i class="fa-solid fa-mountain" style={{"--i": 3}}></i>
          <div class='sun'></div>
          <div class='road'></div>
        </div>
      </body>
    </div>
  );
}

export default App;

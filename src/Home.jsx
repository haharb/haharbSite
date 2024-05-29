import './App.css';
import './Header.css';
import './Footer.css';
import './DarkMode.css';
import './LightMode.css';
import './SideMenu.css';
import Header from './Header';

function Home() {
  return (

    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="App.css" />
      <title>HaHarb</title>
    </head>
      <div className="tab-content">
        <h2>Hello World</h2>
        <p>Feel free to explore the different tabs</p>
        <p>Details about my projects...</p>
      </div>
      
  </html>
);
}

export default Home;

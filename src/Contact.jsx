import './App.css';
import './Header.css';
import './Footer.css';
import './DarkMode.css';
import './LightMode.css';
import './SideMenu.css';
import Header from './Header';

function Contact() {
    return (

        <body>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="App.css" />
          <title>Projects</title>
        </head>
          <div className="tab-content">
            <h2>SDR: Scuba Dive Log Record Keeping</h2>
            <p>Details about my projects...</p>
          </div>
      </body>
    );
}

export default Contact;

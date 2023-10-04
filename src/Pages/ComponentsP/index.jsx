import { Link } from "react-router-dom";
import './index.css'

const ComponentsP = () => {
  return (
    <div id="components">
      <h1 className="h1">Components</h1>
      <div className="text">
        Components are simlair to JavaScript functions. They are reusable pieces
        of code that will return a HTML element form to the application. Component folders are
        nested in the Source folder (src). They are written in Pascal form and are
        self closing. Writen as fucntions, they have several parts to
        them. Import section is on the top of the function, where you import libraries you're using as well as hooks. The area between the
        start of the function and the return section are where you would place
        your state items. Components always rerender once state has been
        changed/updated This area also contains function handles in the return
        section. Ie on change, handleChange. In the same area, you can use
        JavaScript. Inside the return section of the component is what is seen
        on the DOM. In this area only JSX will work unless JavaScript is place
        in {} curly brackets. Components can use props, hooks, and links. Each
        component can have it's own CSS file, just remember to import it!
        Components can be stand alone functions but can also serve as PagesLINK
        when property linked. One shortcut when creating a component is using
        "rface" it stands for React Function
      </div>
      <div className="title" id="buttongrid">Click on these buttons to see different types of Components:
      <br/>
      <div className="buttons">
      <Link to="/helloworld">
        <button>Hello World!</button>
      </Link>
      <Link to="/handleClick">
        <button>Event Listeners</button>
      </Link>
      <Link to="/ChangeColor">
        <button>Change Classes</button>
      </Link>
      
      <Link to="/counter">
        <button>Counter</button>
      </Link>
      <Link to="/list">
        <button>List Items </button>
      </Link>
      <Link to="/inputform">
        <button>Input Form</button>
      </Link>
      <Link to="/toggle">
        <button>Toggle</button>
      </Link>
      <Link to="/newsticker">
        <button>News Ticker</button>
      </Link>
      <Link to="/ratereview">
        <button>Rate / Review</button>
      </Link>
      <Link to="/imagecarousel">
        <button>Image Carousel</button>
      </Link>
      <Link to="/quizcard">
        <button>Multiple Choice </button>
      </Link>
      <Link to="/arrays">
        <button>Arrays</button>
      </Link>
      <Link to="/localstorge">
        <button>Local Storage</button>
      </Link>
      <Link to="/propsc">
        <button>Props </button>
      </Link>
      <Link to="/api">
        <button>APIs</button>
      </Link>
      <Link to="/trafficlight">
        <button>Traffic Light</button>
      </Link>
      <Link to="/Emjois">
        <button>Emjois</button>
      </Link>
      </div>
      </div>
    </div>
  );
};

export default ComponentsP;

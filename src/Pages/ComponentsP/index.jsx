import { Link } from "react-router-dom";

const ComponentsP = () => {
  return (
    <div id="components">
      <h1>Components</h1>
      <div>
        Components are simlair to JavaSrcipt functions. They are reusable pieces
        of code that return HTML to the application. Component folders are
        nested in the Source folder or "src". They are written in Pascal and are
        self closing when used. Writen as fucntions they have several parts to
        them. Import section is on the top of the function. The area between the
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
      <div id="buttongrid">Click on these buttons to see different types of Components:
      <Link to="/helloworld">
        <button>Hello World!</button>
      </Link>
      <Link to="/handleClick">
        <button>Event Listeners</button>
      </Link>
      <Link to="/ChangeColor">
        <button>Change Background Color</button>
      </Link>
      
      <Link to="/counter">
        <button>Counter</button>
      </Link>
      <Link to="/randomvariable">
        <button>Random variable</button>
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
      <Link to="/imagecarosal">
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
  );
};

export default ComponentsP;

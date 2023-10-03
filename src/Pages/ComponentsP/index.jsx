import {Link} from 'react-router-dom'

const ComponentsP = () => {
  return (
   <>
   <h1>Components</h1>
    <div>Components are simlair to JavaSrcipt functions. They are reusable pieces of code that return HTML to the application.
      Component folders are nested in the Source folder or "src". They are written in Pascal and are self closing when used. Writen as fucntions they have several parts to them.  Import section is on the top of the function. The area between the start of the function and the return section are where you would place your state items. Components always rerender once state has been changed/updated This area also contains function handles in the return section. Ie on change, handleChange. In the same area, you can use JavaScript. Inside the return section of the component is what is seen on the DOM. In this area only JSX will work unless JavaScript is place in {} curly brackets. Components can use props, hooks, and links. Each component can have it's own CSS file, just remember to import it! Components can be stand alone functions but can also serve as PagesLINK when property linked. One shortcut when creating a component is using "rface" it stands for React Function 
    </div>
    
   Click on these buttons to see different types of Components:

   <Link to="/HelloWorld"><button>Hello World!</button></Link>
   
   <Link to="/ChangeColor"><button>Change Background Color</button></Link>
   
   <Link to="/HandleClick"><button>Event Listeners</button></Link>
   handleClick
   make a counter morning lab
   random name/ color morning lab
   input form 
   toggle theme
   news ticker
   rate review
   image carousel
   quiz card
   renders a list 
   add to a list/ array morning lab
   fetch data react lab2 #4
   props react morning 6?
   api?
   traffic light
   emjoi component


   </>
  )
}

export default ComponentsP
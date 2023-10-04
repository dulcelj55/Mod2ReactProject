import React from "react";

const StartUp = () => {
  return (
    <>
      <div>
        <h1>How to Start a Project</h1>
        <h4>
          There are many ways to create an appilcaiton in React but the most
          common is using a library called Vite. Here are the steps:
        </h4>
      

      <div className="steps">
        1. In your terminal type: npm create vite@latest projectname
        <br />
        2. confirm your project folder Name
        <br />
        3. Choose React and JavaScript SWC when prompted
        <br />
        4. At this point you want to open your project either using "code ." or
        opening in VSCode.
        <br />
        5. In terminal type: npm install
        <br />
        6. Vite has it's own material in App.jsx and Index.css. Feel free to
        make changes to the HTML title, update/ clear App.jsx App.
        <br />
        7. In the terminal you can see your project by typing: npm run dev.
        (Make sure you are in the right folder)This makes a http link that by
        holding the command and click button will show up in the broswer.
        <br />
        8. Here is where you can create you project now.
        <br />
        9. Towards the end of your project in the terminal type: npm run build.
        This will give your project a dist folder. This is how the browser reads
        your final project.
      </div>
      </div>
    </>
  );
};

export default StartUp;

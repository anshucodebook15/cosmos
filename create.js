import readline from "node:readline";
import fs from "node:fs";
import path from "node:path";

// 1. Take Input from cmd
/**
 * Return
 *
 * 1. Take input from Done
 * 2. Check the current directory
 * 3.
 * 2. check if folder exits
 *
 *
 */

// Prebuild Fns
const ReactCompBP = (component) => {
  return `
import React from 'react'
import './${component}.scss'

const ${component} = () => {
  return (
    <div className='${component}'>
    <h2>${component} </h2>
    </div>
  )
}

export default ${component}`;
};

const ReactCompStyleSheet = (component) => {
  return `
.${component}{
  color: black;

   @media only screen and (max-width: 600px) {
   
  }
}
  `;
};

const CreateFile = (file, data) => {
  fs.appendFileSync(file, data, (err) => {
    if (err) {
      console.log("Somthing Went Wrong");
    }
  });

  return;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isSrcExits = process.cwd() + `/src`;

const InComponentToBeCreate = (folder) => {
  return process.cwd() + `/src/${folder}`;
};
const isComponentExits = (dirPath) => {
  return (componentPath) => {
    return InComponentToBeCreate(dirPath) + `/${componentPath}`;
  };
};

rl.question(`Is Dir Exits ? Enter dir name : `, (inDirName) => {
  let isDirExits = InComponentToBeCreate(inDirName);

  if (fs.existsSync(isDirExits)) {
    console.log(`Yes ! ${inDirName} exits`);

    rl.question("Enter Your Component Name ! : ", (componentName) => {
      let compDirPath = isComponentExits(inDirName)(componentName);

      fs.access(compDirPath, (error) => {
        // To check if the given directory
        // already exists or not

        if (error) {
          // If current directory does not exist
          // then create it

          fs.mkdir(compDirPath, (error) => {
            if (error) {
              console.log(error);
            } else {
              const ReactComp = `${compDirPath}/` + componentName + ".jsx";
              const CssReactComp = `${compDirPath}/` + componentName + ".scss";

              CreateFile(ReactComp, ReactCompBP(componentName));
              CreateFile(CssReactComp, ReactCompStyleSheet(componentName));

              console.log(`${componentName} created Successfully`);

              // first Read Files

              // Get index.js file and read data
            }
          });
        } else {
          console.log("Given Directory already exists !!");
        }
      });

      rl.close();
    });
  } else {
    console.log("not folder exits");
  }
});

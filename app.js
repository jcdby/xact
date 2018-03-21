import xact from './xact/dist/xact.js';
import xactDOM from './xact/dist/xactDOM.js';


const element = (
  <div>
    Hello world
    <img src="/public/images/hello.jpeg" alt="hello" cv-data="hello"/> 
    <span>
      lalal
      <div>fjfjf</div>
    </span>
    Something Behind
  </div>
) 

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element2 = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);





const root = document.querySelector("#root");


// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   xactDOM.render(element, root);
// }

// setInterval(tick, 1000);

xactDOM.render(
  element2,
  root
)

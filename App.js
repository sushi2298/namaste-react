

const childConten = React.createElement('div', { className: 'test', key:'1' }, 'Hello React!! Child');

const newHeader = React.createElement('h1', { className: 'test' }, [childConten, 'hello h1']);

const root = ReactDOM.createRoot(document.getElementById('root'));
// note *** creates the first node(FiberRootNode) in React FiberTree attaches it to div 'root'
// this tree helps in reconcilation based on specific node update in React
// the content(if exists) of element 'root' will get replaced by render 
root.render(newHeader);
// render - gets the 'root' and updates the tree (container)
//the react elements are objects which will be converted to html tags while rendering on to the DOM

// a smaller chunck of React code Can be used in any application by importing cdn
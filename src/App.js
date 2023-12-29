import logo from './logo.svg';
import './App.css';
import Body  from './component/Body'
import { Provider } from "react-redux";
import appStore from './utils/appSlice';

import Login from './component/Login';
import Browse from './component/Browse';
import { createBrowserRouter , RouterProvider} from "react-router-dom";
function App() {
  const appRouter=createBrowserRouter([
  {  
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<Login/>
    },
    {
        path:"/browse",
        element:<Browse/>
    },
  ],
  }
])

  return (
  <>
<Provider store={appStore}>
  <RouterProvider router={appRouter}>

<Body/>

</RouterProvider>
</Provider>
  </>
  );
}

export default App;

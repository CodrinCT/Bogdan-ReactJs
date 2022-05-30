import { Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./routes/home/home.component";
import { Navigation } from "./routes/navigation/nav.component";
import { SignIn } from "./routes/SignIn/Signin.component";
// import './categories.styles.scss'

function App() {
  // const categories =[
  //   {
  //     id: 1,
  //     title: 'hats',
  //     imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
  //   },
  //   {
  //     id: 2,
  //     title: 'jackets',
  //     imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
  //   },
  //   {
  //     id: 3,
  //     title: 'sneakers',
  //     imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
  //   },
  //   {
  //     id: 4,
  //     title: 'womens',
  //     imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
  //   },
  //   {
  //     id: 5,
  //     title: 'mens',
  //     imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
  //   },
  // ]



  return (
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>
        <Route index path="/" element={<Home></Home>}></Route>
        <Route index path="/signin" element={<SignIn></SignIn>}></Route>
      </Route>
    </Routes>
  );
}

export default App;

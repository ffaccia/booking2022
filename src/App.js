import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './pages/home/Home'
import List from './pages/list/List'
import Hotel from './pages/hotel/Hotel'
import Login from './pages/login/Login'
import Logout from './pages/logout/Logout'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Random from './components/test/random/Random'
import MailList from './components/mailList/MailList'
import { AppRef1 } from './components/test/UseRef1'

import FunctionContextComponent from "./kyle/context/FunctionContextComponent"
import { ThemeProvider } from "./kyle/context/ThemeContext"
import UseMemo from "./kyle/useMemo"

import "./app.css"

/* inside map either i use curly braces and return keyword or
   round brackets without return keyword


    return (
    <>
    {colors.map((color, i) => (
        <MyDiv key={i} text={color.toString()} />
    ))}
    </>
  )


    return (
    <>
    {colors.map((color, i) => {
        return <MyDiv key={i} text={color.toString()} />
    })}
    </>
  )



*/


const mycolors = ["red", "yellow", "brown"]

const MyDiv = ({ key, text }) => {
  console.log("mydiv")
  console.log(key)
  console.log(text)
  return <div>{text}</div>
}

const MyDiv2 = ({props}) => {
  console.log("mypropsdiv")
  console.log({props})
  console.log(props)
  
  return <div></div>
}


const Loop_old = ({ colors }) => {
  console.log(colors)
  console.log(typeof [colors])
  return (
    <>
      <MyDiv2 nome="francesco" cognome="faccia" />

      {colors.map((color, i) => (
        <MyDiv key={i} text={color.toString()} />
      ))}
    </>
  )
}

const Loop = ({ colors }) => {
  console.log(colors)
  console.log(typeof [colors])
  const list = []
  {
    colors.map((color, i) => {
      list.push(<MyDiv key={i} text={color.toString()} />)
    })
  }
  console.log("list")
  console.log(list)
  return (
    <>       
    <MyDiv2 nome="francesco" cognome="faccia" />
    {list} 
    </>
  )
}


console.log("33333333333333")
//console.log(Loop(mycolors))
//console.log(JSON.stringify(Loop(mycolors)))




const func2 = (...props) => {
  console.log(props)
}

func2("ciao", "bello")

const Mylist = ({ props }) => {

  console.log(props)
  return (
    <div className="lContainer">

      <div className="navbar">
        <img src="./react-logo.png" width="60px" />
        <ol>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ol>
      </div>
      <h1>Reasons I'm excited to learn React</h1>
      <ol className="reasons">
        <li>It's a popular library so i'll be able to fit in with the cool kids</li>
        <li>I'm more likely to get a job if i know React</li>
        <li>
          We are currently using react version {React.version}
        </li>
      </ol>
    </div>
  )
}



const App = () => {
  return (<>
    <ThemeProvider>
      <FunctionContextComponent />
      <MailList />
      <UseMemo />
      <AppRef1 />
      <Loop colors={mycolors} />
      <div> </div><Mylist props={{ 'a1': "11", 'a2': "2", 'a3': "3" }} />
    </ThemeProvider>
  </>)
}


const Appo2 = () => {

  // return (
  //   <div className="container">
  //     <p className="danger">Hello React</p>
  //     <p className="info">You rock, React!</p>
  //   </div>
  // );

  return React.createElement(
    'div',
    {
      className: 'container',
    },
    [
      React.createElement(
        'p',
        { className: 'danger' },
        'Hello React'
      ),
      React.createElement(
        'p',
        { className: 'info' },
        'You rock, React!'
      ),
    ]
  );
};


function Appo() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/random" element={<Random />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

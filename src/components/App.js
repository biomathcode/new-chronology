import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Helmet } from "react-helmet";

import "./App.scss";
import Navbar from "./UI/NavBar";



export default function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chronology</title>
        <link rel="canonical" href="https://chronology.in" />
        <meta property="og:type" content="article" />
        <meta
          name="description"
          content="Data biased Journaling"
        />
      </Helmet>
      <Router>
        <div>
          <Navbar />
          <article className="body_container">
            <Suspense fallback={<h1>We are preparing the content...</h1>}>
            <div className="">
              <div className="">
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/blog">
                  <Blog />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
              </div>
            </div>
            </Suspense>
          </article>

        </div>
      </Router>
    </div>

  );
}

function Home() {
  return (
    <div className="flex body_container" >
      <div className="body_sub_container">
        <h3 style={{fontFamily: 'Time Roman'}}>Work of Kejriwal : Reviewed</h3>
        <div style={{ textAlign: 'left' }}>
          <h4>12 January 2020</h4>
          <h4>By Keshav Sharma</h4>
          <article>
            <p>
              sdmfsdlfkamdskfmdsfmdsfkldnsfndklmndvklmcxv vkdsmvlkd mvlkcmxvcxvmlkvzmcxzv ,xzvmflsk mvdlskm sd,vdv dsmlks v,dv,cxvm;dlkamvd slfksdmfsdlfkamdskfmdsfmdsfkldnsfndklmndvklmcxv vkdsmvlkd mvlkcmxvcxvmlkvzmcxzv ,xzvmflsk mvdlskm sd,vdv dsmlks v,dv,cxvm;dlkamvd slfk
              sdmfsdlfkamdskfmdsfmdsfkldnsfndklmndvklmcxv vkdsmvlkd mvlkcmxvcxvmlkvzmcxzv ,xzvmflsk mvdlskm sd,vdv dsmlks v,dv,cxvm;dlkamvd slfk  sdmfsdlfkamdskfmdsfmdsfkldnsfndklmndvklmcxv vkdsmvlkd mvlkcmxvcxvmlkvzmcxzv ,xzvmflsk mvdlskm sd,vdv dsmlks v,dv,cxvm;dlkamvd slfk sdmfsdlfkamdskfmdsfmdsfkldnsfndklmndvklmcxv vkdsmvlkd mvlkcmxvcxvmlkvzmcxzv ,xzvmflsk mvdlskm sd,vdv dsmlks v,dv,cxvm;dlkamvd slfk sdmfsdlfkamdskfmdsfmdsfkldnsfndklmndvklmcxv vkdsmvlkd mvlkcmxvcxvmlkvzmcxzv ,xzvmflsk mvdlskm sd,vdv dsmlks v,dv,cxvm;dlkamvd slfk    
              sdmfsdlfkamdskfmdsfmdsfkldnsfndklmndvklmcxv vkdsmvlkd mvlkcmxvcxvmlkvzmcxzv ,xzvmflsk mvdlskm sd,vdv dsmlks v,dv,cxvm;dlkamvd slfk  sdmfsdlfkamdskfmdsfmdsfkldnsfndklmndvklmcxv vkdsmvlkd mvlkcmxvcxvmlkvzmcxzv ,xzvmflsk mvdlskm sd,vdv dsmlks v,dv,cxvm;dlkamvd slfk sdmfsdlfkamdskfmdsfmdsfkldnsfndklmndvklmcxv vkdsmvlkd mvlkcmxvcxvmlkvzmcxzv ,xzvmflsk mvdlskm sd,vdv dsmlks v,dv,cxvm;dlkamvd slfk sdmfsdlfkamdskfmdsfmdsfkldnsfndklmndvklmcxv vkdsmvlkd mvlkcmxvcxvmlkvzmcxzv ,xzvmflsk mvdlskm sd,vdv dsmlks v,dv,cxvm;dlkamvd slfk    
              sdmfsdlfkamdskfmdsfmdsfkldnsfndklmndvklmcxv vkdsmvlkd mvlkcmxvcxvmlkvzmcxzv ,xzvmflsk mvdlskm sd,vdv dsmlks v,dv,cxvm;dlkamvd slfk  sdmfsdlfkamdskfmdsfmdsfkldnsfndklmndvklmcxv vkdsmvlkd mvlkcmxvcxvmlkvzmcxzv ,xzvmflsk mvdlskm sd,vdv dsmlks v,dv,cxvm;dlkamvd slfk sdmfsdlfkamdskfmdsfmdsfkldnsfndklmndvklmcxv vkdsmvlkd mvlkcmxvcxvmlkvzmcxzv ,xzvmflsk mvdlskm sd,vdv dsmlks v,dv,cxvm;dlkamvd slfk sdmfsdlfkamdskfmdsfmdsfkldnsfndklmndvklmcxv vkdsmvlkd mvlkcmxvcxvmlkvzmcxzv ,xzvmflsk mvdlskm sd,vdv dsmlks v,dv,cxvm;dlkamvd slfk    
          </p>
          </article>
        </div>
      </div>
      {/* <div style={{height: '100vh', width: '100vw'}}>
      <h2>Something</h2>
    </div> */}
    </div>

  )
}

function About() {

  return <h2>About</h2>;
}

function Blog() {
  return <h2>Blogs</h2>;
}
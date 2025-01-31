import React,{useState} from "react";
import Navbar from "./components/navbar";
import News from "./components/news";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


const App=()=>{

const apiKey = process.env.REACT_APP_VAR_NAME
const [progress, setProgress] = useState(0)
 
 
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress = {setProgress} apiKey={apiKey}
                  key="general"
                  pageSize={21}
                  country={"in"}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News setProgress = {setProgress} apiKey={apiKey}
                  key="business"
                  pageSize={21}
                  country={"in"}
                  category={"business"}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress = {setProgress} apiKey={apiKey}
                  key="entertainment"
                  pageSize={21}
                  country={"in"}
                  category={"entertainment"}
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News setProgress = {setProgress} apiKey={apiKey}
                  key="general"
                  pageSize={21}
                  country={"in"}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress = {setProgress} apiKey={apiKey}
                  key="health"
                  pageSize={21}
                  country={"in"}
                  category={"health"}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress = {setProgress} apiKey={apiKey}
                  key="science"
                  pageSize={21}
                  country={"in"}
                  category={"science"}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News setProgress = {setProgress} apiKey={apiKey}
                  key="sports"
                  pageSize={21}
                  country={"in"}
                  category={"sports"}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress = {setProgress} apiKey={apiKey}
                  key="sports"
                  pageSize={21}
                  country={"in"}
                  category={"technology"}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  
}
export default App;
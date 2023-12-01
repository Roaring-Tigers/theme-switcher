import React,{useContext,useState,useEffect} from "react";
import StyleContext from "../context/StyleContext";


const Hello = () => {
       const {theme,darkMode, lightMode}  =  useContext(StyleContext)
       const [currentTheme, setCurrentTheme] = useState("lightMode")

       // useEffect(()=>{
       //     localStorage.setItem("theme",currentTheme)
       // },[currentTheme])

       useEffect(()=>{
              const theme = localStorage.getItem("theme")
              if(theme=="lightMode"){
                     setCurrentTheme("lightMode")
                     lightMode()
                     localStorage.setItem("theme","lightMode")
                  }
             else if(theme=="darkMode"){
                     setCurrentTheme("darkMode")
                     darkMode()
                     localStorage.setItem("theme","darkMode")
            }
              
       },[])

       function switchTheme(){
              if(currentTheme=="lightMode"){
                     setCurrentTheme("darkMode")
                     darkMode()
                     localStorage.setItem("theme","darkMode")
                  }
             else if(currentTheme=="darkMode"){
                     setCurrentTheme("lightMode")
                     lightMode()
                     localStorage.setItem("theme","lightMode")
            }

       }

    return(
        <div>
              <div style={{
                    color: theme.color,
                    backgroundColor: theme.backgroundColor,
                    border: theme.border             
              }}>
                   <h1>Abhishek Shankar Choudhary</h1>
                     <p>Full Stack Developer</p>
                     <ol>
                            <li>React</li>
                            <li>Node</li>
                            <li>Express</li>
                     </ol>
              </div>
              {/* <button onClick={darkMode}> Dark Theme </button>
              <button onClick={lightMode}> Light Theme </button> */}

      <button onClick={switchTheme}> {currentTheme=="lightMode"?"Switch to Dark Mode": "Switch to Light Mode"} </button>
        </div>
    )
}

export default Hello;
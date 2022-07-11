import Logo from "../components/logo.js"
import Menuimg from "../components/menu.js"



function Superior(){
return (
  <div id="superior">
    <Logo />
    <Menuimg />

    <div className="sup">
      <h1>Say hello to 
      ReactJS</h1>
      <p>
        You will learn how to use the most popular frontend library, and become
        a super Ninja developer.
      </p>
      <button className="btn">Awesome!</button>
    </div>
  </div>
);
}

export default Superior;
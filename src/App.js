import './App.css';
//import { useNavigate } from 'react-router';
import playVideo from './components/video';

function App() {
  //let navigate = useNavigate();
  //var video="https://youtu.be/dQw4w9WgXcQ?t=42";
  const alerts = [playVideo,'You clicked it...','Stop.',"You're tickling me","I said don't click!","AAAAAAAH!","You lost.","Why are you wasting your time?","What did you get out of doing this?"];
  var myalerts = "";
  //var message="";
  function handleClick(event) {
    event.preventDefault();
    myalerts = alerts[Math.floor(Math.random() * alerts.length)];
    if(typeof(myalerts)===String)
    console.log(myalerts);
    //else navigate(myalerts);
    document.getElementById('shouldappear').className="visible absolute inset-x-0 bottom-12 h-10 container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-5 ";
    document.getElementById("myalerts").innerHTML =myalerts;
  }    

  return (
    <>
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-5">
          Welcome!
        </p>
        <p className="text-gray-500 text-lg">
          This red button may be tempting. But don't press it!
        </p>
       
        <button onClick={handleClick} className="text-2xl place-items-center absolute top-1/3 left-1/2 transform -translate-x-1/2 bg-red-500 hover:bg-red-800 text-white font-bold py-20 px-16 border-b-2 border-red-800 hover:border-red-500 rounded-full m-10">
          Button
        </button>
      </div>
      <div id='shouldappear' className="invisible absolute inset-x-0 bottom-12 h-10 container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-5 ">
        <p id="myalerts" className="text-xl text-red-700 font-bold ">
        </p>
      </div>
    </>
  );
}

export default App;

import './App.css';

function App() {
  // let index = 0;
  // const colors = ['salmon', 'green', 'blue', 'purple'];
  const texts = ['You clicked it...','Stop.',"You're tickeling me","I said don't click!","AAAAAAAH!","You lost.","Why are you wasting your time?","What did you get out of doing this?"];
  var mytexts = "";
  function handleClick(event) {
    mytexts = texts[Math.floor(Math.random() * texts.length)]
    alert(mytexts);
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
       </div> 
        <button onClick={handleClick} className="bg-red-500 hover:bg-red-400 text-white font-bold py-10 px-7 border-b-4 border-red-700 hover:border-red-500 rounded-full m-10">
          Button
        </button>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Holy smokes!</strong>
            <div className="block sm:inline">{handleClick.apply}<div/>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
        </div>
      </div>
    </>
  );
}

export default App;

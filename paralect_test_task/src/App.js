import "./App.css";
import Header from "./Modules/Header/Header";
import Main from "./Modules/Main/Main";
import { useState } from "react";

function App() {
  const [error, setError] = useState(null);
  const [onStart, setOnStart] = useState(true);
  const [awaitingResponses, setAwaitingResponses] = useState(2);
  const [userData, setUserData] = useState([]);
  const [reposData, setReposData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  let url = `https://api.github.com/users/`;

  const getRepo = function (login) {
    try {
    fetch(`${url}${login}/repos?per_page=4&page=${pageNumber}`)
      .then (res => res.json())
      .then ((d) => {setReposData(d);
      console.log(d);})
      .finally(() => setAwaitingResponses(awaitingResponses => awaitingResponses - 1))
    } catch (e) {
      setError(e);
    }
  }

  const getUser = function (login) {
    setError(null);
    setOnStart(false);

    try { 
      fetch(url+login)
      .then (res => {
        if (!res.ok) {
          throw Error(`status: ` + res.status);
        }
        return res.json();
      })
      .then ((data) => setUserData(data))
      .catch((e) => setError(e))
      .finally(() => setAwaitingResponses(awaitingResponses => awaitingResponses - 1))
    } catch (e) {
      setError(e);
    } 
  };

  const setPage = function(num) {
    setPageNumber(num);
  }

  let pageState;
  if (onStart) {
    pageState = (
      <div className="initial_page">
        <img src="/images/initialState.png" alt="try to search profile"></img>
        <h1>Start with searching a GitHub user</h1>
      </div>
      )
    } else if (error !== null) { 
      pageState = (
      <div className="error_page">
        <img src="/images/userNotFound.png" alt="Not found"></img>
        <h1>User not found</h1>
      </div>
      )
  } else if (awaitingResponses !== 0) {
    pageState = <div className="loader"></div>
  } else {pageState = <Main userData={userData} reposData={reposData} setPage={setPage} getRepo={getRepo} />}
  
  console.log(awaitingResponses);
  return (
    <div className="App">
      <Header getUser={getUser} getRepo={getRepo}/>
      {pageState}
    </div>
  );
}

export default App;
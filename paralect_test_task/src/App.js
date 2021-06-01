import "./App.css";
import Header from "./Modules/Header/Header";
import Main from "./Modules/Main/Main";
import { useState, useEffect, useCallback } from "react";

function App() {
  const [error, setError] = useState(null);
  const [onStart, setOnStart] = useState(true);
  const [awaitingResponses, setAwaitingResponses] = useState(0);
  const [userData, setUserData] = useState([]);
  const [reposData, setReposData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  let url = `https://api.github.com/users/`;

  const getRepo = useCallback ((login) => {
    try {
      setAwaitingResponses(awaitingResponses => awaitingResponses + 1)
      fetch(`${url}${login}/repos?per_page=4&page=${pageNumber + 1}`)
      .then (res => res.json())
      .then ((d) => setReposData(d))
      .finally(() => setAwaitingResponses(awaitingResponses => awaitingResponses - 1))
    } catch (e) {
      setError(e);
    }
  }, [pageNumber, url])

  const getUser = useCallback ((login) => {
    setError(null);
    setOnStart(false);

    try { 
      setAwaitingResponses(awaitingResponses => awaitingResponses + 1)
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
  },[url]);

  useEffect(() => {
    getRepo(userData.login);
  }, [pageNumber, getRepo, userData.login]);

  const setPage = useCallback ((num) => {
    setPageNumber(num);
  }, [])

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
  } else {pageState = <Main userData={userData} reposData={reposData} setPage={setPage} getRepo={getRepo} pageNumber={pageNumber}/>}
  
  return (
    <div className="App">
      <Header getUser={getUser} getRepo={getRepo}/>
      {pageState}
    </div>
  );
}

export default App;
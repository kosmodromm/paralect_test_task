import "./App.css";
import Header from "./Modules/Header/Header";
import Main from "./Modules/Main/Main";
import { useEffect, useState } from "react";

function App() {
  const [error, setError] = useState(null);
  const [onStart, setOnStart] = useState(true);
  const [awaitingResponses, setAwaitingResponses] = useState(0);
  const [userData, setUserData] = useState([]);
  const [reposData, setReposData] = useState([]);
  
  const searchUser = function (login) {
    setError(null);
    setAwaitingResponses(2);
    setOnStart(false);
    let url = `https://api.github.com/users/${login}`;
    try { 
      fetch(url)
      .then (res => {
        if (!res.ok) {
          throw Error(`is not ok: ` + res.status);
        }
        return res.json();
      })
      .then ((data) => setUserData(data))
      .catch((e) => setError(e))
      .finally(() => setAwaitingResponses(awaitingResponses => awaitingResponses - 1))
      fetch(`${url}/repos`)
      .then (res => res.json())
      .then ((data) => setReposData(data))
      .finally(() => setAwaitingResponses(awaitingResponses => awaitingResponses - 1))
    } catch (e) {
      setError(e);
    } 
  };

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
  } else {pageState = <Main userData={userData} reposData={reposData} />}
  
  console.log(error)
  return (
    <div className="App">
      <Header searchUser={searchUser} />
      {pageState}
    </div>
  );
}

export default App;


// async function loadData(url) {
//   let response = await fetch(url);
//   if (response.status == 200) {
//     return response.json();
//   } else {
//     throw new Error();
//   }
// }

// async function fetchAsyncGithubData() {
//   try {
    
//     const uData = await loadData(url);
//     setUserData(uData);
//     const rData = await loadData(`${url}/repos`);
//     setReposData(rData);
//     setLoaded(false);
//   } catch (err) {
//     if (err.response.status == 404) {
//       alert(
//         "Такого пользователя не существует, пожалуйста, повторите ввод."
//       );
//     } else {
//       throw err;
//     }
//   }
// }

// fetchAsyncGithubData();
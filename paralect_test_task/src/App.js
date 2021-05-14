import "./App.css";
import Header from "./Modules/Header/Header";
import Main from "./Modules/Main/Main";
import { useEffect, useState } from "react";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(true);
  const [userData, setUserData] = useState([]);
  const [reposData, setReposData] = useState([]);
  const [url, setUrl] = useState("https://api.github.com/users/kosmodromm");

  const searchUser = function (login) {
    setUrl(`https://api.github.com/users/${login}`);
    return console.log(url);
  };

  useEffect(() => {
    class HttpError extends Error {
      constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = "HttpError";
        this.response = response;
      }
    }

    async function loadUserData(url) {
      let response = await fetch(url);
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    }

    // async function loadReposData(url) {
    //   let response = await fetch(url);
    //   if (response.status == 200) {
    //     return response.json();
    //   } else {
    //     throw new HttpError(response);
    //   }
    // }

    async function fetchAsyncGithubData() {
      try {
        const userData = await loadUserData(url);
        setUserData(userData);
        // const reposData = await fetch(`${url}/repos`);
        // setReposData(reposData);
        setLoaded(false);
      } catch (err) {
        if (err instanceof HttpError && err.response.status == 404) {
          alert(
            "Такого пользователя не существует, пожалуйста, повторите ввод."
          );
        } else {
          throw err;
        }
      }
    }

    // async function fetchAsyncGithubUser() {
    //   try {
    //     const data = await loadUserData(url);
    //     setUserData(data);
    //     setLoaded(false);
    //   } catch (err) {
    //     if (err instanceof HttpError && err.response.status == 404) {
    //       alert(
    //         "Такого пользователя не существует, пожалуйста, повторите ввод."
    //       );
    //     } else {
    //       throw err;
    //     }
    //   }
    // }

    // async function fetchAsyncUserRepos() {
    //   try {
    //     const data = await loadReposData(`${url}/repos`);
    //     setReposData(data);
    //     setLoaded(false);
    //   } catch (err) {
    //     if (err instanceof HttpError && err.response.status == 404) {
    //       alert(
    //         "Такого пользователя не существует, пожалуйста, повторите ввод."
    //       );
    //     } else {
    //       throw err;
    //     }
    //   }
    // }

    // fetchAsyncGithubUser();
    // fetchAsyncUserRepos();
    fetchAsyncGithubData();
  });

  return (
    <div className="App">
      <Header searchUser={searchUser} />
      {isLoaded ? (
        <div className="loader"></div>
      ) : (
        <Main userData={userData} reposData={reposData} />
      )}
    </div>
  );
  // }
}

export default App;

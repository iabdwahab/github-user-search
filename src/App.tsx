import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Search from './components/search/Search';
import { UserInfoType } from './types/UserInfo';
import { UserContext } from './context/UserContext';

function App() {
  const [userInfo, setUserInfo] = useState<UserInfoType>({} as UserInfoType);

  useEffect(() => {
    fetch('https://api.github.com/users/iabdwahab')
      .then((res) => res.json())
      .then((result) => {
        setUserInfo(result);
      });
  }, []);

  console.log(userInfo);

  return (
    <div className="min-h-screen px-2 bg-dark-blue">
      <div className="max-w-3xl mx-auto pt-10">
        <Header />
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
          <div className="mt-6">
            <Search />
          </div>
          <div className="mt-6">
            <Main />
          </div>
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default App;

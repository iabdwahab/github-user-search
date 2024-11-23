import { useState } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Search from './components/search/Search';
import { UserInfoType } from './types/UserInfo';
import { UserContext } from './context/UserContext';

function App() {
  const [userInfo, setUserInfo] = useState<UserInfoType>({} as UserInfoType);

  return (
    <div className="min-h-screen px-2 bg-dark-blue">
      <div className="max-w-3xl mx-auto pt-10">
        <Header />
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
          <div className="mt-6">
            <Search />
          </div>
          {userInfo.message && <p className="text-white text-center mt-20 text-2xl font-bold">{userInfo.message}</p>}
          {Object.entries(userInfo).length && !userInfo.message ? (
            <div className="mt-6">
              <Main />
            </div>
          ) : (
            ''
          )}
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default App;

import { FormEvent } from 'react';
import { useUserContext } from '../../context/UserContext';
import { FetchUser } from '../../data/FetchUser';

const Search = () => {
  const { setUserInfo } = useUserContext();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const username = form['username-field'] as HTMLInputElement;
    const data = await FetchUser(username.value);

    setUserInfo(data);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex items-center gap-3 pl-4 pr-2 py-2 bg-medium-blue rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 text-white">
        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
      </svg>
      <input type="text" id="username-field" className="w-full py-2 bg-transparent outline-none border-none text-white placeholder:text-slate-300" placeholder="Search GitHub username..." />
      <button className="bg-light-blue text-white py-2 px-5 rounded-lg">Search</button>
    </form>
  );
};

export default Search;

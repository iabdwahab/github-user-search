const Main = () => {
  return (
    <div className="grid md:grid-cols-[150px_1fr] gap-6 bg-medium-blue px-4 py-6 md:p-6 rounded-md">
      <div>
        <img src="/react.svg" alt="User" className="w-full" />
      </div>
      <div>
        <div className="md:flex md:justify-between">
          <h2 className="text-white text-3xl font-medium">The Octocat</h2>
          <p className="text-dark-grey">Joined 25 Jan 2011</p>
        </div>
        <p className="text-light-blue">@octocat</p>
        <h3 className="mt-4 text-dark-grey">This Profile has no bio.</h3>
        <div className="grid grid-cols-3 bg-dark-blue p-4 rounded-lg mt-6">
          <div>
            <h4 className="text-dark-grey text-lg">Repos</h4>
            <p className="text-white text-2xl">8</p>
          </div>
          <div>
            <h4 className="text-dark-grey text-lg">Repos</h4>
            <p className="text-white text-2xl">8</p>
          </div>
          <div>
            <h4 className="text-dark-grey text-lg">Repos</h4>
            <p className="text-white text-2xl">8</p>
          </div>
        </div>
        <div className="mt-7 grid md:grid-cols-2 gap-y-4">
          <div className="flex items-center gap-3 text-lg text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
            </svg>
            <span>San Fransisco</span>
          </div>
          <div className="flex items-center gap-3 text-lg text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
            </svg>
            <span>San Fransisco</span>
          </div>
          <div className="flex items-center gap-3 text-lg text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
            </svg>
            <span>San Fransisco</span>
          </div>
          <div className="flex items-center gap-3 text-lg text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
            </svg>
            <span>San Fransisco</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

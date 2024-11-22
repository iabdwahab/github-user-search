import StatsSection from './StatsSection';
import UserInfo from './UserInfo';

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
        <StatsSection />
        <UserInfo />
      </div>
    </div>
  );
};

export default Main;

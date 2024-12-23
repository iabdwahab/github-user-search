import { useUserContext } from '../../context/UserContext';

const StatsSection = () => {
  const { userInfo } = useUserContext();

  return (
    <div className="grid sm:grid-cols-3 gap-3 bg-dark-blue p-4 rounded-lg mt-6">
      <StatContainer statName="Repos" statValue={userInfo.public_repos} />
      <StatContainer statName="Followers" statValue={userInfo.followers} />
      <StatContainer statName="Following" statValue={userInfo.following} />
    </div>
  );
};

const StatContainer = ({ statName, statValue }: { statName: string; statValue: number }) => {
  return (
    <div className="max-md:flex max-md:gap-3 max-md:items-center">
      <h4 className="text-dark-grey text-lg">{statName}:</h4>
      <p className="text-white text-2xl">{statValue}.</p>
    </div>
  );
};

export default StatsSection;

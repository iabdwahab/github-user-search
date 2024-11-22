const StatsSection = () => {
  return (
    <div className="grid grid-cols-3 bg-dark-blue p-4 rounded-lg mt-6">
      <StatContainer statName="Repos" statValue="8" />
      <StatContainer statName="Followers" statValue="9455" />
      <StatContainer statName="Following" statValue="45" />
    </div>
  );
};

const StatContainer = ({ statName, statValue }: { statName: string; statValue: string }) => {
  return (
    <div>
      <h4 className="text-dark-grey text-lg">{statName}</h4>
      <p className="text-white text-2xl">{statValue}</p>
    </div>
  );
};

export default StatsSection;

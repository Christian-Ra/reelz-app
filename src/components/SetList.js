import CastMember from "./CastMember";
const SetList = ({ castSheet }) => {
  return (
    <div>
      This is the current setList
      {castSheet.map((cast) => (
        <CastMember cast={cast} key={cast.id} />
      ))}
    </div>
  );
};

export default SetList;

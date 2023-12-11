const CastMember = ({ cast }) => {
  console.log("cast object", cast);
  console.log("cast name", cast.name);
  console.log("Cast socials", cast.socials);
  return (
    <div>
      <h1>Crew Member Name: {cast.name}</h1>
      <h2>Crew Member Role: {cast.role}</h2>
      <div>
        <h3>Socials:</h3>
        <h4>TikTok: {cast.socials.tikTok}</h4>
        <h4>LinkedIn: {cast.socials.linkedIn}</h4>
        <h4>instagram: {cast.socials.instagram}</h4>
      </div>
    </div>
  );
};

export default CastMember;

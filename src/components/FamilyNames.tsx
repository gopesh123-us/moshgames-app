//{members: string[], heading: string}
interface FamilyMembersProps {
  members: string[];
  heading: string;
}
function FamilyNames({ members, heading }: FamilyMembersProps) {
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {members.map((member) => (
          <li className="list-group-item">{member}</li>
        ))}
      </ul>
    </>
  );
}

export default FamilyNames;

export const Profile = ({ name, role, avatarUrl }) => {
  return (
    <div className="border border-gray-300 rounded-xl shadow-lg overflow-hidden">
      <img src={avatarUrl} alt="avatar" className="w-32 h-32 object-cover mx-auto rounded-full"/>
      <div className="bg-amber-50 p-4 text-center w-325p">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-700">{role}</p>
      </div>
    </div>
  );
};

const ProfileWindow = () => {
  return (
    <div className="ProfileWindow-Container">
      <img className={profilePhoto} />
      <div>
        <span>Michał Popowicz</span>
        <span>Online</span>
      </div>
    </div>
  );
};

export default ProfileWindow;

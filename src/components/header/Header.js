import "./Header.css";

const Header = ({ user }) => {
  return (
    <div className="header-container">
      <h1>TodoApp</h1>
      {user ? <p>{user.username} is logged in</p> : null}
    </div>
  );
};

export default Header;

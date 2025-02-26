type Props = {
  link: string;
};

export const Header = (props: Props) => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://via.placeholder.com/50" alt="Car Company Logo" />
      </div>
      <nav className="nav" data-active={props.link}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="buttons">
        <button>Login</button>
        <button>Sign In</button>
      </div>
    </header>
  );
};

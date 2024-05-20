function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <img src="./React-icon.svg" className="slika" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <small>@2024 Saki development. All rights reserved.</small>
    </footer>
  );
}

function MainComponent() {
  return (
    <div className="main-content">
      <h1>Reasons i learn React</h1>
      <ol>
        <li>idk</li>
        <li>Popular</li>
        <li>Profitable</li>
      </ol>
    </div>
  );
}
function MyCustomPage() {
  return (
    <div>
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<MyCustomPage />);
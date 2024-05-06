function Header() {
  return (
    <header>
      <nav>
        <img src="./React-icon.svg" width="40px" />
      </nav>
    </header>
  );
}

function Footer() {
  return <small>@2024 Saki development. All rights reserved.</small>;
}

function MainComponent() {
  return (
    <div>
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

function MyCustomPage() {
  return (
    <div>
      <header>
        <nav>
          <img src="./React-icon.svg" width="40px" />
        </nav>
      </header>
      <h1>Reasons i learn React</h1>
      <ol>
        <li>idk</li>
        <li>Popular</li>
        <li>Profitable</li>
      </ol>
      <small>@2024 Saki development. All rights reserved.</small>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<MyCustomPage />);

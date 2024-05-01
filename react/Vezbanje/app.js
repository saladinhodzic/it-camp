function PageRender() {
  return (
    <div>
      <img width="50px" src="./React-icon.svg" />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Realised in 2013</li>
        <li>Created by Jordan Walke</li>
        <li>Has over 100k stars on GitHub</li>
        <li>Maintained by Facebook</li>
        <li>Powers thousands of apps</li>
      </ul>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<PageRender />);

console.log(page);

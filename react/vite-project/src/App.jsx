import "./App.css";

const slike = [
  "./src/assets/slike/lik.jpg",
  "./src/assets/slike/lik2.jpg",
  "./src/assets/slike/lik3.jpg",
];

function Header() {
  return (
    <div className="header">
      <h3>LOGO</h3>
    </div>
  );
}

export default function App() {
  return <Header />;
}

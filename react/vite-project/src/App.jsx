import "./App.css";

const slike = [
  "./src/assets/slike/lik.jpg",
  "./src/assets/slike/lik2.jpg",
  "./src/assets/slike/lik3.jpg",
];

function Profile() {
  return (
    <div className="profiles">
      <div className="card">
        <img className="profile-1 profile" src={slike[0]} />
        <h1>Carlos Hernandez</h1>
        <p>Carlos is young man but he transfers drugs</p>
      </div>
      <div className="card">
        <img className="profile-2 profile" src={slike[1]} />
        <h1>Naruto Saske</h1>
        <p>Fast but doesnt think much</p>
      </div>
      <div className="card">
        <img className="profile-3 profile" src={slike[2]} />
        <h1>Sakura Nesto</h1>
        <p>Thinks fast but slow</p>
      </div>
    </div>
  );
}

export default function App() {
  return <Profile />;
}

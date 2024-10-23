
import { useState } from "react";
import './app.css'





const App = () => {
  const [team, setTeam] = useState ([]);
  const [money, setMoney] = useState (100)
  const [totalStrength, setTotalStrength] = useState (0)
  const [totalAgility, setTotalAgility] =useState (0)
  const [zombieFighters, setZombieFighters] = useState ([
  {
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  },
]
)
const calculateTotalStrength = (team) => {
  return team.reduce((totalStrength, teamFighter) => totalStrength + teamFighter.strength, 0);
}

const calculateTotalAgility = (team) => {
  return team.reduce((totalAgility,teamFighter) => totalAgility + teamFighter.agility, 0);
}
const handleAddFighter = (fighter) => {
  if (money >= fighter.price) {
    setTeam(prevTeam => {
      const newTeam = [...prevTeam, fighter];
      const updatedStrength = calculateTotalStrength(newTeam);
      setTotalStrength(updatedStrength);
      const updatedAgility = calculateTotalAgility(newTeam);
      setTotalAgility(updatedAgility);
      return newTeam;
    });
    setMoney(money-fighter.price);
  } else {
    console.log('You currently do not have enough money!');
  }
};

const handleRemoveFighter = (fighterid) => {
  setTeam(previousTeam => {
    const newTeam = previousTeam.filter(teamFighter => teamFighter.id !== fighterid);
    setTotalStrength(calculateTotalStrength(newTeam));
    setTotalAgility(calculateTotalAgility(newTeam));
    return newTeam;
  })
}

return (
  <div>
    <h1>Zombie Fighters</h1>
    <h2>Money: ${money}</h2>
    <h2>Money Left: ${money}</h2>
          <h2>Total Team Strength: {totalStrength}</h2>
          <h2>Total Team Agility: {totalAgility}</h2>
          <h2>Your Team </h2>
    {team.length === 0 ? (
              <p>Pick some team members!</p>
            ) : (
              <ul>
                {team.map(teamFighter => (
                  <li key={teamFighter.id} className="team-fighter">
                    <img src={teamFighter.img} alt={teamFighter.name} />
                    <h2>{teamFighter.name}</h2>
                    <p>Price: ${teamFighter.price}</p>
                    <p>Strength: {teamFighter.strength}</p>
                    <p>Agility: {teamFighter.agility}</p>
                    <button onClick={() => handleRemoveFighter(teamFighter.id)}>Remove from Team</button>
                  </li>
                ))}
              </ul>
            )}
    <ul>
      {zombieFighters.map(zombieFighter => (
        <li key={zombieFighter.id} className="zombie-fighter">
          <img src={zombieFighter.img} alt={zombieFighter.name} />
          <h2>{zombieFighter.name}</h2>
          <p>Price: ${zombieFighter.price}</p>
          <p>Strength: {zombieFighter.strength}</p>
          <p>Agility: {zombieFighter.agility}</p>
          <button onClick={() => handleAddFighter(zombieFighter)}>Add to Team</button>
        </li>
      ))}
    </ul>
        </div>
      );
    };



export default App;





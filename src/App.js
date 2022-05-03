import "./App.css";
import { useState } from "react";

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [name, setName] = useState("Jay"); //useState Hooks
  const [events, setEvent] = useState([
    { title: "Jay is good", id: 1 },
    { title: "Jay is good", id: 2 },
    { title: "Jay is good", id: 3 },
  ]);
  console.log(showEvents)

  const handleClick = () => {
    setName("pandya");
  };

  const handleClick1 = (id) => {
    setEvent((prevEvent) => {
      return prevEvent.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };

  return (
    <div className="App">
      {showEvents && (
       <div>
       <button onClick={() => setShowEvents(false)}>Hide Events</button>
     </div>
      )}
       {!showEvents && (
      <div>
      <button onClick={() => setShowEvents(true)}>Show Events</button>
    </div>
      )}
     
      
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change Me</button>
      {showEvents && events.map((event, id) => (
        <div key={event.id}>
          <h2>
            {id} - {event.title}
          </h2>

          <button onClick={() => handleClick1(event.id)}>Delete ME</button>
        </div>
      ))}
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeString = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const dateString = currentTime.toLocaleDateString([], {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="App">
      <main className="App-home">
        <h1>Welcome</h1>
        <div className="App-clock-card">
          <p className="App-date">{dateString}</p>
          <p className="App-time">{timeString}</p>
        </div>
      </main>
    </div>
  );
}

export default App;

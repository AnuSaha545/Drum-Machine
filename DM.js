const sounds = [
  { key: "Q", id: "Heater 1", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
  { key: "W", id: "Heater 2", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
  { key: "E", id: "Heater 3", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
  { key: "A", id: "Heater 4", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
  { key: "S", id: "Clap", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
  { key: "D", id: "Open-HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
  { key: "Z", id: "Kick-n'-Hat", url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
  { key: "X", id: "Kick", url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
  { key: "C", id: "Closed-HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }
];

function DrumPad({ sound, onPlay }) {
  const playSound = () => {
    const audio = document.getElementById(sound.key);
    audio.currentTime = 0;
    audio.play();
    onPlay(sound.id);
  };

  React.useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key.toUpperCase() === sound.key) {
        playSound();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <div className="drum-pad" id={sound.id} onClick={playSound} tabIndex={0} aria-label={sound.id}>
      {sound.key}
      <audio className="clip" id={sound.key} src={sound.url}></audio>
    </div>
  );
}

function App() {
  const [display, setDisplay] = React.useState("");

  const handlePlay = (id) => {
    setDisplay(id);
  };

  return (
    <div id="drum-machine">
      {sounds.map((sound) => (
        <DrumPad key={sound.key} sound={sound} onPlay={handlePlay} />
      ))}
      <div id="display">{display}</div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

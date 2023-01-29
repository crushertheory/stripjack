import opponent1 from "../assets/opponents/opponent1.png";
import opponent2 from "../assets/opponents/opponent2.png";
import opponent3 from "../assets/opponents/opponent3.png";
import opponent4 from "../assets/opponents/opponent4.png";
import opponent5 from "../assets/opponents/opponent5.png";
import opponent6 from "../assets/opponents/opponent6.png";
import opponent7 from "../assets/opponents/opponent7.png";
import opponent8 from "../assets/opponents/opponent8.png";
import opponent9 from "../assets/opponents/opponent9.png";
import opponent10 from "../assets/opponents/opponent10.png";
import opponent11 from "../assets/opponents/opponent11.png";
import opponent12 from "../assets/opponents/opponent12.png";
import opponent13 from "../assets/opponents/opponent13.png";
import opponent14 from "../assets/opponents/opponent14.png";
import opponent15 from "../assets/opponents/opponent15.png";
import opponent16 from "../assets/opponents/opponent16.png";
import "../App.css"

export default function OpponentScreen({ opponentNumber }) {
  const imageArray = [
    opponent1,
    opponent2,
    opponent3,
    opponent4,
    opponent5,
    opponent6,
    opponent7,
    opponent8,
    opponent9,
    opponent10,
    opponent11,
    opponent12,
    opponent13,
    opponent14,
    opponent15,
    opponent16,
  ];

  return (
    <div>
      {imageArray.map((x, index) => (
        <img
          key={x}
          onClick={() => opponentNumber(index)}
          className="opponent-image"
          src={x}
          id={index}
          alt={x}
        ></img>
      ))}
    </div>
  );
}

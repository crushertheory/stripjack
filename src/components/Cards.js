import CardBack from "../assets/cards/cardBack.png";
import AceOfH from "../assets/cards/AH.png";
import TwoOfH from "../assets/cards/2H.png";
import ThreeOfH from "../assets/cards/3H.png";
import FourOfH from "../assets/cards/4H.png";
import FiveOfH from "../assets/cards/5H.png";
import SixOfH from "../assets/cards/6H.png";
import SevenOfH from "../assets/cards/7H.png";
import EightOfH from "../assets/cards/8H.png";
import NineOfH from "../assets/cards/9H.png";
import TenOfH from "../assets/cards/10H.png";
import JackOfH from "../assets/cards/JH.png";
import QueenOfH from "../assets/cards/QH.png";
import KingOfH from "../assets/cards/KH.png";
import AceOfC from "../assets/cards/AC.png";
import TwoOfC from "../assets/cards/2C.png";
import ThreeOfC from "../assets/cards/3C.png";
import FourOfC from "../assets/cards/4C.png";
import FiveOfC from "../assets/cards/5C.png";
import SixOfC from "../assets/cards/6C.png";
import SevenOfC from "../assets/cards/7C.png";
import EightOfC from "../assets/cards/8C.png";
import NineOfC from "../assets/cards/9C.png";
import TenOfC from "../assets/cards/10C.png";
import JackOfC from "../assets/cards/JC.png";
import QueenOfC from "../assets/cards/QC.png";
import KingOfC from "../assets/cards/KC.png";
import AceOfD from "../assets/cards/AD.png";
import TwoOfD from "../assets/cards/2D.png";
import ThreeOfD from "../assets/cards/3D.png";
import FourOfD from "../assets/cards/4D.png";
import FiveOfD from "../assets/cards/5D.png";
import SixOfD from "../assets/cards/6D.png";
import SevenOfD from "../assets/cards/7D.png";
import EightOfD from "../assets/cards/8D.png";
import NineOfD from "../assets/cards/9D.png";
import TenOfD from "../assets/cards/10D.png";
import JackOfD from "../assets/cards/JD.png";
import QueenOfD from "../assets/cards/QD.png";
import KingOfD from "../assets/cards/KD.png";
import AceOfS from "../assets/cards/AS.png";
import TwoOfS from "../assets/cards/2S.png";
import ThreeOfS from "../assets/cards/3S.png";
import FourOfS from "../assets/cards/4S.png";
import FiveOfS from "../assets/cards/5S.png";
import SixOfS from "../assets/cards/6S.png";
import SevenOfS from "../assets/cards/7S.png";
import EightOfS from "../assets/cards/8S.png";
import NineOfS from "../assets/cards/9S.png";
import TenOfS from "../assets/cards/10S.png";
import JackOfS from "../assets/cards/JS.png";
import QueenOfS from "../assets/cards/QS.png";
import KingOfS from "../assets/cards/KS.png";
import "../App.css";

export default function Cards({
  playerHand,
  playerScore,
  playerBusted,
  playerBlackjack,
  dealerHand,
  playerStays,
  handlePlayerHits,
  handlePlayerStays,
  dealNewHand,
  startHand,
  gameStarted,
  handFinished,
  dealerScore,
  dealerWins,
  playerWins,
  draw,
  playerWinCount,
  handleDoubleDown
}) {
  let findImage;
  let index = 0;
  const whichImages = (who, cards) => {
    return cards.map((card) => {
      switch (card.label) {
        case "AH":
          findImage = AceOfH;
          break;
        case "2H":
          findImage = TwoOfH;
          break;
        case "3H":
          findImage = ThreeOfH;
          break;
        case "4H":
          findImage = FourOfH;
          break;
        case "5H":
          findImage = FiveOfH;
          break;
        case "6H":
          findImage = SixOfH;
          break;
        case "7H":
          findImage = SevenOfH;
          break;
        case "8H":
          findImage = EightOfH;
          break;
        case "9H":
          findImage = NineOfH;
          break;
        case "10H":
          findImage = TenOfH;
          break;
        case "JH":
          findImage = JackOfH;
          break;
        case "QH":
          findImage = QueenOfH;
          break;
        case "KH":
          findImage = KingOfH;
          break;
        case "AC":
          findImage = AceOfC;
          break;
        case "2C":
          findImage = TwoOfC;
          break;
        case "3C":
          findImage = ThreeOfC;
          break;
        case "4C":
          findImage = FourOfC;
          break;
        case "5C":
          findImage = FiveOfC;
          break;
        case "6C":
          findImage = SixOfC;
          break;
        case "7C":
          findImage = SevenOfC;
          break;
        case "8C":
          findImage = EightOfC;
          break;
        case "9C":
          findImage = NineOfC;
          break;
        case "10C":
          findImage = TenOfC;
          break;
        case "JC":
          findImage = JackOfC;
          break;
        case "QC":
          findImage = QueenOfC;
          break;
        case "KC":
          findImage = KingOfC;
          break;
        case "AD":
          findImage = AceOfD;
          break;
        case "2D":
          findImage = TwoOfD;
          break;
        case "3D":
          findImage = ThreeOfD;
          break;
        case "4D":
          findImage = FourOfD;
          break;
        case "5D":
          findImage = FiveOfD;
          break;
        case "6D":
          findImage = SixOfD;
          break;
        case "7D":
          findImage = SevenOfD;
          break;
        case "8D":
          findImage = EightOfD;
          break;
        case "9D":
          findImage = NineOfD;
          break;
        case "10D":
          findImage = TenOfD;
          break;
        case "JD":
          findImage = JackOfD;
          break;
        case "QD":
          findImage = QueenOfD;
          break;
        case "KD":
          findImage = KingOfD;
          break;
        case "AS":
          findImage = AceOfS;
          break;
        case "2S":
          findImage = TwoOfS;
          break;
        case "3S":
          findImage = ThreeOfS;
          break;
        case "4S":
          findImage = FourOfS;
          break;
        case "5S":
          findImage = FiveOfS;
          break;
        case "6S":
          findImage = SixOfS;
          break;
        case "7S":
          findImage = SevenOfS;
          break;
        case "8S":
          findImage = EightOfS;
          break;
        case "9S":
          findImage = NineOfS;
          break;
        case "10S":
          findImage = TenOfS;
          break;
        case "JS":
          findImage = JackOfS;
          break;
        case "QS":
          findImage = QueenOfS;
          break;
        case "KS":
          findImage = KingOfS;
          break;
        default:
          findImage = CardBack;
      }
      if (!gameStarted) {
        return (
          <div className="card-div">
            <img className="card" alt="card back" src={CardBack}></img>
            <img className="card" alt="card back" src={CardBack}></img>
          </div>
        );
      }
      if (who === "player") {
        return (
          <div className="card-div">
            <img className="card" alt={card.label} src={findImage}></img>
          </div>
        );
      }
      if (dealerHand.length > 1 && !playerStays && index === 0) {
        index = index + 1;
        return (
          <div className="card-div">
            <img className="card" alt={card.label} src={CardBack}></img>
          </div>
        );
      }
      return (
        <div className="card-div">
          <img className="card" alt={card.label} src={findImage}></img>
        </div>
      );
    });
  };
  return (
    <div>
      <div className="players-cards-div">
        {whichImages("player", playerHand)}
           {playerWinCount} / 5
      </div>
      <div>{playerScore}</div>
      {!playerStays && !playerBusted && !playerBlackjack && gameStarted ? (
        <button className="game-button" onClick={handlePlayerHits}>
          Hit
        </button>
      ) : (
        <button className="game-button" disabled>
          Hit
        </button>
      )}
      {playerStays || playerBusted || playerBlackjack || !gameStarted ? (
        <button className="game-button" disabled>
          Stay
        </button>
      ) : null}
      {!playerStays && !playerBusted && !playerBlackjack && gameStarted ? (
        <button className="game-button" onClick={handlePlayerStays}>
          Stay
        </button>
      ) : null}
      {playerHand.length === 2 && !playerStays ? (
        <button className="game-button" onClick={handleDoubleDown}>Double Down</button>
      ) : (
        <button disabled className="game-button">
          Double Down
        </button>
      )}
      {gameStarted && handFinished ? (
        <button className="game-button" onClick={dealNewHand}>
          Next Hand
        </button>
      ) : null}
      {gameStarted && !handFinished ? (
        <button className="game-button" disabled onClick={dealNewHand}>
          Next Hand
        </button>
      ) : null}
      {!gameStarted ? (
        <button className="game-button" onClick={startHand}>
          Start Game
        </button>
      ) : null}
      <div className="players-cards-div">
        {whichImages("dealer", dealerHand)}
      </div>
      {playerStays ? <div>{dealerScore}</div> : null}
      <span></span>
      {dealerWins && handFinished ? <div>Dealer wins...</div> : null}
      {playerWins && handFinished ? <div>You win!</div> : null}
      {playerBlackjack ? <div>BLACKJACK</div> : null}
      {draw ? <div>Draw...</div> : null}
      <span></span>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import OpponentScreen from "./components/OpponentScreen";
import Cards from "./components/Cards";
import Videos from "./components/Video";
import { shuffle } from "lodash";

const App = () => {
  const deckOfCards = [
    {
      label: "2H",
      value: 2,
    },
    {
      label: "3H",
      value: 3,
    },
    {
      label: "4H",
      value: 4,
    },
    {
      label: "5H",
      value: 5,
    },
    {
      label: "6H",
      value: 6,
    },
    {
      label: "7H",
      value: 7,
    },
    {
      label: "8H",
      value: 8,
    },
    {
      label: "9H",
      value: 9,
    },
    {
      label: "10H",
      value: 10,
    },
    {
      label: "JH",
      value: 10,
    },
    {
      label: "QH",
      value: 10,
    },
    {
      label: "KH",
      value: 10,
    },
    {
      label: "AH",
      value: 11,
      reset: false,
    },
    {
      label: "2C",
      value: 2,
    },
    {
      label: "3C",
      value: 3,
    },
    {
      label: "4C",
      value: 4,
    },
    {
      label: "5C",
      value: 5,
    },
    {
      label: "6C",
      value: 6,
    },
    {
      label: "7C",
      value: 7,
    },
    {
      label: "8C",
      value: 8,
    },
    {
      label: "9C",
      value: 9,
    },
    {
      label: "10C",
      value: 10,
    },
    {
      label: "JC",
      value: 10,
    },
    {
      label: "QC",
      value: 10,
    },
    {
      label: "KC",
      value: 10,
    },
    {
      label: "AC",
      value: 11,
      reset: false,
    },
    {
      label: "2D",
      value: 2,
    },
    {
      label: "3D",
      value: 3,
    },
    {
      label: "4D",
      value: 4,
    },
    {
      label: "5D",
      value: 5,
    },
    {
      label: "6D",
      value: 6,
    },
    {
      label: "7D",
      value: 7,
    },
    {
      label: "8D",
      value: 8,
    },
    {
      label: "9D",
      value: 9,
    },
    {
      label: "10D",
      value: 10,
    },
    {
      label: "JD",
      value: 10,
    },
    {
      label: "QD",
      value: 10,
    },
    {
      label: "KD",
      value: 10,
    },
    {
      label: "AD",
      value: 11,
      reset: false,
    },
    {
      label: "2S",
      value: 2,
    },
    {
      label: "3S",
      value: 3,
    },
    {
      label: "4S",
      value: 4,
    },
    {
      label: "5S",
      value: 5,
    },
    {
      label: "6S",
      value: 6,
    },
    {
      label: "7S",
      value: 7,
    },
    {
      label: "8S",
      value: 8,
    },
    {
      label: "9S",
      value: 9,
    },
    {
      label: "10S",
      value: 10,
    },
    {
      label: "JS",
      value: 10,
    },
    {
      label: "QS",
      value: 10,
    },
    {
      label: "KS",
      value: 10,
    },
    {
      label: "AS",
      value: 11,
      reset: false,
    },
  ];

  const [gameStarted, setGameStarted] = useState(false);

  const [opponent, setOpponent] = useState(undefined);

  const playDeck = [...deckOfCards];
  const shuffledPlayDeck = shuffle(playDeck);

  const [playerHand, setPlayerHand] = useState(["player"]);
  const [dealerHand, setDealerHand] = useState(["dealer"]);

  const [playerBusted, setPlayerBusted] = useState(false);
  const [dealerBusted, setDealerBusted] = useState(false);

  const [playerWins, setPlayerWins] = useState(false);
  const [dealerWins, setDealerWins] = useState(false);

  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);

  const [playerWinCount, setPlayerWinCount] = useState(0);
  const [winsTilVideo, setWinsTilVideo] = useState(5);
  const [roundWins, setRoundWins] = useState(0);
  const [handPointsAwarded, setHandPointsAwarded] = useState(false);

  const [playerBlackjack, setPlayerBlackjack] = useState(false);

  const [playerTurn, setPlayerTurn] = useState(true);

  const [playerStays, setPlayerStays] = useState(false);

  const [handFinished, setHandFinished] = useState(false);

  const [draw, setDraw] = useState(false);

  const [deckLength, setDeckLength] = useState(0);

  const [opponentSelected, setOpponentSelected] = useState(false);

  const [doubleDown, setDoubleDown] = useState(false);

  const opponentNumber = (opponent) => {
    setOpponent(opponent + 1);
    setOpponentSelected(true);
  };

  const startHand = () => {
    // Deal the first two cards in the shuffled deck to the player and set the state of the player's hand
    setPlayerHand([shuffledPlayDeck[0], shuffledPlayDeck[1]]);
    // Compute the score obtained by adding the values of the two cards
    const playerScore = shuffledPlayDeck[0].value + shuffledPlayDeck[1].value;
    // Update the state of the player's score
    setPlayerScore(playerScore);
    // Remove the cards dealt to the player from the deck and then repeat the process for the dealer...
    shuffledPlayDeck.splice(0, 2);
    // Deal and set hand
    setDealerHand([shuffledPlayDeck[0], shuffledPlayDeck[1]]);
    // Compute score
    const dealerScore = shuffledPlayDeck[0].value + shuffledPlayDeck[1].value;
    // Set score
    setDealerScore(dealerScore);
    // Remove dealt cards
    shuffledPlayDeck.splice(0, 2);
    setGameStarted((gameStarted) => (gameStarted = true));
  };

  useEffect(() => {
    setDeckLength((deckLength) => (deckLength = shuffledPlayDeck.length));
  }, [deckLength, shuffledPlayDeck]);

  /**
   * Adds a card to the player's hand when requested
   */
  const handlePlayerHits = () => {
    const cardToDeal = shuffledPlayDeck[0];
    const cardToDealValue = shuffledPlayDeck[0].value;
    setPlayerHand((playerHand) => [...playerHand, cardToDeal]);
    setPlayerScore((playerScore) => playerScore + cardToDealValue);
    shuffledPlayDeck.splice(0, 1);
  };

  // Handle player getting blackjack
  useEffect(() => {
    if (playerTurn) {
      if (playerScore === 21) {
        setPlayerBlackjack((playerBlackjack) => (playerBlackjack = true));
        setPlayerTurn((playerTurn) => (playerTurn = false));
        setPlayerStays((playerStays) => (playerStays = true));
      }
    }
  }, [playerTurn, playerScore]);

  const handleDealerHits = () => {
    if (dealerScore < 17) {
      setDealerHand((dealerHand) => [...dealerHand, shuffledPlayDeck[0]]);
      setDealerScore((dealerScore) => dealerScore + shuffledPlayDeck[0].value);
      shuffledPlayDeck.splice(0, 1);
    }
  };

  const handleDoubleDown = () => {
    setDoubleDown((doubleDown) => doubleDown = true)
    handlePlayerHits()
    handlePlayerStays()
  };

  useEffect(() => {
    if (playerTurn && playerScore > 21) {
      setPlayerBusted((playerBusted) => (playerBusted = true));
      setPlayerStays((playerStays) => (playerStays = true));
      setPlayerTurn((playerTurn) => (playerTurn = false));
      handleDealerHits();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerScore, playerBusted, playerTurn]);

  const handlePlayerStays = () => {
    setPlayerTurn((playerTurn) => (playerTurn = false));
    setPlayerStays((playerStays) => (playerStays = true));
  };

  /**
   * Check's the score of a hand and if that score is both greater than 21 and it contains an ace reduces the score by 10.
   */
  useEffect(() => {
    if (playerTurn) {
      for (const card of playerHand) {
        if (card.value === 11 && playerScore > 21 && card.reset !== true) {
          setPlayerScore((playerScore) => playerScore - 10);
          card.reset = true;
        }
      }
    } else if (!playerTurn) {
      for (const card of dealerHand) {
        if (card.value === 11 && dealerScore > 21 && card.reset !== true) {
          setDealerScore((dealerScore) => dealerScore - 10);
          card.reset = true;
        }
      }
    }
  }, [playerHand, playerScore, dealerHand, dealerScore, playerTurn]);

  /**
   * Hits the dealer while their score is less than 17 and not in busted state
   */
  useEffect(() => {
    if (!playerTurn) {
      if (playerStays && dealerScore < 17) {
        return handleDealerHits();
      }
      if (dealerScore > 21) {
        setDealerBusted((dealerBusted) => (dealerBusted = true));
        return setHandFinished((handFinished) => (handFinished = true));
      }
      if (dealerScore >= 17) {
        return setHandFinished((handFinished) => (handFinished = true));
      }
      if (dealerScore === 21 && !playerBlackjack) {
        return setHandFinished((handFinished) => (handFinished = true));
      }
      if (playerBusted) {
        return setHandFinished((handFinished) => (handFinished = true));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerTurn, playerStays, playerBusted, dealerScore, playerBlackjack]);

  const calculatePlayerWins = () => {
    if (playerWinCount >= 5) {
      setRoundWins((roundWins) => roundWins + 1);
      setPlayerWinCount((playerWinCount) => (playerWinCount = 0));
    }
  };

  /**
   * Compares the player's hand to the dealer's hand and determines the winner
   */
  useEffect(() => {
    if (!handPointsAwarded) {
      if (handFinished) {
        // neither player busts, player score is higher than dealer's
        if (!dealerBusted && !playerBusted && playerScore > dealerScore) {
          setPlayerWinCount((playerWinCount) => playerWinCount + 1);
          setHandPointsAwarded(
            (handPointsAwarded) => (handPointsAwarded = true)
          );
          if (doubleDown === true) {
            setPlayerWinCount((playerWinCount) => playerWinCount + 1);
          }
          return setPlayerWins((playerWins) => (playerWins = true));
        }
        // neither player busts, dealer score is higher than player's
        if (!playerBusted && !dealerBusted && dealerScore > playerScore) {
          return setDealerWins((dealerWins) => (dealerWins = true));
        }
        // neither player busts, both players have the same score
        if (!playerBusted && !dealerBusted && playerScore === dealerScore) {
          return setDraw((draw) => (draw = true));
        }
        // player has blackjack, dealer does not
        if (playerBlackjack && dealerScore !== 21) {
          setPlayerWinCount((playerWinCount) => playerWinCount + 2);
          setHandPointsAwarded(
            (handPointsAwarded) => (handPointsAwarded = true)
          );
          if (doubleDown === true) {
            setPlayerWinCount((playerWinCount) => playerWinCount + 1);
          }
          return setPlayerWins((playerWins) => (playerWins = true));
        }
        // both players have 21
        if (playerBlackjack && dealerScore === 21) {
          return setDraw((draw) => (draw = true));
        }
        // player busts, dealer does not
        if (!dealerBusted && playerBusted) {
          return setDealerWins((dealerWins) => (dealerWins = true));
        }
        // dealer busts, player does not
        if (dealerBusted && !playerBusted) {
          setPlayerWinCount((playerWinCount) => playerWinCount + 1);
          setHandPointsAwarded(
            (handPointsAwarded) => (handPointsAwarded = true)
          );
          if (doubleDown === true) {
            setPlayerWinCount((playerWinCount) => playerWinCount + 1);
          }
          return setPlayerWins((playerWins) => (playerWins = true));
        }
        // both players bust
        if (playerBusted && dealerBusted) {
          return setDraw((draw) => (draw = true));
        }
      }
    }
    calculatePlayerWins();
  }, [
    playerScore,
    dealerScore,
    playerBusted,
    dealerBusted,
    handFinished,
    playerBlackjack,
    playerStays,
    handPointsAwarded,
    playerWinCount,
  ]);

  useEffect(() => {
    if (dealerWins || playerWins || draw) {
      setHandFinished((handFinished) => (handFinished = true));
    }
  }, [dealerWins, playerWins, draw]);

  const dealNewHand = () => {
    // Reset player state
    setPlayerHand((playerHand) => (playerHand = []));
    setPlayerScore((playerScore) => (playerScore = 0));
    setPlayerBlackjack((playerBlackjack) => (playerBlackjack = false));
    setPlayerTurn((playerTurn) => (playerTurn = true));
    setPlayerStays((playerStays) => (playerStays = false));
    setPlayerBusted((playerBusted) => (playerBusted = false));
    setPlayerWins((playerWins) => (playerWins = false));

    // Reset dealer state
    setDealerHand((dealerHand) => (dealerHand = []));
    setDealerScore((dealerScore) => (dealerScore = 0));
    setDealerBusted((dealerBusted) => (dealerBusted = false));
    setDealerWins((dealerWins) => (dealerWins = false));

    // Reset misc
    setHandFinished((handFinished) => (handFinished = false));
    setDraw((draw) => (draw = false));
    setHandPointsAwarded((handPointsAwarded) => (handPointsAwarded = false));
    setDoubleDown((doubleDown) => (doubleDown = false));

    // if (shuffledPlayDeck.length <= 5) {
    //   shuffledPlayDeck = shuffle(playDeck);
    // }

    startHand();
  };

  return (
    <div>
      {!opponentSelected ? (
        <OpponentScreen opponentNumber={opponentNumber} />
      ) : null}
      {opponentSelected ? (
        <div>
          <Videos opponent={opponent} roundWins={roundWins} />
          <Cards
            playerHand={playerHand}
            playerScore={playerScore}
            playerBusted={playerBusted}
            playerBlackjack={playerBlackjack}
            dealerHand={dealerHand}
            playerStays={playerStays}
            handlePlayerHits={handlePlayerHits}
            handlePlayerStays={handlePlayerStays}
            dealNewHand={dealNewHand}
            startHand={startHand}
            gameStarted={gameStarted}
            handFinished={handFinished}
            dealerScore={dealerScore}
            dealerWins={dealerWins}
            playerWins={playerWins}
            draw={draw}
            playerWinCount={playerWinCount}
            handleDoubleDown={handleDoubleDown}
          />
        </div>
      ) : null}
    </div>
  );
};

export default App;

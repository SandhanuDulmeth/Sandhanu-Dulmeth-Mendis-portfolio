import React, { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

const ChessApp = () => {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState(game.fen());

  useEffect(() => {
    setFen(game.fen());
  }, [game]);

  const makeAMove = (move) => {
    try {
      const result = game.move(move);
      if (result) {
        setFen(game.fen());
        return true;
      }
    } catch (e) {
        return false;
    }
    return false;
  };

  const onDrop = (sourceSquare, targetSquare) => {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // always promote to a queen for simplicity
    });

    // Make random computer move
    if (move && !game.isGameOver()) {
       setTimeout(makeRandomMove, 200);
    }

    return move;
  };
  
  const makeRandomMove = () => {
    const possibleMoves = game.moves();
    if (game.isGameOver() || game.isDraw() || possibleMoves.length === 0) return; // exit if the game is over
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    makeAMove(possibleMoves[randomIndex]);
  };

  const getStatus = () => {
    if (game.isCheckmate()) return "Checkmate! Game Over.";
    if (game.isDraw()) return "Draw!";
    if (game.isCheck()) return "Check!";
    if (game.turn() === 'b') return "Computer's turn...";
    return "Your turn";
  };

  return (
    <div style={{ 
      padding: '20px', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      backgroundColor: '#c0c0c0', 
      height: '100%', 
      boxSizing: 'border-box',
      overflow: 'auto'
    }}>
        <div style={{ 
            fontFamily: 'Tahoma, Arial, sans-serif', 
            marginBottom: '15px', 
            color: '#000',
            fontSize: '18px',
            fontWeight: 'bold',
            borderBottom: '1px solid #808080',
            borderRight: '1px solid #808080',
            borderTop: '1px solid #fff',
            borderLeft: '1px solid #fff',
            padding: '4px 10px',
            backgroundColor: '#dfdfdf'
        }}>
            Chess.exe
        </div>
        <div style={{ width: '350px', maxWidth: '100%', border: '2px solid #808080', borderTopColor: '#fff', borderLeftColor: '#fff' }}>
            <Chessboard 
                position={fen} 
                onPieceDrop={onDrop} 
                customDarkSquareStyle={{ backgroundColor: '#779556' }}
                customLightSquareStyle={{ backgroundColor: '#ebecd0' }}
            />
        </div>
        <div style={{ 
            marginTop: '15px', 
            fontFamily: 'Tahoma, Arial, sans-serif', 
            color: '#000',
            fontWeight: 'bold',
            fontSize: '14px'
        }}>
            {getStatus()}
        </div>
        <button 
            onClick={() => {
                const newGame = new Chess();
                setGame(newGame);
                setFen(newGame.fen());
            }}
            style={{
                marginTop: '15px',
                padding: '6px 20px',
                fontFamily: 'Tahoma, Arial, sans-serif',
                fontSize: '13px',
                backgroundColor: '#dfdfdf',
                color: '#000',
                border: '2px solid',
                borderColor: '#ffffff #000000 #000000 #ffffff',
                cursor: 'pointer',
                outline: 'none',
                boxShadow: 'inset 1px 1px #dfdfdf, inset -1px -1px #808080'
            }}
            onMouseDown={(e) => {
                e.target.style.borderColor = '#808080 #ffffff #ffffff #808080';
                e.target.style.boxShadow = 'inset 1px 1px #000000, inset -1px -1px #dfdfdf';
            }}
            onMouseUp={(e) => {
                e.target.style.borderColor = '#ffffff #000000 #000000 #ffffff';
                e.target.style.boxShadow = 'inset 1px 1px #dfdfdf, inset -1px -1px #808080';
            }}
            onMouseLeave={(e) => {
                e.target.style.borderColor = '#ffffff #000000 #000000 #ffffff';
                e.target.style.boxShadow = 'inset 1px 1px #dfdfdf, inset -1px -1px #808080';
            }}
        >
            Restart Game
        </button>
    </div>
  );
};

export default ChessApp;

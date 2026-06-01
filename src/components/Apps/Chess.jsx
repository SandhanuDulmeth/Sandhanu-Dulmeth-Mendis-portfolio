import React, { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

// ==========================================
// Piece-Square Tables (PST) for AI Heuristics
// ==========================================
const pawnEval = [
    [0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0],
    [5.0,  5.0,  5.0,  5.0,  5.0,  5.0,  5.0,  5.0],
    [1.0,  1.0,  2.0,  3.0,  3.0,  2.0,  1.0,  1.0],
    [0.5,  0.5,  1.0,  2.5,  2.5,  1.0,  0.5,  0.5],
    [0.0,  0.0,  0.0,  2.0,  2.0,  0.0,  0.0,  0.0],
    [0.5, -0.5, -1.0,  0.0,  0.0, -1.0, -0.5,  0.5],
    [0.5,  1.0,  1.0, -2.0, -2.0,  1.0,  1.0,  0.5],
    [0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0]
];

const knightEval = [
    [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0],
    [-4.0, -2.0,  0.0,  0.0,  0.0,  0.0, -2.0, -4.0],
    [-3.0,  0.0,  1.0,  1.5,  1.5,  1.0,  0.0, -3.0],
    [-3.0,  0.5,  1.5,  2.0,  2.0,  1.5,  0.5, -3.0],
    [-3.0,  0.0,  1.5,  2.0,  2.0,  1.5,  0.0, -3.0],
    [-3.0,  0.5,  1.0,  1.5,  1.5,  1.0,  0.5, -3.0],
    [-4.0, -2.0,  0.0,  0.5,  0.5,  0.0, -2.0, -4.0],
    [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0]
];

const bishopEval = [
    [-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
    [-1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -1.0],
    [-1.0,  0.0,  0.5,  1.0,  1.0,  0.5,  0.0, -1.0],
    [-1.0,  0.5,  0.5,  1.0,  1.0,  0.5,  0.5, -1.0],
    [-1.0,  0.0,  1.0,  1.0,  1.0,  1.0,  0.0, -1.0],
    [-1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0, -1.0],
    [-1.0,  0.5,  0.0,  0.0,  0.0,  0.0,  0.5, -1.0],
    [-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0]
];

const rookEval = [
    [0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0],
    [0.5,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  0.5],
    [-0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [-0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [-0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [-0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [-0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [0.0,  0.0,  0.0,  0.5,  0.5,  0.0,  0.0,  0.0]
];

const queenEval = [
    [-2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0],
    [-1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -1.0],
    [-1.0,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -1.0],
    [-0.5,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -0.5],
    [0.0,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -0.5],
    [-1.0,  0.5,  0.5,  0.5,  0.5,  0.5,  0.0, -1.0],
    [-1.0,  0.0,  0.5,  0.0,  0.0,  0.5,  0.0, -1.0],
    [-2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0]
];

const kingEval = [
    [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [-2.0, -3.0, -3.0, -4.0, -4.0, -3.0, -3.0, -2.0],
    [-1.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -1.0],
    [2.0,  2.0,  0.0,  0.0,  0.0,  0.0,  2.0,  2.0],
    [2.0,  3.0,  1.0,  0.0,  0.0,  1.0,  3.0,  2.0]
];

const getPieceScore = (type) => {
  switch (type) {
    case 'p': return 10;
    case 'n': return 32;
    case 'b': return 33;
    case 'r': return 50;
    case 'q': return 90;
    default: return 0;
  }
};

const getPieceValue = (piece, r, c) => {
  if (piece === null) return 0;
  
  let absoluteValue = 0;
  switch (piece.type) {
    case 'p': absoluteValue = 100; break;
    case 'r': absoluteValue = 500; break;
    case 'n': absoluteValue = 320; break;
    case 'b': absoluteValue = 330; break;
    case 'q': absoluteValue = 900; break;
    case 'k': absoluteValue = 20000; break;
    default: absoluteValue = 0;
  }

  // Row flip for Black pieces
  const row = piece.color === 'w' ? r : 7 - r;
  const col = c;
  
  let pstBonus = 0;
  switch (piece.type) {
    case 'p': pstBonus = pawnEval[row][col]; break;
    case 'n': pstBonus = knightEval[row][col]; break;
    case 'b': pstBonus = bishopEval[row][col]; break;
    case 'r': pstBonus = rookEval[row][col]; break;
    case 'q': pstBonus = queenEval[row][col]; break;
    case 'k': pstBonus = kingEval[row][col]; break;
  }
  
  return absoluteValue + (pstBonus * 10);
};

// Evaluate the board state from the perspective of aiColor
const evaluateBoard = (game, aiColor) => {
  let totalEvaluation = 0;
  const board = game.board();
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const piece = board[r][c];
      if (piece) {
        const value = getPieceValue(piece, r, c);
        if (piece.color === aiColor) {
          totalEvaluation += value;
        } else {
          totalEvaluation -= value;
        }
      }
    }
  }
  return totalEvaluation;
};

// Minimax with Alpha-Beta Pruning
const minimax = (game, depth, alpha, beta, isMaximizingPlayer, aiColor) => {
  if (depth === 0 || game.isGameOver()) {
    return { score: evaluateBoard(game, aiColor) };
  }

  const moves = game.moves({ verbose: true });
  // Move sorting to optimize Alpha-Beta cuts (evaluate captures first)
  moves.sort((a, b) => {
    const aScore = a.captured ? getPieceScore(a.captured) : 0;
    const bScore = b.captured ? getPieceScore(b.captured) : 0;
    return bScore - aScore;
  });

  let bestMove = null;

  if (isMaximizingPlayer) {
    let maxScore = -Infinity;
    for (const move of moves) {
      game.move(move);
      const { score } = minimax(game, depth - 1, alpha, beta, false, aiColor);
      game.undo();
      
      if (score > maxScore) {
        maxScore = score;
        bestMove = move;
      }
      alpha = Math.max(alpha, score);
      if (beta <= alpha) {
        break; // Beta cut-off
      }
    }
    return { score: maxScore, move: bestMove };
  } else {
    let minScore = Infinity;
    for (const move of moves) {
      game.move(move);
      const { score } = minimax(game, depth - 1, alpha, beta, true, aiColor);
      game.undo();
      
      if (score < minScore) {
        minScore = score;
        bestMove = move;
      }
      beta = Math.min(beta, score);
      if (beta <= alpha) {
        break; // Alpha cut-off
      }
    }
    return { score: minScore, move: bestMove };
  }
};

// ==========================================
// Web Audio API Sound Synthesizer
// ==========================================
const playSound = (type, isEnabled = true) => {
  if (!isEnabled) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    
    switch (type) {
      case 'move': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(150, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
        break;
      }
      case 'capture': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(250, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.12);
        break;
      }
      case 'check': {
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();
        osc1.type = 'sine';
        osc2.type = 'sine';
        osc1.frequency.setValueAtTime(380, ctx.currentTime);
        osc2.frequency.setValueAtTime(480, ctx.currentTime);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);
        osc1.start();
        osc2.start();
        osc1.stop(ctx.currentTime + 0.25);
        osc2.stop(ctx.currentTime + 0.25);
        break;
      }
      case 'gameover': {
        const chord = [261.63, 329.63, 392.00, 523.25]; // C major chord
        chord.forEach((f, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, ctx.currentTime + idx * 0.08);
          gain.gain.setValueAtTime(0.12, ctx.currentTime + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + idx * 0.08 + 0.35);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + idx * 0.08);
          osc.stop(ctx.currentTime + idx * 0.08 + 0.35);
        });
        break;
      }
      default:
        break;
    }
  } catch (e) {
    console.warn('Web Audio API is blocked or failed to initialize', e);
  }
};

// ==========================================
// Chess Application Component
// ==========================================
const ChessApp = () => {
  const [game, setGame] = useState(() => new Chess());
  const [fen, setFen] = useState(game.fen());
  const [playerColor, setPlayerColor] = useState('w'); // 'w' or 'b'
  const [gameMode, setGameMode] = useState('vs_ai'); // 'vs_ai' or 'local_pvp'
  const [difficulty, setDifficulty] = useState('medium'); // 'easy', 'medium', 'hard'
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [boardTheme, setBoardTheme] = useState('classic'); // 'classic', 'xp', 'wood'

  // Board themes colors
  const themeStyles = {
    classic: { dark: '#779556', light: '#ebecd0' },
    xp: { dark: '#3593FF', light: '#ECE9D8' },
    wood: { dark: '#b58863', light: '#f0d9b5' }
  };

  const makeAIMove = () => {
    const aiColor = playerColor === 'w' ? 'b' : 'w';
    let move = null;
    const possibleMoves = game.moves({ verbose: true });

    if (possibleMoves.length === 0) {
      setIsAiThinking(false);
      return;
    }

    if (difficulty === 'easy') {
      // Basic AI: Pick a random capture, or random move
      const captures = possibleMoves.filter(m => m.captured);
      if (captures.length > 0 && Math.random() < 0.6) {
        move = captures[Math.floor(Math.random() * captures.length)];
      } else {
        move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
      }
    } else {
      // Minimax AI
      const depth = difficulty === 'medium' ? 2 : 3;
      const searchGame = new Chess(game.fen());
      const result = minimax(searchGame, depth, -Infinity, Infinity, true, aiColor);
      move = result.move;
      
      // Fallback if minimax didn't return a move
      if (!move) {
        move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
      }
    }

    if (move) {
      try {
        const moveResult = game.move({
          from: move.from,
          to: move.to,
          promotion: move.promotion || 'q'
        });
        if (moveResult) {
          setFen(game.fen());
          
          // Sound indicators
          if (game.isGameOver()) {
            playSound('gameover', isSoundEnabled);
          } else if (game.isCheck()) {
            playSound('check', isSoundEnabled);
          } else if (moveResult.captured) {
            playSound('capture', isSoundEnabled);
          } else {
            playSound('move', isSoundEnabled);
          }
        }
      } catch (e) {
        console.error("AI error making move", e);
      }
    }
    setIsAiThinking(false);
  };

  const makeAMove = (move) => {
    try {
      const result = game.move(move);
      if (result) {
        setFen(game.fen());
        
        // Sound indicators
        if (game.isGameOver()) {
          playSound('gameover', isSoundEnabled);
        } else if (game.isCheck()) {
          playSound('check', isSoundEnabled);
        } else if (result.captured) {
          playSound('capture', isSoundEnabled);
        } else {
          playSound('move', isSoundEnabled);
        }
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
    return false;
  };

  const onDrop = ({ sourceSquare, targetSquare }) => {
    // Block moves if AI is thinking or game is over
    if (isAiThinking || game.isGameOver()) return false;

    // Block moves of the other side if Game Mode is vs AI
    if (gameMode === 'vs_ai') {
      const pieceOnSource = game.get(sourceSquare);
      if (pieceOnSource && pieceOnSource.color !== playerColor) {
        return false;
      }
    }

    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // automatically promote to a queen
    });

    return move;
  };

  const handleRestart = () => {
    const newGame = new Chess();
    setGame(newGame);
    setFen(newGame.fen());
    setIsAiThinking(false);
    playSound('move', isSoundEnabled);
  };

  const handleUndo = () => {
    const history = game.history();
    if (history.length === 0 || isAiThinking) return;

    if (gameMode === 'vs_ai') {
      const turn = game.turn();
      // If it's player's turn, undo AI move + player's move (2 steps)
      if (turn === playerColor) {
        if (history.length >= 2) {
          game.undo();
          game.undo();
        }
      } else {
        // AI's turn (e.g. if player just moved and AI is about to move)
        game.undo();
      }
    } else {
      // Local PVP: undo just 1 move
      game.undo();
    }

    setFen(game.fen());
    playSound('move', isSoundEnabled);
  };

  // Trigger AI move if it is AI's turn
  useEffect(() => {
    if (gameMode === 'vs_ai' && !game.isGameOver()) {
      const turn = game.turn();
      const aiColor = playerColor === 'w' ? 'b' : 'w';
      
      if (turn === aiColor && !isAiThinking) {
        setIsAiThinking(true);
        const timer = setTimeout(() => {
          makeAIMove();
        }, 300);
        return () => clearTimeout(timer);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fen, gameMode, playerColor]);

  const getStatus = () => {
    if (game.isCheckmate()) return "Checkmate! Game Over.";
    if (game.isDraw()) return "Draw Game!";
    if (game.isCheck()) {
      const kingColor = game.turn() === 'w' ? 'White' : 'Black';
      return `Check! ${kingColor} King is in danger.`;
    }
    
    if (isAiThinking) return "AI is thinking...";
    
    const turnColor = game.turn() === 'w' ? 'White' : 'Black';
    if (gameMode === 'vs_ai') {
      const isPlayerTurn = game.turn() === playerColor;
      return isPlayerTurn ? "Your turn (White)" : "Computer is thinking...";
    }
    return `${turnColor}'s turn`;
  };

  // Captured pieces calculation
  const captured = (() => {
    const initial = {
      w: { p: 8, n: 2, b: 2, r: 2, q: 1 },
      b: { p: 8, n: 2, b: 2, r: 2, q: 1 }
    };
    
    const current = {
      w: { p: 0, n: 0, b: 0, r: 0, q: 0 },
      b: { p: 0, n: 0, b: 0, r: 0, q: 0 }
    };
    
    const board = game.board();
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const piece = board[r][c];
        if (piece && piece.type !== 'k') {
          current[piece.color][piece.type]++;
        }
      }
    }
    
    const capList = {
      w: [], // White pieces captured (shown in Black's panel)
      b: []  // Black pieces captured (shown in White's panel)
    };

    const types = ['q', 'r', 'b', 'n', 'p']; // Sort by value
    const symbols = {
      w: { p: '♙', n: '♘', b: '♗', r: '♖', q: '♕' },
      b: { p: '♟', n: '♞', b: '♝', r: '♜', q: '♛' }
    };

    types.forEach(t => {
      const whiteDiff = initial.w[t] - current.w[t];
      for (let i = 0; i < whiteDiff; i++) {
        capList.w.push(symbols.w[t]);
      }
      const blackDiff = initial.b[t] - current.b[t];
      for (let i = 0; i < blackDiff; i++) {
        capList.b.push(symbols.b[t]);
      }
    });

    return capList;
  })();

  // Render Move History List in rows
  const movePairs = (() => {
    const history = game.history();
    const pairs = [];
    for (let i = 0; i < history.length; i += 2) {
      pairs.push({
        num: Math.floor(i / 2) + 1,
        white: history[i],
        black: history[i + 1] || ''
      });
    }
    return pairs;
  })();

  const currentTheme = themeStyles[boardTheme];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      backgroundColor: '#ECE9D8',
      fontFamily: 'Tahoma, Arial, sans-serif',
      color: '#000',
      overflow: 'hidden'
    }}>
      {/* Dynamic Style Block */}
      <style>{`
        .xp-button {
          font-family: Tahoma, Arial, sans-serif;
          font-size: 11px;
          background-color: #ECE9D8;
          color: #000;
          border: 1px solid #7F9DB9;
          border-radius: 3px;
          padding: 4px 10px;
          cursor: pointer;
          box-shadow: 1px 1px 0px #FFF inset;
          outline: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }
        .xp-button:hover:not(:disabled) {
          background-color: #E3EFFF;
          border-color: #3593FF;
        }
        .xp-button:active:not(:disabled) {
          background-color: #CDE2FF;
          border-color: #0058EE;
        }
        .xp-button:disabled {
          color: #ACA899;
          border-color: #D6D2C2;
          box-shadow: none;
          cursor: default;
        }
        .xp-select {
          border: 1px solid #7F9DB9;
          font-family: Tahoma, Arial, sans-serif;
          font-size: 11px;
          padding: 2px 4px;
          outline: none;
          background-color: #FFF;
        }
        .xp-select:focus {
          border-color: #3593FF;
        }
        .xp-panel {
          border: 1px solid #ACA899;
          background-color: #FFF;
          padding: 6px;
          box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
        }
      `}</style>

      {/* Main Chess Interface */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        padding: '10px',
        gap: '12px',
        flex: 1,
        minHeight: 0 // lets overflow work properly inside flex
      }}>
        {/* Left Column: Board */}
        <div style={{
          width: '310px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: 0
        }}>
          <div style={{
            width: '100%',
            aspectRatio: '1',
            border: '2px solid #7F9DB9',
            boxShadow: '1px 1px 5px rgba(0,0,0,0.2)',
            backgroundColor: '#FFF'
          }}>
            <Chessboard
              options={{
                position: fen,
                onPieceDrop: onDrop,
                boardOrientation: playerColor === 'w' ? 'white' : 'black',
                darkSquareStyle: { backgroundColor: currentTheme.dark },
                lightSquareStyle: { backgroundColor: currentTheme.light },
              }}
            />
          </div>
        </div>

        {/* Right Column: Controls & Game Details */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          minWidth: 0 // prevents flex columns from expanding past bounds
        }}>
          {/* Status Display Panel */}
          <div className="xp-panel" style={{
            backgroundColor: game.isCheck() ? '#FFF0F0' : '#FFF',
            borderColor: game.isCheck() ? '#FF3B30' : '#ACA899',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 10px',
            borderRadius: '2px'
          }}>
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: game.isGameOver() ? '#8E8E93' : game.isCheck() ? '#FF3B30' : '#34C759',
              boxShadow: '0 0 4px rgba(0,0,0,0.2)'
            }} />
            <span style={{
              fontWeight: 'bold',
              fontSize: '12px',
              color: game.isCheck() ? '#C00' : '#000'
            }}>
              {getStatus()}
            </span>
          </div>

          {/* Captured Pieces Display */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
            fontSize: '11px'
          }}>
            <div className="xp-panel" style={{ padding: '4px 6px' }}>
              <div style={{ color: '#666', fontWeight: 'bold', fontSize: '9px', textTransform: 'uppercase', marginBottom: '2px' }}>
                Captured by White
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2px', fontSize: '16px', minHeight: '20px', color: '#000' }}>
                {captured.b.map((sym, idx) => (
                  <span key={idx}>{sym}</span>
                ))}
              </div>
            </div>
            <div className="xp-panel" style={{ padding: '4px 6px' }}>
              <div style={{ color: '#666', fontWeight: 'bold', fontSize: '9px', textTransform: 'uppercase', marginBottom: '2px' }}>
                Captured by Black
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2px', fontSize: '16px', minHeight: '20px', color: '#666' }}>
                {captured.w.map((sym, idx) => (
                  <span key={idx}>{sym}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Configuration Panel */}
          <div className="xp-panel" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '6px 10px',
            padding: '8px'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <label style={{ fontSize: '10px', fontWeight: 'bold', color: '#555' }}>Game Mode</label>
              <select
                className="xp-select"
                value={gameMode}
                onChange={(e) => {
                  setGameMode(e.target.value);
                  handleRestart();
                }}
              >
                <option value="vs_ai">VS Computer</option>
                <option value="local_pvp">Local PVP</option>
              </select>
            </div>

            {gameMode === 'vs_ai' && (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <label style={{ fontSize: '10px', fontWeight: 'bold', color: '#555' }}>Difficulty</label>
                  <select
                    className="xp-select"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                  >
                    <option value="easy">Easy (Random+)</option>
                    <option value="medium">Medium (depth 2)</option>
                    <option value="hard">Hard (depth 3)</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <label style={{ fontSize: '10px', fontWeight: 'bold', color: '#555' }}>Play As</label>
                  <select
                    className="xp-select"
                    value={playerColor}
                    onChange={(e) => {
                      setPlayerColor(e.target.value);
                      handleRestart();
                    }}
                  >
                    <option value="w">White</option>
                    <option value="b">Black</option>
                  </select>
                </div>
              </>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <label style={{ fontSize: '10px', fontWeight: 'bold', color: '#555' }}>Board Theme</label>
              <select
                className="xp-select"
                value={boardTheme}
                onChange={(e) => setBoardTheme(e.target.value)}
              >
                <option value="classic">Classic Green</option>
                <option value="xp">Windows XP Blue</option>
                <option value="wood">Burnt Wood</option>
              </select>
            </div>
          </div>

          {/* Move History Logger */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minHeight: 0
          }}>
            <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#555', marginBottom: '2px' }}>
              Move Log
            </div>
            <div className="xp-panel" style={{
              flex: 1,
              overflowY: 'auto',
              fontSize: '11px',
              fontFamily: 'Courier New, monospace',
              padding: '4px',
              minHeight: '60px'
            }}>
              {movePairs.length === 0 ? (
                <div style={{ color: '#888', fontStyle: 'italic', padding: '4px' }}>No moves yet.</div>
              ) : (
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {movePairs.map((pair) => (
                      <tr key={pair.num} style={{ borderBottom: '1px solid #EEE' }}>
                        <td style={{ width: '30px', fontWeight: 'bold', color: '#888', padding: '2px' }}>{pair.num}.</td>
                        <td style={{ width: '45%', padding: '2px' }}>{pair.white}</td>
                        <td style={{ width: '45%', padding: '2px' }}>{pair.black}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            gap: '8px',
            marginTop: 'auto',
            paddingTop: '4px'
          }}>
            <button
              className="xp-button"
              onClick={handleUndo}
              disabled={game.history().length === 0 || isAiThinking}
              style={{ flex: 1 }}
            >
              ↩️ Undo Move
            </button>
            <button
              className="xp-button"
              onClick={handleRestart}
              style={{ flex: 1 }}
            >
              🔄 Restart
            </button>
            <button
              className="xp-button"
              onClick={() => setIsSoundEnabled(!isSoundEnabled)}
              style={{ width: '36px', padding: '4px 0' }}
              title={isSoundEnabled ? "Mute sounds" : "Unmute sounds"}
            >
              {isSoundEnabled ? "🔊" : "🔇"}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom XP-style Status Bar */}
      <div style={{
        padding: '3px 8px',
        backgroundColor: '#ECE9D8',
        borderTop: '1px solid #ACA899',
        fontSize: '10px',
        color: '#666',
        display: 'flex',
        justifyContent: 'space-between',
        flexShrink: 0
      }}>
        <span>Status: {isAiThinking ? "Computer is calculating..." : "Ready"}</span>
        <span>Mode: {gameMode === 'vs_ai' ? `VS Computer (${difficulty})` : "Local PVP"}</span>
      </div>
    </div>
  );
};

export default ChessApp;

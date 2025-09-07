const express = require('express');
const { getBotMove } = require('./bot');
const app = express();
const PORT = 3000;

app.get('/move', (req, res) => {
  let boardParam = req.query.board;
  let board;

  try {
    board = JSON.parse(boardParam);
  } catch {
    return res.status(400).json({ error: 'Parámetro board inválido. Debe ser un array JSON.' });
  }

  if (!Array.isArray(board) || board.length !== 9) {
    return res.status(400).json({ error: 'El tablero debe ser un array de 9 posiciones.' });
  }

  const move = getBotMove(board);
  if (move === -1) {
    return res.status(400).json({ error: 'No hay movimientos disponibles.' });
  }

  res.json({ movimiento: move });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

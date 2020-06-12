
// board matrix 2d
// Simple class that helps map, clone or iterate over 2d boards
// Also it allows to find closest neighbours to every cell
// including cell itself

class Board {
  static SELF = 1;
  static EDGE = 2;
  static CORNER = 4;
  constructor(data, cols, rows = data.length / cols) {
    if (typeof cols === 'undefined') {
      // flat data
      this.cols = data[0].length;
      this.rows = data.length;
      this.data = data;
    } else {
      this.cols = cols;
      this.rows = rows;
      this.data = [];
      for (let i = 0; i < rows; ++i) {
        this.data.push(data.slice(i*cols, i*cols+cols));
      }
    }
  }
  get flat() {
    return this.data.reduce((res, row) => (res.push(...row), res), []);
  }
  _calcIdx(rowIdx, cellIdx) {
    return rowIdx * this.cols + cellIdx;
  }
  map(callback) {
    return new Board(this.data.map((row, rowIdx) => row.map((cell, cellIdx) => {
      const idx = this._calcIdx(rowIdx, cellIdx);
      return callback(cell, {rowIdx, cellIdx, idx});
    })));
  }
  neighbours(callback, types = Board.SELF | Board.EDGE | Board.COLS, overBound = false) {
    const boundaryFilter = overBound ? () => true : ([rowIdx, cellIdx]) => {
      if (rowIdx < 0 || rowIdx >= this.rows) return false;
      if (cellIdx < 0 || cellIdx >= this.cols) return false;
      return true;
    };
    return this.map((value, {rowIdx, cellIdx, idx}) => {
      const edgeNeighbours = [
        [rowIdx-1, cellIdx], [rowIdx+1, cellIdx],
        [rowIdx, cellIdx-1], [rowIdx, cellIdx+1]
      ].filter(boundaryFilter);
      const cornerNeighbours = [
        [rowIdx-1, cellIdx-1], [rowIdx-1, cellIdx+1],
        [rowIdx+1, cellIdx-1], [rowIdx+1, cellIdx+1]
      ].filter(boundaryFilter);
      const neighbours = [
        ...(types && Board.SELF ? [[rowIdx, cellIdx]] : []),
        ...(types && Board.EDGE ? edgeNeighbours : []),
        ...(types && Board.CORNER ? cornerNeighbours : []),
      ].map(([rowIdx, cellIdx]) => {
        const value = this.data[rowIdx][cellIdx];
        const idx = this._calcIdx(rowIdx, cellIdx);
        return {value, rowIdx, cellIdx, idx};
      });
      return callback(neighbours, {value, rowIdx, cellIdx, idx});
    });
  }
  print(rowsJoin = '\n', colsJoin = ' ') {
    return this.data.map(row => row.join(rowsJoin)).join(colsJoin);
  };
}

const board = new Board([[1,2],[3,4]]);

console.log(board.data); // board data
console.log(board.flat); // flatten data
const sameBoard = new Board(board.flat, 2);
console.log(sameBoard.map(cell => cell * 2)); // map over cells
console.log(sameBoard.map((_, {rowIdx, cellIdx, idx}) => [rowIdx, cellIdx, idx])); // get indexes
console.log(board.print()); // return in printable format
// iterate over closest neighbours:
console.log(board.neighbours(n => n.reduce((sum, cell) => sum + cell.value, 0)).data);

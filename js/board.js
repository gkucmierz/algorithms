
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
  calcIdx(rowIdx, colIdx) {
    return rowIdx * this.cols + colIdx;
  }
  map(callback) {
    return new Board(this.data.map((row, rowIdx) => row.map((cell, colIdx) => {
      const idx = this.calcIdx(rowIdx, colIdx);
      return callback(cell, {rowIdx, colIdx, idx});
    })));
  }
  neighbours(rowIdx, colIdx, types = Board.SELF | Board.EDGE | Board.CORNER, overBound = false) {
    const boundaryFilter = overBound ? () => true : ([rowIdx, colIdx]) => {
      if (rowIdx < 0 || rowIdx >= this.rows) return false;
      if (colIdx < 0 || colIdx >= this.cols) return false;
      return true;
    };
    const edgeNeighbours = [
      [rowIdx-1, colIdx], [rowIdx+1, colIdx],
      [rowIdx, colIdx-1], [rowIdx, colIdx+1]
    ];
    const cornerNeighbours = [
      [rowIdx-1, colIdx-1], [rowIdx-1, colIdx+1],
      [rowIdx+1, colIdx-1], [rowIdx+1, colIdx+1]
    ];
    return [
      ...(types & Board.SELF ? [[rowIdx, colIdx]] : []),
      ...(types & Board.EDGE ? edgeNeighbours : []),
      ...(types & Board.CORNER ? cornerNeighbours : []),
    ].filter(boundaryFilter).map(([rowIdx, colIdx]) => {
      const value = this.data[rowIdx][colIdx];
      const idx = this._calcIdx(rowIdx, colIdx);
      return {value, rowIdx, colIdx, idx};
    });
  }
  print(rowsJoin = '\n', colsJoin = ' ') {
    return this.data.map(row => row.join(rowsJoin)).join(colsJoin);
  };
}

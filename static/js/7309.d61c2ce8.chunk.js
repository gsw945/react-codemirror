"use strict";(self.webpackChunk_uiw_react_codemirror=self.webpackChunk_uiw_react_codemirror||[]).push([[7309],{7309:function(r,e,n){n.r(e),e.default="/* Game of Life\r\n * Implemented in TypeScript\r\n * To learn more about TypeScript, please visit http://www.typescriptlang.org/\r\n */\r\n\r\nnamespace Conway {\r\n\r\n  export class Cell {\r\n    public row: number;\r\n    public col: number;\r\n    public live: boolean;\r\n\r\n    constructor(row: number, col: number, live: boolean) {\r\n      this.row = row;\r\n      this.col = col;\r\n      this.live = live;\r\n    }\r\n  }\r\n\r\n  export class GameOfLife {\r\n    private gridSize: number;\r\n    private canvasSize: number;\r\n    private lineColor: string;\r\n    private liveColor: string;\r\n    private deadColor: string;\r\n    private initialLifeProbability: number;\r\n    private animationRate: number;\r\n    private cellSize: number;\r\n    private context: CanvasRenderingContext2D;\r\n    private world;\r\n\r\n\r\n    constructor() {\r\n      this.gridSize = 50;\r\n      this.canvasSize = 600;\r\n      this.lineColor = '#cdcdcd';\r\n      this.liveColor = '#666';\r\n      this.deadColor = '#eee';\r\n      this.initialLifeProbability = 0.5;\r\n      this.animationRate = 60;\r\n      this.cellSize = 0;\r\n      this.world = this.createWorld();\r\n      this.circleOfLife();\r\n    }\r\n\r\n    public createWorld() {\r\n      return this.travelWorld( (cell : Cell) =>  {\r\n        cell.live = Math.random() < this.initialLifeProbability;\r\n        return cell;\r\n      });\r\n    }\r\n\r\n    public circleOfLife() : void {\r\n      this.world = this.travelWorld( (cell: Cell) => {\r\n        cell = this.world[cell.row][cell.col];\r\n        this.draw(cell);\r\n        return this.resolveNextGeneration(cell);\r\n      });\r\n      setTimeout( () => {this.circleOfLife()}, this.animationRate);\r\n    }\r\n\r\n    public resolveNextGeneration(cell : Cell) {\r\n      var count = this.countNeighbors(cell);\r\n      var newCell = new Cell(cell.row, cell.col, cell.live);\r\n      if(count < 2 || count > 3) newCell.live = false;\r\n      else if(count == 3) newCell.live = true;\r\n      return newCell;\r\n    }\r\n\r\n    public countNeighbors(cell : Cell) {\r\n      var neighbors = 0;\r\n      for(var row = -1; row <=1; row++) {\r\n        for(var col = -1; col <= 1; col++) {\r\n          if(row == 0 && col == 0) continue;\r\n          if(this.isAlive(cell.row + row, cell.col + col)) {\r\n            neighbors++;\r\n          }\r\n        }\r\n      }\r\n      return neighbors;\r\n    }\r\n\r\n    public isAlive(row : number, col : number) {\r\n      if(row < 0 || col < 0 || row >= this.gridSize || col >= this.gridSize) return false;\r\n      return this.world[row][col].live;\r\n    }\r\n\r\n    public travelWorld(callback) {\r\n      var result = [];\r\n      for(var row = 0; row < this.gridSize; row++) {\r\n        var rowData = [];\r\n        for(var col = 0; col < this.gridSize; col++) {\r\n          rowData.push(callback(new Cell(row, col, false)));\r\n        }\r\n        result.push(rowData);\r\n      }\r\n      return result;\r\n    }\r\n\r\n    public draw(cell : Cell) {\r\n      if(this.context == null) this.context = this.createDrawingContext();\r\n      if(this.cellSize == 0) this.cellSize = this.canvasSize/this.gridSize;\r\n\r\n      this.context.strokeStyle = this.lineColor;\r\n      this.context.strokeRect(cell.row * this.cellSize, cell.col*this.cellSize, this.cellSize, this.cellSize);\r\n      this.context.fillStyle = cell.live ? this.liveColor : this.deadColor;\r\n      this.context.fillRect(cell.row * this.cellSize, cell.col*this.cellSize, this.cellSize, this.cellSize);\r\n    }\r\n\r\n    public createDrawingContext() {\r\n      var canvas = <HTMLCanvasElement> document.getElementById('conway-canvas');\r\n      if(canvas == null) {\r\n          canvas = document.createElement('canvas');\r\n          canvas.id = 'conway-canvas';\r\n          canvas.width = this.canvasSize;\r\n          canvas.height = this.canvasSize;\r\n          document.body.appendChild(canvas);\r\n      }\r\n      return canvas.getContext('2d');\r\n    }\r\n  }\r\n}\r\n\r\nvar game = new Conway.GameOfLife();\r\n"}}]);
//# sourceMappingURL=7309.d61c2ce8.chunk.js.map
// Memory data with more complex content
const memoryPrograms = {
  program1: {
    name: "The Classic Hunt",
    startInstruction: "Direct 09",
    indexRegister: 4,
    endPoint: '28',
    data: [
      { address: '00', value: 'Treasure: 🐱' },
      { address: '01', value: '100' },
      { address: '02', value: '19' },
      { address: '03', value: '14' },
      { address: '04', value: 'Direct 13' },
      { address: '05', value: 'Treasure: 🐶' },
      { address: '06', value: 'Direct 24' },
      { address: '07', value: '101' },
      { address: '08', value: '16' },
      { address: '09', value: 'Indirect 27' },
      { address: '10', value: '96' },
      { address: '11', value: 'Treasure: 🐔' },
      { address: '12', value: 'Treasure: 🐼' },
      { address: '13', value: 'IR to 10, Direct 30' },
      { address: '14', value: '86' },
      { address: '15', value: 'Treasure: 🐰' },
      { address: '16', value: 'Indexed 18' },
      { address: '17', value: '67' },
      { address: '18', value: '128' },
      { address: '19', value: 'Indexed 16' },
      { address: '20', value: '56' },
      { address: '21', value: 'Indexed 00' },
      { address: '22', value: 'Treasure: 🦒' },
      { address: '23', value: 'Treasure: 🦈' },
      { address: '24', value: 'Indirect 08' },
      { address: '25', value: '37' },
      { address: '26', value: 'Direct 06' },
      { address: '27', value: '21' },
      { address: '28', value: 'Treasure: 🐝' },
      { address: '29', value: '9' },
      { address: '30', value: 'Indirect 02' },
      { address: '31', value: '3' },
      { address: '32', value: 'Treasure: 🐸' },
      { address: '33', value: '12' },
      { address: '34', value: 'NO' },
      { address: '35', value: 'NO' },
    ]
  },
  program2: {
    name: "The Indirect Maze",
    startInstruction: "Indirect 15",
    indexRegister: 7,
    endPoint: '06',
    data: [
      { address: '00', value: '25' },
      { address: '01', value: 'Treasure: 🎯' },
      { address: '02', value: 'Direct 11' },
      { address: '03', value: '88' },
      { address: '04', value: 'Indexed 20' },
      { address: '05', value: '42' },
      { address: '06', value: 'Treasure: 🎪' },
      { address: '07', value: 'IR to 3, Indexed 01' },
      { address: '08', value: '99' },
      { address: '09', value: 'Direct 07' },
      { address: '10', value: 'Treasure: 🎨' },
      { address: '11', value: 'Indirect 00' },
      { address: '12', value: '77' },
      { address: '13', value: 'Treasure: 🎭' },
      { address: '14', value: '33' },
      { address: '15', value: '09' },
      { address: '16', value: 'Treasure: 🎸' },
      { address: '17', value: '55' },
      { address: '18', value: 'Direct 29' },
      { address: '19', value: 'Treasure: 🎲' },
      { address: '20', value: '66' },
      { address: '21', value: 'Treasure: 🎊' },
      { address: '22', value: 'Indexed 12' },
      { address: '23', value: 'Direct 06' },
      { address: '24', value: 'Treasure: 🎈' },
      { address: '25', value: 'Direct 02' },
      { address: '26', value: '11' },
      { address: '27', value: 'Treasure: 🎁' },
      { address: '28', value: 'Treasure: 🎀' },
      { address: '29', value: 'Indirect 26' },
      { address: '30', value: 'Treasure: 🎺' },
      { address: '31', value: '22' },
      { address: '32', value: 'NO' },
      { address: '33', value: 'NO' },
      { address: '34', value: 'NO' },
      { address: '35', value: 'NO' },
    ]
  },

program3: {
    name: "The Index Challenge", 
    startInstruction: "Indexed 05",
    indexRegister: 12,
    endPoint: '01',
    data: [
      { address: '00', value: '31' },
      { address: '01', value: 'Treasure: 🌟' },
      { address: '02', value: 'Direct 20' },
      { address: '03', value: '44' },
      { address: '04', value: 'Treasure: 🌙' },
      { address: '05', value: 'IR to 3, Direct 23' },
      { address: '06', value: 'Treasure: ☀️' },
      { address: '07', value: '02' },
      { address: '08', value: 'Treasure: 🌈' },
      { address: '09', value: 'Indexed 07' },
      { address: '10', value: 'Treasure: ⭐' },
      { address: '11', value: 'Direct 01' },
      { address: '12', value: '77' },
      { address: '13', value: 'Treasure: 🌺' },
      { address: '14', value: '99' },
      { address: '15', value: 'Indexed 01' },
      { address: '16', value: 'Treasure: 🌸' },
      { address: '17', value: 'Direct 09' },
      { address: '18', value: 'Treasure: 🌻' },
      { address: '19', value: 'Direct 11' },
      { address: '20', value: 'Indirect 00' },
      { address: '21', value: 'Treasure: 🌷' },
      { address: '22', value: '66' },
      { address: '23', value: 'Indexed 08' },
      { address: '24', value: 'Treasure: 🌹' },
      { address: '25', value: '55' },
      { address: '26', value: 'Treasure: 🌿' },
      { address: '27', value: 'Direct 11' },
      { address: '28', value: 'Treasure: 🍀' },
      { address: '29', value: '33' },
      { address: '30', value: 'Direct 11' },
      { address: '31', value: '27' },
      { address: '32', value: 'Treasure: 🎋' },
      { address: '33', value: 'Treasure: 🌴' },
      { address: '34', value: 'Treasure: 🌵' },
      { address: '35', value: 'NO' },
    ]
  },

  program4: {
    name: "The Mixed Adventure",
    startInstruction: "Direct 08",
    indexRegister: 6,
    endPoint: '06',
    data: [
      { address: '00', value: 'Treasure: 🚀' },
      { address: '01', value: '18' },
      { address: '02', value: 'Indexed 10' },
      { address: '03', value: '29' },
      { address: '04', value: 'Treasure: ✈️' },
      { address: '05', value: 'Direct 22' },
      { address: '06', value: 'Treasure: 🚁' },
      { address: '07', value: '14' },
      { address: '08', value: 'Indirect 01' },
      { address: '09', value: 'Treasure: 🛸' },
      { address: '10', value: 'IR to 2, Indirect 03' },
      { address: '11', value: 'Treasure: 🚂' },
      { address: '12', value: '35' },
      { address: '13', value: 'Treasure: 🚢' },
      { address: '14', value: 'Direct 05' },
      { address: '15', value: 'Treasure: ⛵' },
      { address: '16', value: 'Indexed 00' },
      { address: '17', value: '26' },
      { address: '18', value: 'Direct 02' },
      { address: '19', value: 'Treasure: 🚤' },
      { address: '20', value: 'Treasure: 🏎️' },
      { address: '21', value: '88' },
      { address: '22', value: 'Indirect 07' },
      { address: '23', value: 'Treasure: 🚌' },
      { address: '24', value: 'Treasure: 🚎' },
      { address: '25', value: '77' },
      { address: '26', value: 'Treasure: 🏍️' },
      { address: '27', value: 'Direct 16' },
      { address: '28', value: 'Treasure: 🛻' },
      { address: '29', value: '27' },
      { address: '30', value: 'Treasure: 🚐' },
      { address: '31', value: 'Indexed 24' },
      { address: '32', value: 'Treasure: 🚛' },
      { address: '33', value: '44' },
      { address: '34', value: 'Treasure: 🚜' },
      { address: '35', value: 'NO' },
    ]
  },

program5: {
    name: "The Deep Dive",
    startInstruction: "Indirect 20",
    indexRegister: 5,
    endPoint: '31',
    data: [
      { address: '00', value: 'Direct 17' },
      { address: '01', value: '33' },
      { address: '02', value: 'Treasure: 🐠' },
      { address: '03', value: 'Indexed 25' },
      { address: '04', value: 'Treasure: 🐟' },
      { address: '05', value: '12' },
      { address: '06', value: 'Treasure: 🐡' },
      { address: '07', value: 'Direct 30' },
      { address: '08', value: 'Treasure: 🦈' },
      { address: '09', value: '19' },
      { address: '10', value: 'Treasure: 🐙' },
      { address: '11', value: 'Indirect 05' },
      { address: '12', value: 'IR to 15, Indexed 16' },
      { address: '13', value: 'Treasure: 🐚' },
      { address: '14', value: '28' },
      { address: '15', value: 'Treasure: 🦀' },
      { address: '16', value: 'Direct 07' },
      { address: '17', value: 'Indirect 09' },
      { address: '18', value: 'Treasure: 🦞' },
      { address: '19', value: 'Indirect 05' },
      { address: '20', value: '00' },
      { address: '21', value: 'Treasure: 🐢' },
      { address: '22', value: '66' },
      { address: '23', value: 'Treasure: 🐊' },
      { address: '24', value: 'Direct 03' },
      { address: '25', value: '77' },
      { address: '26', value: 'Treasure: 🐋' },
      { address: '27', value: 'Indexed 19' },
      { address: '28', value: 'Treasure: 🐬' },
      { address: '29', value: '99' },
      { address: '30', value: 'Indexed 14' },
      { address: '31', value: 'Treasure: 🦐' },
      { address: '32', value: 'Treasure: 🦑' },
      { address: '33', value: 'Treasure: 🪼' },
      { address: '34', value: 'NO' },
      { address: '35', value: 'NO' },
    ]
  },

  program6: {
    name: "The Labyrinth",
    startInstruction: "Direct 15",
    indexRegister: 3,
    endPoint: '10',
    data: [
      { address: '00', value: 'Treasure: 🪙' },
      { address: '01', value: '31' },
      { address: '02', value: 'Direct 18' },
      { address: '03', value: 'Treasure: 💰' },
      { address: '04', value: 'Indexed 11' },
      { address: '05', value: 'Treasure: 💵' },
      { address: '06', value: 'Indirect 33' },
      { address: '07', value: '11' },
      { address: '08', value: 'Treasure: 💴' },
      { address: '09', value: 'Direct 02' },
      { address: '10', value: 'Treasure: 💎' },
      { address: '11', value: 'Treasure: 💶' },
      { address: '12', value: '99' },
      { address: '13', value: 'Treasure: 💷' },
      { address: '14', value: 'IR to 8, Direct 22' },
      { address: '15', value: 'Indirect 29' },
      { address: '16', value: 'Direct 30' },
      { address: '17', value: 'Treasure: 💸' },
      { address: '18', value: '55' },
      { address: '19', value: '06' },
      { address: '20', value: 'Treasure: 💳' },
      { address: '21', value: 'Treasure: 🧾' },
      { address: '22', value: 'Indirect 01' },
      { address: '23', value: '88' },
      { address: '24', value: 'Treasure: 💹' },
      { address: '25', value: 'Treasure: 🏦' },
      { address: '26', value: '42' },
      { address: '27', value: 'Direct 06' },
      { address: '28', value: 'Treasure: 🏛️' },
      { address: '29', value: '04' },
      { address: '30', value: 'Treasure: ⚖️' },
      { address: '31', value: 'Indexed 19' },
      { address: '32', value: '77' },
      { address: '33', value: '10' },
      { address: '34', value: 'NO' },
      { address: '35', value: 'NO' },
    ]
  },

  program7: {
    name: "The Gauntlet",
    startInstruction: "Indexed 02",
    indexRegister: 9,
    endPoint: '00',
    data: [
      { address: '00', value: 'Treasure: 🏰' },
      { address: '01', value: 'Treasure: 🏯' },
      { address: '02', value: 'Indexed 02' },
      { address: '03', value: 'IR to 1, Indexed 28' },
      { address: '04', value: 'Treasure: 🏟️' },
      { address: '05', value: '18' },
      { address: '06', value: 'Treasure: 🏭' },
      { address: '07', value: 'Direct 18' },
      { address: '08', value: 'Treasure: 🏠' },
      { address: '09', value: 'Treasure: 🏡' },
      { address: '10', value: '66' },
      { address: '11', value: 'Direct 25' },
      { address: '12', value: 'Treasure: 🏢' },
      { address: '13', value: '30' },
      { address: '14', value: 'Treasure: 🏬' },
      { address: '15', value: 'Treasure: 🏣' },
      { address: '16', value: 'Treasure: 🏤' },
      { address: '17', value: 'Treasure: 🏥' },
      { address: '18', value: 'Indirect 21' },
      { address: '19', value: 'Treasure: 🏦' },
      { address: '20', value: 'Treasure: 🏨' },
      { address: '21', value: '03' },
      { address: '22', value: 'Treasure: 🏪' },
      { address: '23', value: 'Treasure: 🏫' },
      { address: '24', value: 'Treasure: 🏛️' },
      { address: '25', value: 'IR to 2, Indirect 13' },
      { address: '26', value: 'Treasure: 💒' },
      { address: '27', value: 'Treasure: 🕌' },
      { address: '28', value: '28' },
      { address: '29', value: 'Direct 00' },
      { address: '30', value: 'Indexed 05' },
      { address: '31', value: 'Treasure: 🕍' },
      { address: '32', value: 'Treasure: ⛩️' },
      { address: '33', value: 'Treasure: 🕋' },
      { address: '34', value: 'NO' },
      { address: '35', value: 'NO' },
    ]
  },

  program8: {
    name: "The Final Descent",
    startInstruction: "Indirect 12",
    indexRegister: 7,
    endPoint: '10',
    data: [
      { address: '00', value: '09' },
      { address: '01', value: 'IR to 4, Indexed 15' },
      { address: '02', value: '11' },
      { address: '03', value: 'Treasure: 🔐' },
      { address: '04', value: 'Treasure: 🔏' },
      { address: '05', value: '14' },
      { address: '06', value: 'Treasure: 🔒' },
      { address: '07', value: 'Treasure: 🔓' },
      { address: '08', value: 'Direct 22' },
      { address: '09', value: 'Treasure: 🔕' },
      { address: '10', value: 'Treasure: 🔑' },
      { address: '11', value: 'Treasure: 🔔' },
      { address: '12', value: '26' },
      { address: '13', value: 'Treasure: 🪝' },
      { address: '14', value: 'Direct 34' },
      { address: '15', value: '15' },
      { address: '16', 'value': 'Treasure: 🔗' },
      { address: '17', value: '24' },
      { address: '18', value: 'Treasure: ⛓️' },
      { address: '19', value: 'Indirect 31' },
      { address: '20', value: 'Treasure: 🪃' },
      { address: '21', value: 'Treasure: 🗡️' },
      { address: '22', value: 'IR to 10, Indirect 05' },
      { address: '23', value: 'Treasure: ⚔️' },
      { address: '24', value: 'Indexed 00' },
      { address: '25', value: 'Treasure: 🛡️' },
      { address: '26', value: 'Direct 01' },
      { address: '27', value: 'Treasure: 🏹' },
      { address: '28', value: 'Treasure: 🪚' },
      { address: '29', value: 'Treasure: 🪛' },
      { address: '30', value: 'Treasure: 🔩' },
      { address: '31', value: '08' },
      { address: '32', value: 'Treasure: ⚙️' },
      { address: '33', value: 'Treasure: 🗜️' },
      { address: '34', value: 'Indirect 17' },
      { address: '35', value: 'NO' },
    ]
  },

program9: {
  name: "The Crystal Cave",
  startInstruction: "Direct 20",
  indexRegister: 7,
  endPoint: '04',
  data: [
    { address: '00', value: '15' },
    { address: '01', value: 'Treasure: 💎' },
    { address: '02', value: 'Direct 30' },
    { address: '03', value: '08' },
    { address: '04', value: 'Treasure: 🔮' },
    { address: '05', value: 'Indexed 23' },
    { address: '06', value: 'Treasure: ✨' },
    { address: '07', value: 'Direct 02' },
    { address: '08', value: 'IR to 3, Indexed 26' },
    { address: '09', value: 'Treasure: 💫' },
    { address: '10', value: 'Indirect 03' },
    { address: '11', value: 'Treasure: 🌟' },
    { address: '12', value: 'Direct 05' },
    { address: '13', value: 'Treasure: ⭐' },
    { address: '14', value: '33' },
    { address: '15', value: 'Direct 10' },
    { address: '16', value: 'Treasure: 🎆' },
    { address: '17', value: 'Indexed 18' },
    { address: '18', value: 'Direct 12' },
    { address: '19', value: 'Treasure: 🎇' },
    { address: '20', value: 'Indirect 00' },
    { address: '21', value: 'Treasure: 🎊' },
    { address: '22', value: '25' },
    { address: '23', value: 'Direct 07' },
    { address: '24', value: 'Treasure: 🎉' },
    { address: '25', value: 'Indirect 14' },
    { address: '26', value: 'Direct 18' },
    { address: '27', value: 'Treasure: 🎈' },
    { address: '28', value: 'Indexed 01' },
    { address: '29', value: 'Direct 04' },
    { address: '30', value: 'Indirect 22' },
    { address: '31', value: 'Treasure: 🎀' },
    { address: '32', value: 'Treasure: 🎁' },
    { address: '33', value: 'Direct 29' },
    { address: '34', value: 'NO' },
    { address: '35', value: 'NO' },
  ]
},

program10: {
  name: "The Dragon's Lair",
  startInstruction: "Indexed 12",
  indexRegister: 15,
  endPoint: '06',
  data: [
    { address: '00', value: '22' },
    { address: '01', value: 'Treasure: 🐲' },
    { address: '02', value: 'Direct 35' },
    { address: '03', value: 'Indexed 16' },
    { address: '04', value: 'Treasure: 🔥' },
    { address: '05', value: 'Direct 11' },
    { address: '06', value: 'Treasure: 👑' },
    { address: '07', value: '14' },
    { address: '08', value: 'Treasure: ⚔️' },
    { address: '09', value: 'Indirect 07' },
    { address: '10', value: 'Treasure: 🛡️' },
    { address: '11', value: 'IR to 8, Indexed 25' },
    { address: '12', value: 'Direct 31' },
    { address: '13', value: 'Treasure: 🏰' },
    { address: '14', value: 'Direct 05' },
    { address: '15', value: 'Treasure: 💰' },
    { address: '16', value: 'Direct 24' },
    { address: '17', value: 'Treasure: 💍' },
    { address: '18', value: 'Direct 20' },
    { address: '19', value: 'Treasure: 🗡️' },
    { address: '20', value: 'Indexed 10' },
    { address: '21', value: 'Treasure: 🏹' },
    { address: '22', value: 'Direct 18' },
    { address: '23', value: 'Treasure: 🪓' },
    { address: '24', value: 'Direct 09' },
    { address: '25', value: 'Direct 33' },
    { address: '26', value: 'Treasure: 🗝️' },
    { address: '27', value: 'Direct 31' },
    { address: '28', value: 'Treasure: 📜' },
    { address: '29', value: 'Indexed 21' },
    { address: '30', value: 'Treasure: 🔱' },
    { address: '31', value: 'Indirect 00' },
    { address: '32', value: 'Treasure: ⚡' },
    { address: '33', value: 'Direct 06' },
    { address: '34', value: 'Treasure: 🌋' },
    { address: '35', value: 'NO' },
  ]
}
};

let currentProgram;
let memoryData;

class MemoryTreasureHunt {
  constructor() {
    this.memoryTable = document.getElementById('memory-table');
    this.memoryRowsEl = document.getElementById('memory-rows');
    this.gameInfoEl = document.getElementById('game-info');
    this.resetBtn = document.getElementById('reset-btn');
    this.pathTakenEl = document.getElementById('path-taken');
    this.indexRegisterEl = document.getElementById('index-register');

    this.clickedPath = [];
    this.indexRegister = 0;
    this.currentAddress = '00';
    this.gameOver = false;
    this.firstInstruction = '';

    this.selectRandomProgram();
    this.initializeMemory();
    this.setupEventListeners();
  }

  selectRandomProgram() {
    const programKeys = Object.keys(memoryPrograms);
    const randomKey = programKeys[Math.floor(Math.random() * programKeys.length)];
    currentProgram = memoryPrograms[randomKey];
    memoryData = currentProgram.data;
    console.log(`Selected program: ${currentProgram.name}`);
  }

  initializeMemory() {
    // Clear existing rows
    this.memoryRowsEl.innerHTML = '';

    // Populate memory table in 2 columns
    for (let i = 0; i < memoryData.length; i += 2) {
      // Add a header for each group
      const row = document.createElement('tr');
      // Iterate through next 2 values
      for (let j = i; j < i + 2; j++) {
        if (memoryData[j]) {
          row.innerHTML += `
          <td data-address="${memoryData[j].address}">${memoryData[j].address}</td>
          <td data-value="${memoryData[j].value}">${memoryData[j].value}</td>
        `;
        } else {
          // No data? Add empty cells
          row.innerHTML += `
          <td></td>
          <td></td>
        `;
        }
      }
      this.memoryRowsEl.appendChild(row);
    }
    // Add event listeners for navigation
    const addressCells = document.querySelectorAll(
      '#memory-table td[data-address]'
    );
    addressCells.forEach((cell) => {
      cell.addEventListener('click', () => {
        const address = cell.getAttribute('data-address');
        if (address) this.navigateMemory(address);
      });
    });
    // Reset game state
    this.resetGame();
  }

  resetGame() {
    this.clickedPath = [];
    this.currentAddress = '00';
    this.gameOver = false;
    
    // Use values from currentProgram instead of hardcoded values
    this.indexRegister = currentProgram.indexRegister;  // was: 4
    this.firstInstruction = currentProgram.startInstruction;  // was: 'Direct 09'
    
    this.pathTakenEl.innerHTML = '';

    // Enhanced game info display
    this.gameInfoEl.innerHTML = `
      <strong>Program: ${currentProgram.name}</strong><br>
      Start by clicking on memory addresses. Your first instruction is <strong>${this.firstInstruction}</strong>.
    `;
    
    this.updateIRDisplay();
    this.resetHighlights();
  }

  resetHighlights() {
    const cells = document.querySelectorAll('#memory-table td');
    cells.forEach((cell) => {
      cell.classList.remove('highlighted');
      cell.classList.remove('clicked-path');
    });
  }

  navigateMemory(address) {
    if (this.gameOver) return;




    // Find the row for the clicked address
    const addressCell = document.querySelector(`td[data-address="${address}"]`);
    const valueCell = addressCell.nextElementSibling;
    let value = valueCell.textContent;

    // Add highlight to the clicked cell
    addressCell.classList.add('highlighted');

    // Track clicked path
    this.clickedPath.push(address);
    this.updatePathDisplay();

    // Determine navigation based on value
    let nextAddress = null;
    let instructions = '';

    if (value.includes('IR')) {
      const irAddress = value.split(',')[0].split(' ')[2];
      this.indexRegister = parseInt(irAddress);
      value = value.split(',')[1].trim();
      this.updateIRDisplay();
    }
    if (value.startsWith('Direct ')) {
      // Direct addressing: go to the specified address
      nextAddress = value.split(' ')[1];
      instructions = 'Direct addressing: Go to specified address';
    } else if (value.startsWith('Indirect ')) {
      // Indirect addressing: go to the address stored in the specified location
      const indirectAddress = value.split(' ')[1];
      const indirectCell = document.querySelector(
        `td[data-address="${indirectAddress}"]`
      );
      nextAddress = indirectCell.nextElementSibling.textContent;
      instructions = `Indirect addressing: Go to address stored in ${indirectAddress}`;
    } else if (value.startsWith('Indexed ')) {
      // Indexed addressing: add index register to the specified address
      const baseAddress = value.split(' ')[1];
      nextAddress = String(parseInt(baseAddress) + this.indexRegister).padStart(
        2,
        '0'
      );
      instructions = `Indexed addressing: Base ${baseAddress} + Index ${this.indexRegister} = ${nextAddress}`;
    } else if (value.startsWith('Treasure:')) {
      console.log('treasure found')
      // Found the treasure
    if (address === currentProgram.endPoint) {
      this.gameOver = true;
      const addressCell = document.querySelector(`td[data-address="${address}"]`);
      const valueCell = addressCell.nextElementSibling;
      const value = valueCell.textContent;
      
      // Extract emoji from treasure value
      const treasureEmoji = value.match(/[^\w\s:]/g)?.join('') || '🏆';
      
      // Add highlight to the clicked cell
      addressCell.classList.add('highlighted');
            
      // Mark cells in the path
      this.clickedPath.forEach((path) => {
        const cell = document.querySelector(`td[data-address="${path}"]`);
        cell.classList.add('clicked-path');
      });
      
      this.gameOver = true;
      this.gameInfoEl.innerHTML = `
        <strong>🎉 VICTORY! 🎉</strong><br>
        You found the treasure: ${value}<br>
        Steps taken: ${this.clickedPath.length}
      `;
      
      // Show victory celebration
      this.showVictory(treasureEmoji);
      return;
    }  
    else {
      console.log('treasure found but not the right one')
      this.gameOver = true;
      this.gameInfoEl.innerHTML = `
        <strong>Game Over!</strong><br>
        You found: ${value}<br>
        But it wasn't the right treasure.`
        return;
    }
    }

    // Update game info at bottom
    this.gameInfoEl.innerHTML = `
    Index Register: ${this.indexRegister}<br>                
    Current Address: ${address}<br>
                    Value: ${value}<br>
                    ${instructions}
                `;

    // Mark cells in the path
    this.clickedPath.forEach((path) => {
      const cell = document.querySelector(`td[data-address="${path}"]`);
      cell.classList.add('clicked-path');
    });

    // Continue navigation if not game over
    if (!this.gameOver && nextAddress) {
      const nextCell = document.querySelector(
        `td[data-address="${nextAddress}"]`
      );
      if (nextCell) {
        this.currentAddress = nextAddress;
      } else {
        this.gameInfoEl.textContent += ' (Invalid next address)';
      }
    }
  }

  updatePathDisplay() {
    this.pathTakenEl.innerHTML = this.clickedPath
      .map(
        (addr) =>
          `<div>${addr}: ${document.querySelector(`td[data-address="${addr}"]`).nextElementSibling.textContent}</div>`
      )
      .join('');
  }

  updateIRDisplay() {
    this.indexRegisterEl.innerHTML = `${this.indexRegister}`;
  }

  showVictory(treasureEmoji) {
  // Create overlay
  const overlay = document.createElement('div');
  overlay.id = 'victory-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 255, 65, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
    animation: victory-fade-in 0.5s ease-in;
  `;

  // Create victory message
  const victoryMessage = document.createElement('div');
  victoryMessage.style.cssText = `
    background-color: #0d2d0d;
    border: 3px solid #00ff41;
    padding: 30px;
    text-align: center;
    border-radius: 10px;
    animation: victory-bounce 0.6s ease-out;
  `;

  victoryMessage.innerHTML = `
    <div style="font-size: 80px; margin-bottom: 20px;">${treasureEmoji}</div>
    <div style="font-size: 24px; color: #00ff41; margin-bottom: 15px;">🎉 TREASURE FOUND! 🎉</div>
    <div style="font-size: 18px; color: #00ccff;">Congratulations!</div>
    <div style="font-size: 14px; color: #00ff41; margin-top: 15px;">Click anywhere to continue</div>
  `;

  overlay.appendChild(victoryMessage);
  document.body.appendChild(overlay);

  // Click to dismiss
  overlay.addEventListener('click', () => {
    overlay.remove();
  });

  // Create confetti
  this.createConfetti();
}

  createConfetti() {
  const confettiContainer = document.createElement('div');
  confettiContainer.id = 'confetti-container';
  confettiContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1000;
  `;
  document.body.appendChild(confettiContainer);

  // Create multiple confetti pieces
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.textContent = ['🎉', '🎊', '✨', '🌟', '💫'][Math.floor(Math.random() * 5)];
    confetti.style.cssText = `
      position: absolute;
      font-size: ${Math.random() * 20 + 15}px;
      left: ${Math.random() * 100}%;
      top: -50px;
      animation: confetti-fall ${Math.random() * 3 + 2}s linear forwards;
    `;
    confettiContainer.appendChild(confetti);
  }

  // Remove confetti after animation
  setTimeout(() => {
    confettiContainer.remove();
  }, 5000);
}

  setupEventListeners() {
    this.resetBtn.addEventListener('click', () => {
      // Select new program and reinitialize instead of just resetting
      this.selectRandomProgram();
      this.initializeMemory();
    });
  }
}

// Initialize the game
const game = new MemoryTreasureHunt();

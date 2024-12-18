// Memory data with more complex content
const memoryData = [
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
  { address: '15', value: 'Treasure - 🐰' },
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
];

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

    this.initializeMemory();
    this.setupEventListeners();
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
    this.indexRegister = 4;
    this.firstInstruction = 'Direct 09';
    this.pathTakenEl.innerHTML = '';
    this.gameInfoEl.textContent = `Start by clicking on memory addresses. Your first instruction is ${this.firstInstruction}.`;
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

    // Reset previous highlights
    // this.resetHighlights();

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
      // Found the treasure
      this.gameOver = true;
      instructions = `Congratulations! You found: ${value}`;
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
  setupEventListeners() {
    this.resetBtn.addEventListener('click', () => this.resetGame());
  }
}

// Initialize the game
const game = new MemoryTreasureHunt();

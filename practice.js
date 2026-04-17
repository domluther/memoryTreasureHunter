class AddressingModePractice {
  constructor() {
    this.codeDisplay = document.getElementById('code-display');
    this.memoryDisplay = document.getElementById('memory-display');
    this.answerInput = document.getElementById('answer-input');
    this.submitBtn = document.getElementById('submit-btn');
    this.nextBtn = document.getElementById('next-btn');
    this.feedbackEl = document.getElementById('feedback');
    this.questionText = document.getElementById('question-text');
    this.indexRegisterEl = document.getElementById('index-register-value');
    
    this.correctCount = 0;
    this.totalCount = 0;
    
    this.setupEventListeners();
    this.generateQuestion();
  }
  
  setupEventListeners() {
    this.submitBtn.addEventListener('click', () => this.checkAnswer());
    this.nextBtn.addEventListener('click', () => this.generateQuestion());
    this.answerInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.checkAnswer();
    });
  }
  
  generateQuestion() {
    // Generate random memory contents (addresses 6-15)
    this.memory = {};
    for (let i = 6; i <= 15; i++) {
      this.memory[i] = Math.floor(Math.random() * 20) + 1;
    }
    
    // Random index register value
    this.indexRegister = Math.floor(Math.random() * 5);
    
    // Generate a random program
    const questionTypes = [
      this.generateSimpleLoad.bind(this),
      this.generateLoadAndAdd.bind(this),
      this.generateLoadAndSubtract.bind(this),
      this.generateMultipleOperations.bind(this),
      this.generateIndirectQuestion.bind(this),
      this.generateIndexedQuestion.bind(this)
    ];
    
    const questionGenerator = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    const question = questionGenerator();
    
    this.currentAnswer = question.answer;
    this.currentProgram = question.program;
    this.currentExplanation = question.explanation;
    
    this.renderQuestion();
    this.resetUI();
  }
  
  generateSimpleLoad() {
    const modes = ['immediate', 'direct', 'indirect', 'indexed'];
    const mode = modes[Math.floor(Math.random() * modes.length)];
    
    let program = [];
    let answer;
    let explanation = '';
    
    switch (mode) {
      case 'immediate':
        answer = Math.floor(Math.random() * 20) + 1;
        program = [
          { line: 1, instruction: `LDA #${answer}` },
          { line: 2, instruction: 'OUT' },
          { line: 3, instruction: 'HLT' }
        ];
        explanation = `LDA #${answer} loads the immediate value ${answer} into the accumulator. OUT outputs ${answer}.`;
        break;
        
      case 'direct':
        const addr = Math.floor(Math.random() * 5) + 6;
        answer = this.memory[addr];
        program = [
          { line: 1, instruction: `LDA &${addr}` },
          { line: 2, instruction: 'OUT' },
          { line: 3, instruction: 'HLT' }
        ];
        explanation = `LDA &${addr} loads the value at address ${addr} (which is ${answer}) into the accumulator. OUT outputs ${answer}.`;
        break;
        
      case 'indirect':
        const indAddr = Math.floor(Math.random() * 3) + 6;
        const targetAddr = this.memory[indAddr];
        // Ensure target address is valid
        if (targetAddr < 6 || targetAddr > 15) {
          this.memory[indAddr] = 10;
        }
        answer = this.memory[this.memory[indAddr]];
        program = [
          { line: 1, instruction: `LDA ~${indAddr}` },
          { line: 2, instruction: 'OUT' },
          { line: 3, instruction: 'HLT' }
        ];
        explanation = `LDA ~${indAddr} uses indirect addressing. Address ${indAddr} contains ${this.memory[indAddr]}, so we load from address ${this.memory[indAddr]}, which contains ${answer}.`;
        break;
        
      case 'indexed':
        const base = Math.floor(Math.random() * 5) + 6;
        const finalAddr = base + this.indexRegister;
        if (finalAddr < 6 || finalAddr > 15) {
          return this.generateSimpleLoad(); // Regenerate if out of bounds
        }
        answer = this.memory[finalAddr];
        program = [
          { line: 1, instruction: `LDA [${base}]` },
          { line: 2, instruction: 'OUT' },
          { line: 3, instruction: 'HLT' }
        ];
        explanation = `LDA [${base}] uses indexed addressing. ${base} + Index Register (${this.indexRegister}) = ${finalAddr}. Address ${finalAddr} contains ${answer}.`;
        break;
    }
    
    return { program, answer, explanation };
  }
  
  generateLoadAndAdd() {
    const addr1 = Math.floor(Math.random() * 3) + 6;
    const addr2 = Math.floor(Math.random() * 3) + 10;
    
    const value1 = this.memory[addr1];
    const value2 = this.memory[addr2];
    
    const modes = [
      { load: 'direct', add: 'immediate' },
      { load: 'immediate', add: 'direct' },
      { load: 'direct', add: 'direct' }
    ];
    
    const mode = modes[Math.floor(Math.random() * modes.length)];
    let program = [];
    let answer;
    let explanation = '';
    
    if (mode.load === 'immediate' && mode.add === 'direct') {
      answer = value1 + value2;
      program = [
        { line: 1, instruction: `LDA #${value1}` },
        { line: 2, instruction: `ADD &${addr2}` },
        { line: 3, instruction: 'OUT' },
        { line: 4, instruction: 'HLT' }
      ];
      explanation = `LDA #${value1} loads ${value1}. ADD &${addr2} adds the value at address ${addr2} (${value2}). Result: ${value1} + ${value2} = ${answer}.`;
    } else if (mode.load === 'direct' && mode.add === 'immediate') {
      const immValue = Math.floor(Math.random() * 10) + 1;
      answer = value1 + immValue;
      program = [
        { line: 1, instruction: `LDA &${addr1}` },
        { line: 2, instruction: `ADD #${immValue}` },
        { line: 3, instruction: 'OUT' },
        { line: 4, instruction: 'HLT' }
      ];
      explanation = `LDA &${addr1} loads ${value1} from address ${addr1}. ADD #${immValue} adds immediate value ${immValue}. Result: ${value1} + ${immValue} = ${answer}.`;
    } else {
      answer = value1 + value2;
      program = [
        { line: 1, instruction: `LDA &${addr1}` },
        { line: 2, instruction: `ADD &${addr2}` },
        { line: 3, instruction: 'OUT' },
        { line: 4, instruction: 'HLT' }
      ];
      explanation = `LDA &${addr1} loads ${value1}. ADD &${addr2} adds ${value2} from address ${addr2}. Result: ${value1} + ${value2} = ${answer}.`;
    }
    
    return { program, answer, explanation };
  }
  
  generateLoadAndSubtract() {
    const addr1 = Math.floor(Math.random() * 3) + 6;
    const addr2 = Math.floor(Math.random() * 3) + 10;
    
    const value1 = this.memory[addr1];
    const value2 = Math.min(this.memory[addr2], value1 - 1); // Ensure positive result
    this.memory[addr2] = value2;
    
    const answer = value1 - value2;
    
    const program = [
      { line: 1, instruction: `LDA &${addr1}` },
      { line: 2, instruction: `SUB &${addr2}` },
      { line: 3, instruction: 'OUT' },
      { line: 4, instruction: 'HLT' }
    ];
    
    const explanation = `LDA &${addr1} loads ${value1}. SUB &${addr2} subtracts ${value2} from address ${addr2}. Result: ${value1} - ${value2} = ${answer}.`;
    
    return { program, answer, explanation };
  }
  
  generateMultipleOperations() {
    const addr1 = Math.floor(Math.random() * 3) + 6;
    const addr2 = Math.floor(Math.random() * 3) + 9;
    const addr3 = Math.floor(Math.random() * 3) + 12;
    
    const value1 = this.memory[addr1];
    const value2 = this.memory[addr2];
    const value3 = Math.min(this.memory[addr3], 5); // Keep small
    this.memory[addr3] = value3;
    
    const answer = value1 + value2 - value3;
    
    const program = [
      { line: 1, instruction: `LDA &${addr1}` },
      { line: 2, instruction: `ADD &${addr2}` },
      { line: 3, instruction: `SUB #${value3}` },
      { line: 4, instruction: 'OUT' },
      { line: 5, instruction: 'HLT' }
    ];
    
    const explanation = `LDA &${addr1} loads ${value1}. ADD &${addr2} adds ${value2} (result: ${value1 + value2}). SUB #${value3} subtracts ${value3}. Final result: ${answer}.`;
    
    return { program, answer, explanation };
  }
  
  generateIndirectQuestion() {
    // Make sure we have a valid indirect chain
    const indAddr = 7;
    const targetAddr = 10;
    this.memory[indAddr] = targetAddr;
    const value = this.memory[targetAddr];
    
    const immValue = Math.floor(Math.random() * 5) + 1;
    const answer = value + immValue;
    
    const program = [
      { line: 1, instruction: `LDA ~${indAddr}` },
      { line: 2, instruction: `ADD #${immValue}` },
      { line: 3, instruction: 'OUT' },
      { line: 4, instruction: 'HLT' }
    ];
    
    const explanation = `LDA ~${indAddr} uses indirect addressing. Address ${indAddr} contains ${targetAddr}, so we load from address ${targetAddr} (value: ${value}). ADD #${immValue} adds ${immValue}. Result: ${value} + ${immValue} = ${answer}.`;
    
    return { program, answer, explanation };
  }
  
  generateIndexedQuestion() {
    const base = 8;
    const finalAddr = base + this.indexRegister;
    
    // Make sure address is valid
    if (finalAddr < 6 || finalAddr > 15) {
      this.indexRegister = 2;
    }
    
    const finalAddress = base + this.indexRegister;
    const value = this.memory[finalAddress];
    const immValue = Math.floor(Math.random() * 5) + 1;
    const answer = value + immValue;
    
    const program = [
      { line: 1, instruction: `LDA [${base}]` },
      { line: 2, instruction: `ADD #${immValue}` },
      { line: 3, instruction: 'OUT' },
      { line: 4, instruction: 'HLT' }
    ];
    
    const explanation = `LDA [${base}] uses indexed addressing. ${base} + Index Register (${this.indexRegister}) = ${finalAddress}. Load value ${value} from address ${finalAddress}. ADD #${immValue} adds ${immValue}. Result: ${value} + ${immValue} = ${answer}.`;
    
    return { program, answer, explanation };
  }
  
  renderQuestion() {
    // Render code
    this.codeDisplay.innerHTML = this.currentProgram.map(line => `
      <div class="code-line">
        <span class="line-number">${line.line}</span>
        <span class="code-content">${line.instruction}</span>
      </div>
    `).join('');
    
    // Render memory
    this.memoryDisplay.innerHTML = Object.keys(this.memory)
      .sort((a, b) => parseInt(a) - parseInt(b))
      .map(addr => `
        <div class="memory-line">Address ${addr}: <strong>${this.memory[addr]}</strong></div>
      `).join('');
    
    // Display index register
    this.indexRegisterEl.textContent = this.indexRegister;
    
    // Set question
    this.questionText.textContent = 'What value will be output by the OUT instruction?';
  }
  
  resetUI() {
    this.answerInput.value = '';
    this.answerInput.disabled = false;
    this.submitBtn.style.display = 'inline-block';
    this.nextBtn.style.display = 'none';
    this.feedbackEl.style.display = 'none';
    this.answerInput.focus();
  }
  
  checkAnswer() {
    const userAnswer = parseInt(this.answerInput.value);
    
    if (isNaN(userAnswer)) {
      alert('Please enter a valid number');
      return;
    }
    
    this.totalCount++;
    
    if (userAnswer === this.currentAnswer) {
      this.correctCount++;
      this.feedbackEl.className = 'feedback correct';
      this.feedbackEl.innerHTML = `
        <strong>✅ Correct!</strong><br>
        ${this.currentExplanation}
      `;
    } else {
      this.feedbackEl.className = 'feedback incorrect';
      this.feedbackEl.innerHTML = `
        <strong>❌ Incorrect.</strong> The correct answer is <strong>${this.currentAnswer}</strong>.<br>
        ${this.currentExplanation}
      `;
    }
    
    this.feedbackEl.style.display = 'block';
    this.answerInput.disabled = true;
    this.submitBtn.style.display = 'none';
    this.nextBtn.style.display = 'inline-block';
    this.nextBtn.focus();
    
    this.updateStats();
  }
  
  updateStats() {
    document.getElementById('correct-count').textContent = this.correctCount;
    document.getElementById('total-count').textContent = this.totalCount;
    
    const percentage = this.totalCount > 0 
      ? Math.round((this.correctCount / this.totalCount) * 100) 
      : 0;
    document.getElementById('percentage').textContent = percentage + '%';
  }
}

// Initialize the practice app
const practice = new AddressingModePractice();

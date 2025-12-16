/* ================= ELEMENTS ================= */
const board = document.getElementById("board");
const drawBtn = document.getElementById("drawBtn");
const currentCall = document.getElementById("currentCall");
const scoreEl = document.getElementById("score");

const modal = document.getElementById("questionModal");
const questionText = document.getElementById("questionText");
const choicesEl = document.getElementById("choices");
const difficultyEl = document.getElementById("difficulty");
const timerEl = document.getElementById("timer");

const bingoPopup = document.getElementById("bingoPopup");
const nextCardBtn = document.getElementById("nextCardBtn");
const exitBtn = document.getElementById("exitBtn");

const patternGuide = document.getElementById("patternGuide");
const confirmBtn = document.getElementById("confirmPatternBtn");
const randomPatternBtn = document.getElementById("randomPatternBtn");

/* ================= INIT STATES ================= */
drawBtn.classList.add("opacity-50", "pointer-events-none");
confirmBtn.classList.add("opacity-50", "pointer-events-none");

/* ================= PATTERNS ================= */
const ROWS = [[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24]];
const COLS = [[0,5,10,15,20],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24]];
const DIAGONALS = [[0,6,12,18,24],[4,8,12,16,20]];
const CORNERS = [0,4,20,24];
const FULL = [...Array(25).keys()];

/* ================= GAME STATE ================= */
const POINTS = { easy: 10, average: 25, hard: 50 };
let score = 0;
let usedQuestions = new Set();
let lastCalled = null;
let timer = null;
let timeLeft = 30;

let selectedPattern = null;
let activeLine = [];
let patternLocked = false;

/* ================= PATTERN GUIDE ================= */
function renderPatternGuide() {
  patternGuide.innerHTML = "";
  for (let i = 0; i < 25; i++) {
    const c = document.createElement("div");
    c.className =
      "w-6 h-6 rounded " +
      (activeLine.includes(i)
        ? "bg-yellow-400"
        : "bg-gray-600 opacity-40");
    patternGuide.appendChild(c);
  }
}

/* ================= BOARD ================= */
const ranges = [[1,15],[16,30],[31,45],[46,60],[61,75]];

function pick(min, max) {
  return Array.from({ length: max - min + 1 }, (_, i) => i + min)
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);
}

const cols = ranges.map(r => pick(r[0], r[1]));
const boardState = {};
const cellMap = {};
let idx = 0;

for (let r = 0; r < 5; r++) {
  for (let c = 0; c < 5; c++) {
    const cell = document.createElement("button");

    if (idx === 12) {
      cell.textContent = "FREE";
      cell.className =
        "aspect-square bg-yellow-400 text-black rounded font-extrabold text-xl cursor-default";
      cell.disabled = true;

      boardState["FREE"] = "used";
      cellMap["FREE"] = 12;

      board.appendChild(cell);
      idx++;
      continue;
    }

    const num = cols[c][r];
    boardState[num] = "available";
    cellMap[num] = idx;

    cell.textContent = num;
    cell.className =
      "aspect-square bg-gray-700 rounded font-bold text-xl hover:bg-gray-600";
    cell.onclick = () => openQuestion(num, cell);

    board.appendChild(cell);
    idx++;
  }
}

/* ================= CALLER ================= */
let callPool = [];
(function initCaller() {
  ["B","I","N","G","O"].forEach((l,i)=>{
    for (let n = ranges[i][0]; n <= ranges[i][1]; n++) {
      callPool.push(`${l}-${n}`);
    }
  });
  callPool.sort(() => Math.random() - 0.5);
})();

drawBtn.onclick = () => {
  if (!patternLocked) return;
  if (!callPool.length) return;

  const call = callPool.pop();
  currentCall.textContent = call;
  lastCalled = Number(call.split("-")[1]);
};

/* ================= QUESTIONS ================= */
function openQuestion(num, cell) {
  if (lastCalled === null) return;
  if (Number(num) !== Number(lastCalled)) return;
  if (boardState[num] !== "available") return;

  const q = getQuestion();
  if (!q) return;

  showQuestion(q, cell);
}

function getQuestion() {
  const available = QUESTIONS.filter(q => !usedQuestions.has(q.id));
  if (!available.length) return null;
  const q = available[Math.floor(Math.random() * available.length)];
  usedQuestions.add(q.id);
  return q;
}

function showQuestion(q, cell) {
  modal.classList.remove("hidden");
  questionText.textContent = q.question;
  choicesEl.innerHTML = "";

  difficultyEl.textContent =
    q.difficulty.toUpperCase() + " • " + POINTS[q.difficulty] + " pts";

  startTimer();

  if (q.type === "mcq") {
    q.choices.forEach(c =>
      createButton(c, c === q.answer, q, cell)
    );
  }

  if (q.type === "truefalse") {
    ["true","false"].forEach(v =>
      createButton(v.toUpperCase(), v === q.answer, q, cell)
    );
  }

  if (q.type === "identification") {
    const input = document.createElement("input");
    input.className = "w-full px-4 py-3 rounded-xl text-black font-semibold";
    const submit = document.createElement("button");
    submit.textContent = "SUBMIT";
    submit.className = "w-full mt-3 py-3 rounded-xl font-bold bg-indigo-600";

    submit.onclick = () =>
      checkAnswer(input.value.trim().toLowerCase() === q.answer.toLowerCase(), q, cell);

    choicesEl.append(input, submit);
  }
}

function createButton(text, correct, q, cell) {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.className =
    "w-full py-3 px-4 rounded-xl font-bold text-white bg-indigo-600";
  btn.onclick = () => checkAnswer(correct, q, cell);
  choicesEl.appendChild(btn);
}

function checkAnswer(correct, q, cell) {
  clearInterval(timer);

  if (correct) {
    boardState[lastCalled] = "used";
    score += POINTS[q.difficulty];
    scoreEl.textContent = score;

    cell.classList.remove("bg-gray-700");
    cell.classList.add("bg-green-600", "text-white");

    const usedIndexes = Object.keys(boardState)
      .filter(n => boardState[n] === "used")
      .map(n => cellMap[n]);

    if (activeLine.length && activeLine.every(i => usedIndexes.includes(i))) {
      bingoPopup.classList.remove("hidden");
    }
  }

  closeModal();
}

/* ================= TIMER ================= */
function startTimer() {
  clearInterval(timer);
  timeLeft = 30;
  timerEl.textContent = "30s";

  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft + "s";
    if (timeLeft <= 0) closeModal();
  }, 1000);
}

function closeModal() {
  modal.classList.add("hidden");
  lastCalled = null;
}

/* ================= PATTERNS ================= */
document.querySelectorAll("[data-pattern]").forEach(btn => {
  btn.onclick = () => {
    if (patternLocked) return;

    selectedPattern = btn.dataset.pattern;

    if (selectedPattern === "row") activeLine = ROWS[Math.floor(Math.random()*5)];
    if (selectedPattern === "col") activeLine = COLS[Math.floor(Math.random()*5)];
    if (selectedPattern === "diagonal") activeLine = DIAGONALS[Math.floor(Math.random()*2)];
    if (selectedPattern === "corners") activeLine = CORNERS;
    if (selectedPattern === "full") activeLine = FULL;

    renderPatternGuide();
    confirmBtn.classList.remove("opacity-50","pointer-events-none");
  };
});

confirmBtn.onclick = () => {
  if (!selectedPattern) return;

  patternLocked = true;
  confirmBtn.textContent = "PATTERN LOCKED";
  confirmBtn.classList.add("opacity-50","pointer-events-none");

  drawBtn.classList.remove("opacity-50","pointer-events-none");
};

randomPatternBtn.onclick = () => {
  if (patternLocked) return;

  const patterns = ["row","col","diagonal","corners","full"];
  selectedPattern = patterns[Math.floor(Math.random()*patterns.length)];

  if (selectedPattern === "row") activeLine = ROWS[Math.floor(Math.random()*5)];
  if (selectedPattern === "col") activeLine = COLS[Math.floor(Math.random()*5)];
  if (selectedPattern === "diagonal") activeLine = DIAGONALS[Math.floor(Math.random()*2)];
  if (selectedPattern === "corners") activeLine = CORNERS;
  if (selectedPattern === "full") activeLine = FULL;

  renderPatternGuide();

  patternLocked = true;
  confirmBtn.textContent = "PATTERN LOCKED";
  confirmBtn.classList.add("opacity-50","pointer-events-none");

  drawBtn.classList.remove("opacity-50","pointer-events-none");
};

/* ================= EXIT ================= */
nextCardBtn.onclick = () => location.reload();
exitBtn.onclick = () => location.reload();

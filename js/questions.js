// Real, human-written questions (75 total)

const QUESTIONS = [
/* ================= EASY (1–25) ================= */
{
  id: 1,
  type: "identification",
  difficulty: "easy",
  question:
    "HTML is the standard markup language used to create web pages. It structures content using elements like headings, paragraphs, and links. What does HTML stand for?",
  answer: "HyperText Markup Language"
},
{
  id: 2,
  type: "mcq",
  difficulty: "easy",
  question:
    "CSS controls how a website looks. It manages colors, fonts, spacing, and layout. Which option best describes the role of CSS?",
  choices: ["Structuring content", "Styling the webpage", "Storing data", "Running server code"],
  answer: "Styling the webpage"
},
{
  id: 3,
  type: "truefalse",
  difficulty: "easy",
  question:
    "JavaScript is used to make web pages interactive by responding to user actions like clicks and input.",
  answer: "true"
},
{
  id: 4,
  type: "identification",
  difficulty: "easy",
  question:
    "This computer memory temporarily stores data that programs are actively using and is cleared when the computer is turned off. What is it called?",
  answer: "RAM"
},
{
  id: 5,
  type: "mcq",
  difficulty: "easy",
  question:
    "Which HTML tag is commonly used to create a hyperlink on a webpage?",
  choices: ["<p>", "<a>", "<div>", "<link>"],
  answer: "<a>"
},
{
  id: 6,
  type: "truefalse",
  difficulty: "easy",
  question:
    "CSS stands for Cascading Style Sheets.",
  answer: "true"
},
{
  id: 7,
  type: "identification",
  difficulty: "easy",
  question:
    "This device allows users to move a pointer on the screen and click on items. What is it called?",
  answer: "Mouse"
},
{
  id: 8,
  type: "mcq",
  difficulty: "easy",
  question:
    "Which of the following is an output device?",
  choices: ["Keyboard", "Mouse", "Monitor", "Scanner"],
  answer: "Monitor"
},
{
  id: 9,
  type: "truefalse",
  difficulty: "easy",
  question:
    "A web browser is used to access and view websites.",
  answer: "true"
},
{
  id: 10,
  type: "identification",
  difficulty: "easy",
  question:
    "What do you call a set of instructions that tells a computer what to do?",
  answer: "Program"
},
{
  id: 11,
  type: "mcq",
  difficulty: "easy",
  question:
    "Which programming language is mainly used for styling web pages?",
  choices: ["HTML", "JavaScript", "CSS", "PHP"],
  answer: "CSS"
},
{
  id: 12,
  type: "truefalse",
  difficulty: "easy",
  question:
    "The keyboard is considered an input device.",
  answer: "true"
},
{
  id: 13,
  type: "identification",
  difficulty: "easy",
  question:
    "What part of the computer is considered the 'brain' that processes instructions?",
  answer: "CPU"
},
{
  id: 14,
  type: "mcq",
  difficulty: "easy",
  question:
    "Which file extension is commonly used for HTML files?",
  choices: [".css", ".js", ".html", ".php"],
  answer: ".html"
},
{
  id: 15,
  type: "truefalse",
  difficulty: "easy",
  question:
    "Software refers to the physical parts of a computer.",
  answer: "false"
},
{
  id: 16,
  type: "identification",
  difficulty: "easy",
  question:
    "What do you call malicious software designed to damage or disrupt a system?",
  answer: "Virus"
},
{
  id: 17,
  type: "mcq",
  difficulty: "easy",
  question:
    "Which of the following is a web browser?",
  choices: ["Google", "Windows", "Chrome", "Linux"],
  answer: "Chrome"
},
{
  id: 18,
  type: "truefalse",
  difficulty: "easy",
  question:
    "Saving files helps prevent data loss.",
  answer: "true"
},
{
  id: 19,
  type: "identification",
  difficulty: "easy",
  question:
    "What do you call the main screen of an operating system where icons appear?",
  answer: "Desktop"
},
{
  id: 20,
  type: "mcq",
  difficulty: "easy",
  question:
    "Which key is commonly used to start a new line when typing?",
  choices: ["Shift", "Enter", "Ctrl", "Alt"],
  answer: "Enter"
},
{
  id: 21,
  type: "truefalse",
  difficulty: "easy",
  question:
    "The internet and the World Wide Web are the same thing.",
  answer: "false"
},
{
  id: 22,
  type: "identification",
  difficulty: "easy",
  question:
    "What do you call the set of rules that allows devices to communicate over a network?",
  answer: "Protocol"
},
{
  id: 23,
  type: "mcq",
  difficulty: "easy",
  question:
    "Which symbol is used in email addresses to separate the username and domain?",
  choices: ["#", "@", "$", "&"],
  answer: "@"
},
{
  id: 24,
  type: "truefalse",
  difficulty: "easy",
  question:
    "Files stored on a hard drive remain even after the computer is turned off.",
  answer: "true"
},
{
  id: 25,
  type: "identification",
  difficulty: "easy",
  question:
    "What do you call a small application downloaded to a smartphone?",
  answer: "App"
},

/* ================= AVERAGE (26–50) ================= */
{
  id: 26,
  type: "identification",
  difficulty: "average",
  question:
    "This model explains how a client requests data and a server responds with information. What is this model called?",
  answer: "Client-server model"
},
{
  id: 27,
  type: "mcq",
  difficulty: "average",
  question:
    "Which SQL command is used to retrieve data from a database table?",
  choices: ["INSERT", "DELETE", "SELECT", "UPDATE"],
  answer: "SELECT"
},
{
  id: 28,
  type: "truefalse",
  difficulty: "average",
  question:
    "A loop is used in programming to repeat a block of code.",
  answer: "true"
},
{
  id: 29,
  type: "identification",
  difficulty: "average",
  question:
    "What programming concept allows a function to call itself?",
  answer: "Recursion"
},
{
  id: 30,
  type: "mcq",
  difficulty: "average",
  question:
    "Which data structure stores items in a First In, First Out (FIFO) order?",
  choices: ["Stack", "Tree", "Queue", "Array"],
  answer: "Queue"
},
{
  id: 31,
  type: "truefalse",
  difficulty: "average",
  question:
    "An algorithm is a step-by-step procedure for solving a problem.",
  answer: "true"
},
{
  id: 32,
  type: "identification",
  difficulty: "average",
  question:
    "What do you call the process of finding and fixing errors in a program?",
  answer: "Debugging"
},
{
  id: 33,
  type: "mcq",
  difficulty: "average",
  question:
    "Which protocol is used to send emails?",
  choices: ["HTTP", "SMTP", "FTP", "TCP"],
  answer: "SMTP"
},
{
  id: 34,
  type: "truefalse",
  difficulty: "average",
  question:
    "Compilation converts high-level code directly into machine code.",
  answer: "true"
},
{
  id: 35,
  type: "identification",
  difficulty: "average",
  question:
    "What term refers to a collection of related web pages under one domain?",
  answer: "Website"
},
{
  id: 36,
  type: "mcq",
  difficulty: "average",
  question:
    "Which of the following is a version control system?",
  choices: ["Git", "HTML", "CSS", "SQL"],
  answer: "Git"
},
{
  id: 37,
  type: "truefalse",
  difficulty: "average",
  question:
    "An IP address uniquely identifies a device on a network.",
  answer: "true"
},
{
  id: 38,
  type: "identification",
  difficulty: "average",
  question:
    "What do you call a reusable block of code that performs a specific task?",
  answer: "Function"
},
{
  id: 39,
  type: "mcq",
  difficulty: "average",
  question:
    "Which storage device is considered non-volatile?",
  choices: ["RAM", "Cache", "Hard Drive", "Registers"],
  answer: "Hard Drive"
},
{
  id: 40,
  type: "truefalse",
  difficulty: "average",
  question:
    "HTTP is a stateless protocol.",
  answer: "true"
},
{
  id: 41,
  type: "identification",
  difficulty: "average",
  question:
    "What do you call software that manages computer hardware and software resources?",
  answer: "Operating system"
},
{
  id: 42,
  type: "mcq",
  difficulty: "average",
  question:
    "Which command is used to remove a file in many operating systems?",
  choices: ["copy", "delete", "remove", "print"],
  answer: "delete"
},
{
  id: 43,
  type: "truefalse",
  difficulty: "average",
  question:
    "Cloud computing allows data to be stored on remote servers.",
  answer: "true"
},
{
  id: 44,
  type: "identification",
  difficulty: "average",
  question:
    "What type of software is designed to protect a computer from malware?",
  answer: "Antivirus"
},
{
  id: 45,
  type: "mcq",
  difficulty: "average",
  question:
    "Which language is commonly used for server-side web development?",
  choices: ["HTML", "CSS", "PHP", "XML"],
  answer: "PHP"
},
{
  id: 46,
  type: "truefalse",
  difficulty: "average",
  question:
    "A database table is made up of rows and columns.",
  answer: "true"
},
{
  id: 47,
  type: "identification",
  difficulty: "average",
  question:
    "What term describes a weakness in a system that can be exploited by attackers?",
  answer: "Vulnerability"
},
{
  id: 48,
  type: "mcq",
  difficulty: "average",
  question:
    "Which device connects multiple computers within a local network?",
  choices: ["Router", "Switch", "Modem", "Printer"],
  answer: "Switch"
},
{
  id: 49,
  type: "truefalse",
  difficulty: "average",
  question:
    "Encryption helps protect sensitive data.",
  answer: "true"
},
{
  id: 50,
  type: "identification",
  difficulty: "average",
  question:
    "What do you call a website designed to work well on both desktop and mobile devices?",
  answer: "Responsive website"
},

/* ================= HARD (51–75) ================= */
{
  id: 51,
  type: "identification",
  difficulty: "hard",
  question:
    "What operating system technique allows multiple processes to share CPU time efficiently?",
  answer: "Multitasking"
},
{
  id: 52,
  type: "mcq",
  difficulty: "hard",
  question:
    "Which protocol is used to securely transfer web pages?",
  choices: ["HTTP", "FTP", "SMTP", "HTTPS"],
  answer: "HTTPS"
},
{
  id: 53,
  type: "truefalse",
  difficulty: "hard",
  question:
    "A deadlock occurs when processes wait indefinitely for resources held by each other.",
  answer: "true"
},
{
  id: 54,
  type: "identification",
  difficulty: "hard",
  question:
    "What term describes converting data into a coded format to prevent unauthorized access?",
  answer: "Encryption"
},
{
  id: 55,
  type: "mcq",
  difficulty: "hard",
  question:
    "Which data structure is best suited for hierarchical data?",
  choices: ["Array", "Queue", "Tree", "Stack"],
  answer: "Tree"
},
{
  id: 56,
  type: "truefalse",
  difficulty: "hard",
  question:
    "TCP is a connection-oriented protocol.",
  answer: "true"
},
{
  id: 57,
  type: "identification",
  difficulty: "hard",
  question:
    "What type of attack overwhelms a system with traffic to make it unavailable?",
  answer: "DDoS"
},
{
  id: 58,
  type: "mcq",
  difficulty: "hard",
  question:
    "Which scheduling algorithm gives each process a fixed time slice?",
  choices: ["FCFS", "Round Robin", "Priority", "Shortest Job"],
  answer: "Round Robin"
},
{
  id: 59,
  type: "truefalse",
  difficulty: "hard",
  question:
    "Normalization is used in databases to reduce redundancy.",
  answer: "true"
},
{
  id: 60,
  type: "identification",
  difficulty: "hard",
  question:
    "What term refers to software designed to hide its presence on a system?",
  answer: "Rootkit"
},
{
  id: 61,
  type: "mcq",
  difficulty: "hard",
  question:
    "Which layer of the OSI model is responsible for routing?",
  choices: ["Data Link", "Network", "Transport", "Session"],
  answer: "Network"
},
{
  id: 62,
  type: "truefalse",
  difficulty: "hard",
  question:
    "Hashing is reversible in the same way encryption is.",
  answer: "false"
},
{
  id: 63,
  type: "identification",
  difficulty: "hard",
  question:
    "What is the process of verifying the identity of a user called?",
  answer: "Authentication"
},
{
  id: 64,
  type: "mcq",
  difficulty: "hard",
  question:
    "Which algorithm is commonly used for secure password hashing?",
  choices: ["MD5", "SHA-1", "bcrypt", "DES"],
  answer: "bcrypt"
},
{
  id: 65,
  type: "truefalse",
  difficulty: "hard",
  question:
    "A firewall can help block unauthorized network access.",
  answer: "true"
},
{
  id: 66,
  type: "identification",
  difficulty: "hard",
  question:
    "What term describes malicious software that demands payment to restore access to data?",
  answer: "Ransomware"
},
{
  id: 67,
  type: "mcq",
  difficulty: "hard",
  question:
    "Which database property ensures that transactions are processed reliably?",
  choices: ["CRUD", "ACID", "JOIN", "INDEX"],
  answer: "ACID"
},
{
  id: 68,
  type: "truefalse",
  difficulty: "hard",
  question:
    "Virtualization allows multiple operating systems to run on a single physical machine.",
  answer: "true"
},
{
  id: 69,
  type: "identification",
  difficulty: "hard",
  question:
    "What term refers to the practice of hiding data within another file?",
  answer: "Steganography"
},
{
  id: 70,
  type: "mcq",
  difficulty: "hard",
  question:
    "Which programming paradigm focuses on objects containing data and methods?",
  choices: ["Procedural", "Functional", "Object-Oriented", "Declarative"],
  answer: "Object-Oriented"
},
{
  id: 71,
  type: "truefalse",
  difficulty: "hard",
  question:
    "Latency refers to the delay before data transfer begins.",
  answer: "true"
},
{
  id: 72,
  type: "identification",
  difficulty: "hard",
  question:
    "What type of malware secretly records user keystrokes?",
  answer: "Keylogger"
},
{
  id: 73,
  type: "mcq",
  difficulty: "hard",
  question:
    "Which HTTP status code means 'Not Found'?",
  choices: ["200", "301", "403", "404"],
  answer: "404"
},
{
  id: 74,
  type: "truefalse",
  difficulty: "hard",
  question:
    "Load balancing helps distribute traffic across multiple servers.",
  answer: "true"
},
{
  id: 75,
  type: "identification",
  difficulty: "hard",
  question:
    "What term describes software updates that fix security vulnerabilities?",
  answer: "Patch"
}
];

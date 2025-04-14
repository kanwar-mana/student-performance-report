# 📋 Student Report CLI

This Node.js CLI tool allows users to generate a detailed report of a specific student by entering their **roll number**. It reads student data from a `data.json` file and prints their performance with subject-wise marks and grades.

---

## 📦 Features

- Fetches student records from a JSON file.
- Takes input from the command line (CLI).
- Displays:
  - Student Name, Roll No, and ID
  - Marks for Math, English, and Science
  - Grades based on the score
- Gracefully handles "Student Not Found" scenarios.

---

## 📁 Project Structure


---

## 🧠 Grading Criteria

| Score Range | Grade |
|-------------|-------|
| 90+         | A+    |
| 80–89       | A     |
| 70–79       | B     |
| 60–69       | B−    |
| 50–59       | C+    |
| 40–49       | C−    |
| Below 40    | F     |

---

## 🚀 How to Run

1. Clone the repository or download the code.

2. Make sure you have **Node.js** installed.

3. Add student data in `data.json` with the following structure:

```json
[
  {
    "id": "101",
    "name": "Ali Khan",
    "roll_no": "A1",
    "math": 85,
    "english": 78,
    "science": 90
  },
  ...
]
```
###   Run the Program
node report.js

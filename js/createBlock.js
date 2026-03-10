const createblocks = [
  {
    color: "red",
    design: [
      [1, 0],
      [1, 1],
    ],
  },
  {
    color: "red",
    design: [
      [0, 1],
      [1, 1],
    ],
  },
  {
    color: "red",
    design: [
      [1, 1],
      [1, 0],
    ],
  },
  {
    color: "red",
    design: [
      [1, 1],
      [0, 1],
    ],
  },
  {
    color: "#FF922B",
    design: [
      [1, 1],
      [1, 1],
    ],
  },
  {
    color: "#FFA94D",
    design: [[1], [1]],
  },
  {
    color: "#FFA94D",
    design: [[1, 1]],
  },
  {
    color: "gray",
    design: [[1]],
  },
  {
    color: "green",
    design: [[1], [1], [1]],
  },
  {
    color: "green",
    design: [[1, 1, 1]],
  },
  {
    color: "rgb(161, 45, 161)",
    design: [[1, 1, 1, 1]],
  },
  {
    color: "rgb(161, 45, 161)",
    design: [[1], [1], [1], [1]],
  },
  {
    color: "yellow",
    design: [[1, 1, 1, 1, 1]],
  },
  {
    color: "yellow",
    design: [[1], [1], [1], [1], [1]],
  },
  {
    color: "#9775FA",
    design: [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
  },
  {
    color: "yellowgreen",
    design: [
      [1, 0, 0],
      [1, 0, 0],
      [1, 1, 1],
    ],
  },
  {
    color: "yellowgreen",
    design: [
      [0, 0, 1],
      [0, 0, 1],
      [1, 1, 1],
    ],
  },
  {
    color: "yellowgreen",
    design: [
      [1, 1, 1],
      [0, 0, 1],
      [0, 0, 1],
    ],
  },
  {
    color: "yellowgreen",
    design: [
      [1, 1, 1],
      [1, 0, 0],
      [1, 0, 0],
    ],
  },
  {
    color: "tomato",
    design: [
      [1, 1, 0],
      [0, 1, 1],
    ],
  },
  {
    color: "tomato",
    design: [
      [0, 1, 1],
      [1, 1, 0],
    ],
  },
  {
    color: "#15AABF",
    design: [
      [1, 0],
      [1, 1],
      [0, 1],
    ],
  },
  {
    color: "#15AABF",
    design: [
      [0, 1],
      [1, 1],
      [1, 0],
    ],
  },
  {
    color: "brown",
    design: [
      [1, 0],
      [1, 0],
      [1, 1],
    ],
  },
  {
    color: "brown",
    design: [
      [0, 1],
      [0, 1],
      [1, 1],
    ],
  },
  {
    color: "brown",
    design: [
      [1, 1],
      [0, 1],
      [0, 1],
    ],
  },
  {
    color: "brown",
    design: [
      [1, 1],
      [1, 0],
      [1, 0],
    ],
  },
  {
    color: "#DA77F2",
    design: [
      [1, 1, 1],
      [1, 0, 0],
    ],
  },
  {
    color: "#DA77F2",
    design: [
      [1, 1, 1],
      [0, 0, 1],
    ],
  },
  {
    color: "#DA77F2",
    design: [
      [0, 0, 1],
      [1, 1, 1],
    ],
  },
  {
    color: "#DA77F2",
    design: [
      [1, 0, 0],
      [1, 1, 1],
    ],
  },
  {
    color: "tomato",
    design: [
      [0, 1, 0],
      [1, 1, 1],
    ],
  },
  {
    color: "tomato",
    design: [
      [1, 1, 1],
      [0, 1, 0],
    ],
  },
  {
    color: "orange",
    design: [
      [0, 1],
      [1, 1],
      [0, 1],
    ],
  },
  {
    color: "orange",
    design: [
      [1, 0],
      [1, 1],
      [1, 0],
    ],
  },
  {
    color: "#05dab6",
    design: [
      [1, 1, 1],
      [1, 1, 1],
    ],
  },
  {
    color: "#05dab6",
    design: [
      [1, 1],
      [1, 1],
      [1, 1],
    ],
  },
];
const containerTable = document.querySelector(".container-table");
const containerBlock = document.querySelector("#container-block");
const div = document.querySelectorAll("#container-block>div");

const urlParams = new URLSearchParams(window.location.search);
const difficulty = urlParams.get("difficulty");
let numOfTd;
if (difficulty === "easy") {
  containerTable.style.flexDirection = "row";
  containerBlock.style.flexDirection = "column";
  containerBlock.style.marginRight = "20%";
  containerBlock.style.minWidth = "25%";
  div.forEach((d) => (d.style.width = "100%"));
  div.forEach((div) => (div.style.margin = "4%"));

  numOfTd = 10;
} else if (difficulty === "medium") {
  numOfTd = 8;
} else if (difficulty === "hard") {
  containerTable.style.marginTop = "8%";
  div.forEach((div) => (div.style.width = "33%"));
  numOfTd = 6;
}

const place = [];
const maintableArr = [];
const tds = [];
const maintable = document.createElement("table");
maintable.classList.add("table");
for (let i = 0; i < numOfTd; i++) {
  const tr1 = document.createElement("tr");
  const td1Arr = [];
  for (let j = 0; j < numOfTd; j++) {
    const td1 = document.createElement("td");
    td1.classList.add("td1");
    tr1.append(td1);
    td1Arr.push(td1);
    tds.push(td1);
  }
  maintableArr.push(td1Arr);
  maintable.append(tr1);
}

containerTable.append(maintable, containerBlock);
const mainrect = maintable.getBoundingClientRect();
const rectContainerTable = containerTable.getBoundingClientRect();

window.addEventListener("load", () => {
  for (let i = 0; i < numOfTd; i++) {
    maintableArr[i].forEach((td) => {
      const rect = td.getBoundingClientRect();
      place.push({ top: rect.top, left: rect.left });
    });
  }
  createshape(block1);
  createshape(block2);
  createshape(block3);
});

let currentBlock = 0;

const block1 = document.querySelector(".block1");
const block2 = document.querySelector(".block2");
const block3 = document.querySelector(".block3");
const point = document.querySelector("#point");
const score = document.querySelector("#score");
score.textContent = localStorage.highScore;
let pointsnum = 0;
point.textContent = pointsnum;
function createshape(containerBlock) {
  const randomShape =
    createblocks[Math.floor(Math.random() * createblocks.length)];
  let tdcnt = 0;
  const table = document.createElement("table");
  table.style.position = "absolute";
  const blockArr = [];
  const allBlockArr = [];

  for (let i = 0; i < randomShape.design.length; i++) {
    const tr = document.createElement("tr");
    const trArr = [];
    const tdArr = [];
    randomShape.design[i].forEach((num) => {
      const td = document.createElement("td");
      if (num === 1) {
        td.classList.add("design-td");
        td.style.backgroundColor = randomShape.color;
        tdArr.push(td);
        tdcnt++;
      } else {
        td.style.pointerEvents = "none";
        td.style.visibility = "hidden";
      }

      tr.append(td);
      trArr.push(td);
    });
    allBlockArr.push(trArr);
    blockArr.push(tdArr);
    table.append(tr);
  }

  containerBlock.append(table);
  const startTop = table.offsetTop;
  const startLeft = table.offsetLeft;

  function check(allBlockArr, maintableArr, table) {
    const rows = allBlockArr.length;
    const cols = allBlockArr[0].length;

    for (let i = 0; i <= numOfTd - rows; i++) {
      for (let j = 0; j <= numOfTd - cols; j++) {
        let isOk = true;

        for (let r = 0; r < rows; r++) {
          let colOffset = 0;
          for (let c = 0; c < cols; c++) {
            const blockTd = allBlockArr[r][c];
            if (blockTd.classList.contains("design-td")) {
              const tableCell = maintableArr[i + r][j + colOffset];
              const bg = getComputedStyle(tableCell).backgroundColor;
              if (bg !== "white" && bg !== "rgb(255, 255, 255)") {
                isOk = false;
              }
            }
            colOffset++;
          }
        }

        if (isOk) {
          console.log("this is good");
          table.style.color = randomShape.color;
          table.style.opacity = "1";
          return true;
        }
      }
    }
    console.log("this is not good");
    table.style.opacity = "0.3";
    cntFalse++;
    return false;
  }

  function hasAnyValidMove() {
    const blockTables = document.querySelectorAll("#container-block table");
    let any = false;

    for (let block of blockTables) {
      if (block.style.display === "none") continue;

      const blockTds = [...block.querySelectorAll("td")];
      const allBlockArr = [];
      let currentRow = [];
      let currentParent = null;

      for (let td of blockTds) {
        if (td.parentElement !== currentParent) {
          if (currentRow.length) allBlockArr.push(currentRow);
          currentRow = [];
          currentParent = td.parentElement;
        }
        currentRow.push(td);
      }
      if (currentRow.length) allBlockArr.push(currentRow);

      const ok = check(allBlockArr, maintableArr, block);

      block.style.opacity = ok ? "1" : "0.3";

      if (ok) any = true;
    }

    return any;
  }

  let cntFalse = 0;
  setTimeout(() => {
    check(allBlockArr, maintableArr, table);
    if (!hasAnyValidMove) {
      showGameOver(pointsnum);
    }
  }, 1000);

  let isDragging = false;
  let offsetX, offsetY;

  table.addEventListener("mousedown", (e) => {
    for (let i = 0; i < blockArr.length; i++) {
      blockArr[i].forEach((td) => {
        td.style.width = "50px";
        td.style.height = "50px";
        td.style.minWidth = "50px";
        td.style.minHeight = "50px";
      });
    }
    isDragging = true;
    offsetX = e.clientX - table.offsetLeft;
    offsetY = e.clientY - table.offsetTop;
    table.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      table.style.left = e.clientX - offsetX + "px";
      table.style.top = e.clientY - offsetY + "px";
    }
  });

  table.addEventListener("mouseup", (e) => {
    isDragging = false;
    table.style.cursor = "grab";
    const rectBlockArr = [];
    for (let i = 0; i < blockArr.length; i++) {
      blockArr[i].forEach((td) => {
        const rectBlock = td.getBoundingClientRect();
        rectBlockArr.push({ top: rectBlock.top, left: rectBlock.left });
      });
    }
    let blocklocation = true;
    const index2 = [];
    let cnt = 0;

    place.forEach((p, index) => {
      for (let i = 0; i < rectBlockArr.length; i++) {
        if (
          Math.abs(p.top - rectBlockArr[i].top) < 30 &&
          Math.abs(p.left - rectBlockArr[i].left) < 30
        ) {
          const colortd = getComputedStyle(tds[index]).backgroundColor;
          if (colortd !== "white" && colortd !== "rgb(255, 255, 255)") {
            blocklocation = false;
          } else {
            index2.push(index);
            cnt++;
          }
        }
      }
    });
    let blockPoint = false;
    if (blocklocation && cnt === rectBlockArr.length) {
      blockPoint = true;
      index2.forEach((index) => {
        tds[index].style.backgroundColor = randomShape.color;
        tds[index].classList.add("style");
        for (let i = 1; i <= 10; i++) {
          setTimeout(() => {
            pointsnum++;
            point.textContent = pointsnum;
          }, i * 50);
        }
      });
      table.style.display = "none";
      currentBlock++;
      cntFalse = 0;
      check(allBlockArr, maintableArr, table);
      if (!hasAnyValidMove) {
        showGameOver(pointsnum);
      }

      if (currentBlock === 3) {
        createshape(block1);
        createshape(block2);
        createshape(block3);
        currentBlock = 0;

        setTimeout(() => {
          check(allBlockArr, maintableArr, table);
          if (!hasAnyValidMove) {
            showGameOver(pointsnum);
          }
        }, 1000);
      }
    } else {
      table.style.top = startTop + "px";
      table.style.left = startLeft + "px";
      for (let i = 0; i < blockArr.length; i++) {
        blockArr[i].forEach((td) => {
          td.style.width = "20px";
          td.style.height = "20px";
          td.style.minWidth = "20px";
          td.style.minHeight = "20px";
        });
      }
    }
    let cnt1 = 0;
    function reset(row, col, isRow) {
      cnt1++;
      let num = 100;
      for (let j = 0; j < maintableArr.length; j++) {
        const cell = isRow ? maintableArr[row][j] : maintableArr[j][col];
        cell.classList.add("clear-beauty");
        setTimeout(() => {
          cell.style.backgroundColor = "white";
          cell.classList.remove("clear-beauty");
        }, 500);
        if (isRow) {
          maintableArr[row][j].classList.remove("style");
        } else {
          maintableArr[j][col].classList.remove("style");
        }
      }
      if (cnt1 === 2) num = 100 * 3;
      else if (cnt1 === 3) num = 100 * 5;
      else if (cnt1 === 4) num = 100 * 7;
      else if (cnt1 === 5) num = 100 * 9;
      for (let i = 1; i <= num; i++) {
        setTimeout(() => {
          pointsnum++;
          point.textContent = pointsnum;
        }, i * 25);
      }

      const point2 = document.createElement("p");
      point2.textContent = num + tdcnt * 10 + "+";
      point2.style.position = "absolute";
      point2.style.top = e.clientY + "px";
      point2.style.left = e.clientX + "px";
      point2.style.color = "black";
      point2.style.fontWeight = "bold";
      point2.style.transition = "all 1s ease";
      points.append(point2);

      setTimeout(() => {
        point2.style.transform = "translateY(-30px)";
        point2.style.opacity = "0";
      }, 50);
      setTimeout(() => {
        points.removeChild(point2);
      }, 1050);
    }

    let anyFullRowOrCol = false;

    for (let i = 0; i < maintableArr.length; i++) {
      let fullRow = true;
      let fullCol = true;

      for (let j = 0; j < maintableArr.length; j++) {
        const rowColor = getComputedStyle(maintableArr[i][j]).backgroundColor;
        const colColor = getComputedStyle(maintableArr[j][i]).backgroundColor;

        if (rowColor === "white" || rowColor === "rgb(255, 255, 255)") {
          fullRow = false;
        }
        if (colColor === "white" || colColor === "rgb(255, 255, 255)") {
          fullCol = false;
        }
      }
      if (fullRow && fullCol) {
        reset(i, 0, true);
        reset(0, i, false);
        anyFullRowOrCol = true;
        setTimeout(() => {
          check(allBlockArr, maintableArr, table);
          if (!hasAnyValidMove) {
            showGameOver(pointsnum);
          }
        }, 500);
      } else if (fullRow) {
        reset(i, 0, true);
        anyFullRowOrCol = true;
        setTimeout(() => {
          check(allBlockArr, maintableArr, table);
          if (!hasAnyValidMove) {
            showGameOver(pointsnum);
          }
        }, 500);
      } else if (fullCol) {
        reset(0, i, false);
        anyFullRowOrCol = true;
        setTimeout(() => {
          check(allBlockArr, maintableArr, table);
          if (!hasAnyValidMove) {
            showGameOver(pointsnum);
          }
        }, 500);
      }
    }

    if (!hasAnyValidMove() && !anyFullRowOrCol) {
      showGameOver(pointsnum + tdcnt * 10);
    }
    if (anyFullRowOrCol) {
      setTimeout(() => {
        if (!hasAnyValidMove()) showGameOver(pointsnum);
      }, 500);
    }

    if (blockPoint && !anyFullRowOrCol) {
      const point2 = document.createElement("p");
      point2.textContent = tdcnt * 10 + "+";
      point2.style.position = "absolute";
      point2.style.top = e.clientY + "px";
      point2.style.left = e.clientX + "px";
      point2.style.color = "black";
      point2.style.fontWeight = "bold";
      point2.style.transition = "all 1s ease";
      points.append(point2);

      setTimeout(() => {
        point2.style.transform = "translateY(-30px)";
        point2.style.opacity = "0";
      }, 50);
      setTimeout(() => {
        points.removeChild(point2);
      }, 1050);
    }
  });
}
if (!localStorage.getItem("highScore")) {
  localStorage.setItem("highScore", 0);
}

function showGameOver(finalPoints) {
  const screen = document.getElementById("gameOverScreen");
  const finalScore = document.getElementById("finalScore");
  const highScore = document.getElementById("highScore");

  finalScore.textContent = finalPoints;

  const prevHigh = Number(localStorage.getItem("highScore"));
  if (finalPoints > prevHigh) {
    highScore.textContent = finalPoints;
    localStorage.setItem("highScore", finalPoints);
    showNewRecord();
  } else {
    highScore.textContent = prevHigh;
  }
  screen.classList.remove("hidden");
  const name = document.querySelector("#userName");
  const savedName = localStorage.getItem("nameuser");
  name.textContent = savedName;
}

document.querySelector("#restartBtn").addEventListener("click", () => {
  location.reload();
});
document.querySelector(".restartBtn").addEventListener("click", () => {
  location.reload();
});
const homePage = document.querySelector("#homePage");
homePage.addEventListener("click", () => {
  window.location.href = "../index.html";
});

function showNewRecord() {
  const msg = document.getElementById("newRecord");
  msg.classList.remove("hidden");

  setTimeout(() => {
    msg.classList.add("hidden");
  }, 3000);
}

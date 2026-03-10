import { createblocks } from './createBlock.js';

const place = [];
const maintableArr = [];
const tds = [];
const maintable = document.createElement('table');
maintable.classList.add('table');
for (let i = 0; i < 8; i++) {
    const tr1 = document.createElement('tr');
    const td1Arr = [];
    for (let j = 0; j < 8; j++) {
        const td1 = document.createElement('td');
        td1.classList.add('td1');
        tr1.append(td1);
        td1Arr.push(td1);
        tds.push(td1);
    }
    maintableArr.push(td1Arr);
    maintable.append(tr1);
}
console.log(maintableArr);

const containerTable = document.querySelector('.container-table');
const containerBlock = document.querySelector('#container-block');
containerTable.append(maintable, containerBlock);
const mainrect = maintable.getBoundingClientRect();
const rectContainerTable = containerTable.getBoundingClientRect();

window.addEventListener('load', () => {
    for (let i = 0; i < 8; i++) {
        maintableArr[i].forEach(td => {
            const rect = td.getBoundingClientRect();
            place.push({ top: rect.top, left: rect.left });
        })
    }
    createshape(block1);
    createshape(block2);
    createshape(block3);
});

let currentBlock = 0;

const block1 = document.querySelector('.block1');
const block2 = document.querySelector('.block2');
const block3 = document.querySelector('.block3');
const point = document.querySelector('#point');
let pointsnum = 0;
point.textContent = pointsnum;
function createshape(containerBlock) {
    const randomShape = createblocks[Math.floor(Math.random() * createblocks.length)];
    let tdcnt = 0;
    const table = document.createElement('table');
    table.style.position = "absolute";
    const blockArr = [];
    for (let i = 0; i < randomShape.design.length; i++) {
        const tr = document.createElement('tr');
        const tdArr = [];
        randomShape.design[i].forEach((num) => {
            const td = document.createElement('td');
            if (num === 1) {
                td.classList.add('design-td');
                td.style.backgroundColor = randomShape.color;
                tdArr.push(td);
                // tr.append(td);
                tdcnt++;
            }
            else {
                td.style.display = 'none';
                td.style.pointerEvents = "none";
            }
            tr.append(td);
        });
        blockArr.push(tdArr);
        table.append(tr);
    };
    console.log(blockArr);

    containerBlock.append(table);
    const startTop = table.offsetTop;
    const startLeft = table.offsetLeft;
    let isOk = true;
    let cntisOk = 0;
    for (let i = 0; i < place.length; i++) {
        const rectLeft = place[i].left;
        const rectTop = place[i].top;
        for(let j = 0; j < blockArr.length; j++) {
            blockArr[j].forEach(td => {
                if(place[i].left - rectLeft < 30 && tds[i].style.backgroundColor === "white") {
                    rectLeft+=50;
                }
                else {
                    isOk = false;
                    cntisOk++;
                }
            });
            rectTop += 50;
        }
    }

    if (!isOk) {
        table.style.opacity = "0.5";
        
    let isDragging = false;
    let offsetX, offsetY;

    table.addEventListener('mousedown', (e) => {
        for (let i = 0; i < blockArr.length; i++) {
            blockArr[i].forEach(td => {
                td.style.width = '50px';
                td.style.height = '50px';
                td.style.minWidth = '50px';
                td.style.minHeight = '50px';
            });
        };
        isDragging = true;
        offsetX = e.clientX - table.offsetLeft;
        offsetY = e.clientY - table.offsetTop;
        table.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            table.style.left = (e.clientX - offsetX) + 'px';
            table.style.top = (e.clientY - offsetY) + 'px';
        }

    });

    table.addEventListener('mouseup', (e) => {
        const rectBlockArr = [];
        isDragging = false;
        table.style.cursor = 'grab';
        for (let i = 0; i < blockArr.length; i++) {
            blockArr[i].forEach(td => {
                const rectBlock = td.getBoundingClientRect();
                rectBlockArr.push({ top: rectBlock.top, left: rectBlock.left });
            });
        }
        let blocklocation = true;
        const index2 = [];
        let cnt = 0;

        // let j = 0;
        // let find = false;
        // let count = 0;
        // let colCount = 0;
        // for (let i = 0; i < randomShape.design.length; i++) {
        //     for (let k = 0; k < maintableArr.length; k++) {
        //         randomShape.design[i].forEach((num) => {
        //             const bg = getComputedStyle(maintableArr[k][j]).backgroundColor;
        //             if (num === 1 && (bg === "white" || bg === "rgb(255, 255, 255)")) {
        //                 j++;
        //             }
        //             else {
        //                 count++;
        //             }
        //         });
        //     }
        //     j = 0;
        //     if (count === (randomShape.design[i]).length)
        //         colCount++;
        // }
        // if (colCount === randomShape.design.length)
        //     find = true;
        // else {
        //     table.style.opacity = "0.5";
        // }
        place.forEach((p, index) => {
            for (let i = 0; i < rectBlockArr.length; i++) {
                if (Math.abs(p.top - rectBlockArr[i].top) < 30 && Math.abs(p.left - rectBlockArr[i].left) < 30) {
                    const colortd = getComputedStyle(tds[index]).backgroundColor;
                    if (colortd !== "white" && colortd !== "rgb(255, 255, 255)") {
                        blocklocation = false;
                    }
                    else {
                        index2.push(index);
                        cnt++;
                    }
                }
            }
        });
        let blockPoint = false;
        console.log('X:', e.clientX, 'Y:', e.clientY);
        if (blocklocation && cnt === rectBlockArr.length) {
            blockPoint = true;
            index2.forEach(index => {
                tds[index].style.backgroundColor = randomShape.color;
                table.style.display = "none";
                tds[index].classList.add('style');
                for (let i = 1; i <= 10; i++) {
                    setTimeout(() => {
                        pointsnum++;
                        point.textContent = pointsnum;
                    }, i * 50);
                };
            });
            currentBlock++;
            if(cntisOk+currentBlock === 3) {
                const h1 = document.createElement('h1');
                h1.textContent = "Game Over";
                h1.style.position = 'absolute';
                h1.style.top = '50%';
                points.append(h1);
            }
            if (currentBlock === 3) {
                createshape(block1);
                createshape(block2);
                createshape(block3);
                currentBlock = 0;
            }
            console.log(pointsnum);

        }
        else {
            table.style.top = startTop + 'px';
            table.style.left = startLeft + 'px';
            for (let i = 0; i < blockArr.length; i++) {
                blockArr[i].forEach(td => {
                    td.style.width = '20px';
                    td.style.height = '20px';
                    td.style.minWidth = '20px';
                    td.style.minHeight = '20px';
                })
            }
        }
        let cnt1 = 0;
        function reset(row, col, isRow) {
            cnt1++;
            let num = 30;
            for (let j = 0; j < maintableArr.length; j++) {
                const cell = isRow ? maintableArr[row][j] : maintableArr[j][col];
                cell.classList.add('clear-beauty');
                setTimeout(() => {
                    cell.style.backgroundColor = "white";
                    cell.classList.remove('clear-beauty');
                }, 500);
                if (isRow) {
                    maintableArr[row][j].classList.remove('style');
                }
                else {
                    maintableArr[j][col].classList.remove('style');
                }

            }
            if (cnt1 === 2)
                num = 100 * 2;
            else if (cnt1 === 3)
                num = 100 * 3;
            else if (cnt1 === 4)
                num = 100 * 4;
            else if (cnt1 === 5)
                num = 100 * 5;
            for (let i = 1; i <= num; i++) {
                setTimeout(() => {
                    pointsnum++;
                    point.textContent = pointsnum;
                }, i * 50);
            };
            const point2 = document.createElement('p');
            point2.textContent = "+" + (100 + tdcnt * 10);
            point2.style.position = 'absolute';
            point2.style.top = e.clientY + 'px';
            point2.style.left = e.clientX + 'px';
            point2.style.color = "black";
            point2.style.fontWeight = "bold";
            point2.style.transition = "all 1s ease";
            points.append(point2);

            setTimeout(() => {
                point2.style.transform = 'translateY(-30px)';
                point2.style.opacity = '0';
            }, 50);
            setTimeout(() => {
                points.removeChild(point2);
            }, 1050);
        }
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
                eset(0, i, false);
            }
            if (fullRow) reset(i, 0, true);
            if (fullCol) reset(0, i, false);
        }
        if (blockPoint && !fullRow && !fullCol) {
            const point2 = document.createElement('p');
            point2.textContent = "+" + tdcnt * 10;
            point2.style.position = 'absolute';
            point2.style.top = e.clientY + 'px';
            point2.style.left = e.clientX + 'px';
            point2.style.color = "black";
            point2.style.fontWeight = "bold";
            point2.style.transition = "all 1s ease";
            points.append(point2);

            setTimeout(() => {
                point2.style.transform = 'translateY(-30px)';
                point2.style.opacity = '0';
            }, 50);
            setTimeout(() => {
                points.removeChild(point2);
            }, 1050);
        }
    });
};
};

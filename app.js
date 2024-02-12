const historyContainer = document.getElementById('historyContainer');
let count = 0;

// triangle calculate function
document.getElementById('triangleCalculation').addEventListener('click', function() {
    const b = document.getElementById('triangleB');
    const h = document.getElementById('triangleH');
    const bValue = b.value;
    const hValue = h.value;

    if(bValue.trim() === '' || hValue.trim() === '') {
        return;
    }
    if(!isNaN(bValue) && !isNaN(hValue)) {
        const result = (bValue * hValue) / 2;
        const triangleResult = document.getElementById('triangleResult');
        triangleResult.innerText = result;
        b.value = '';
        h.value = '';
        count += 1;
        const p = document.createElement('p');
        p.innerText = `${count}. Triangle Area = ${result} cm2`;
        historyContainer.appendChild(p);
    }
    return;
});

// rectangle calculate function
document.getElementById('rectangleCalculation').addEventListener('click', function() {
    const w = document.getElementById('rectangleW');
    const l = document.getElementById('rectangleL');
    const wValue = w.value;
    const lValue = l.value;

    if(wValue.trim() === '' || lValue.trim() === '') {
        return;
    }
    if(!isNaN(wValue) && !isNaN(lValue)) {
        const result = (wValue * lValue);
        const rectangleResult = document.getElementById('rectangleResult');
        rectangleResult.innerText = result;
        w.value = '';
        l.value = '';
        count += 1;
        const p = document.createElement('p');
        p.innerText = `${count}. Rectangle Area = ${result} cm2`;
        historyContainer.appendChild(p);
    }
    return;
});

// Parallelogram calculate function
document.getElementById('parallelogramCalculation').addEventListener('click', function() {
    const b = document.getElementById('parallelogramB');
    const h = document.getElementById('parallelogramH');
    const bValue = b.value;
    const hValue = h.value;

    if(bValue.trim() === '' || hValue.trim() === '') {
        return;
    }
    if(!isNaN(bValue) && !isNaN(hValue)) {
        const result = (bValue * hValue);
        const parallelogramResult = document.getElementById('parallelogramResult');
        parallelogramResult.innerText = result;
        b.value = '';
        h.value = '';
        count += 1;
        const p = document.createElement('p');
        p.innerText = `${count}. Parallelogram Area = ${result} cm2`;
        historyContainer.appendChild(p);
    }
    return;
});
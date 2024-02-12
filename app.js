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

// Rhombus calculation function
document.getElementById('rhombusCalculation').addEventListener('click', function() {
    const p = document.getElementById('rhombusP');
    const q = document.getElementById('rhombusQ');
    const pValue = p.value;
    const qValue = q.value;

    if(pValue.trim() === '' || qValue.trim() === '') {
        return;
    }
    if(!isNaN(pValue) && !isNaN(qValue)) {
        const result = (pValue * qValue) / 2;
        const rhombusResult = document.getElementById('rhombusResult');
        rhombusResult.innerText = result;
        p.value = '';
        q.value = '';
        count += 1;
        const para = document.createElement('p');
        para.innerText = `${count}. Parallelogram Area = ${result} cm2`;
        historyContainer.appendChild(para);
    }
    return;
});

// Pentagon calculation function
document.getElementById('pentagonCalculation').addEventListener('click', function() {
    const a = document.getElementById('pentagonA');
    const aValue = a.value;

    if(aValue.trim() === '') {
        return;
    }
    if(!isNaN(aValue)) {
        const result = ((Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * Math.pow(aValue, 2)) / 4).toFixed(2);
        const pentagonResult = document.getElementById('pentagonResult');
        pentagonResult.innerText = result;
        a.value = '';
        count += 1;
        const para = document.createElement('p');
        para.innerText = `${count}. Pentagon Area = ${result} cm2`;
        historyContainer.appendChild(para);
    }
    return;
});

// Ellipse calculation function
document.getElementById('ellipseCalculation').addEventListener('click', function() {
    const a = document.getElementById('ellipseA');
    const b = document.getElementById('ellipseB');
    const aValue = a.value;
    const bValue = b.value;

    if(aValue.trim() === '' || bValue.trim() === '') {
        return;
    }
    if(!isNaN(aValue) && !isNaN(bValue)) {
        const result = ((aValue * bValue) * 3.14).toFixed(2);
        const ellipseResult = document.getElementById('ellipseResult');
        ellipseResult.innerText = result;
        a.value = '';
        b.value = '';
        count += 1;
        const para = document.createElement('p');
        para.innerText = `${count}. Ellipse Area = ${result} cm2`;
        historyContainer.appendChild(para);
    }
    return;
});
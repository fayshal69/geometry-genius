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
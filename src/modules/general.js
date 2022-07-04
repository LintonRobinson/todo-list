const createDiv = (className) => {
    const div = document.createElement('div');
    div.classList.add(className);
    return div;
}

const createH2 = (className) => {
    const h2 = document.createElement('h2');
    h2.classList.add(className);
    return h2;
}

const createPara = (className) => {
    const para = document.createElement('p');
    para.classList.add(className);
    return para;
}

const createBtn = (className) => {
    const btn = document.createElement('button');
    btn.classList.add(className);
    return btn;
}

const createInput = (className, inputType) => {
    const input = document.createElement('input');
    input.classList.add(className);
    input.setAttribute('type', inputType);
    return input;
}
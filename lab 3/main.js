let pageNum = 'page_number';
let current = localStorage.getItem(pageNum);

let db = 'dataBase';
let arrTest = localStorage.getItem(db);
let arr = JSON.parse(arrTest);

let page = document.createElement('div');
page.style.display = 'flex';
page.style.flexWrap = 'wrap';
page.style.justifyContent = 'space-between';

for (let i = (10 * current - 10); i < current * 10; i++) {
    let element = document.createElement('div');
    element.style.width = '250px';
    element.style.height = '250px';
    element.style.background = 'yellow';
    element.style.border = 'black 3px solid';
    element.style.borderRadius = '20px';
    element.style.marginBottom = '30px';
    element.style.fontSize = '40px';
    element.style.textAlign = 'center';

    element.innerText = arr[i];
    page.appendChild(element.cloneNode(true));
}

let buttonPrev = document.createElement('button');
buttonPrev.innerText = 'Previous Page';

let buttonNext = document.createElement('button');
buttonNext.innerText = 'Next Page';

buttonPrev.onclick = () => {
    let currentPage = +localStorage.getItem(pageNum);

    if (currentPage > 1){
        currentPage = currentPage - 1;
    }

    localStorage.setItem(pageNum, JSON.stringify(currentPage));
    location.reload();
};

buttonNext.onclick = () => {
    let currentPage = +localStorage.getItem(pageNum);

    if(currentPage < 10){
        currentPage = currentPage + 1;
    }

    localStorage.setItem(pageNum, JSON.stringify(currentPage));
    location.reload();
}

let buttons = document.createElement('div');
buttons.append(buttonPrev, buttonNext);
buttons.style.display = 'flex';
buttons.style.justifyContent = 'space-between';

document.body.append(page, buttons);


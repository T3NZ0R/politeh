let pageNum = 'page_number';
let current = localStorage.getItem(pageNum);

let db_name = 'db_name';

let db = localStorage.getItem(db_name);

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
    if(db === 'dataBase'){
        element.style.background = 'yellow';
    }else if(db === 'dataBase1'){
        element.style.background = '#2ea9d5';
    }else {
        element.style.background = '#4ab04f';
    }
    element.style.border = 'black 3px solid';
    element.style.borderRadius = '20px';
    element.style.marginBottom = '30px';
    element.style.fontSize = '20px';
    element.style.textAlign = 'center';

    element.innerText = arr[i];
    page.appendChild(element.cloneNode(true));
}

let buttonPrev = document.createElement('button');
buttonPrev.innerText = 'Previous Page';
buttonPrev.style.padding = '50px'

let buttonNext = document.createElement('button');
buttonNext.innerText = 'Next Page';
buttonNext.style.padding = '50px'

let buttonName = document.createElement('button');
buttonName.innerText = 'Name';
buttonName.style.padding = '50px'

let buttonSurname = document.createElement('button');
buttonSurname.innerText = 'Surname';
buttonSurname.style.padding = '50px'

let buttonAge = document.createElement('button');
buttonAge.innerText = 'Age';
buttonAge.style.padding = '50px'

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
};

buttonName.onclick = () => {
    localStorage.setItem(db_name, 'dataBase');
    location.reload();
};

buttonSurname.onclick = () => {
    localStorage.setItem(db_name, 'dataBase1');
    location.reload();
};

buttonAge.onclick = () => {
    localStorage.setItem(db_name, 'dataBase2');
    location.reload();
};

let buttons = document.createElement('div');
buttons.append(buttonPrev,buttonName, buttonSurname, buttonAge, buttonNext);
buttons.style.display = 'flex';
buttons.style.justifyContent = 'space-between';

document.body.append(page, buttons);


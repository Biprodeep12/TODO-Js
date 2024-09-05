let input = document.getElementById('searchinput');
let G1 = document.getElementById('searchIcon');

let dataArray = [];

let retro = function () {
  let returnedAr = localStorage.getItem('dataDivsContent');
  if (!returnedAr) {
    console.log('Creating New list in localStorage.');
    localStorage.setItem('dataDivsContent', JSON.stringify(dataArray));
  } else {
    let savedData = JSON.parse(returnedAr);
    console.log('saved Data:', savedData);
    if (Array.isArray(savedData)) {
      savedData.forEach((cont) => {
        let data = document.createElement('div');
        data.id = 'showitem';
        data.className = 'show';
        document.getElementById('list').appendChild(data);
        let spann = document.createElement('span');
        spann.id = 'span-data';
        spann.innerText = cont;
        data.appendChild(spann);
        let del_b2 = document.createElement('img');
        del_b2.src = 'https://img.icons8.com/?size=256w&id=102550&format=png';
        del_b2.id = 'delete';
        let editbtn = document.createElement('img');
        editbtn.src =
          'https://img.icons8.com/?size=256w&id=UZ8pk9DLFPPG&format=png';
        editbtn.alt = 'edit';
        editbtn.id = 'edit-btn';
        del_b2.addEventListener('click', function () {
          document.getElementById('list').removeChild(del_b2.parentNode);
        });
        data.appendChild(editbtn);
        data.appendChild(del_b2);
        input.textContent = '';
        let inputed = document.createElement('paragraph');
        inputed.contentEditable = 'true';
        inputed.id = 'input-edit';

        editbtn.addEventListener('click', function () {
          if (editbtn.alt == 'edit') {
            let v = spann.innerText;
            inputed.innerText = v;
            editbtn.src =
              'https://img.icons8.com/?size=256w&id=13902&format=png';
            editbtn.alt = 'save';
            console.log(v);
            data.replaceChild(inputed, spann);
          } else {
            if (editbtn.alt == 'save') {
              spann.innerText = inputed.innerText;
              editbtn.src =
                'https://img.icons8.com/?size=256w&id=UZ8pk9DLFPPG&format=png';
              editbtn.alt = 'edit';
              data.replaceChild(spann, inputed);
            } else {
              alert('cant be empty');
            }
          }
        });
        dataArray.push(data.textContent);
        console.log(dataArray);
        localStorage.setItem('dataDivsContent', JSON.stringify(dataArray));
        console.log('Data saved to localStorage:', dataArray);
      });
      console.log('Retrieved data from localStorage:', savedData);
    } else {
      console.log('Not valid');
    }
  }
};

retro();

const item1 = function () {
  let value = document.getElementById('searchinput').textContent;
  if (input.textContent.trim() != '') {
    let data = document.createElement('div');
    data.id = 'showitem';
    data.className = 'show';
    document.getElementById('list').appendChild(data);
    let del_b2 = document.createElement('img');
    del_b2.src = 'https://img.icons8.com/?size=256w&id=102550&format=png';
    del_b2.id = 'delete';

    del_b2.addEventListener('click', function () {
      document.getElementById('list').removeChild(del_b2.parentNode);
    });

    let spann = document.createElement('span');
    spann.id = 'span-data';
    spann.innerText = value;
    data.appendChild(spann);

    let editbtn = document.createElement('img');
    editbtn.src =
      'https://img.icons8.com/?size=256w&id=UZ8pk9DLFPPG&format=png';
    editbtn.alt = 'edit';
    editbtn.id = 'edit-btn';

    data.appendChild(editbtn);
    data.appendChild(del_b2);
    input.textContent = '';
    let inputed = document.createElement('paragraph');
    inputed.contentEditable = 'true';
    inputed.id = 'input-edit';

    editbtn.addEventListener('click', function () {
      if (editbtn.alt == 'edit') {
        let v = spann.innerText;
        inputed.innerText = v;
        editbtn.src = 'https://img.icons8.com/?size=256w&id=13902&format=png';
        editbtn.alt = 'save';
        console.log(v);
        data.replaceChild(inputed, spann);
      } else {
        if (editbtn.alt == 'save') {
          spann.innerText = inputed.innerText;
          editbtn.src =
            'https://img.icons8.com/?size=256w&id=UZ8pk9DLFPPG&format=png';
          editbtn.alt = 'edit';
          data.replaceChild(spann, inputed);
        } else {
          alert('cant be empty');
        }
      }
    });
  }
};
input.addEventListener('keyup', function (e) {
  if (e.keyCode == 13) {
    item1();
  }
});

G1.addEventListener('click', function () {
  item1();
  document.getElementById('searchinput').innerText = '';
});

let se = document.getElementById('se');

se.addEventListener('click', function () {
  runBeforeUnloadFunction();
  let boar = document.getElementById('boar');
  boar.textContent = 'Saved';
  boar.classList.add('ano');
  setTimeout(function () {
    boar.classList.remove('ano');
  }, 3000);
});

function runBeforeUnloadFunction() {
  const contentDivs = document.querySelectorAll('#list #showitem');
  const dataArray = Array.from(contentDivs).map((div) => div.innerText);
  localStorage.setItem('dataDivsContent', JSON.stringify(dataArray));
  console.log('SAVED');
}

let elet = document.getElementById('elet');

elet.addEventListener('click', function () {
  let lt = document.getElementById('list');
  lt.textContent = '';
  localStorage.clear();
  let boar = document.getElementById('boar');
  boar.textContent = 'Deleted All';
  boar.classList.add('ano1');
  setTimeout(function () {
    boar.classList.remove('ano1');
  }, 3000);
});

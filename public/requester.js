function getFromDB(sql, renderFunc, nothingToRenderFunc, errorRenderFunc, params = []) {
  fetch('/getData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ sql, params })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.length < 1) {
        nothingToRenderFunc();
      } else {
        data.forEach(row => {
          renderFunc(row);
        });
        return true;
      }
    })
    .catch(error => {
      errorRenderFunc(error);
    });
}

function sendToDB(sql, params, renderFunc, errorRenderFunc) {

  fetch('/sendData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ sql, params })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      renderFunc(data);
    })
    .catch(error => {
      errorRenderFunc(error);
    });
}

function show(htmlText, wrapperElement, cardClasses = []) {
  const wrapper = wrapperElement
  const card = document.createElement('div');
  cardClasses.forEach(className => {
    card.classList.add(className);
  });

  card.innerHTML = htmlText;
  wrapper.appendChild(card);
}

function showOnTop(htmlText, wrapperElement, cardClasses = []) {
  const wrapper = wrapperElement
  const card = document.createElement('div');
  cardClasses.forEach(className => {
    card.classList.add(className);
  });

  card.innerHTML = htmlText;
  wrapper.prepend(card);
}
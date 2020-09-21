function createElement(data) {
  let p = document.createElement('p');
  p.innerHTML = JSON.parse(data).query.pages['21721040'].extract;
  document.body.append(p);
}

function queryWikipedia(callback) {
  const url =
    'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', url);
  xhttp.onload = function () {
    callback(xhttp.response);
  };
  xhttp.send();
}

queryWikipedia(createElement);

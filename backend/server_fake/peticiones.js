var settings = {
  "url": "http://localhost:3000/games/1",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/games/2",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/games/3",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/games",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "11",
    "game_name": "Minecraft",
    "plataform": "Micro ondas",
    "company_name": "samsung",
    "date": 2080,
    "language": "alienijena"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/games",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "12",
    "game_name": "Undetale",
    "plataform": "Avion",
    "company_name": "Tobias el zorro",
    "date": 1500,
    "language": "japones"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/games/5da4",
  "method": "DELETE",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/games/0c3d",
  "method": "DELETE",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/games/c5e1",
  "method": "DELETE",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/games/5",
  "method": "PUT",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/games/6",
  "method": "PUT",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "6",
    "game_name": "Mexico vs Peru",
    "plataform": "Microsoft Windows Mobile 6.5 Professional",
    "company_name": "Supercell",
    "date": 200,
    "language": "indu"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
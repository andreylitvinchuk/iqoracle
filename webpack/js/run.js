$(document).ready(function(){
  $(".include-svg").load("files/img/sprite.svg");
  //Простенькая функция для получения ссылки,
  //без запроса, успел прочесть, что можно
  //с помощью библиотек сгенерировать полную ссылку
  function require(url){
    return url;
  };

  var source = $("#tasks-block").html(),
      template = Handlebars.compile(source),
      data = {
        tasks: []
      };

  //предположим, что данные мы уже получили,
  //теперь нам нужно привести их к ввиду json для фреймворка
  var getData = [
    {
       title: "№1 Исторические места",
       image: require('./files/img/chita.png'),
       stars: 1,
       completed: true,
     },
     {
       title: "№2 Исторические места",
       image: require('./files/img/chita.png'),
       stars: 2,
       completed: true,
     },
     {
       title: "№3 Многообразие исторического общества",
       image: require('./files/img/chita.png'),
       stars: 1,
       completed: true,
     },
     {
       title: "№4 Исторические места",
       image: require('./files/img/chita.png'),
       active: true,
     },
     {
       title: "№5 Исторические места",
       image: require('./files/img/chita.png'),
       active: false,
       description: "Нужно ещё 2 звезды",
     },
     {
       title: "№6 Исторические места",
       image: require('./files/img/chita.png'),
       active: false,
       description: "Пройдите задание №5",
     },
     {
       title: "№7 Исторические места",
       image: require('./files/img/chita.png'),
       active: false,
       description: "Пройдите задание №6",
     },
     {
       title: "№8 Исторические места",
       image: require('./files/img/chita.png'),
       active: false,
       description: "Пройдите задание №7",
     },
     {
       title: "№9 Исторические места",
       image: require('./files/img/chita.png'),
       active: false,
       description: "Пройдите задание №8",
     },
     {
       title: "№10 Исторические места",
       image: require('./files/img/chita.png'),
       active: false,
       description: "Пройдите задание №9",
     }
  ];

  //добавим полученный массив в основной
  data.tasks = getData;

  //создадим хелпер для "звёзд"
  Handlebars.registerHelper('list', function(context, options) {
    var ret = new String(),
        star_active;

    for(var i=0; i<3; i++) {
      star_active = (i<context) ? "-filled" : "";
      ret +='<svg class="'+star_active+'"><use xlink:href="#star'+star_active+'"></use></svg>';
    }

    return ret;
  });

  //добавим шаблон на страницу
  $('.wrapper').append(template(data));
});

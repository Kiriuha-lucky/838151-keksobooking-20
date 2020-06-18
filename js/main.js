var adsArray = [];

var randomNumber = function (max) {
  return Math.floor(Math.random() * Math.floor(max) + 1);
};

var randomMinMax = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};



var createAds = function () {
  var one = {};
  for (var i = 0; i < 8; i++) {
    one = {
      "author": {
        "avatar": 'img/avatars/user' + '0' + randomNumber(8) + '.png',
        "offer": {
          "title": 'строка, заголовок предложения',
          "address": '600, 350',
          "price": 15000,
          "type": 'palace',
          "rooms": 5,
          "guests": 10,
          "checkin": '12:00',
          "checkout": '14:00',
          "features": ["wifi",
            "dishwasher",
            "parking",
            "washer",
            "elevator",
            "conditioner"
          ],
          "description": 'строка с описанием',
          "photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg",
            "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
            "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
          ],
        },
        "location": {
          "x": randomNumber(100),
          "y": randomMinMax(130, 630)
        }
      }
    };
    adsArray.push(one);
  }
  console.log(adsArray);
  return adsArray;
};

createAds();

var mapPins = document.querySelector('.map__pins');
var pinsTemplate = document.querySelector('#pin').content.querySelector('button');
var fragment = document.createDocumentFragment();

var renderPins = function (ads) {
  for (var i = 0; i < ads.length; i++) {
    var element = pinsTemplate.cloneNode(true);
    element.children[0].src = ads[i].author.avatar;
    element.children[0].alt = ads[i].author.offer.title;
    element.style.top = ads[i].author.location.y + 'px';
    element.style.left = ads[i].author.location.x + '%';
    fragment.appendChild(element);
  };
  return fragment;
};

mapPins.appendChild(renderPins(adsArray));


var cardFragment = document.createDocumentFragment();
var mapFilterContainer = document.querySelector('.map__filters-container');




var renderCardAd = function () {

    var photos = function (arr) {
      var fragment = document.createDocumentFragment();

      for (var i = 0; i < arr.length; i++) {

      }
      };

      var cardTemplate = document.querySelector('#card').content.querySelector('.map__card').cloneNode(true);
      cardTemplate.querySelector('.popup__title').textContent = adsArray[1].author.offer.title;
      cardTemplate.querySelector('.popup__text--address').textContent = adsArray[1].author.offer.address;
      cardTemplate.querySelector('.popup__text--price').textContent = adsArray[1].author.offer.price + ' р/ночь';
      cardTemplate.querySelector('.popup__type').textContent = adsArray[1].author.offer.price + ' р/ночь';
      cardTemplate.querySelector('.popup__text--capacity').textContent = adsArray[1].author.offer.rooms + ' комнаты для ' + adsArray[1].author.offer.guests + ' гостей';
      cardTemplate.querySelector('.popup__text--time').textContent = 'Заезд после ' + adsArray[1].author.offer.checkin + ', выезд до ' + adsArray[1].author.offer.checkout;
      //cardTemplate.querySelector('.popup__features').textContent = adsArray[1].author.offer.features;
      cardTemplate.querySelector('.popup__description').textContent = adsArray[1].author.offer.description;
      cardTemplate.querySelector('.popup__photos').children[0].src = adsArray[1].author.offer.photos[0];
      cardTemplate.querySelector('.popup__avatar').src = adsArray[1].author.avatar;



      mapFilterContainer.before(cardTemplate);

    };

    renderCardAd();

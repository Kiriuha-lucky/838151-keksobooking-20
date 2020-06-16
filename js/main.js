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
          "checkin": '12: 00',
          "checkout": '14: 00',
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
          ]
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

var renderPins = function(ads){
  for (var i = 0; i < ads.length; i++) {
    var element = pinsTemplate.cloneNode(true);
    element.children[0].src = ads[i].author.avatar;
    element.children[0].alt = ads[i].author.offer.title;
    element.style.top = ads[i].author.location.y - element.width / 2 + 'px';
    element.style.left = ads[i].author.location.x + '%';
    console.log(ads[i].author.location.y);
    console.log(element);
    console.log(element.offsetTop);
    console.log(element.clientWidth);

    fragment.appendChild(element);
  };
  return fragment;
};






mapPins.appendChild(renderPins(adsArray));

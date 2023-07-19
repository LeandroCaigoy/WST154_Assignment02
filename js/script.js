let mc1 = {};

let mc2 = {
    imgUrl: './images/z900.jpg',
    make: 'Kawasaki',
    model: 'Z900',
    year: '2022',
    color: 'Black & Red',
    difference: ['Straight 4 engine & quick acceleration.']
}

let mc3 = {
    imgUrl: './images/hypermotard.jpg',
    make: 'Ducati',
    model: 'Hypermotard 950',
    year: '2022',
    color: 'Black & Orange',
    difference: ['V-Twin Engine & very EXPENSIVE & also expensive to maintain.']
}

mc1.imgUrl = 'images/iron.jpg';
mc1.make = 'Harley Davidson';
mc1.model = 'Iron 883';
mc1.year = '2022';
mc1.color = 'Black';
mc1.difference = ['V-Twin Engine & easy to maintain.']



let mc1ImgUrl = document.querySelector('#mc1 .imgUrl');
let mc1Make = document.querySelector('#mc1 .make');
let mc1Model = document.querySelector('#mc1 .model');
let mc1Year = document.querySelector('#mc1 .year');
let mc1Color = document.querySelector('#mc1 .color');
let mc1difference = document.querySelector('#mc1 .difference');


mc1ImgUrl.querySelector('img').setAttribute('src', mc1.imgUrl);
mc1ImgUrl.querySelector('img').setAttribute('style', 'width:200px');

mc1Make.innerHTML= mc1.make;
mc1Model.innerHTML= mc1.model;
mc1Year.innerHTML= mc1.year;
mc1Color.innerHTML= mc1.color;
mc1difference.innerHTML= mc1.difference;

let mc2ImgUrl = document.querySelector('#mc2 .imgUrl');
let mc2Make = document.querySelector('#mc2 .make');
let mc2Model = document.querySelector('#mc2 .model');
let mc2Year = document.querySelector('#mc2 .year');
let mc2Color = document.querySelector('#mc2 .color');
let mc2difference = document.querySelector('#mc2 .difference');


mc2ImgUrl.querySelector('img').setAttribute('src', mc2.imgUrl);
mc2ImgUrl.querySelector('img').setAttribute('style', 'width:200px');

mc2Make.innerHTML= mc2.make;
mc2Model.innerHTML= mc2.model;
mc2Year.innerHTML= mc2.year;
mc2Color.innerHTML= mc2.color;
mc2difference.innerHTML= mc2.difference;

let mc3ImgUrl = document.querySelector('#mc3 .imgUrl');
let mc3Make = document.querySelector('#mc3 .make');
let mc3Model = document.querySelector('#mc3 .model');
let mc3Year = document.querySelector('#mc3 .year');
let mc3Color = document.querySelector('#mc3 .color');
let mc3difference = document.querySelector('#mc3 .difference');


mc3ImgUrl.querySelector('img').setAttribute('src', mc3.imgUrl);
mc3ImgUrl.querySelector('img').setAttribute('style', 'width:200px');

mc3Make.innerHTML= mc3.make;
mc3Model.innerHTML= mc3.model;
mc3Year.innerHTML= mc3.year;
mc3Color.innerHTML= mc3.color;
mc3difference.innerHTML= mc3.difference;

let table = document.querySelector('table');
table.style.borderCollapse = 'collapse';
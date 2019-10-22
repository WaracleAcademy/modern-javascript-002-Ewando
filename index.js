import {render } from './renderer.js';
import * as data from './data.json';

const things = data.results;

function getThingTemplate(thing){
  return '<li class="list-item">Manufacturer: ${thing.manufacturer}</li><li class="list-item">Price: ${thing.price}</li>';
}

let content ='<ul>';

for(let i=0; i < things.length; i++){
  content += getThingTemplate(things[i])
}

content += '</ul>';

render (content);

const allLists = document.querySelectorAll('.list-item')

allLists.forEach(function (item){
  item.addEventListener('click', function(event){

  });
});

things.find(function(item) {

});

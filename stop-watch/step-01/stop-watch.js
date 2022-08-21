console.log('stop watch');

const stopWatchView = document.querySelector('#stop-watch-view');
console.log(stopWatchView);

const pTag = document.querySelector('p');
console.log(pTag);


const myClass = document.querySelector('.my-class');
console.log(myClass);

const allParagraps = document.querySelectorAll('p');
console.log(allParagraps);

console.log('p1', allParagraps[0]);
console.log('p2', allParagraps[1]);

const allListItems = document.querySelectorAll('.list-item');
console.log(allListItems);

let counter = 1;
allListItems.forEach(function (listItem) {
  console.log('list item', listItem);
  listItem.innerHTML=counter++;
  
  
});


const arr = [1,2,3,4,5];
//run for each element in the array
arr.forEach(function(value){
    console.log(value);
})
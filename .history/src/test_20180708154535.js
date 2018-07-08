var arr1 = [{ id: '124', name: 'qqq' },
{ id: '589', name: 'www' },
{ id: '45', name: 'eee' },
{ id: '567', name: 'rrr' }]

var arr2 = { id: '124', name: 'ttt' }

var newArray = arr1.map(obj => arr2.find(arr2.id === obj.id) || obj);

console.log(newArray)
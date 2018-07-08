var arr1 = [{ id: '124', name: 'qqq' },
{ id: '589', name: 'www' },
{ id: '45', name: 'eee' },
{ id: '567', name: 'rrr' }]

var arr2 = [{ id: '124', name: 'ttt' },
{ id: '45', name: 'yyy' }]


var arr1 = [{ id: '124', name: 'ttt' },
{ id: '589', name: 'em' },
{ id: '45', name: 'yyy' },
{ id: '567', name: 'eme' }]

var newArray = arr1.map(obj => arr2.find(o => o.id === obj.id) || obj);

console.log(newArray)
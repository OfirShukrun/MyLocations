var arr1 = [{ id: '124', name: 'qqq' },
{ id: '589', name: 'www' },
{ id: '45', name: 'eee' },
{ id: '567', name: 'rrr' }]

var arr2 = [{ id: '124', name: 'tt' }]

var newArray = arr1.map(obj => arr2.find(o => o.id === obj.id) || obj);

locations.map(location => location.id === newLocation.id ? newLocation : location)

console.log(newArray)
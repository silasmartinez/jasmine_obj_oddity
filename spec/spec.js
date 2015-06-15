code = require('../warmup.js')

var dogs = [
  ["German Shepherd", "90 lbs.", "Work"],
  ["Pointer", "40 lbs.", "Hunting"],
  ["Corgi", "30 lbs.", "Awesomeness"]
];

describe("#createDog", function () {
  beforeEach(function () {
    dogObj = code.createDog(dogs)
  });
  it("test stringify:", function () {
    expect(JSON.stringify(dogObj.Corgi)).toEqual( JSON.stringify({ size: '30 lbs.', 'bred for': 'Awesomeness' }) )
    expect(JSON.stringify(dogObj)).toEqual(JSON.stringify({ 'German Shepherd': { size: '90 lbs.', 'bred for': 'Work' },
      Pointer: { size: '40 lbs.', 'bred for': 'Hunting' },
      Corgi: { size: '30 lbs.', 'bred for': 'Awesomeness' } }))
  });
  it("test obj:", function () {
    expect(dogObj.Corgi).toEqual( { size: '30 lbs.', 'bred for': 'Awesomeness' } )
    expect(dogObj).toEqual({ 'German Shepherd': { size: '90 lbs.', 'bred for': 'Work' },
      Pointer: { size: '40 lbs.', 'bred for': 'Hunting' },
      Corgi: { size: '30 lbs.', 'bred for': 'Awesomeness' } })
  });
  it("test single property:", function () {
    expect(dogObj.Pointer.size).toEqual('40 lbs.')
    expect(dogObj['German Shepherd']['bred for']).toEqual('Work')
  });
});

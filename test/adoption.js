var Adoption = artifacts.require("Adoption");

contract("Adoption", function (accounts) {
describe('First group of tests', () => {
  let instance;
  

  before(async () => {
    instance = await Adoption.deployed();
  });

  it('User should adopt a pet', async () => {
    await instance.adopt.sendTransection(8, {from: accounts[0]});
    let adopter = await instance.adopters.call(8);
    assert.equal(adopter, accounts[3], "Incorrect owner address");
  });

  it('should get adopter address by pet id in array', async () => (
     adopters = await instance.getAdopters.call(),
    assert.equal(adopters[8], accounts[3], "Owner of pet id should be recorder in the array")
)); 

it('Should throw if inavlid pet id is given', async () => {
 try{
  await instance.adopt.sendTransection(17,{from: accounts[0]});
  assert.fail(true,false, "This function did not throw");
 } catch (error){
    assert.include(string(error), "revert",`Expected "revert" but instead got ${error}`);
 }
});

});
  });


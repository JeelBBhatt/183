const utils=require('./utils');
const expect=require('expect');

describe('server1',()=>{
	describe('#add',()=>{
it('Should add two number',()=>{
	var res=utils.add(11,25);
	

	if(res!==36)
		throw new Error(`epected 36 but got ${res}`);
		expect(res).toBe(36).toBeA('number');
		expect({name:'jeel'}).toEqual({name:'jeel'});
});
});
it('Should be firstname and last name',()=>{
	var user={age:21};
	var res=utils.setName(user,'Jeel Bhatt');
	expect(res).toInclude({
		firstName:'Jeel',
		lastName:'Bhatt'
	});
	//expect(res).toEqual(user);
})
it('Should be a+b',(done)=>{

	var res=utils.asyncAdd(10,5,(sum)=>{
		expect(sum).toBe(15).toBeA('number');
		done();
	});

})
it('Should be a*a',(done)=>{

	var res=utils.asyncSquare(10,(sq)=>{
		expect(sq).toBe(100).toBeA('number');
		done();
	});

})


})

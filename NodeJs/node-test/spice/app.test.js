const expect=require('expect');
const rewire=require('rewire');

var app=rewire('./app');
describe('#Spies',()=>{

	var db={
		saveUser : expect.createSpy()
	};
	app.__set__('db',db);
	it('Should be ....',()=>{

		var spy=expect.createSpy();
		spy('Jeel');
		expect(spy).toHaveBeenCalledWith('Jeel');

	})
	it('should call saveUser with user object', () => {
		var email = 'andrew@example.com';
		var password = '123abc';

		app.handleSignup(email, password);
		expect(db.saveUser).toHaveBeenCalledWith({email, password});
	});
})
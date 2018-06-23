const request=require('supertest');
const app=require('./server').app;

describe('server0',()=>{
	describe('GET /',()=>{
it('Should be something....s',(done)=>{
	request(app)
	.get('/')
	.expect(404)
	.expect(()=>{(res)=>{
		expect(res.body).toInclude({error: 'Page not found'})
	}})
	.end(done);

})
});
	describe('USERS /',()=>{
it('Should be exists.....',(done)=>{
	request(app)
	.get('/you')
	.expect(200)
	.expect(()=>{(res)=>{
		expect(res.body).toInclude({
			name:'jeel',age:21
		})
	}})
	.end(done);
});
})
});
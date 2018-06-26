const {ObjectID}=require('mongodb');
const expect=require('expect');
const request=require('supertest');
const {app}=require('./../server');
const {Todo}=require('./../models/todo');	

var todos=[{
	_id:new ObjectID(),
	text: 'First test todos'
},{
	_id:new ObjectID(),
	text: 'Second test todos'

}]
beforeEach((done)=>{
	Todo.remove({}).then(()=>{
		Todo.insertMany(todos);
	}).then(()=>done())
})
describe('Post/todo',()=>{

it('Should create a new todo',(done)=>{
var text="hello";
	request(app)
	.post('/todos')
	.send({text})
	.expect(200)
	.expect((res)=>{
		expect(res.body.text).toBe(text);
	})
	.end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
});
  it('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
  });
});

describe('Get/todo',()=>{

 it('should  get todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res)=>{
      	console.log(res.body);
      	expect(res.body.todo.length).toBe(2);
      })
      .end(done);
  });

});
describe('Get/todo BY ID',()=>{

 it('should  RETURN  Todos', (done) => {
    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res)=>{
      	expect(res.body.todo.text).toBe(todos[0].text);
      })
      .end(done);
  });
 it('should  RETURN 404 if Todos not found', (done) => {
 	var id=new ObjectID().toHexString();
    request(app)
      .get(`/todos/${id}`)
      .expect(404)
      .end(done);
  });
  it('should  RETURN 404 if non object id', (done) => {
     request(app)
       .get(`/todos/12485gfg`)
       .expect(404)
       .end(done);
  });
});


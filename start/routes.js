'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('', 'UserController.createUser').validator('CreateUser')
  Route.get('answers', 'UserController.getAnswers').middleware('AdminAuth')
}).prefix('api/users')

Route.group(() => {
  Route.post('', 'AnswerController.createAnswer').validator('Answer')
  Route.get('', 'AnswerController.getAll').middleware('AdminAuth')
}).prefix('api/answers')

Route.group(() => {
  Route.get('', 'QuestionController.getQuestions')
  Route.post('', 'QuestionController.createQuestion')
    .validator('Question')
    .middleware(['AdminAuth'])
  Route.get('answers', 'QuestionController.getAnswers').middleware('AdminAuth')
  Route.get(':id/answers', 'QuestionController.getAnswersOfQuestion').middleware('AdminAuth')
}).prefix('api/questions')

Route.group(() => {
  Route.post('', 'AdminController.create').validator('Admin')
  Route.post('login', 'AdminController.login').validator('Login')
}).prefix('api/admin')

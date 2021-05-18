import { NextFunction, Request, Response } from 'express';
import { controller, get } from './decorators';

@controller('/auth')
export class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
    <form method="POST">
    <div>
    <label>Email</label>
    <input name="email" value="hi@hi.com"/>
    </div>
    <div>
    <label>Password</label>
    <input name="password" type="password" value="password"/>
    </div>
    <button>Submit</button>
    </form>
    `);
  }
}

import { Controller, Get } from '@nestjs/common';

@Controller('todo') // このコントローラーのルートは /todo になる
export class TodoController {

  @Get("list") //HTTPメソッドがGETで、パスが /todo/list になる
  getList() {
    return [
      { // この配列の要素はJSONオブジェクトになる
        //この内容がresponse bodyになる
        title: "牛乳を買いに行く",
        due_on: "2022-12-24",
        done: false
      }
    ]
  }
}
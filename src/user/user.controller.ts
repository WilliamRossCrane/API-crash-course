import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';

// @Get('all')     // GET /user/all
// @Get('all')     // GET /user/:id - dynamic segment
// @Post()         // POST /user
// @Put(':id')     // PUT /user/:id
// @Delete(':id')  // DELETE /user/:id

@Controller('user')
export class UserController {
  @Get()
  getUsers(@Query('name') name: string) {
    // ...
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    // ...
  }

  @Post()
  createUser(@Body() body: any) {
    return {
      message: 'User created successfully',
    };
  }
}

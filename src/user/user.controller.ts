import { Controller, Get, Post, Put, Body, Query, Param } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// @Get()          // GET /user
// @Get(':id')     // GET /user/:id
// @Post()         // POST /user
// @Put(':id')     // PUT /user/:id
// @Delete(':id')  // DELETE /user/:id

@Controller('user')
export class UserController {
  @Get()
  getUsers(@Query('name') name: string) {
    return {
      name,
    };
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return {
      id,
    };
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return {
      data: createUserDto,
      message: 'User created successfully',
    };
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return {
      data: {
        id,
        ...updateUserDto,
      },
      message: 'User updated successfully',
    };
  }
}

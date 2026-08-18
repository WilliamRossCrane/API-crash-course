# NestJS Crash Course Summary

This project follows the NestJS crash course and explores the core concepts used to build scalable and maintainable backend applications. The focus was on understanding how NestJS structures an application through dependency injection, modules and a clear separation of concerns.

## Topics Covered

- **Controllers** – Handle incoming HTTP requests and return responses.
- **Services** – Contain the application's business logic and are injected into controllers.
- **Modules** – Organise related controllers and services into reusable features.
- **Dependency Injection (DI)** – Allows NestJS to automatically create and inject dependencies, reducing coupling between classes.
- **CRUD Operations** – Implemented Create, Read, Update and Delete endpoints for a REST API.
- **DTOs (Data Transfer Objects)** – Define the expected shape of incoming request data.
- **Validation** – Used `class-validator` decorators to ensure requests contain valid data before reaching the service layer.
- **Middleware** – Executes before a request reaches a controller, commonly used for logging, authentication and request processing.
- **Guards** – Determine whether a request is authorised to access a route, making them ideal for authentication and role-based access control.
- **Interceptors** – Wrap requests and responses to transform data, log execution times or handle cross-cutting concerns.
- **Exception Filters** – Catch and format errors to provide consistent API responses.
- **Custom Providers** – Demonstrated how services such as a logger can be registered and injected throughout the application.
- **Response Transformation** – Used interceptors to standardise API responses into a consistent format.
- **Routing & Parameter Decorators** – Used decorators such as `@Get()`, `@Post()`, `@Put()`, `@Delete()`, `@Param()`, `@Body()` and `@Query()` to build RESTful endpoints.

## Key Takeaways

This crash course reinforced the importance of NestJS's layered architecture. Controllers remain lightweight by handling HTTP requests, services contain the application logic, and dependency injection keeps components loosely coupled and easy to maintain. Middleware, guards, interceptors and exception filters each have distinct responsibilities, allowing common functionality to be reused across the application while keeping business logic clean and organised.

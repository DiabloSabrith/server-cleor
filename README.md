# Server Cleor

**Server Cleor** is the backend service for the Cleor application, implementing business logic, user authentication, database operations, and integration with external services. The project is built as a scalable REST API for the client application.

## Features
- User authentication and authorization
- Receiving and storing data in the database
- Cookie handling with **cookie-parser**
- Integration with external services
- REST API for the client application
- Validation of incoming data

## Technologies
- **NestJS** (`@nestjs/core`, `@nestjs/jwt`, `@nestjs/mapped-types`, `@nestjs/passport`)
- **TypeScript**
- **Prisma**
- **PostgreSQL**
- **Cookie-parser**
- REST API

## Installation and Running

```bash
npm install
````
## Development
```bash
npm run start
npm run start:dev
```
## Production
```bash
npm run start:prod
```
## Testing

### Unit tests
```bash
npm run test
```
### E2E tests
```bash
npm run test:e2e
```

### Test coverage
```bash
npm run test:cov
```

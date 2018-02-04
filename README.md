# Shortcuts

Project created for 2017 edition of *Get Noticed!* (Daj się poznać) contest. Aim of the application is to optimize car travel times in the city. 

## Technologies, Tools, Libraries

- Backend
    - Grails 3.2.7
        - Spock
        - CodeNarc
        - Joda Time
        - Database Migration Plugin
        - Build Test Data Plugin
    - Chakram
        - js-joda
        - mysql
    - MySQL 5.7.17
- Frontend
    - Angular 5.2.0
        - Angular Material
        - js-joda

## Development

### Project structure

Project is separated into three main directories:

- backend - Contains Grails project source code
- frontend - Contains Angular project source code
- api-tests - Contains source code for Chakram REST API tests

### Environment setup and application startup

1. Install MySQL 5.7.17
2. Install Node.js (6.11.0) with npm (3.10.10) 
3. Clone the repository
    ```
    git clone https://github.com/piotrgajow/shortcuts-web.git
    ```
4. Setup database connection in `backend/grails-app/conf/application.yml` - properties `dataSource.username` `dataSource.password` and `dataSource.url`
5. Start MySQL database
6. Start application backend
    ```
    cd backend
    ./grailsw run-app
    ```
7. Start application frontend
    ```
    cd frontend
    npm install
    npm start
    ```

### Testing

- backend unit tests + static code analysis
    ```
    cd backend
    ./gradlew check
    ```
- backend REST API tests
    ```
    cd api-tests
    npm install
    npm test
    ```
- frontend unit tests + static code analysis
    ```
    cd frontend
    npm install
    npm run lint
    npm test
    ```
    
## Issues and feature requests

Please report any issues and feature requests on the [issue page of this repository](https://github.com/piotrgajow/shortcuts-web/issues)

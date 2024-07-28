In the project directory, you can run the following scripts:

npm run test
This command is a placeholder and will display an error message indicating 
that no tests are specified. Replace this with your testing framework's command once 
tests are added to the project.

npm run watch
This command uses nodemon to monitor changes in files matching the pattern ./webpack.*.*. 
When a change is detected, it automatically runs the npm start script. This is useful for 
development as it allows for continuous building without manually restarting the process.

npm start
To getting the proj up and running run this command. This command runs webpack in development mode, which is useful during the development phase. 
It builds the project with settings optimized for a development environment.

npm run build
This command runs webpack in production mode, which builds the project with optimizations for 
performance and size, making it ready for deployment.
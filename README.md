<<<<<<< Updated upstream
# quiz-app
A quiz app to test and strengthen your coding knowledge. 
....
=======
# Manchester Codes Community App

## Authors
### Daytime Monks: 
[Andy Jackson](https://github.com/andyja)  
[Tom Mills](https://github.com/tdot124)  
[Michael Shields](https://github.com/mike-shields-dev)

## Introduction

For the final assignment of the [Manchester Code Software Engineering Bootcamp](https://www.manchestercodes.com/courses/bootcamp?gclid=CjwKCAjwzY2bBhB6EiwAPpUpZtKmQAw5sFDAxo4rOrP8J8R874Nm5ivEdzg_04ADAzxy12jAaoqhkhoC2xgQAvD_BwE), we set out to create an application that future and past alumni could use to practice and strengthen their knowledge of the Syllabus content through a selection of interactive games/quizzes.  

## MVP Criteria

Our MVP allows users to select a set of multiple choice questions from several categories or areas of Web Development principles. Upon completion of a round of questions, the user is prevented with a summary of their performance. 

Users can access the applications main features by creating a session using either GitHub Auth or by signing in as a Guest user. 

## Roadmap

Future features for the application include: 
* Varying question formats, such as: 
    - Fill in the blank/s. 
    - Correct/spot the typo/syntax error/s.
    - Put the lines of code in the correct order.
    - Select the correct output/result for a given function/program.
    - Matching/Pairing of related items.
* A more complete/robust user registration/Auth system, which would open the door to further features such as:
    - Storage of user statistics
    - Leaderboard/s to add a competitive element to the platform
    - Peer to peer challenges
    - Personalised user dashboard displaying analytics of users statistics/performance
    - Submission and attribution of questions by users and administrators

## Development Setup

- Clone this repository to your local machine  
    - ### HTTPS 
     ```bash
    git clone https://github.com/mcrcodes-daytimemonks/quiz-app.git
    ```
    - ### SSH
    ```bash
    git clone git@github.com:mcrcodes-daytimemonks/quiz-app.git
    ```
- Open the cloned repository in the IDE of your choice (we reccomend [VSCode](https://code.visualstudio.com/)) and install the dependencies defined in `package.json` & `package-lock.json`.
    ```bash
    npm install
    ```
- Start up the development server
    ```bash
    npm run dev
    ```
- Launch your preferred browser and navigate to [http://localhost:3000](http://localhost:3000)
>>>>>>> Stashed changes

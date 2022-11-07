# Manchester Codes Community App

## Authors
### Daytime Monks: 
[Andy Jackson](https://github.com/andyja)  
[Tom Mills](https://github.com/tdot124)  
[Michael Shields](https://github.com/mike-shields-dev)

## Introduction

For the final assignment of the [Manchester Codes Software Engineering Bootcamp](https://www.manchestercodes.com/courses/bootcamp?gclid=CjwKCAjwzY2bBhB6EiwAPpUpZtKmQAw5sFDAxo4rOrP8J8R874Nm5ivEdzg_04ADAzxy12jAaoqhkhoC2xgQAvD_BwE), we set out to create an application that future and past alumni could use to practice and strengthen their knowledge of the syllabus content through a selection of interactive games/quizzes.  

## MVP Criteria

Our MVP allows users to select a set of multiple choice questions from several categories or areas of Web Development principles. Upon completion of a round of questions, the user is presented with a summary of their performance. 

Users can access the application's main features by creating a session using either GitHub Auth or by signing in as a Guest user. 

## Roadmap

Future features for the application include: 
* Varying question formats, such as: 
    - Fill in the blank/s. 
    - Correct/spot the typo/syntax error/s.
    - Put the lines of code in the correct order.
    - Select the correct output/result for a given function/program.
    - Matching/Pairing of related items.
  
* A more complete/robust user registration/Auth system, which would open the door to further features such as:
    - Database storage of user data/statistics
    - Leaderboard/s to add a competitive element to the platform
    - Peer to peer challenges and interactions
    - Personalised user dashboard displaying analytics of personal statistics/performance
    - Attribution of contributions to the platform i.e. user submitted questions.

## Development Setup

### NextJS

*"[NextJS](https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs) is a flexible [React](https://reactjs.org/) framework that gives you building blocks to create fast web applications."* <sub><sup><i> - Vercel </i></sup></sub>


- Clone this repository to your local machine  
    ###### HTTPS 
     ```bash
    git clone https://github.com/mcrcodes-daytimemonks/quiz-app.git
    ```
    ###### SSH
    ```bash
    git clone git@github.com:mcrcodes-daytimemonks/quiz-app.git
    ```
- Open the cloned repository in the IDE of your choice (we recommend [VSCode](https://code.visualstudio.com/)) and install the dependencies defined in `package.json` & `package-lock.json`
  
    ```bash
    npm install
    ```
- Start up the development server
  
    ```bash
    npm run dev
    ```
- Launch your preferred browser and navigate to [http://localhost:3000](http://localhost:3000)

### Prisma

[Prisma](https://www.prisma.io/) is an open source next-generation [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping). You can read more about how Prisma was configured for this project [here](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb-typescript-mongodb).

The Prisma configuration/setup has already been carried out, all you should need to get going, is a `.env` file in the root of the `application` of this project that contains a `DATABASE_URL` environment variable with an appropriate [MongoDB connection string](https://www.mongodb.com/docs/manual/reference/connection-string/). 

This environment variable can either point to the URL of your own database instance, or you can contact a [core team member](#authors) of this project to discuss acquiring the URL of the cloud hosted MongoDB database.

#### Handling Schema Changes

There may arise a situation where you want to make amendments to the schema of the documents in your database collections. When doing so, you should also update the schema defined in the `schema.prisma` file, to ensure that the [prisma client](https://www.prisma.io/docs/concepts/components/prisma-client) is still able to carry out database transactions. Prisma uses a process called [introspection](https://www.prisma.io/docs/concepts/components/introspection) to infer the schema from the documents in your database collections. 

![](https://res.cloudinary.com/prismaio/image/upload/v1628761155/docs/f7itiYw.png) 

<sub><sup><i>Source - Prisma Documentation</i></sup></sub>

- Invoke the introspection process
  
    ```bash
    npx prisma db pull
    ```
- Once the schema has been updated, generate a new prisma client based on the updated schema
  
    ```bash
    npx prisma generate
    ```

After carrying out the above steps, your prisma client should now be able to carry out valid database transactions. 

*Due to the tight deadline for submission of the MVP. The project currently only utilizes a single cloud hosted MongoDB database (for both production and development). The database has one collection containing our questions data set.*

*We realise this is not a long term solution. Should the project be developed further, the plan is to expand the development workflow to include a second (local) database instance as part of the development and testing workflow, thus protecting the integrity of the production database.*

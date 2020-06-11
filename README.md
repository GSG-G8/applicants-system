# Applicants System 

## Application Link :link: 

[check it out from here](https://ca-applicants-system.herokuapp.com/)


## Team :busts_in_silhouette:

### Team Lead
  - Asmaa Thabet  

### Team members 
- Hassan Al-Najjar
- Ahmed Salah 
- Mohammed Flaifel 
- Ali Dahdouh


## Application description :information_source: 

An application to facilitate code academy application process for applicants and help them to complete their applications easily and on time, also help code academy team to track , filter and create applications. 
![](https://i.imgur.com/Q8X3qaV.png)

## Application Setup :mag: 
- clone this repo 
`git clone https://github.com/GSG-G8/applicants-system.git`

- run `npm i  && cd client npm i && npm run build `  to install all dependencies & dev-dependencies for the app and also build react on the server.

- add config.env file that contains SECRET_KEY as Environmental Variable and Mongodb Url for your database. 


#### Environment Variables
Environment variables are one of the ways that we use to keep our product safe. If you want to access our app locally you will need to add your own.

First create a **config.env** file and add the following variables:

```
SECRET_KEY
```

#### Database Setup

- Create MongoDB database account from [here](https://account.mongodb.com/account/register).
- Now you can set the **database url** in your ***config.env*** as follows (setting the values in square brackets to the values you defined in MongoDB website url above):


`mongodb+srv://[username:password]@host:port/[database]?options...`

- Add a these two variables in config.env and added database url that you created as shown above :

```
DEV_URI = mongodb url xxxxxxxx       // database for development
PRODUCT_URI = mongodb url xxxxxxxx // database for production
```

- Now in the Terminal run this command to build the fake data on your database on both development and production databases 

```
npm run build:database:dev
npm run build:database:pro
```

#### Run the Project

- In terminal access to project folder on your machine write: `npm start` to start the app in the browser or you can work with development, write `npm run dev`.


## Main Problems :heavy_exclamation_mark: 

1- Incorrect data that entered by applicants like problems in email, full name, GitHub handle, codewars link, free codecamp link, and others.   

2- There are many links, pages and ambiguous steps in Code Academy applicants system.

3- Misunderstanding about how dealing with some websites for the first time like GitHub, codewars, freecodecamp.

4- Application steps tracking especially tasks that have specific steps and numbers of points like free codecamp and codewars.

5- Applicants can't update and change their data during Application duration.

6- The Applicant does not follow up with the modifications and announcements of the code academy team.

7- Applicants have a problem in solving technical problems.

8- Admin has problems in tracking a big Number of applications. 



## Our Solutions :bulb: 

1- make validation for client-side and the server-side to validate input fields and links patterns.

2- Add all steps in one place and provide all required information and notifications to complete the application easily.

3- Display Application progress and check completed steps.

4- Add an explanation or video of how to use each website separately.


5- Add the applicant's profile page that displays the completed steps and topics. 


6- Enable applicants to modify their information before  submitting. 


7- make admin's dashboard that shows all applications and checks submitted ones, also he can filter applications according to its submitted date and other data.


## User Journey :train2: 

#### As An Applicant
The Applicant will open the app, he will see a landing page that displays some explanation about code academy program and it's application, the applicant can apply for the application by pressing on apply button, then he will go to login\signup page, the applicant should be registered for the first time by filling signup form then he can login easily by using his email and password, After registering in the website, the applicant will be redirected to the application page that contains navigation bar displays his username and icon that displays a menu to show his profile and logout from the website, the applicant can also starting his application by filling his information according to tabs displayed in the Drawer at the left side of the main page, he should fill availability tab successfully to be redirected to the next tabs until finishing his application and submit it.


#### As An Admin 
The Admin sign in through sign-in page and he will be redirected to the dashboard, he will see a Tabs  that contain Home, opened applications, submitted applications, completed applications, accepted application and create new application tab, the admin can see general statistics in the home page that should display the total numbers of applications and its status, also he can see all opened applications and filter them, he can also see all submitted application and make check for every one of them to be shown as accpeted application, when the admin check any submitted,completed and accepted application he can see all application information, the admin can accept the application by pressing on accept button to transfer completed applications to accepted Applications that will be ready for joining code academy, the admin also can create a new application for the next cohort or update the previous application, also he can add announcements to be displayed for applicants. 


## User Stories :bookmark_tabs: 


#### As an Applicant I can: 

- see information about the Code Academy and the requirement before sign-in application.
- sign up by my username, email, password and location.
- check if my email is valid after registration for the first time and if its already exsits it will show me a message for that. 
- login to my application by using my email and password. 
- see my application data, status, and progress on my profile page. 
- logout from my application and return anytime within application time to the last point that I haven't finished yet.
- edit my personal data during application duration.
- go in my application by filling my information.
- see all the steps and tasks that I supposed to do.
- ask for help If I get stuck in solving technical tasks by going to discord channel for applicants which I can get help from others.
- submit my application if I completed the application's steps.
- know if I am accpeted in code academy or not.
- see updates, deadlines, and announcements from the Code academy team.[stretch]
- get Notifications from the code academy team about the next steps after submitting my application.[stretch]

#### As an Admin I can : 

- see all applications and their status.
- see a statistics about all applications and their status: opened, closed and submitted.
- check submitted and completed applications and detect which of them were been called for interviews.  
- accept the applications either it was submitted or completed.
- filter applications by submitted date or application status or locations or others.
- Keep the data in tables and download them as an excel file. 
- edit cohots numbers for every new application. [stretch ]
- add, delete and edit projects, technical tasks and application steps that send for applicants.[stretch ] 

## The MVP :rainbow:

 - Web
 
![](https://i.imgur.com/coHnSvE.gif)

![](https://i.imgur.com/atYNeNT.gif)




- Mobile

![](https://i.imgur.com/0MXdmo2.gif)

 

 
## Application Deployment :sparkles:

we will use `Heroku` Platform to deploy our website.


## Database Schema :file_cabinet: 

![](https://i.imgur.com/HfQMKaB.png)


## Technologies :computer: 

### Frontend
- React JS
- React Hooks
- Material-UI
- Javascript
- HTML and CSS

### Backend
- Express JS

### Database
- MongoDB
- mongoose

## Stretch Goals :goal_net:

- Send notifications from admin to applicants.
- Add new cohorts,technical tasks and project from admin dashboard.
- Add a new application from  the admin dashboard and control its settings.
- Add a percentage progress bar in applicant profile page. 
- Add page for common asked questions.
- Add admin users  from dashbboard.


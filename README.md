# Applicants System 

## Application Link :link: 

[check it out from here](https://)

## Application description :information_source: 

An application to facilitate code academy application process for applicants and help them to complete their applications easily and on time, also help code academy team to track , filter and create applications.  


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

2- Add all steps in one place and provid all required information and notifications to complete the application easily.

3- Display Application progress and check completed steps.

4- Add an explanation or video of how to use each website separately.


5- Add the applicant's profile page that displays the completed steps and topics. 


6- Enable applicants to modify their information before  submitting. 

7- create an announcement tab to be displayed for the applicants.


8- make admin's dashboard that shows all applications and checks submitted ones, also he can filter applications according to its cohort and other data.



## User Journey :train2: 

#### As An Applicant
The Applicant will open the app, he will see a landing page that displays some explanation about code academy program and it's application, the applicant can apply for the application by pressing on apply button, then he will go to signin\signup page, the applicant should be registered for the first time by filling signup form and he will receive an email for verification his registration then in the next times he can log in easily by using his email and password, After registering in the website, the applicant will be redirected to the application page that contains navigation bar displays his username and icon that displays a menu to show his profile and logout from the website, the applicant can also starting his application by filling his information according to tabs displayed in the left side of the main page, he should fill availability tab successfully to be redirected to the next tabs until finishing his application and submit it.


#### As An Admin 
The Admin sign in through sign-in page and he will be redirected to the dashboard, he will see a left menu that contains Home, opened applications, submitted applications, completed applications and create new application tab, the admin can see general statistics in the home page that should display the total numbers of applications and its status, also he can see all opened applications and filter them by cohort number, he can also see all submitted application and make check for every one of them, when the admin check any submitted application he can see all application information, the admin can accept the application by pressing on complete button to transfer application to complete Applications that will be ready for interviews, the admin also can create a new application for the next cohort or update the previous application, also he can add announcements to be displayed for applicants. 


## User Stories :bookmark_tabs: 


#### As an Applicant I can: 

- see information about the Code Academy and the requirement before sign-in application.
- sign up by my username, email, and password.
- check if my email is valid after registration for the first time.
- login to my application by using my email and password. 
- see my application data, status, and progress on my profile page. 
- logout from my application and return anytime within application time.
- edit my personal account data.
- go in my application by filling my information.
- see all the steps and tasks that I supposed to do.
- ask for help If I get stuck in solving technical tasks by going to discord channel for applicants which I can get help from others.
- see updates, deadlines, and announcements from the Code academy team.
- submit my application if I completed the application's steps.
- get Notifications from the code academy team about the next steps after submitting my application. 

#### As an Admin I can : 

- see all applications and their status.
- check submitted applications and detect completed ones for interviews.  
- add announcements to be shown in code academy applications.
- filter applications by cohort numbers or application status.
- edit cohots numbers for every new application .
- add, delete and edit projects, technical tasks and application steps that send for applicants. 

## The MVP :rainbow:

 GIF Image
 
## Application Setup :mag: 
- clone this repo 
`git clone https://github.com/GSG-G8/applicants-system.git`

- run `npm i  && cd client npm i `  to install all dependencies & devdependancies for the app.
- In your terminal write: `cd .. && npm start` to start the app in the browser.

 
## Application Deployment

we will use `Heroku` Platform to deploy our website.

## Database Schema :file_cabinet: 
![finalDatabase](https://user-images.githubusercontent.com/29041512/77883751-700a9e80-726c-11ea-9c23-db51bd700025.png)


## Technologies :computer: 

### Frontend
- React JS
- Material-UI
- Javascript
- HTML and CSS

### Backend
- Express JS

### Database
- MongoDB
- mongoose


## Team :busts_in_silhouette:

### Team Lead
  - Asmaa Thabet  

### Team members 
- Hassan Al-Najjar
- Ahmed Salah 
- Mohammed Flaifel 
- Ali Dahdouh

# flatiron-project-phase-2

 A COMPANY APP FOR ADMINISTRATOR AND EMPLOYEE USE


App Summary Description:

       A. has Employee log in-
   
         If and after employee log in:
      it will open to : 1. the employee's profile page
                        2. the Time Card
                 where:  - an employee can time in and time out
                         -show his time in and time out info
                         -show total amount of time at work
                         -show the total amount of pay to be received for that week
                 
       B. has Admin log in-
         
         If and after admin log in:
      Admin may click open any of the page for:
       1. Showing all employee profile( where the admin can delete an employee) 
          Searching an employee to show his profile or information 
          Adding a new employee and his profile
       2. Updating the profile of employee

--------------------------------------------------------------------------


App Detailed Description: 
     

This app is intended for the use of both the administrator and employees of a company.

I. Employee

 The employee must click the Employee log in button, where he will be asked to enter his name and password.
  
  To log in as an employee, use the following:   
                        
                        name-  Ric      password-  kam123
           or           name-  Edna         password-  Eloise
          
           or any of the name and password shown in the db.json
                   or in data.js
 
 If login is successful, The following will appear:
   
   
   1. All the employee's information will be shown.
   2. A Punch Clock card where:
    
    a. The current date and time is shown.
    
    b. Time In-button where the employee should click to record his time of arrival.
    
    c. Time Out-button where the employee should click to record his time of departure.
    
    d. After clicking the time out button, the number of hours that he worked, and the 
    amount of salary that he should be paid will be shown 
    
    e.  To save all this information in the time card, he should click the save button.
   
   3. Below the Punch Clock is a Time Card which will show all his Time in and out information. 
   All of this will be recorded until the employee decided to click the Delete Time Card
    button, after which everything will be deleted.
    
   4. Also, after logging in and if he chooses, He can click open the punch clock and 
   the time card shown in the nav bar and use them.
  
   5.If login failed, It will not open and  the punch clock and time card could not be clicked.

II. Administrator 
 
 The Admin may click the Administrator log in button, or the All Employees button, or the 
 Employee Edit and he will be asked to log in with his(admin) name and password. 
 
 To try this, use the following:     
                       
                       name:  James     password:   Stephen
          or           name:  Vivien     password:   Gertrude
        
After logging in, He should be able to click open the:

A. Employee Page button
Clicking this button will show
1. The profiles of all the employees of the company.
2. In the Search Employee card, as he is typing the name of the employee, 
The employee card will show the employee he is searching for.
3. The employee card has a delete button, where he can remove from the 
employee cards the employee that is no longer with the company.
4. At the end is a New Employee form, where he can add a new employee and 
where he can input his profile. He should click the add employee button 
below to add the new employee to the database.

B. Edit Employee button-
Clicking this button will show,
1. An update Employee card where he must enter the ID number of the employee and click the update button,
2. If the ID number is correct, a form will appear where he can change one or more informations 
about the employee such as password, pay per hour, schedule etc., then he should 
click the update button to make the changes persist in the database.

 C.
 If login failed, He will not be able to open A and B.
  
  
III. To go back to the home page, click the home button.


--------------------------------------------------------------------------

Limitations of the App:
       
       This app is still a work in progress. Specifically the following major problems need to be addressed:

       1.  After timing in, and if the employee closes the app at this point, the time in information is not 
           yet saved, the employee must wait for the time to time out and then click the save button
            to save them in local storage. 
       
         Although the total time worked and total Pay for the week are
         adding up and showing in the punch clock info card, they are not adding up in the time card. 
         
         The pay per hour needed to calculate the pay for the week should be fetched from the database 
         and not just coming fron the data.js component.
         
         Also the time card information is just persisting in local storage and is not going to 
         the employee's information in the json database. 
           
         
       2. A better authentication system for the employee  and admin login
       is needed. The name and password should be fetched from the database and not from the data.js. 
          
          Log out features should be added.

       
       Any suggestions to solve these problems or for further improvement of this app are very much appreciated.

 -------------------------------------------------------------------------

      
Please click the link to see a walk-through video:

<iframe width="560" height="315" src="https://www.youtube.com/watch?v=r5PKeKqU0ss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     
------------------------------------------------------------------------

SCREENSHOTS

1. The app as it appears when reloaded:
![Alt text](<Screenshot (383).png>)

-----------------------------------------------------------------

2. After logging in as an Employee and clicking the Punch Clock:
![Alt text](<Screenshot (384).png>)

----------------------------------------------------------------------

3. After logging in as an Employee and clicking the Time Card:
![Alt text](<Screenshot (385).png>)

----------------------------------------------------------------------

4.  After logging in as Administrator and clicking All Employees:
![Alt text](<Screenshot (386).png>)

----------------------------------------------------------------------

5.  After logging in as Administrator and clicking Employee Edit:
![Alt text](<Screenshot (387).png>)

--------------------------------------------------------------------------

This app can be installed by copying the github URL and forking and cloning  this repository from my github account, or 
copy and paste the URL of the project repository, If not yet installed, Type in the terminal:npm install react-router-dom@5, 
then npm run server, then in another terminal: npm start.

--------------------------------------------------------------------------

Great appreciation to all the dedicated instructors and coaches of Flatiron School, without whom this project will not be possible.

-----------------------------------------------------------------------

MIT License

---------------------------------------------------------------------------
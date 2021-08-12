# RecCenter Booking Application

## Context

### What is the RecCenter Booking application?
The RecCenter Booking application a booking application tailored towards local recreational centers. Specifically, this
Booking application caters towards 2 users: **recreational centers employees** (i.e. administration) and the **patrons**
of the recreational center (i.e. users). It provides an easily accessible portal that allow the recreational center
administration to create and organize classes that their patrons can then sign up for.

This application can be extended in the future by implementing screening capabilities for recreational center classes.
Recreational centers will be able to use this screening feature to ensure that patrons attending their classes meet any
prerequisites (e.g. whether they're COVID-vaccinated, have a prerequisite course, are of a certain profession, etc) by
only allowing the patron to book if their profile meets certain criteria.

Beyond this, this application can be scaled to other use cases where companies require clients to book appointments
(e.g. health offices, events, etc.). This version of the COVID-Booking application will focus on screening patrons for
COVID-vaccination status, but this idea can be scaled to screen patrons for other prerequisites (e.g. veterans,
hospital-workers, teachers, etc.).

## Feature List

### Minimal Requirements:

- [x] Recreation centre booking functions:
    - [x] Create a class
        - [x] Name the class
        - [x] Set duration of class
        - [x] Set time and date of class
        - [x] Set maximum number of participants per class
        - [x] Set location (room) of class
        - [x] Add description (price, materials, etc.)
    - [x] Edit a class
    - [x] Delete a class
- [x] User functions:
    - [x] View classes
        - [x] See class info
        - [x] See availability
    - [ ] Book a class
        - [ ] See booking information
    - [ ] View all booking(s)
    - [ ] Cancel a booking

### Standard Requirements:

- [x] Create a calendar view
    - [x] Rec center's schedule
    - [ ] User's bookings
- [ ] Add color to show availability of classes
- [x] Highlight today's date
- [x] Create a login with passwords and usernames
    - [x] Log in
    - [ ] Log out
    - [ ] Forgot password
    - [x] Register/Create account
    - [ ] Edit account
    - [ ] Delete account

### Stretch Requirements:

- [ ] Screen users for status before allowing them to book a class
    - [ ] Create a user's information page
        - [x] Set a status
    - [x] Create booking slots that check the user's status
        - [x] Set an option for making the class a screening class

## Technology Used

### Unit 1: HTML, CSS, JS

- Used in combination with React to stylize the calendar and home page components

### Unit 2: React

- Create a calendar React component to display information in a user-friendly design
    - Store classes in a state to refresh the calendar on every update using React Hooks
    - Uses drawers and dialogs to access information cleanly
- Create a static Home page
        
### Unit 3: Node & Express

- Set up a back-end server for routing to different pages and to receive API calls
- Designed and implemented an API to handle information querying functions connected to the database
    - Combined with calendar React component, Rec center API calls allow the calendar to:
        - retrieve (GET) all classes and display information about the class
        - create (POST) a certain class
        - edit (PATCH) a certain class
        - cancel (DELETE) a certain class
    - Combined with calendar React component, User API calls allow the calendar to:
        - retrieve (GET) all classes and display information about the class
        - register (PATCH) a certain class
        
### Unit 4: NoSQL & MongoDB

- Stores persistent data using MongoDB
    - Stores all class information in a MongoDB collection
    - Stores all user profiles in a MongoDB collection
- Uses Mongoose to organize data by building and storing object models
    - Stores all class information in a MongoDB collection
    - Stores all user profiles in a MongoDB collection
- Uses Mongoose connect to the MongoDB database with hidden URL access for password protection
- Uses Mongoose with API calls to query MongoDB database and obtain stored information
    - Linked with the calendar React component, allows users and rec center administration to view class information
    - Allows rec center administration to create, edit, and delete classes

### Unit 5: Release Engineering

- Application deployed using Heroku
- Enabled automatic deployment of production branch

## Above and Beyond Functionality

### Calendar Component

The calendar React component, although simple in design, interweaves with many technologies in order to achieve a
seemingly effortless display of the classes, with an easy-to-use user interface. The calendar is the base of the
application and interacts with different API calls that access the database in order to display classes instantly on any
update. Using drawers and dialogs to neatly display class information, it provides clean user experience.

## Future Goals

### What are the next steps for the RecCenter Booking application?

Once the login and registration functions are debugged and complete, the next step for the RecCenter Booking application
will be to use those login IDs to finish the User functions. Then, implementation of the screening feature would come
next as originally intended. Once these base features are added, the natural next step would be to add robust testing
for edge cases must be done in order to ensure concurrency works appropriately.

## List of Contributions

### Jamie Goco

- Calendar React component: Implementation and design of both the rec-center and user calendar components.
- Rec-center and User API: Implementation of all API calls made by the calendar in order to retrieve, add, edit, and
delete information about classes, as well as back-end logic to achieve booking applications.
- Documentation of the project: Wrote and designed most written and picture documentation of the project.

### Terry Wong

- Login function: **insert contributions here**
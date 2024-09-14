# Startup
*Startup application for BYU CS 260, created by Alex Evans.* [Read development notes for the project](https://github.com/aaevans03/startup/blob/main/notes.md)

## Specification Deliverable

### Elevator Pitch
Have you ever lived in an apartment or dormitory building where everyone has to share the same laundry machines? Then you must know the drudgery of lugging your laundry down to the basement, only to find that all of the machines are already being used. With this new web application, I aim to provide a solution to this. As soon as users start a load of laundry, they can log in onto the website and select which laundry machines they are using, so other residents can easily view how busy the laundry room is. Users are able to set timers for their own loads, view load times for other machines, and join a waiting queue if the room is too busy.

### Design

![Design of my startup web application](startup_sketch.svg)

### Key Features
- User accounts system, where users input their building number, and room number
- Ability to enter in which laundry machines user is currently using, with a built-in timer system
- Live, realtime updates for laundry room use
- Ability to see which user is using which machine
- A notification system that alerts user when their laundry machines are done
- A waitlist queue for use during busy laundry room times
- An ability to view statistics of when the busiest times for the laundry room is

### Technologies

Here is a list of the technologies I will implement.

- **HTML** - Uses correct HTML structure on three pages: a login page, the laundry room interface page, and an about page. Hyperlinks between the pages.
- **CSS** - A simple, clean, easy-to-use design that can fit any device size.
- **JavaScript** - Account creation, login, laundry machine selection, timer setting, viewing machine progress, waitlist queue, analysis of laundry times from a database.
- **React** - Used to put the application and whole user interface onto a single page.
- **Web services**
    - Uploading user's laundry machine use
    - Retrieving laundry machine times
    - Randomly selected quote about laundry (from own database)
    - Randomly selected laundry GIF from GIPHY
    <!-- Ideally, the ability to link into BYU's own network for laundry rooms, but I may not have access to that, unfortunately. -->
    <!-- Also, the ability to prove you live in the building with your BYU login.-->
- **Authentication/Database** - The ability to create accounts and login. Stores login information, building number, and room number. Cannot use laundry machines, unless you live in the building.
- **WebSocket** - Live updates of laundry room use visible to all users

# Running the Project

If you want to run this project, you must begin with installing the modules.

This can be done by running the command "npm install" on the same folder as this file.

Once the system is finished, you can follow two routes:
- The development route. This requires running the command "npm start", which will run the app in development mode, reloading every time there's a change.
- The server route. This route requires a few more steps.
1. Run the command "npm run build". This will create a new folder, build, that contains the files needed to make the project run in server mode.
2. Run the command "serve -s build". This will start a local server that will offer the web application to the user.

# Solution
To complete this project, I have applied the following changes:
- App.js: 
  * The original version loaded the data only in the ''AllMeetupsPage'', when the data are required in all pages. Hence, the fetching function has been moved to the App page. I have also added a fetching for another JSON file that would contain an array of strings, representing the IDs of the favorite meetups.
  * I have added another variable that will store an user's favorite meetups. This will only store the IDs, reducing the load in the server and page.
  * Two ''useEffect'' triggers exist to load the original meetups and favorites values.
  * Navigation between pages uses ''BrowserRouter'', ''Routes'' and ''Route' from '''react-router-dom''', which grant more flexibility of use.  
- utils: I have eliminated ''constants.js'' (as it is unnecessary) and added ''scrollDirection.js'', which detects when the user is scrolling up and down the page.
- Pages:
  * AllMeetupsPage: I have added two functions to allow the modification of the favorites list.
  * Favorites: This page now shows the favorite meetups by filtering the meetups list with the favorites list. I have also added a function to remove favorites from the list.
  * NewMeetup: I have added a function that will create a new meetup object and add it to the corresponding list.
- Components:
  * MainNavigation: I have added the following features:
    - scrollDirection: pulling from the useScrollDirection utility, it detects when the user is scrolling, modifying the header so it will slide in or out of sight. This fulfills one of the requirements.
    - Link: this feature replaces the original <a> components, allowing navigation across the page while preserving state and fulfilling one of the requirements.
    - Favorites: this prop will show the number of favorite meetups on the header, independently of how many there are.
  * MeetupItem: I have added the following features:
    - props: I have added a variable (''favorites'') and two functions (''setFave'' and ''unsetFave''). The former will allow the page to know which items are already in the favorites list, thus changing which button will appear. The latter will be used to modify the favorites list, and fulfill one of the requirements.
  * FavoriteItem: This component is the same as the MeetupItem component, but the button at the bottom will always be the "Remove from favorites" button.
  * NewMeetupForm: I have added a state that will preserve all the values modified, and used the hook from the NewMeetup page to add the meetup creation function to the form's submitHandler. This fulfills one of the requirements.

# masterLayoutDemo

This demo deals with the issue to change the content of the app.component.html dynamically based on what page is displayed.

For Example, If I click Home page via routerLink, the jumbotron component should show "You are in Home"
If i click Settings page via routerLink, the jumbotron should show "You are in Settings". To be noted the jumbotron is located in 
app.component.html.

I can use the jumbotron inside each page with different messages, but the point is to change the html elements in the parent page from the child page.
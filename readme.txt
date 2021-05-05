Please fork this Stackblitz repo and send a link to your finished repo.

Tire fitment engine

The purpose of this challenge is to recreate the fitment engine that you see on tirebuyer.com.

Clicking the button on the home page fires an API call and returns a list of years (2018, 2017, 2016, etc.). This is already built in Angular and NGRX.

Task 1: Style this list of years as a grid, similar to tirebuyer.com.

Task 2:
Clicking on one of the years should append that value (e.g. "2015") to another API call, which will return a list of vehicle makes (Audi, Ford, Subaru, etc.). Display these in a similar grid format. This Stackblitz uses dummy APIs which don't need params. However, please show how you would pass the params to the API call anyway.

Repeat this process to also show vehicle model, trim, and options.

Task 3:
Add a few lifecycle hooks to your components and explain why you would or would not use them.

APIs
https://6080be3273292b0017cdbf2a.mockapi.io/years
https://6080be3273292b0017cdbf2a.mockapi.io/makes
https://6080be3273292b0017cdbf2a.mockapi.io/models
https://6080be3273292b0017cdbf2a.mockapi.io/trim
# SmartHomeControlPanel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

Designed in [Figma](https://www.figma.com/file/LgnS4h4b0OX4l7WlG3heiP/Drafts?type=design&node-id=102%3A54&mode=design&t=mbB1XUqye9N47KaC-1)

---

The idea for this originated when I picked up my old tablet after years of it collecting dust in a cabinet. 
Since the OS was old and the storage small, I couldn't really install anything on it, but I was still
set on making use of the device, either as part of an art project or a smart home controller.

My partner had the great idea that even though we can't install native apps, we *could* make a web app.
I could make the front, he could make the back.

And so I spent a Sunday designing an interface for a smart home central that would suit our needs.
This included checking the weather, controlling the A/C, smart lights and robot vaccuum, and modifying our
shopping list. The biggest limitation being that the app had to run on Chrome 40 and should fit on the screen without scrolling
to prevent lag.

This repo uses a mock backend that queries real weather data from local weather service provider ilmateenistus.ee,
and current time comes from native javascript functions, but the rest of the data is dummy data for the sake of privacy.

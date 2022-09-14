# ENV file structure:
```
REACT_APP_DEV_STATUS = development
REACT_APP_API_URL = https://buffle.eu:8080
```

# Widget folder structure 

I will take example of the meetlinks widget

Every widget should be treated as a sepparate app, thus, the `/Meetlinks` folder inside of the `/widgets` folder
should have a root `.JSX` element, components fodlder (`/Widgets/Meetlinks/components`) and utils folder (`/Widgets/Meetlinks/utils`)

`styles.js` should also be contained in the root directory of the widget
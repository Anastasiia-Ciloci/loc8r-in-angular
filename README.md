# loc8r-in-angular

MEAN stack app

## Roadmap

- [x] Build static site
  - [x] Figure out the layout
  - [x] Set up the routes
- [x] Design the data model that reflects the requirements
  - [x] Difine a data model
  - [ ] Create database to work with model
- [x] Build your own data API
  - [x] RESTful API
- [ ] Hook the DB into the application
- [ ] Embellish the app
  - [ ] Auth
  - [ ] Login

## Steps

```
$ express
$ express --css=less --view=hbs --git
$ express --view=pug --git
$ npm install
$ DEBUG=loc8r-in-angular:* npm start
```

result `loc8r:server Listening on port 3000 +0ms`

-install nodemon

```
$ npm install -g nodemon
$ nodemon
```

-setup server, controllers, models.
-deploy to heroku
`heroku --version `
`heroku login`
-commit all changes and push to heroku
`heroku create`
`git push heroku main`

-setting the controllers and vews

 Name
 Address
 Rating
 Opening hours
 Facilities
 Location map
 Reviews, each with
– Rating
– Reviewer name
– Review date
– Review text
– Button to add a new review
– Text to set the context of the page

-Adding Mongodb and mongoose.
-schema and models

<p align="right">(<a href="#top">back to top</a>)</p>

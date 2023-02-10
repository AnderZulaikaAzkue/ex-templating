const hbs = require('hbs');
const moment = require('moment');

// Iteration 2: register partials
hbs.registerPartials(`${__dirname}/../views/partials`);


// Iteration 2: register active helper for nav
hbs.registerHelper('navActive', (currentPath, desiredPath) => {
  return currentPath === desiredPath ? 'active' : ''
});

// Iteration 3: register date helper for tweets
hbs.registerHelper("date", (date) => {
  const minDiff = (Date.now() - date.getTime()) / 1000 / 60;

  if (minDiff > 60 * 24) {
    return `${Math.round(minDiff / 60 / 24)}d ago`;
  }

  if (minDiff > 60) {
    return `${Math.round(minDiff / 60)}h ago`;
  }

  return `${Math.round(minDiff)}m ago`;
});

hbs.registerHelper('isOwnedBy', (tweet, user, options) => {
  if (tweet.user.id == user?.id) {
    return options.fn();
  } else {
    return options.inverse();
  }
});
import React from 'react';
import App from './components/App.jsx';

// Accounts.ui.config({
//   passwordSignupFields: 'USERNAME_ONLY',
// });

console.log('Running on client only');

Meteor.startup(() => {
  Template.renderHome = function() {
    React.render(<App/>, document.getElementById('root'));
  };
});
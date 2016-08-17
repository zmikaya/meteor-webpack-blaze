/* global ReactMeteorData */
import React from 'react';
import BlazeTemplate from './BlazeTemplate';
import {Users, Posts} from 'app/collections';
import './App.css';

let App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      users: Users.find().fetch()
    };
  },
  
  loadTemplates(name, path) {
    if (!Template[name]) {
      Template[name] = require('spacebars-loader!./blogHome.html').template;
    }
    else {
      delete Template['blogHome'];
      Template.blogHome = require('spacebars-loader!./blogHome.html').template;
    }
  },

  render() {
    this.loadTemplates('blogHome', './blogHome.html');
    let userCount = Users.find().fetch().length;
    let postsCount = Posts.find().fetch().length;
    return (
      <div className="App">
        <BlazeTemplate template={Template.blogHome} />
        <h1>Hello Webpack!</h1>
        <p>There are {userCount} users in the Minimongo  (login to change)</p>
        <p>There are {postsCount} posts in the Minimongo  (autopublish removed)</p>
      </div>
    );
  }
});

export default App;

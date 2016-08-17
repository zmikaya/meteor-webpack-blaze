import React from 'react';
import {mount} from 'react-mounter';

FlowRouter.route('/', {
  name: 'home',
  action: function() {
    // mount(MainLayout);
    setTimeout(() => {Template.renderHome()}, 100);
  }
});
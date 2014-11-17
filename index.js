'use strict';

module.exports = {
  name: 'ember-cli-emberui',

  included: function included(app) {
    this.app = app;

    /* Start Emberui code
     * ref: https://github.com/emberui/emberui/issues/52#issuecomment-46310518
     */
    app.import(app.bowerDirectory + '/velocity/velocity.js');
    app.import(app.bowerDirectory + '/velocity/velocity.ui.js');

    app.import(app.bowerDirectory + '/twix/bin/twix.js');
    app.import(app.bowerDirectory + '/moment/moment.js');
    app.import(app.bowerDirectory + '/ember-list-view/index.js');

    app.import(app.bowerDirectory + '/emberui/dist/named-amd/emberui.js', {
      exports: {
        'emberui': ['default']
      }
    });
    app.import(app.bowerDirectory + '/emberui/dist/emberui.css');
    /* End Emberui code */

  }
};

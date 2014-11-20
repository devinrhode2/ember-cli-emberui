module.exports = {
  description: 'Add emberui to the current project',

  normalizeEntityName: function() {},

  afterInstall: function() {
    this.addBowerPackagesToProject([
      { name: "moment", target: "^2.6.0" },
      { name: "twix", target: "~0.4.0" },
      { name: "velocity", target: "^1.1.0" },
      { name: 'http://builds.emberjs.com/list-view/list-view-latest.js' },
      { name: 'emberui' },
    ]);
  }
};

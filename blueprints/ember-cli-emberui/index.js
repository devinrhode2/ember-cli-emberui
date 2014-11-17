module.exports = {
  description: 'Add emberui to the current project',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('emberui');
  }
};

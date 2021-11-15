const LOW_PRIORITY = 400;

export default class ZeebeHelptextProvider {

  constructor(propertiesPanel, injector) {
    propertiesPanel.registerProvider(LOW_PRIORITY, this);

    this._injector = injector;
  }

  getGroups(element) {
    return (groups) => {

      // here we will update what needs to be updated

      return groups;
    };
  }

}

ZeebeHelptextProvider.$inject = [ 'propertiesPanel', 'injector' ];


// helper /////////////////////

/*function findGroup(groups, id) {
  return groups.find(g => g.id === id);
}*/

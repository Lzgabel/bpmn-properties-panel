import {
  TimerDescProps
} from './properties';

const LOW_PRIORITY = 400;

export default class ZeebeHelptextProvider {

  constructor(propertiesPanel, injector) {
    propertiesPanel.registerProvider(LOW_PRIORITY, this);

    this._injector = injector;
  }

  getGroups(element) {
    return (groups) => {

      addTimerDescriptions(groups, element);

      return groups;
    };
  }

}

ZeebeHelptextProvider.$inject = [ 'propertiesPanel', 'injector' ];


function addTimerDescriptions(groups, element) {
  const timerEventGroup = findGroup(groups, 'timer');

  if (!timerEventGroup) {
    return;
  }

  timerEventGroup.entries = TimerDescProps({ element });
}


// helper /////////////////////

function findGroup(groups, id) {
  return groups.find(g => g.id === id);
}

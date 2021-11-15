import {
  getBusinessObject
} from 'bpmn-js/lib/util/ModelUtil';

import { TimerProps } from '../../zeebe/properties';

import {
  getTimerEventDefinition,
  getTimerDefinitionType
} from '../../bpmn/utils/EventDefinitionUtil';


/**
 * @typedef { import('@bpmn-io/properties-panel/lib/PropertiesPanel').EntryDefinition } Entry
 */

/**
 * @param {Object} props
 * @param {djs.model.Base} props.element
 * @returns {Array<Entry>} entries
 */
export function TimerDescProps(props) {
  const {
    element
  } = props;

  const businessObject = getBusinessObject(element),
        timerEventDefinition = getTimerEventDefinition(businessObject),
        timerEventDefinitionType = getTimerDefinitionType(timerEventDefinition);

  const valueDescription = getTimerEventDefinitionValueDescription(timerEventDefinitionType);

  const descriptions = {
    timerEventDefintionValue: valueDescription,
    timerEventDefinitionDurationValue: valueDescription
  };

  return TimerProps({ element, descriptions });
}


// helper //////////////////////////

function getTimerEventDefinitionValueDescription(timerDefinitionType) {
  switch (timerDefinitionType) {
  case 'timeDate':
    return (<div>
      <p>{ 'A specific point in time defined as ISO 8601 combined date and time representation.' }</p>
      <ul>
        <li><code>2019-10-01T12:00:00Z</code> - { 'UTC time' }</li>
        <li><code>2019-10-02T08:09:40+02:00</code> - { 'UTC plus 2 hours zone offset' }</li>
      </ul>
      <a href="https://docs.camunda.io/docs/reference/bpmn-processes/timer-events/timer-events#time-date" target="_blank" rel="noopener">{ 'Documentation: Timer events' }</a>
    </div>);

  case 'timeCycle':
    return (<div>
      <p>{ 'A cycle defined as ISO 8601 repeating intervals format.' }</p>
      <ul>
        <li><code>R5/PT10S</code> - { 'every 10 seconds, up to 5 times' }</li>
        <li><code>R/P1D</code> - { 'every day, infinitely' }</li>
      </ul>
      <a href="https://docs.camunda.io/docs/reference/bpmn-processes/timer-events/timer-events#time-cycle" target="_blank" rel="noopener">{ 'Documentation: Timer events' }</a>
    </div>);

  case 'timeDuration':
    return (<div>
      <p>{ 'A time duration defined as ISO 8601 durations format.' }</p>
      <ul>
        <li><code>PT15S</code> - { '15 seconds' }</li>
        <li><code>PT1H30M</code> - { '1 hour and 30 minutes' }</li>
        <li><code>P14D</code> - { '14 days' }</li>
      </ul>
      <a href="https://docs.camunda.io/docs/reference/bpmn-processes/timer-events/timer-events#time-duration" target="_blank" rel="noopener">{ 'Documentation: Timer events' }</a>
    </div>);
  }
}

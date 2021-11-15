import TestContainer from 'mocha-test-container-support';

import {
  act
} from '@testing-library/preact';

import {
  bootstrapPropertiesPanel,
  inject
} from 'test/TestHelper';

import {
  query as domQuery,
  queryAll as domQueryAll
} from 'min-dom';

import CoreModule from 'bpmn-js/lib/core';
import SelectionModule from 'diagram-js/lib/features/selection';
import ModelingModule from 'bpmn-js/lib/features/modeling';

import BpmnPropertiesPanel from 'src/render';

import ZeebePropertiesProvider from 'src/provider/zeebe';
import ZeebeHelptextProvider from 'src/provider/zeebe-helptext';
import BpmnPropertiesProvider from 'src/provider/bpmn';

import zeebeModdleExtensions from 'zeebe-bpmn-moddle/resources/zeebe';

import diagramXML from './ZeebeHelptextProvider.bpmn';


describe('<ZeebeHelptextProvider>', function() {

  const testModules = [
    BpmnPropertiesPanel,
    CoreModule,
    ModelingModule,
    SelectionModule,
    BpmnPropertiesProvider,
    ZeebePropertiesProvider,
    ZeebeHelptextProvider
  ];

  const moddleExtensions = {
    zeebe: zeebeModdleExtensions
  };

  let container;


  describe('groups', function() {

    beforeEach(function() {
      container = TestContainer.get(this);
    });

    beforeEach(bootstrapPropertiesPanel(diagramXML, {
      modules: testModules,
      moddleExtensions,
      debounceInput: false
    }));

  });

});


// helpers /////////////////////

function getGroup(container, id) {
  return domQuery(`[data-group-id="group-${id}"`, container);
}

function getAllGroups(container, id) {
  return domQueryAll(`[data-group-id="group-${id}"`, container);
}

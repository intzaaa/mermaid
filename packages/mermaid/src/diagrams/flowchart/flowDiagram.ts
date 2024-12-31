import type { MermaidConfig } from '../../config.type.js';
import { setConfig } from '../../diagram-api/diagramAPI.js';
import { FlowDb } from './flowDb.js';
import renderer from './flowRenderer-v3-unified.js';
// @ts-ignore: JISON doesn't support types
import flowParser from './parser/flow.jison';
import flowStyles from './styles.js';

export const diagram = {
  parser: flowParser,
  get db() {
    return new FlowDb();
  },
  renderer,
  styles: flowStyles,
  init: (cnf: MermaidConfig) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    if (cnf.layout) {
      setConfig({ layout: cnf.layout });
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
  },
};

import {traverseAll} from './examples/traverseAll';
import * as ilearn from "./examples/ilearn";
import * as ilearnFull from "./examples/ilearn_full";

const examples = [];
Object.values(traverseAll).forEach(outputMap => {
    examples.push([outputMap.config.globalDefaults, outputMap.config.nodes, outputMap.config.edges, outputMap.label])
})
examples.push([ilearn.globalDefaultsJSON, ilearn.nodesJSON, ilearn.edgesJSON, ilearn.title]);
examples.push([ilearnFull.globalDefaultsJSON, ilearnFull.nodesJSON, ilearnFull.edgesJSON, ilearnFull.title]);

export { examples };

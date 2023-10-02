import { Eta } from 'eta'
import pathutil from "path"


export const eta = new Eta({ views: pathutil.join(pathutil.resolve("./"), "views") })
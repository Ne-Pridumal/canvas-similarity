import { TCsvData } from "../models";
import * as stringComparison from "string-comparison"


export const jSim = (a: TCsvData, b: TCsvData): number => {
  const similarity = {
    artSim: sim(a.Artist, b.Artist),
    albSim: sim(a.AlbumName, b.AlbumName),
    nameSim: sim(a.Track, b.Track),
  }
  return similarity.artSim + similarity.albSim + similarity.nameSim
}

const sim = (a: string, b: string): number => stringComparison.default.levenshtein.distance(a, b)

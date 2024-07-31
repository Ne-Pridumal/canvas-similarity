import csv from 'csv-parser';
import fs from 'fs';
import { TCsvData } from './models';
import { jSim } from './lib/jaccard-similarity';

export const readData = (path: string) => {
  const res: TCsvData[] = [];
  fs.createReadStream(path)
    .pipe(csv())
    .on('data', (data: any) => res.push({
      Artist: data.Artist,
      TrackScore: data['Track Score'],
      AlbumName: data['Album Name'],
      Track: data.Track
    }))
    .on("end", () => {
      const comp = []
      var dist = []
      for (let i = 2; i < res.length - 2; i++) {
        dist = []
        for (let j = -2; j <= 2; j++) {
          dist.push(jSim(res[i], res[i + j]))
        }
        comp.push(dist)
      }
      console.log(comp)
    })
  return res
}



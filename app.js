import fs from 'fs'
import path from 'path'
import fastCsv from 'fast-csv'
const readCSV = (csvFilePath) => {
  const readData = fs.createReadStream(csvFilePath)
  const data = []
  readData
    .pipe(fastCsv.parse({ delimiter: ';' }))
    .on('data', (row) => {
      data.push(row)
      // console.log('AMAR:', row[0])
      // console.log('ANAIS:', row[1])
      // console.log('ANAIS2:', row[2])
      // console.log('DEPDOM:', row[3])
      // console.log('DEPDMAR:', row[4])
      // console.log('DEPNAIS1:', row[5])
      // console.log('DEPNAIS2:', row[6])
      // console.log('ETAMAT1:', row[7])
      // console.log('ETAMAT2:', row[8])
      // console.log('INDNAT1:', row[9])
      // console.log('INDNAT2:', row[10])
      // console.log('JSEMAINE:', row[11])
      // console.log('MMAR:', row[12])
      // console.log('NBENFCOM:', row[13])
      // console.log('SEXE1:', row[14])
      // console.log('SEXE2:', row[15])
      // console.log('TUCOM:', row[16])
      // console.log('TUDOM:', row[17])

      // console.log('\n')
      console.log('SEXE1:', row[14])

    })
    .on('end', (rowCount) => {
      console.log(`${rowCount} rows parsed!`)
      console.log(data)
    })
    .on('error', (e) => console.error(e))
}
const pathCsv = path.resolve('test.csv')
readCSV(pathCsv)
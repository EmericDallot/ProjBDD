import express from 'express'
const app = express()
const port = 3000
import fs from 'fs'
import fs2 from 'fs'
import fs3 from 'fs'
import fs4 from 'fs'
import path from 'path'
import csv from 'csv-parser';



let data = [];
let data2 =[];
let data3 = [];
let data4 =[];

var countc2020Mar13=0;
var count2020HH=0;
var count2020HF=0;
var count2020FF=0;
var total2020=0;

var countc2019Mar13=0;
var count2019HH=0;
var count2019HF=0;
var count2019FF=0;
var total2019=0;

var countc2018Mar13=0;
var count2018HH=0;
var count2018HF=0;
var count2018FF=0;
var total2018=0;


var countc2017Mar13=0;
var count2017HH=0;
var count2017HF=0;
var count2017FF=0;
var total2017=0;



fs.createReadStream('2020.csv')
  .pipe(csv({separator: ';'}))
  .on('data', (rows) =>{
    data.push(rows);
  }).on('end', () => {
    const c2020HH = data.filter ((row) => {return row.SEXE1 == 'M' && row.SEXE2 == 'M'})
    const c2020HF = data.filter ((row) => {return ((row.SEXE1 == 'F' && row.SEXE2 == 'M') || row.SEXE1 == 'M' && row.SEXE2 == 'F')})
    const c2020FF = data.filter ((row) => {return row.SEXE1 == 'F' && row.SEXE2 == 'F'})
    const c2020Mar13 = data.filter ((row) => {return row.DEPMAR =='13'})
    countc2020Mar13 = c2020Mar13.length;  
    count2020HH=c2020HH.length;
    count2020HF=c2020HF.length;
    count2020FF=c2020FF.length;
    total2020=count2020HH+count2020HF+count2020FF;
    
    })

fs2.createReadStream('2019.csv')
  .pipe(csv({separator: ';'}))
  .on('data', (rows) =>{
    data2.push(rows);
  }).on('end', () => {
    const result = data2.filter ((row) => {return row.SEXE1 == 'M' && row.SEXE2 == 'M'})
    const result2 = data2.filter ((row) => {return ((row.SEXE1 == 'F' && row.SEXE2 == 'M') || row.SEXE1 == 'M' && row.SEXE2 == 'F')})
    const result3 = data2.filter ((row) => {return row.SEXE1 == 'F' && row.SEXE2 == 'F'})
    const c2019Mar13 = data2.filter ((row) => {return row.DEPMAR =='13'})
    countc2019Mar13 = c2019Mar13.length;
    count2019HH=result.length;
    count2019HF=result2.length;
    count2019FF=result3.length;
    total2019=count2019HH+count2019HF+count2019FF;
    
    })
   

fs3.createReadStream('2018.csv')
  .pipe(csv({separator: ';'}))
  .on('data', (rows) =>{
    data3.push(rows);
  }).on('end', () => {
    const result2018HH = data3.filter ((row) => {return row.SEXE1 == 'M' && row.SEXE2 == 'M'})
    const result2018HF = data3.filter ((row) => {return ((row.SEXE1 == 'F' && row.SEXE2 == 'M') || row.SEXE1 == 'M' && row.SEXE2 == 'F')})
    const result2018FF = data3.filter ((row) => {return row.SEXE1 == 'F' && row.SEXE2 == 'F'})
    const c2018Mar13 = data3.filter ((row) => {return row.DEPMAR =='13'})
    countc2018Mar13 = c2018Mar13.length;
    count2018HH=result2018HH.length;
    count2018HF=result2018HF.length;
    count2018FF=result2018FF.length;
    total2018=count2018FF+count2018HF+count2018HH;
    
    })

fs4.createReadStream('2017.csv')
  .pipe(csv({separator: ';'}))
  .on('data', (rows) =>{
    data4.push(rows);
  }).on('end', () => {
    const result = data4.filter ((row) => {return row.SEXE1 == 'M' && row.SEXE2 == 'M'})
    const result2 = data4.filter ((row) => {return ((row.SEXE1 == 'F' && row.SEXE2 == 'M') || row.SEXE1 == 'M' && row.SEXE2 == 'F')})
    const result3 = data4.filter ((row) => {return row.SEXE1 == 'F' && row.SEXE2 == 'F'})
    const c2017Mar13 = data4.filter ((row) => {return row.DEPMAR =='13'})
    countc2017Mar13 = c2017Mar13.length;
    count2017HH=result.length;
    count2017HF=result2.length;
    count2017FF=result3.length;
    total2017=count2017HH+count2017HF+count2017FF;
    
    }) 



app.get('/data', function (req, res) {
  res.json({
    labels: [
    'H/H',
    'H/F',
    'F/F'
  ],
  datasets: [{
    label: '',
    data: [count2020HH,count2020HF,count2020FF],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'

    ],
    hoverOffset: 4
  }]
})
})
    
app.get('/data2', function (req, res) {
  res.json({
    labels: [
    'H/H',
    'H/F',
    'F/F'
  ],
  datasets: [{
    label: '',
    data: [count2019HH,count2019HF,count2019FF],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'

    ],
    hoverOffset: 4
  }]
})
})

app.get('/data3', function (req, res) {
  res.json({
    labels: [
    'H/H',
    'H/F',
    'F/F'
  ],
  datasets: [{
    label: [count2018HH,count2018HF,count2018FF],
    data: [count2018HH,count2018HF,count2018FF],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'

    ],
    hoverOffset: 4
  }]
})
})

app.get('/data4', function (req, res) {
  res.json({
    labels: [
    'H/H',
    'H/F',
    'F/F'
  ],
  datasets: [{
    label: [count2017HH,count2017HF,count2017FF],
    data: [count2017HH,count2017HF,count2017FF],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'

    ],
    hoverOffset: 4
  }]
})
})


app.get('/total2020', function (req, res) {
  const gg=(count2020FF/total2020)*100
  const HH=(count2020HH/total2020)*100
  const HF=(count2020HF/total2020)*100
  res.json(['Le pourcentage de couple de femmes correspond à '+(Math.round(gg * 1000) / 1000)+"%","Le pourcentage de couple d'hommes correspond à "+ (Math.round(HH * 1000) / 1000)+"%",  "Le pourcentage de couple homme/femme correspond à "+(Math.round(HF * 1000) / 1000)+'%']);
})


app.get('/total2019', function (req, res) {
  const gg=(count2019FF/total2019)*100
  const HH=(count2019HH/total2019)*100
  const HF=(count2019HF/total2019)*100
  res.json(['Le pourcentage de couple de femmes correspond à '+(Math.round(gg * 1000) / 1000)+"%","Le pourcentage de couple d'hommes correspond à "+ (Math.round(HH * 1000) / 1000)+"%",  "Le pourcentage de couple homme/femme correspond à "+(Math.round(HF * 1000) / 1000)+'%']);
})


app.get('/total2018', function (req, res) {
  const gg=(count2018FF/total2018)*100
  const HH=(count2018HH/total2018)*100
  const HF=(count2018HF/total2018)*100
  res.json(['Le pourcentage de couple de femmes correspond à '+(Math.round(gg * 1000) / 1000)+"%","Le pourcentage de couple d'hommes correspond à "+ (Math.round(HH * 1000) / 1000)+"%",  "Le pourcentage de couple homme/femme correspond à "+(Math.round(HF * 1000) / 1000)+'%']);

})

app.get('/total2017', function (req, res) {
  const gg=(count2017FF/total2017)*100
  const HH=(count2017HH/total2017)*100
  const HF=(count2017HF/total2017)*100
  res.json(['Le pourcentage de couple de femmes correspond à '+(Math.round(gg * 1000) / 1000)+"%","Le pourcentage de couple d'hommes correspond à "+ (Math.round(HH * 1000) / 1000)+"%",  "Le pourcentage de couple homme/femme correspond à "+(Math.round(HF * 1000) / 1000)+'%']);

})

const labels = ['2017','2018','2019','2020'];

app.get('/totalMariage' , function (req, res) {
res.json({
  labels: labels,
  datasets: [{
    label: 'Mariages de 2017 à 2020',
    data: [total2017, total2018, total2019,total2020],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)'
    ],
    borderWidth: 1
  }]
})
})


app.get('/totalMariage13' , function (req, res) {
res.json({
  labels: labels,
  datasets: [{
    label: 'Mariages Bouches-du-Rhône ',
    data: [countc2017Mar13, countc2018Mar13, countc2019Mar13, countc2020Mar13],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
})
})



app.use(express.static('public'))
app.locals.basedir = './public'
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', { title: 'Mariages de 2017 à 2020', message: '' })
})






app.listen(port, () => {
  console.log(`App écoute sur le port :${port}`)
})





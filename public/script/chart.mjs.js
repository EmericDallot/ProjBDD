import { Chart, registerables } from './chartjs/chart.esm.js'
Chart.register(...registerables)

async function fetchData1 () {
  const response = await fetch('/data')

  if (!response.ok) {
    throw new Error(`Erreur HTTP ! statut : ${response.status}`)
  }
  return await response.json()
}
async function fetchData2 () {
  const response = await fetch('/data2')

  if (!response.ok) {
    throw new Error(`Erreur HTTP ! statut : ${response.status}`)
  }
  return await response.json()
}
async function fetchData3 () {
  const response = await fetch('/data3')

  if (!response.ok) {
    throw new Error(`Erreur HTTP ! statut : ${response.status}`)
  }
  return await response.json()
}
async function fetchData4 () {
  const response = await fetch('/data4')

  if (!response.ok) {
    throw new Error(`Erreur HTTP ! statut : ${response.status}`)
  }
  return await response.json()
}
async function fetchData5 () {
  const response = await fetch('/totalMariage')

  if (!response.ok) {
    throw new Error(`Erreur HTTP ! statut : ${response.status}`)
  }
  return await response.json()
}
async function fetchData6 () {
  const response = await fetch('/totalMariage13')

  if (!response.ok) {
    throw new Error(`Erreur HTTP ! statut : ${response.status}`)
  }
  return await response.json()
}

async function fetchDataCount2020 () {
  const response = await fetch('/total2020')

  if (!response.ok) {
    throw new Error(`Erreur HTTP ! statut : ${response.status}`)
  }
  return await response.json()
}

async function fetchDataCount2019 () {
  const response = await fetch('/total2019')

  if (!response.ok) {
    throw new Error(`Erreur HTTP ! statut : ${response.status}`)
  }
  return await response.json()
}

async function fetchDataCount2018 () {
  const response = await fetch('/total2018')

  if (!response.ok) {
    throw new Error(`Erreur HTTP ! statut : ${response.status}`)
  }
  return await response.json()
}

async function fetchDataCount2017 () {
  const response = await fetch('/total2017')

  if (!response.ok) {
    throw new Error(`Erreur HTTP ! statut : ${response.status}`)
  }
  return await response.json()
}



(async () => {
  const ctx = document.querySelector('#myChart')
  const data = await fetchData1().catch(error => {
    console.log(error.message)
  })

  const myChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: {
      responsive: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
})();

(async () => {
  const ctx = document.querySelector('#myChart2')
  const data = await fetchData2().catch(error => {
    console.log(error.message)
  })


  const myChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: {
      responsive: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
})();

(async () => {
  const ctx = document.querySelector('#myChart3')
  const data = await fetchData3().catch(error => {
    console.log(error.message)
  })



  const myChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: {
      responsive: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
})();

(async () => {
  const ctx = document.querySelector('#myChart4')
  const data = await fetchData4().catch(error => {
    console.log(error.message)
  })


  const myChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: {
      responsive: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
})();

(async () => {
  const ctx = document.querySelector('#myChart5')
  const data = await fetchData5().catch(error => {
    console.log(error.message)
  })


  const myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  })
})();


(async () => {
  const ctx = document.querySelector('#myChart6')
  const data = await fetchData6().catch(error => {
    console.log(error.message)
  })


  const myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
      responsive: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  })
})();


(async () => {
  const ctx = document.querySelector('#totoF2020');
  const ctx2 = document.querySelector('#totoH2020');
  const ctx3 = document.querySelector('#totoHF2020');
  const data = await fetchDataCount2020().catch(error => {
    console.log(error.message)
  });
  ctx.append(data[0]);
  ctx2.append(data[1]);
  ctx3.append(data[2]);
})();


(async () => {
  const ctx = document.querySelector('#totoF2019');
  const ctx2 = document.querySelector('#totoH2019');
  const ctx3 = document.querySelector('#totoHF2019');
  const data = await fetchDataCount2019().catch(error => {
    console.log(error.message)
  });
  ctx.append(data[0]);
  ctx2.append(data[1]);
  ctx3.append(data[2]);
})();

(async () => {
  const ctx = document.querySelector('#totoF2018');
  const ctx2 = document.querySelector('#totoH2018');
  const ctx3 = document.querySelector('#totoHF2018');
  const data = await fetchDataCount2018().catch(error => {
    console.log(error.message)
  });
  ctx.append(data[0]);
  ctx2.append(data[1]);
  ctx3.append(data[2]);
})();

(async () => {
  const ctx = document.querySelector('#totoF2017');
  const ctx2 = document.querySelector('#totoH2017');
  const ctx3 = document.querySelector('#totoHF2017');
  const data = await fetchDataCount2017().catch(error => {
    console.log(error.message)
  });
  ctx.append(data[0]);
  ctx2.append(data[1]);
  ctx3.append(data[2]);
})();
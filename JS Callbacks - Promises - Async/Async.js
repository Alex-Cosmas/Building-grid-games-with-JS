let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
}

let is_shop_open = true

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms)
    } else {
      reject(console.log('Shop is closed'))
    }
  })
}

let CustomerDetails = {
  NewCustomers: ['Alex', 'Miriam'],

  //   ReturningCustomers: [
  //     {
  //       firstName: 'Alex',
  //       Location: 'Rongai',
  //     },
  //   ],
}

async function kitchen() {
  try {
    await time(2000)
    console.log(
      `Great selection ${CustomerDetails.NewCustomers[0]}. You picked the ${stocks.Fruits[0]} fruit`,
    )

    await time(0000)
    console.log('Start the machine')

    await time(2000)
    console.log('Cut the fruit')

    await time(2000)
    console.log(`Add ${stocks.liquid[0]} and ${stocks.liquid[1]}`)

    await time(1000)
    console.log(`Start the machine`)

    await time(2000)
    console.log(`Ice cream placed on ${stocks.holder[0]}`)

    await time(3000)
    console.log(`You would like the ${stocks.toppings[0]} toppings`)

    await time(2000)
    console.log(
      `Hope you enjoy your ${stocks.Fruits[0]} Ice Cream. ${CustomerDetails.NewCustomers[0]}.`,
    )
    //
  } catch (error) {
    console.log('Customer left', error)
  } finally {
    console.log('Thank you for your order')
  }
}

kitchen()

// Leadership is an attitude that starts and end with you.
// Making things happen by doing the right thing.
// Despite the circumstances at ones level best.

// Promise Structure
// let order = (arg1, arg2) => {
//   return new Promise(() => {
//     if (conditionIsTrue) {
//       resolve(arg2())
//     } else {
//       reject('Custom Message: Sorry ')
//     }
//   })
// }

// order().then().then().catch().finally()

// async function order() {
//   try {
//     await abc
//   } catch (error) {
//     console.log('Abc does not exsist', error)
//   } finally {
//     console.log('Run!')
//   }
// }

// order().then(console.log(`Then`))

// let toppings_choice = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log('Which toppings would you love?'))
//     }, 3000)
//   })
// }

// async function kitchen() {
//   console.log(' A ')
//   console.log(' B ')
//   console.log(' C ')

//   await toppings_choice()

//   console.log(' D ')
// }

// kitchen()

// console.log('Doing the dishes')
// console.log('Cleaning the tables')
// console.log('Taking orders')

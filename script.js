const product = [
    {
        name: 'Гамбургер простой',
        price: 10000,
        kcall: 800,
        amount: 0,/*количество заказанных*/
        //Гетеры - функции, которые ничего на себя не принимают, а могут только отдавать
        get Summ(){
            return this.price * this.amount
        },
        get Kcall(){
            return this.kcall * this.amount
        }
    },
    {
        name: 'Гамбургер FRESH',
        price: 20500,
        kcall: 649,
        amount: 0,/*количество заказанных*/
        //Гетеры - функции, которые ничего на себя не принимают, а могут только отдавать
        get Summ(){
            return this.price * this.amount
        },
        get Kcall(){
            return this.kcall * this.amount
        }
    },
    {
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 1297,
        amount: 0,/*количество заказанных*/
        //Гетеры - функции, которые ничего на себя не принимают, а могут только отдавать
        get Summ(){
            return this.price * this.amount
        },
        get Kcall(){
            return this.kcall * this.amount
        }
    }
]

const extraProduct = {
    doubleMayonnaise: {
        name: 'Двойной майонез',
        price: 5000,
        kcall: 597
    },
    lettuce:{
        name: 'Салатный лист',
        price: 200,
        kcall: 10 
    },
    cheese:{
        name: 'Сыр',
        price: 2000,
        kcall: 50
    }
}

const divProduct = [...document.querySelectorAll('.main__product')],
    btnPlusOrMinus = [...document.querySelectorAll('.main__product-btn')],
    addCart = document.querySelector('.addCart'),
    receipt = document.querySelector('.receipt'),
    receiptWindow = document.querySelector('.receipt__window'),
    btnReceipt = document.querySelector('.receipt__window-btn')

for(let i =0 ; i< btnPlusOrMinus.length; i++){
    btnPlusOrMinus[i].addEventListener('click', function (){
        PlusOrMinus(this) 
    })
}

function PlusOrMinus(element){
    /*
    
    
    closest() - Это метод обьекта document, который подключается к родительскому элементу по селектору
     getAtribute() - метод обьекта document который получает данные из атрибута элемента
    
    
    */
   const parent    = element.closest('.main__product'),
       parentIndex = divProduct.indexOf(parent),
       out         = parent.querySelector('.main__product-num'),
       price       = parent.querySelector('.main__product-price span'),
       kcall       = parent.querySelector('.main__product-kcall span'),
       btnSymbol   = element.getAttribute('data-symbol')


     if(btnSymbol === '+' && product[parentIndex].amount < 15 ){
         product[parentIndex].amount++
     }else if(btnSymbol === '-' && product[parentIndex].amount > 0){
        product[parentIndex].amount-- 
     }
     out.innerHTML = product[parentIndex].amount
     price.innerHTML = product[parentIndex].Summ
     kcall.innerHTML = product[parentIndex].Kcall 
}

//DZ-1
 const timer = document.querySelector('.header__timer span')


function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
        timer.innerHTML = current
      if (current == to) {
         clearInterval(timerId);
        function printNumbers2(fro, to) {
            let current = fro;
            let timerId = setInterval(function() {
                timer.innerHTML = current
              if (current == to) {
                 clearInterval(timerId);
              }
              current++;
            }, 200);
          }
          
          printNumbers2(50,100);
      }
      current++;
    }, 100);
  }
  
  printNumbers(0,50);

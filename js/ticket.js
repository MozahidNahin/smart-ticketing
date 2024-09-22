// Finding Elements
const selectedSeatEl = document.getElementById('selected-seat');
const totalBookedEl = document.getElementById('total-booked');
const availableSeatEl = document.getElementById('available-seat');
const totalPriceEl = document.getElementById('total-price');
const couponInputEl = document.getElementById('coupon-field');
const couponBtnEl = document.getElementById('coupon-btn');
const defaultTextEl = document.getElementById('default-text');
const grandTotalEl = document.getElementById('grand-total-value');

let selectedSeat = [];
let totalPrice = 0;

function handleSelectSeat(event){
    const value = event.innerText;

    if(selectedSeat.includes(value)){
        return alert("Seat already Booked!")
    }
    else if(selectedSeat.length < 4){
        event.classList.add('bg-custom-green');
    event.classList.add('text-white');

    selectedSeat.push(event.innerText);
    console.log(selectedSeat);

    totalBookedEl.innerText = selectedSeat.length;

    //decrease available seat element
    const availableSeatValue = parseFloat(availableSeatEl.innerText);
    const newSeatValue = availableSeatValue - 1;
    availableSeatEl.innerText = newSeatValue;

    // remove default text
    defaultTextEl.classList.add('hidden')

    selectedSeatEl.innerHTML += `<li class="text-base font-normal flex justify-between">
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>550</span>
    </li>`;

    // update total price
    totalPrice += 550;
    totalPriceEl.innerText = totalPrice.toFixed(2);

    // active coupon button
    if(selectedSeat.length > 3){
        couponInputEl.removeAttribute('disabled')
        couponBtnEl.removeAttribute('disabled')
    }
    }
    else{
        return alert("Maximum seat Booked!")
    }
    
}

//  coupon button function

document.getElementById('coupon-btn').addEventListener('click',function(){
    const couponInputValue = couponInputEl.value;
    let couponSave = 0;

    if(couponInputValue !== "NEW15" && couponInputValue !== "coupon 20"){
        return alert("Coupon is not valid!")
    }

    if(couponInputValue === "NEW15"){
        couponSave = totalPrice * .15;
    }
    else if(couponInputValue === "coupon 20"){
        couponSave = totalPrice * .20;
    }
    
    const showCouponPriceEl = document.getElementById('show-coupon-price');
    showCouponPriceEl.innerHTML = `
    <p>Discount</p>
    <p><span>-BDT:</span>
    <span>${couponSave.toFixed(2)}</span>
    </p>`

    const grandTotalValue = totalPrice - couponSave;
    grandTotalEl.innerText = grandTotalValue.toFixed(2);
})
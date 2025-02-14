const metersDistance = parseInt(prompt('Enter distance in Meters')) * 1000;
const feetDistance = parseInt(prompt('Enter distance in Foots')) * 0.305;

metersDistance > feetDistance ? alert('Kilometers are greater then feet') : alert('Feet are greater then kilometers');
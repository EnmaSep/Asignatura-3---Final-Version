displayName = () => { //Button #1

  const inputName = document.getElementById('name').value;
  const selectedColor = document.querySelector('select').value;

  greetings.textContent = `Buenos dias ${inputName}, sea bienvenido`;
  greetings.style.backgroundColor = selectedColor; // Background color for the saludo
  
};

ageCount = () => { //Button #2

  const inputAge = document.getElementById('age').value;
  ageList = document.getElementById('ageList')

    ageList.textContent = ''; // Clear the numbers for a new list to be created
  
    for (i = 1; inputAge >= i; i++) {
  
      list = document.createElement('h4')
      list.textContent = i
      ageList.appendChild(list)

     }

}

ageJudge = () => { // Button #3

  let age = document.getElementById('age').value // Takes the age from the field with ID="age"

 if (age >= 1 && age <= 12) {
  
  minorAdult.textContent = 'Niño'

  } else if (age >= 13 && age <= 19) {

    minorAdult.textContent = 'Adolescente'

  } else if (age >= 20 && age <= 60) {

    minorAdult.textContent = 'Adulto'

  } else if (age >= 61 && age <= 100) {

    minorAdult.textContent = 'Tercera edad'

  } else {

    minorAdult.textContent = 'Numero Invalido, Inserte un numero del 1-100'

  }

}

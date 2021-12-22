let button = document.getElementById('clacButt')

button.addEventListener('click', function() { 
    let weight = document.getElementById('weight-input').value
    let height = document.getElementById('height-input').value
    let finalBMI = (weight/(height*height) * 10000)
    document.getElementById('bmi-output').value = finalBMI
    if(finalBMI <18.5)
        document.getElementById('result').textContent = '"Eat well, cause You are in under weight categoery"'
    else if(finalBMI <25 && finalBMI >= 18.5)
        document.getElementById('result').textContent = '"Congo, You are in Healthy categoery"'
    else if(finalBMI <30 && finalBMI >= 25)
        document.getElementById('result').textContent = '"Do some workouts, cause You are in over weight categoery"'
    else if(finalBMI >= 30)
        document.getElementById('result').textContent = '"Follow some diet and do some workouts, cause You are in obese categoery"'
    
})
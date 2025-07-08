
            const weightInput = document.getElementById('weight');
            const heightInput = document.getElementById('height');
            const calculateButton = document.getElementById('calculateBtn');
    
            calculateButton.addEventListener('click', function() {
                const weight = parseFloat(weightInput.value);
                const height = parseFloat(heightInput.value);
    
                if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
                    alert('Please enter valid numbers for weight and height.');
                    return;
                }
    
                const bmi = weight / (height * height);
    
                let category = '';
                if (bmi < 18.5) {
                    category = 'Underweight';
                } else if (bmi < 25) {
                    category = 'Normal';
                } else if (bmi < 30) {
                    category = 'Overweight';
                } else {
                    category = 'Obese';
                }
                
                alert(`Your BMI is ${bmi.toFixed(2)}. This is considered: ${category}`);
            });

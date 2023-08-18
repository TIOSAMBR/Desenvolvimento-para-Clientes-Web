
            function calculateIMC() {
                const nameInput = document.getElementById('nameInput');
                const weightInput = document.getElementById('weightInput');
                const heightInput = document.getElementById('heightInput');
                const resultElement = document.getElementById('resultado3');
    
                const name = nameInput.value;
                const weight = parseFloat(weightInput.value);
                const height = parseFloat(heightInput.value);
    
                if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
                    resultElement.textContent = 'Por favor, insira valores válidos para peso e altura.';
                    return;
                }
    
                const bmi = weight / (height * height);
                let classification = '';
    
                if (bmi < 18.5) {
                    classification = 'abaixo do peso';
                } else if (bmi >= 18.5 && bmi < 24.9) {
                    classification = 'Peso ideal (parabéns)';
                } else if (bmi >= 25 && bmi < 29.9) {
                    classification = 'Levemente acima do peso';
                } else if (bmi >= 30 && bmi < 34.9) {
                    classification = 'Obesidade grau 1';
                } else if (bmi >= 25 && bmi < 39.9) {
                    classification = 'Obesidade grau 2 (severa)';
                } else if (bmi < 40) {
                    classification = 'Obesidade grau III (obesidade mórbida)';
                }
        
                const resultText = `Olá, ${name}! Seu IMC é ${bmi.toFixed(2)} e sua classificação é: ${classification}.`;
                resultElement.textContent = resultText;
            }
       

    
            function writeDate() {
                const dateInput = document.getElementById('dateInput');
                const resultElement = document.getElementById('resultado2');
                
                const inputDate = new Date(dateInput.value);
                
                if (isNaN(inputDate)) {
                    resultElement.textContent = 'Por favor, digite uma data válida.';
                    return;
                }
    
                const day = inputDate.getDate();
                const monthIndex = inputDate.getMonth();
                const year = inputDate.getFullYear();
                
                const months = [
                    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
                    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
                ];
    
                const formattedDate = `${day+1} de ${months[monthIndex]} de ${year}`;
                resultElement.textContent = formattedDate;
            }
    

   
        function calculateFactorial() {
            const numberInput = document.getElementById('numberInput');
            const resultElement = document.getElementById('resultado');
            
            const inputValue = parseInt(numberInput.value);

            if (isNaN(inputValue) || inputValue < 0) {
                resultElement.textContent = 'Por favor, digite um número inteiro não negativo.';
                return;
            }

            let factorial = 1;
            for (let i = 1; i <= inputValue; i++) {
                factorial *= i;
            }

            resultElement.textContent = `O fatorial de ${inputValue} é ${factorial}.`;
        }

       
        function calculateNotes() {
            const withdrawAmountInput = document.getElementById('withdrawAmount');
            const resultDiv = document.getElementById('resultado4');
        
            const amountToWithdraw = parseInt(withdrawAmountInput.value);
        
            if (isNaN(amountToWithdraw) || amountToWithdraw <= 0) {
                resultDiv.textContent = 'Por favor, digite um valor inteiro positivo válido.';
                return;
            }
        
            const notes = calculateNoteQuantities(amountToWithdraw);
        
            const resultText = `
                Quantidade de notas de 50: ${notes[0]}<br>
                Quantidade de notas de 10: ${notes[1]}<br>
                Quantidade de notas de 5: ${notes[2]}<br>
                Quantidade de notas de 1: ${notes[3]}
            `;
        
            resultDiv.innerHTML = resultText;
        }
        
        function calculateNoteQuantities(value) {
            const notes50 = Math.floor(value / 50);
            value %= 50;
        
            const notes10 = Math.floor(value / 10);
            value %= 10;
        
            const notes5 = Math.floor(value / 5);
            value %= 5;
        
            const notes1 = value;
        
            return [notes50, notes10, notes5, notes1];
        }
        
        const calculateButton = document.getElementById('calculateButton');
        calculateButton.addEventListener('click', calculateNotes);
        
       
   
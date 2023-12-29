fetch('/hist')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(history => {
            const historyList = document.getElementById('historyList');

            history.forEach(record => {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';
                listItem.innerHTML = `
                    <p><strong>BMI:</strong> ${record.bmi}</p>
                    <p><strong>Gender:</strong> ${record.gender}</p>
                    <p><strong>Timestamp:</strong> ${new Date(record.timestamp).toLocaleString()}</p>
                `;
                historyList.appendChild(listItem);
            });
        })
        .catch(error => console.error(error));
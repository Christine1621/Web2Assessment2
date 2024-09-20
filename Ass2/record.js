document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/fundraisers')
        .then(response => response.json())
        .then(data => {
            const fundraiserList = document.createElement('ul');
            data.forEach(fundraiser => {
                const listItem = document.createElement('li');
                listItem.textContent = `${fundraiser.CAPTION} - Raised: $${fundraiser.CURRENT_FUNDING} of $${fundraiser.TARGET_FUNDING}`;
                fundraiserList.appendChild(listItem);
            });
            document.body.appendChild(fundraiserList);
        })
        .catch(error => console.error('Error fetching fundraisers:', error));
});

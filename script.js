function submitEfficiency(name) {
    var efficiency = document.getElementById(name + 'Efficiency').value;
    fetch('https://script.google.com/macros/s/AKfycbxIfq-c4QhWqlL5daprez5RLVRtBcGeNFA4HgowjMxaOxZ5XjUUkPVzX6r2sFSxnBDU/exec', {
        method: 'POST',
        body: JSON.stringify({name: name, efficiency: efficiency}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

function getEfficiencies() {
    fetch('https://script.google.com/macros/s/AKfycbxIfq-c4QhWqlL5daprez5RLVRtBcGeNFA4HgowjMxaOxZ5XjUUkPVzX6r2sFSxnBDU/exec')
        .then(response => response.json())
        .then(data => {
            document.getElementById('seifEfficiency').innerText = "Seif's Efficiency: " + data.seifEfficiency;
            document.getElementById('hazemEfficiency').innerText = "Hazem's Efficiency: " + data.hazemEfficiency;
        });
}

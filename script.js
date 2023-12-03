function submitEfficiency(name) {
    var efficiency = document.getElementById(name + 'Efficiency').value;
    fetch('https://script.google.com/macros/s/AKfycbylxiPMv_7OPprX9pu4N1qLNpDKbaHbjHdjReDmyfyTgspFDAi104dEy6bHOQi1f4Faug/exec', {
        method: 'POST',
        body: JSON.stringify({name: name, efficiency: efficiency}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

function getEfficiencies() {
    fetch('https://script.google.com/macros/s/AKfycbylxiPMv_7OPprX9pu4N1qLNpDKbaHbjHdjReDmyfyTgspFDAi104dEy6bHOQi1f4Faug/exec')
        .then(response => response.json())
        .then(data => {
            document.getElementById('seifEfficiency').innerText = "Seif's Efficiency: " + data.seifEfficiency;
            document.getElementById('hazemEfficiency').innerText = "Hazem's Efficiency: " + data.hazemEfficiency;
        });
}

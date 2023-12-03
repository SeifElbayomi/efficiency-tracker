function updateEfficiency(user) {
    let efficiency = document.getElementById(user + 'Efficiency').value;
    document.getElementById(user + 'Display').textContent = 'Current: ' + efficiency;
}

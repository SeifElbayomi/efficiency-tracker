function submitEfficiency(name) {
    var efficiency = document.getElementById(name + 'Efficiency').value;
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=xcBXwfb71vI08RXK6YTYQ24GdhcQg4veAdZ8SJsku9MO0kbglQ1N5fOJ36yY7d_2I1R25fhWBKwjySButadUsHAFCCPtswxqm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBitC2CNq_CN9uJWQsT11mSZwGpyyRtJK623-lUK_quL4qKWM99rdXvCgnJfQ-gyNO_pcWFbEMCjAiaaLTJ82tE6aZHGLuhJYNz9Jw9Md8uu&lib=MtFKbjDwotP7HO9omSFYYqePLc0a1frJu', {
        method: 'POST',
        body: JSON.stringify({name: name, efficiency: efficiency}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

function getEfficiencies() {
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=xcBXwfb71vI08RXK6YTYQ24GdhcQg4veAdZ8SJsku9MO0kbglQ1N5fOJ36yY7d_2I1R25fhWBKwjySButadUsHAFCCPtswxqm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBitC2CNq_CN9uJWQsT11mSZwGpyyRtJK623-lUK_quL4qKWM99rdXvCgnJfQ-gyNO_pcWFbEMCjAiaaLTJ82tE6aZHGLuhJYNz9Jw9Md8uu&lib=MtFKbjDwotP7HO9omSFYYqePLc0a1frJu')
        .then(response => response.json())
        .then(data => {
            document.getElementById('seifEfficiency').innerText = "Seif's Efficiency: " + data.seifEfficiency;
            document.getElementById('hazemEfficiency').innerText = "Hazem's Efficiency: " + data.hazemEfficiency;
        });
}

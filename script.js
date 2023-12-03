function submitEfficiency() {
    var myEfficiency = document.getElementById('myEfficiency').value;
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=pT0ve8btFJWTd-L3G2jDN4ZoeS93fM8NdVvrFcF1PWX8UEjI-EPzje-d0P3-OxzyGdoo1P7GQIbjahRb9jX4hNmzeYxy38_um5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBitC2CNq_CN9uJWQsT11mSZwGpyyRtJK623-lUK_quL4qKWM99rdXvCgnJfQ-gyNO_pcWFbEMCjAiaaLTJ82tE6aZHGLuhJYNz9Jw9Md8uu&lib=MtFKbjDwotP7HO9omSFYYqePLc0a1frJu', {
        method: 'POST',
        body: JSON.stringify({myEfficiency: myEfficiency, friendsEfficiency: ""}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

function getFriendsEfficiency() {
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=pT0ve8btFJWTd-L3G2jDN4ZoeS93fM8NdVvrFcF1PWX8UEjI-EPzje-d0P3-OxzyGdoo1P7GQIbjahRb9jX4hNmzeYxy38_um5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBitC2CNq_CN9uJWQsT11mSZwGpyyRtJK623-lUK_quL4qKWM99rdXvCgnJfQ-gyNO_pcWFbEMCjAiaaLTJ82tE6aZHGLuhJYNz9Jw9Md8uu&lib=MtFKbjDwotP7HO9omSFYYqePLc0a1frJu')
        .then(response => response.json())
        .then(data => {
            document.getElementById('friendsEfficiency').innerText = "Friend's Efficiency: " + data.friendsEfficiency;
        });
}

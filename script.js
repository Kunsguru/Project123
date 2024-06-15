document.addEventListener('DOMConte

ntLoaded', function() {
    document.getElementById('summitButton1').addEventListener('click', function() {
        var email1 = 'mondaykingsley80@gmail.com';
        var subject1 = 'Summit Request for Button 1';
        var body1 = 'Hello,\n\nI would like to request a summit.\n\nThank you.';
        
        var mailtoLink1 = 'mailto:' + email1 + '?subject=' + encodeURIComponent(subject1) + '&body=' + encodeURIComponent(body1);
        window.location.href = mailtoLink1;
    });

    document.getElementById('summitButton2').addEventListener('click', function() {
        var email2 = 'artsbasseyartsbassey@gmail.com';
        var subject2 = 'Summit Request for Button 2';
        var body2 = 'Hello,\n\nI would like to request a summit.\n\nThank you.';
        
        var mailtoLink2 = 'mailto:' + email2 + '?subject=' + encodeURIComponent(subject2) + '&body=' + encodeURIComponent(body2);
        window.location.href = mailtoLink2;
    });
});

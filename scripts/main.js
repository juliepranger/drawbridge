var Drawbridge = function() {

    this.howItWorksSection = document.querySelector('.how-it-works');
    this.howItWorksOffset = this.howItWorksSection.offsetTop - 100;

    this.drawbridgeGif = document.querySelector('.diagram-drawbridge');
    console.log(this.howItWorksOffset)
    this.init();
};

Drawbridge.prototype.init = function() {

    document.addEventListener('scroll', function(e) {
        if(window.pageYOffset >= this.howItWorksOffset) {
            console.log('ADD')
            this.drawbridgeGif.classList.add('active');
        }
    }.bind(this));
};
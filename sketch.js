var song;
var button;
var skipButton;
var volumeSlider;
var rateSlider;
var panSlider;
var amp, volume, size;

function preload(){
    song = loadSound("sounds/notoriousBIG-juicy.mp3")
}

function setup(){
    createCanvas(600,400);
    background(0);
    
    
    button = createButton("Juicy - BIG");
    button.mousePressed(togglePlaying);
    button.position( 20, 100);
    
    skipButton = createButton("Skip");
    skipButton.mousePressed(skip);
    skipButton.position( 110, 100);
    
    volumeSlider = createSlider(0, 1, 0.5, 0.05);
    volumeSlider.position(20, 130);
    
    rateSlider = createSlider(0.5, 1.5, 1, 0.05);
    rateSlider.position(20, 160);
    
    panSlider = createSlider(-1, 1, 0, 0.05);
    panSlider.position(20, 190);
    
    // song.addCue(3, showSquare);
    
    amp = new p5.Amplitude();
    
    
}

function draw(){
    
    background( 0, 0, song.currentTime()*8);

    volume = amp.getLevel();
    size = map(volume, 0, 1, 50, 200);

    song.setVolume(volumeSlider.value());
    song.rate(rateSlider.value());
    song.pan(panSlider.value());
    
    fill(255);
    rect(width/2, height/2, size, size);
    

}

function togglePlaying(){
    if(song.isPlaying()){
        song.pause();
        button.html("Play Juicy");
    }
    else{
        song.play();
        button.html("Pause");
    }
}

function skip(){
    if(song.isPlaying()){
        song.jump(song.currentTime() + 5);
    }
}

function showSquare(){
    
}
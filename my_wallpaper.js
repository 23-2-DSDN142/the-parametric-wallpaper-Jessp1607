//your parameter variables go here!
  let pX = 50; // changes the x location of the panda
  let pY = 35; // changes the y location of the panda

  let bX = 280; // changes the x location of the bamboo
  let bY = 0; // changes the y location of the bamboo

  let lX = bX + 2 // moves the leaf's x location with the bamboo shoot 
  let lY = bY + 27 // moves the leaf's y location with the bamboo shoot 

  let sX = 200;
  let sY = 200;
  let Size = 10;

  let hX = 50;
  let hY = 280;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); // set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 400;
  pWallpaper.grid_settings.cell_height = 400;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
 //background(240, 255, 240); // light honeydew green 
 //background(245, 176, 231); // light pink 
 background(98,126,155); // light blue
  
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  if(bY < 20){
    DrawBambooShoot(bX, bY);
    DrawBambooShoot(bX, bY + 160);
    DrawBambooShoot(bX, bY + 200);
    DrawBambooShoot(bX, bY + 240);
    DrawBambooShoot(bX, bY + 280);
    DrawBambooShoot(bX, bY + 320);
    DrawBambooShoot(bX, bY + 360); // add by 40 each time to draw a new bamboo shoot piece to the stalk with even spacing 

    DrawBambooShoot(bX + 20, bY - 10);
    DrawBambooShoot(bX + 20, bY + 190);
    DrawBambooShoot(bX + 20, bY + 230);
    DrawBambooShoot(bX + 20, bY + 270);
    DrawBambooShoot(bX + 20, bY + 310);
    DrawBambooShoot(bX + 20, bY + 350); // add by 40 like above 

    DrawBambooLeaf1(lX, lY);
    DrawBambooLeaf1(lX, lY + 160);
    DrawBambooLeaf1(lX, lY + 240);
    DrawBambooLeaf1(lX, lY + 320); // add by 80 each time to draw a leaf on every second bamboo shoot on the left side 

    DrawBambooLeaf2(lX + 35, lY + 197); // add by 80 each time draw a leaf every second bamboo shoot on the right side 
    DrawBambooLeaf2(lX + 35, lY + 277);
    DrawBambooLeaf2(lX + 35, lY + 357);
    
    DrawHeart(hX, hY);
  }
  else{

    fill(249, 206, 238)// pink
    DrawSparkles(sX, sY, Size); // centre of canvas

    DrawSparkles(sX  , sY - 50, Size); // middle

    DrawSparkles(sX - 50, sY + 100, Size + 5); // lower half 
    fill(220, 249, 168) // green
    DrawSparkles(sX - 175, sY + 150, Size - 5); // bottom left corner

    DrawSparkles(sX - 150, sY + 80, Size); // lower left 

    DrawSparkles(sX + 180, sY - 70, Size - 5); // upper right

    DrawSparkles(sX + 170, sY + 10, Size + 2); // right

    DrawSparkles(sX + 130, sY - 50, Size - 3); // right
    fill(255, 235, 175) //orange
    DrawSparkles(sX + 150, sY + 90, Size - 2); // right

    DrawSparkles(sX + 150, sY - 170, Size + 3); // upper right corner 

    DrawSparkles(sX - 180, sY - 180, Size + 3); // upper left corner 

    DrawSparkles(sX + 180, sY - 190, Size - 3); // upper right corner 

    DrawSparkles(sX + 180, sY + 170, Size + 5); // bottom right corner 
    DrawSparkles(sX, sY - 100, Size - 5); // upper half

    fill(193, 240, 251)// blue
    DrawSparkles(sX + 30, sY - 140, Size + 5 ); // upper half

    DrawSparkles(sX, sY + 150, Size - 3); // bottom half

    DrawSparkles(sX - 20, sY - 170, Size - 3); // upper half

    DrawSparkles(sX - 70, sY + 170, Size - 3); // lower half

    DrawSparkles(sX - 70, sY + 30, Size + 5); // mid left

    DrawSparkles(sX + 10, sY + 60, Size - 5); // low mid 
    fill(224, 205, 255) // purple
    DrawSparkles(sX - 120, sY + 50, Size - 5); // mid left

    DrawSparkles(sX - 170, sY + 30, Size + 5); // mid left

    DrawSparkles(sX - 120, sY + 130, Size - 3); // lower left
    
    DrawSparkles(sX - 130, sY + 180, Size + 5); // lower left

    DrawPanda(pX + 230, pY + 190);
  }


DrawPanda(pX, pY);


DrawFullBamboo(bX, bY);
DrawFullBamboo(bX + 10, bY + 10);

}
function DrawHeart(heartX, heartY){
  //heart 
  fill(249, 206, 238);
  stroke(249, 206, 238);
beginShape()
vertex(heartX, heartY);
vertex(heartX + 10, heartY - 4);
vertex(heartX + 25, heartY - 2);
vertex(heartX + 47, heartY + 13);
vertex(heartX + 71, heartY - 2)
vertex(heartX + 75, heartY - 4);
vertex(heartX + 94, heartY);
vertex(heartX + 102, heartY + 18);
vertex(heartX + 97, heartY + 38);
vertex(heartX + 86, heartY + 56);
vertex(heartX + 61, heartY + 75);
vertex(heartX + 48, heartY + 79);
vertex(heartX + 33, heartY + 75);
vertex(heartX + 8, heartY + 56);
vertex(heartX - 6, heartY + 29);
vertex(heartX - 6, heartY + 9);
endShape(CLOSE);
}

function DrawFullBamboo(bambooX, bambooY, leafX, leafY){
  DrawBambooShoot(bX, bY);
  DrawBambooShoot(bX, bY + 40);
  DrawBambooShoot(bX, bY + 80);
  DrawBambooShoot(bX, bY + 120);
  
  DrawBambooShoot(bX + 20, bY + 30);
  DrawBambooShoot(bX + 20, bY + 70);
  DrawBambooShoot(bX + 20, bY + 110);
  DrawBambooShoot(bX + 20, bY + 150);
  
  DrawBambooLeaf1(lX, lY);
  DrawBambooLeaf1(lX, lY + 80);
  
  DrawBambooLeaf2(lX + 35, lY + 37);
  DrawBambooLeaf2(lX + 35, lY + 117);
  
}

function DrawSparkles(sparkleX, sparkleY, sparkleSize){
// Sparkles 

noStroke();
ellipse( sparkleX, sparkleY, sparkleSize, sparkleSize)

}

function DrawBambooLeaf1(leafX, leafY){

// left leaf 
fill(133, 176, 93) //  green
//fill(90, 116, 52); // dark green
stroke(59, 73, 34); // darker green for outline 
beginShape();
vertex(leafX, leafY);
vertex(leafX - 7, leafY - 1);
vertex(leafX - 11, leafY - 3);
vertex(leafX - 14, leafY - 5);
vertex(leafX - 18, leafY - 13);
vertex(leafX - 18, leafY - 15);
vertex(leafX - 25, leafY - 22);
vertex(leafX - 27, leafY - 23);
vertex(leafX - 32, leafY - 26);
vertex(leafX - 30, leafY - 20);
vertex(leafX - 25, leafY - 13);
vertex(leafX - 24, leafY - 11);
vertex(leafX - 19, leafY - 7);
vertex(leafX - 22, leafY - 6);
vertex(leafX - 28, leafY - 7);
vertex(leafX - 35, leafY - 7);
vertex(leafX - 43, leafY - 5);
vertex(leafX - 43, leafY - 5);
vertex(leafX - 40, leafY - 4);
vertex(leafX - 39, leafY - 3);
vertex(leafX - 35, leafY - 2);
vertex(leafX - 34, leafY - 1);
vertex(leafX - 28, leafY - 1);
vertex(leafX - 24, leafY - 1);
vertex(leafX - 20, leafY - 1);
vertex(leafX - 19, leafY - 3);
vertex(leafX - 16, leafY - 3);
vertex(leafX - 14, leafY - 2);
vertex(leafX - 12, leafY - 1);
vertex(leafX - 6, leafY + 2);
vertex(leafX - 4, leafY + 3);
vertex(leafX - 1, leafY + 6);
endShape();

}

function DrawBambooLeaf2(leafX, leafY){

  // left leaf 
  fill(133, 176, 93) // green
  //fill(90, 116, 52); // dark green
  //stroke(59, 73, 34); // darker green for outline 
  beginShape();
  vertex(leafX, leafY);
  vertex(leafX + 7, leafY + 1);
  vertex(leafX + 11, leafY + 3);
  vertex(leafX + 14, leafY + 5);
  vertex(leafX + 18, leafY + 13);
  vertex(leafX + 18, leafY + 15);
  vertex(leafX + 25, leafY + 22);
  vertex(leafX + 27, leafY + 23);
  vertex(leafX + 32, leafY + 26);
  vertex(leafX + 30, leafY + 20);
  vertex(leafX + 25, leafY + 13);
  vertex(leafX + 24, leafY + 11);
  vertex(leafX + 19, leafY + 7);
  vertex(leafX + 22, leafY + 6);
  vertex(leafX + 28, leafY + 7);
  vertex(leafX + 35, leafY + 7);
  vertex(leafX + 43, leafY + 5);
  vertex(leafX + 43, leafY + 5);
  vertex(leafX + 40, leafY + 4);
  vertex(leafX + 39, leafY + 3);
  vertex(leafX + 35, leafY + 2);
  vertex(leafX + 34, leafY + 1);
  vertex(leafX + 28, leafY + 1);
  vertex(leafX + 24, leafY + 1);
  vertex(leafX + 20, leafY + 1);
  vertex(leafX + 19, leafY + 3);
  vertex(leafX + 16, leafY + 3);
  vertex(leafX + 14, leafY + 2);
  vertex(leafX + 12, leafY + 1);
  vertex(leafX + 6, leafY - 2);
  vertex(leafX + 4, leafY - 3);
  vertex(leafX + 1, leafY - 6);
  endShape();
}  

function DrawBambooShoot(bambooX, bambooY){
// shoot 
fill(133, 176, 93) // green
//fill(90, 116, 52); // dark green
stroke(59, 73, 34); // darker green for outline 
beginShape();
vertex(bambooX, bambooY);
vertex(bambooX + 3, bambooY - 2);
vertex(bambooX + 6, bambooY - 2);
vertex(bambooX + 15, bambooY - 2);
vertex(bambooX + 18, bambooY - 1);
vertex(bambooX + 18, bambooY + 1);
vertex(bambooX + 17, bambooY + 9);
vertex(bambooX + 17, bambooY + 11);
vertex(bambooX + 17, bambooY + 16);
vertex(bambooX + 16, bambooY + 23);
vertex(bambooX + 17, bambooY + 28);
vertex(bambooX + 18, bambooY + 30);
vertex(bambooX + 18, bambooY + 33);
vertex(bambooX + 13, bambooY + 35);
vertex(bambooX + 5, bambooY + 35);
vertex(bambooX + 1, bambooY + 34);
vertex(bambooX, bambooY + 32);
vertex(bambooX, bambooY + 31);
vertex(bambooX + 1, bambooY + 28);
vertex(bambooX + 1, bambooY + 23);
vertex(bambooX + 1, bambooY + 12);
vertex(bambooX + 1, bambooY + 2);
endShape(CLOSE);

}

function DrawPanda(pandaX, pandaY){
   
beginShape();
fill(0) // black 
stroke(0)

// Left Ear
vertex(pandaX, pandaY)
vertex(pandaX - 3, pandaY - 9);
vertex(pandaX + 9, pandaY - 25);
vertex(pandaX + 31, pandaY - 13);

// Forehead 
vertex(pandaX + 31, pandaY - 13);
vertex(pandaX + 41, pandaY - 13);
vertex(pandaX + 62, pandaY - 9);
vertex(pandaX + 77, pandaY - 1);
vertex(pandaX + 82, pandaY + 3);

// Right Ear
vertex(pandaX + 82, pandaY + 3);
vertex(pandaX + 84, pandaY + 4);
vertex(pandaX + 94, pandaY + 1);
vertex(pandaX + 105, pandaY + 5);
vertex(pandaX + 111, pandaY + 18);
vertex(pandaX + 106, pandaY + 30);
vertex(pandaX + 99, pandaY + 35);
vertex(pandaX + 98, pandaY + 37);

// Right side of Head
vertex(pandaX + 98, pandaY + 44);
vertex(pandaX + 88, pandaY + 70);
vertex(pandaX + 76, pandaY + 79);

// Right Arm
vertex(pandaX + 75, pandaY + 80);
vertex(pandaX + 84, pandaY + 95);
vertex(pandaX + 90, pandaY + 110);
vertex(pandaX + 90, pandaY + 127);
vertex(pandaX + 84, pandaY + 135);
vertex(pandaX + 74, pandaY + 133);
vertex(pandaX + 70, pandaY + 130);
vertex(pandaX + 69, pandaY + 129);

// Right Leg 
vertex(pandaX + 70, pandaY + 143);
vertex(pandaX + 65, pandaY + 154);
vertex(pandaX + 54, pandaY + 167);
vertex(pandaX + 44, pandaY + 165);
vertex(pandaX + 37, pandaY + 151);
vertex(pandaX + 34, pandaY + 148);

// Left Leg 
vertex(pandaX + 20, pandaY + 147);
vertex(pandaX + 15, pandaY + 146);
vertex(pandaX + 11, pandaY + 158);
vertex(pandaX + 1, pandaY + 168);
vertex(pandaX - 8, pandaY + 165);
vertex(pandaX - 16, pandaY + 151);
vertex(pandaX - 18, pandaY + 137);
vertex(pandaX - 20, pandaY + 121);

// Left side of Body 
vertex(pandaX - 21, pandaY + 109);
vertex(pandaX - 21, pandaY + 100);
vertex(pandaX - 18, pandaY + 83);

// Left Arm 
vertex(pandaX - 19, pandaY + 79);
vertex(pandaX - 27, pandaY + 69);
vertex(pandaX - 41, pandaY + 46);
vertex(pandaX - 43, pandaY + 36);
vertex(pandaX - 36, pandaY + 26);
vertex(pandaX - 29, pandaY + 26);
vertex(pandaX - 16, pandaY + 34);
vertex(pandaX - 13, pandaY + 36);

// Left side of Head 
vertex(pandaX - 13, pandaY + 32);
vertex(pandaX - 9, pandaY + 16);
vertex(pandaX, pandaY + 3);
vertex(pandaX, pandaY);
endShape();

// Head 
beginShape();
fill(255) // white
vertex(pandaX + 16, pandaY - 6);
vertex(pandaX + 30, pandaY - 10);
vertex(pandaX + 39, pandaY - 11);
vertex(pandaX + 61, pandaY - 6);
vertex(pandaX + 79, pandaY + 4);
vertex(pandaX + 94, pandaY + 27);
vertex(pandaX + 95, pandaY + 45);
vertex(pandaX + 85, pandaY + 70);
vertex(pandaX + 74, pandaY + 76);
vertex(pandaX + 57, pandaY + 78);
vertex(pandaX + 40, pandaY + 75);
vertex(pandaX + 15, pandaY + 66);
vertex(pandaX - 1, pandaY + 54);
vertex(pandaX - 5, pandaY + 49);
vertex(pandaX - 10, pandaY + 38);
vertex(pandaX - 10, pandaY + 32);
vertex(pandaX - 4, pandaY + 12);
vertex(pandaX + 16, pandaY - 6);
endShape();

// Tummy 
beginShape();
vertex(pandaX - 12, pandaY + 80);
vertex(pandaX - 8, pandaY + 80);
vertex(pandaX + 3, pandaY + 82);
vertex(pandaX + 17, pandaY + 85);
vertex(pandaX + 43, pandaY + 93);
vertex(pandaX + 51, pandaY + 96);
vertex(pandaX + 55, pandaY + 100);
vertex(pandaX + 65, pandaY + 118);
vertex(pandaX + 66, pandaY + 121);
vertex(pandaX + 54, pandaY + 138);
vertex(pandaX + 32, pandaY + 145);
vertex(pandaX + 29, pandaY + 146);
vertex(pandaX + 9, pandaY + 142);
vertex(pandaX - 10, pandaY + 129);
vertex(pandaX - 17, pandaY + 114);
vertex(pandaX - 19, pandaY + 104);
vertex(pandaX - 14, pandaY + 81);
vertex(pandaX - 12, pandaY + 80);
endShape();

// Left Cheek
beginShape();
noStroke()
fill(245, 176, 231); //light pink 
vertex(pandaX + 5, pandaY + 28);
vertex(pandaX + 5, pandaY + 33);
vertex(pandaX + 12, pandaY + 44);
vertex(pandaX + 4, pandaY + 49);
vertex(pandaX - 3, pandaY + 47);
vertex(pandaX - 7, pandaY + 35);
vertex(pandaX + 1, pandaY + 28);
vertex(pandaX + 5, pandaY + 28);
endShape();

// Right Cheek
beginShape();
vertex(pandaX + 64, pandaY + 59);
vertex(pandaX + 70, pandaY + 59);
vertex(pandaX + 76, pandaY + 55);
vertex(pandaX + 77, pandaY + 53);
vertex(pandaX + 84, pandaY + 64);
vertex(pandaX + 83, pandaY + 68);
vertex(pandaX + 72, pandaY + 73);
vertex(pandaX + 64, pandaY + 62);
vertex(pandaX + 64, pandaY + 59);
endShape();

// Left Eye
beginShape();
fill(0)
vertex(pandaX + 17, pandaY + 17);
vertex(pandaX + 26, pandaY + 19);
vertex(pandaX + 29, pandaY + 29);
vertex(pandaX + 17, pandaY + 41);
vertex(pandaX + 12, pandaY + 41);
vertex(pandaX + 5, pandaY + 34);
vertex(pandaX + 5, pandaY + 28);
vertex(pandaX + 17, pandaY + 17);
endShape();

//right eye
beginShape();
vertex(pandaX + 58, pandaY + 38);
vertex(pandaX + 66, pandaY + 33);
vertex(pandaX + 75, pandaY + 38);
vertex(pandaX + 78, pandaY + 48);
vertex(pandaX + 77, pandaY + 53);
vertex(pandaX + 76, pandaY + 55);
vertex(pandaX + 70, pandaY + 59);
vertex(pandaX + 64, pandaY + 59);
vertex(pandaX + 62, pandaY + 57);
vertex(pandaX + 56, pandaY + 47);
vertex(pandaX + 58, pandaY + 38);
endShape();

// Left Pupil
beginShape();
fill(255)
vertex(pandaX + 24, pandaY + 28);
vertex(pandaX + 23, pandaY + 31);
vertex(pandaX + 20, pandaY + 33);
vertex(pandaX + 19, pandaY + 32);
vertex(pandaX + 19, pandaY + 31);
vertex(pandaX + 21, pandaY + 27);
vertex(pandaX + 24, pandaY + 28);
endShape();

// Right Pupil
beginShape();
vertex(pandaX + 62, pandaY + 42);
vertex(pandaX + 65, pandaY + 46);
vertex(pandaX + 63, pandaY + 48);
vertex(pandaX + 60, pandaY + 45);
vertex(pandaX + 62, pandaY + 42);
endShape();

// Nose
beginShape();
fill(0);
vertex(pandaX + 37, pandaY + 42);
vertex(pandaX + 44, pandaY + 45);
vertex(pandaX + 44, pandaY + 48);
vertex(pandaX + 41, pandaY + 49);
vertex(pandaX + 39, pandaY + 50);
vertex(pandaX + 37, pandaY + 47);
vertex(pandaX + 35, pandaY + 44);
vertex(pandaX + 37, pandaY + 42);
endShape();

// mouth
beginShape();
vertex(pandaX + 41, pandaY + 49);
vertex(pandaX + 39, pandaY + 52);
vertex(pandaX + 46, pandaY + 55);
vertex(pandaX + 48, pandaY + 55);
vertex(pandaX + 45, pandaY + 58);
vertex(pandaX + 44, pandaY + 58);
vertex(pandaX + 40, pandaY + 57);
vertex(pandaX + 38, pandaY + 55);
vertex(pandaX + 36, pandaY + 54);
vertex(pandaX + 30, pandaY + 54);
vertex(pandaX + 27, pandaY + 51);
vertex(pandaX + 27, pandaY + 48);
vertex(pandaX + 30, pandaY + 50);
vertex(pandaX + 33, pandaY + 52);
vertex(pandaX + 36, pandaY + 51);
vertex(pandaX + 37, pandaY + 49);
endShape()
}
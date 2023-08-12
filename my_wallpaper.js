//your parameter variables go here!
// Panda params 
let pX = 66;
let pY = 29;

let bX = 270;
let bY = 0;

let lX = bX - 9
let lY = bY + 3


function setup_wallpaper(pWallpaper) {
pWallpaper.output_mode(GLIDE_WALLPAPER);
pWallpaper.resolution(NINE_PORTRAIT);
pWallpaper.show_guide(false); //set this to false when you're ready to print

//Grid settings
pWallpaper.grid_settings.cell_width  = 400;
pWallpaper.grid_settings.cell_height = 400;
pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
background(240, 255, 240);//light honeydew green 

}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

DrawPanda(pX, pY);
DrawPanda(pX + 214, pY + 191);

DrawBambooLeaf1(lX, lY);

// DrawBambooShoot(bX, bY);
DrawBambooShoot(bX - 13, bY + 38);
DrawBambooShoot(bX - 13*2, bY + 38*2);

DrawBambooShoot(bX - 13*3, bY + 38*3);
DrawBambooShoot(bX - 13*4, bY + 38*4);

DrawBambooShoot(bX - 13*5, bY + 38*5);
DrawBambooShoot(bX - 13*6, bY + 38*6);

DrawBambooShoot(bX - 13*7, bY + 38*7);
DrawBambooShoot(bX - 13*8, bY + 38*8);

DrawBambooShoot(bX - 13*9, bY + 38*9);
// DrawBambooShoot(bX - 13*10, bY + 38*10);

}
function DrawBambooLeaf1(leafX, leafY){

// left leaf 
fill(90, 116, 52);
stroke(59, 73, 34);
beginShape();
vertex(leafX, leafY + 38);
vertex(leafX - 4, leafY + 34);
vertex(leafX - 8, leafY + 33);
vertex(leafX - 12, leafY + 31);
vertex(leafX - 14, leafY + 30);
vertex(leafX - 15, leafY + 29);
vertex(leafX - 16, leafY + 26);
vertex(leafX - 17, leafY + 24);
vertex(leafX - 19, leafY + 21);
vertex(leafX - 19, leafY + 19);
vertex(leafX - 22, leafY + 16);
vertex(leafX - 26, leafY + 12);
vertex(leafX - 28, leafY + 11);
vertex(leafX - 33, leafY + 8);
vertex(leafX - 31, leafY +14);
vertex(leafX - 29, leafY + 19);
vertex(leafX - 26, leafY + 21);
vertex(leafX - 25, leafY + 23);
vertex(leafX - 22, leafY + 26);
vertex(leafX - 20, leafY + 27);
vertex(leafX - 17, leafY + 29);
vertex(leafX - 20, leafY + 30);
vertex(leafX - 15, leafY + 32);
vertex(leafX - 18, leafY + 32);
vertex(leafX - 20, leafY + 31);
vertex(leafX - 22, leafY + 33);
vertex(leafX - 25, leafY + 33);
vertex(leafX - 29, leafY + 33);
vertex(leafX - 35, leafY + 33);
vertex(leafX - 37, leafY + 32);
vertex(leafX - 40, leafY + 31);
vertex(leafX - 42, leafY + 30);
vertex(leafX - 44, leafY + 29);
vertex(leafX - 40, leafY + 28);
vertex(leafX - 32, leafY + 27);
vertex(leafX - 29, leafY + 27);
vertex(leafX - 26, leafY + 28);
vertex(leafX - 23, leafY + 29);
vertex(leafX - 18, leafY + 30);
endShape();

}

function DrawBambooShoot(bambooX, bambooY){
// shoot 
fill(90, 116, 52);
stroke(59, 73, 34);
beginShape();
vertex(bambooX, bambooY);
vertex(bambooX + 4, bambooY);
vertex(bambooX + 6, bambooY + 1);
vertex(bambooX + 15, bambooY + 4);
vertex(bambooX + 17, bambooY + 5);
vertex(bambooX + 16, bambooY + 8);
vertex(bambooX + 13, bambooY + 14);
vertex(bambooX + 12, bambooY + 16);
vertex(bambooX + 10, bambooY + 21);
vertex(bambooX + 8, bambooY + 27);
vertex(bambooX + 6, bambooY + 35);
vertex(bambooX + 5, bambooY + 38);
vertex(bambooX, bambooY + 38);
vertex(bambooX - 7, bambooY + 35);
vertex(bambooX - 11, bambooY + 32);
vertex(bambooX - 11, bambooY + 30);
vertex(bambooX - 7, bambooY + 23);
vertex(bambooX - 1, bambooY + 3);
vertex(bambooX - 1, bambooY)
endShape(CLOSE);

}

function DrawPanda(pandaX, pandaY){
 
// Outline of Body
beginShape();
fill(0) // black 
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

//your parameter variables go here!


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240);//light honeydew green 
  
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

 // Outline of Body
 beginShape();
fill(0) // black 

// Left Ear
vertex(66, 29)
vertex(63, 20);
vertex(75, 4);
vertex(97, 16);

// Forehead 
vertex(97, 16);
vertex(107, 16);
vertex(128, 20);
vertex(143, 28);
vertex(148, 32);

// Right Ear
vertex(148, 32);
vertex(150, 33);
vertex(160, 30);
vertex(171, 34);
vertex(177, 47);
vertex(172, 59);
vertex(165, 64);
vertex(164, 66);

// Right side of Head
vertex(164, 73);
vertex(154, 99);
vertex(142, 108);

// Right Arm
vertex(141, 109);
vertex(150, 124);
vertex(156, 139);
vertex(156, 156);
vertex(150, 164);
vertex(140, 162);
vertex(136, 159);
vertex(135, 158);

// Right Leg 
vertex(136, 172);
vertex(131, 183);
vertex(120, 196);
vertex(110, 194);
vertex(103, 180);
vertex(100, 177);

// Left Leg 
vertex(86, 176);
vertex(81, 175);
vertex(77, 187);
vertex(67, 197);
vertex(58, 194);
vertex(50, 180);
vertex(48, 166);
vertex(46, 150);

// Left side of Body 
vertex(45, 138);
vertex(45, 129);
vertex(48, 112);

// Left Arm 
vertex(47, 108);
vertex(39, 98);
vertex(25, 75);
vertex(23, 65);
vertex(30, 55);
vertex(37, 55);
vertex(50, 63);
vertex(53, 65);

// Left side of Head 
vertex(53, 61);
vertex(57, 45);
vertex(66, 32);
vertex(66, 29);
endShape(CLOSE);

// Head
beginShape();
fill(255) // white
vertex(82, 23);
vertex(96, 19);
vertex(105, 18);
vertex(127, 23);
vertex(145, 33);
vertex(160, 56);
vertex(161, 74);
vertex(151, 99);
vertex(140, 105);
vertex(123, 107);
vertex(106, 104);
vertex(81, 95);
vertex(65, 83);
vertex(61, 78);
vertex(56, 67);
vertex(56, 61);
vertex(62, 41);
vertex(82, 23);
endShape();
   
// Tummy 
beginShape();
vertex(54, 109);
vertex(58, 109);
vertex(69, 111);
vertex(83, 114);
vertex(109, 122);
vertex(117, 125);
vertex(121, 129);
vertex(131, 147);
vertex(132, 150);
vertex(120, 167);
vertex(98, 174);
vertex(95, 175);
vertex(75, 171);
vertex(56, 158);
vertex(49, 143);
vertex(47, 133);
vertex(52, 110);
vertex(54, 109);
endShape();
    
// Left Cheek
beginShape();
noStroke()
fill(245, 176, 231); //light pink 
vertex(71, 57);
vertex(71, 62);
vertex(78, 70);
vertex(70, 78);
vertex(63, 76);
vertex(59, 64);
vertex(67, 57);
vertex(71, 57);
endShape();
 
// Right Cheek
beginShape();
vertex(130, 88);
vertex(136, 88);
vertex(142, 84);
vertex(143, 82);
vertex(150, 93);
vertex(149, 97);
vertex(138, 102);
vertex(130, 91);
vertex(130, 88);
endShape();
    
// Left Eye
beginShape();
fill(0)
vertex(83, 46);
vertex(92, 48);
vertex(95, 58);
vertex(83, 70);
vertex(78, 70);
vertex(71, 63);
vertex(71, 57);
vertex(83, 46);
endShape();
   
// Right Eye
beginShape();
vertex(124, 67);
vertex(132, 62);
vertex(141, 67);
vertex(144, 77);
vertex(143, 82);
vertex(142, 84);
vertex(136, 88);
vertex(130, 88);
vertex(128, 86);
vertex(122, 76);
vertex(124, 67);
endShape();
    
// Left Pupil
beginShape();
fill(255)
vertex(90, 57);
vertex(89, 60);
vertex(86, 62);
vertex(85, 61);
vertex(85, 60);
vertex(87, 56);
vertex(90, 57);
endShape();
  
// Right Pupil
beginShape();
vertex(128, 71);
vertex(131, 75);
vertex(129, 77);
vertex(126, 74);
vertex(128, 71);
endShape();

// Mouth 
beginShape();
fill(0);
vertex(103, 71);
vertex(110, 74);
vertex(110, 77);
vertex(107, 78);
vertex(105, 79);
vertex(103, 76);
vertex(101, 73);
vertex(103, 71);
endShape();

// Nose 
beginShape();
vertex(107, 78);
vertex(105, 81);
vertex(112, 84);
vertex(114, 84);
vertex(111, 87);
vertex(110, 87);
vertex(106, 86);
vertex(104, 84);
vertex(102, 83);
vertex(96, 83);
vertex(93, 80);
vertex(93, 77);
vertex(96, 79);
vertex(99, 81);
vertex(102, 80);
vertex(103, 78);
endShape();
    
}
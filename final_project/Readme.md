Final Project - GC
================
Daniele Conti 2013/2014
-----------------------

[Load project](http://denjo.github.io/)

Script Organization:
==================
* [apartment](https://github.com/cvdlab-cg/404036/blob/master/final_project/scripts/apartment.js) recalls the functions that create all the windows, doors, walls and some object created by me.
* [collision](https://github.com/cvdlab-cg/404036/blob/master/final_project/scripts/collision.js) contains some functions and objects used to create a collision detection system.
* [decoration](https://github.com/cvdlab-cg/404036/blob/master/final_project/scripts/decoration.js) imports all the obj, obj/mtl objects used in the project.
* [forniture](https://github.com/cvdlab-cg/404036/blob/master/final_project/scripts/forniture.js) contains functions used to create objects for the house.
* [fpsInteract](https://github.com/cvdlab-cg/404036/blob/master/final_project/scripts/fpsInteract.js) is the code used to switch between trackball system and PointerLock.
* [functions](https://github.com/cvdlab-cg/404036/blob/master/final_project/scripts/functions.js) contains generics functions.
* [gui](https://github.com/cvdlab-cg/404036/blob/master/final_project/scripts/gui.js) incorporates the control/gui used in the project.
* [init](https://github.com/cvdlab-cg/404036/blob/master/final_project/scripts/init.js) initializes variables.
* [initVideo](https://github.com/cvdlab-cg/404036/blob/master/final_project/scripts/initVideo.js) initializes variables concernign audio and video.
* [light](https://github.com/cvdlab-cg/404036/blob/master/final_project/scripts/light.js) initializes lights and switcher.
* [render](https://github.com/cvdlab-cg/404036/blob/master/final_project/scripts/render.js) contains the render function.
* [rooms](https://github.com/cvdlab-cg/404036/blob/master/final_project/scripts/rooms.js) creates all the windows, doors, internal and external walls.
* [specialFX](https://github.com/cvdlab-cg/404036/blob/master/final_project/scripts/specialFX.js) creates effects using particle system.
* [text_mat](https://github.com/cvdlab-cg/404036/blob/master/final_project/scripts/text_mat.js) loads and initializes textures and materials.

Graphic Techniques:
==================
* bump and normal map -> frame and some walls.
* texture -> floors and walls.
* tween animation -> opening/closing doors and windows.
* import obj, obj/mtl -> various elements of the house.
* **skybox.**
* **pointerLock + picking object.**
* **particle** -> rain, water in the shower, flames on the stove.
* texture video -> television.
* **texture from webcam** -> imac.
* **fading audio** -> tv.
* **collision detection.**
* **sound effect** -> frame.

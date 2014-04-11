from larcc import *

######## MAIN FLOOR ##############

main_build=CUBOID([22,20,1.2])

f_hall=CUBOID([9,6,0.2])
f_hall_sx=T([1,2])([-9,6])(f_hall)
f_hall_dx=T([1,2])([22,6])(f_hall)
####
wing_part1=CUBOID([9,14,0.2])
V_octa=[[1,0,0],[1,-1,0],[3,-3,0],[6,-3,0],[8,-1,0],[8,0,0]]
FV_octa=[[0,1,2,3,4,5]]
wing_octa=JOIN([ STRUCT(MKPOLS((V_octa,FV_octa))), T(3)(0.2)(STRUCT(MKPOLS((V_octa,FV_octa))))])

wing=STRUCT([wing_part1, wing_octa])

wing_sx=T([1,2])([-18,1])(wing)
wing_dx=T([1,2])([31,1])(wing)


main_floor=(STRUCT([main_build,f_hall_sx, f_hall_dx, wing_sx, wing_dx]))

#################### First half floor   ##########################

first_floor_half=T(3)(5.5)(STRUCT([wing_dx,wing_sx]))



#################### First floor #################

first_floor_main=T(3)(6.5)(CUBOID([22,20,0.2]))

##### Roof ###

roof_hall=T(3)(5.5)(STRUCT([f_hall_dx,f_hall_sx]))
a=MK([])
b=

VIEW(STRUCT([first_floor_half,main_floor,first_floor_main, roof_hall]))

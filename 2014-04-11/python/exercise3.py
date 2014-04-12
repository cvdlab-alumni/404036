from larcc import *

def color4ff(a):
	r,g,b,l=a
	return([r/255.0,g/255.0,g/255.0,l/255.0])

glass_material = [0.3,0.4,0.3,0.5,  0,0,0,0.5,  2,2,2,0.5, 0,0,0,0.5, 100]

def mkstair(a):
	s=[]
	wid,dept,height,n=a
	for i in range(n):
		s.append(CUBOID([wid,dept/n,(height/(n))*i]))
	return s


######## MAIN FLOOR ##############

main_build=CUBOID([23,21,1.2])

f_hall=CUBOID([9,7,0.2])
f_hall_sx=T([1,2])([-9,6])(f_hall)
f_hall_dx=T([1,2])([23,6])(f_hall)
####
wing_part1=CUBOID([9,15,0.2])
V_octa=[[1,0,0],[1,-1,0],[3,-3,0],[6,-3,0],[8,-1,0],[8,0,0],[9,0,0],[9,1,0],[7,1,0],[7,-1,0],[6,-2,0],[3,-2,0],[2,-1,0],[2,1,0],[1,1,0],[0,0,0]]
FV_octa=[[0,1,2,3,4,5]]
wing_octa=JOIN([ STRUCT(MKPOLS((V_octa,FV_octa))), T(3)(0.2)(STRUCT(MKPOLS((V_octa,FV_octa))))])

wing=STRUCT([wing_part1, wing_octa])

wing_sx=T([1,2])([-18,1])(wing)
wing_dx=T([1,2])([32,1])(wing)


main_floor=(STRUCT([main_build,f_hall_sx, f_hall_dx, wing_sx, wing_dx]))

#################### First half floor   ##########################

first_floor_half=T(3)(5.5)(STRUCT([wing_dx,wing_sx]))



#################### First floor #################

first_floor_main=T(3)(7.5)(CUBOID([23,21,0.2]))

#################### Roof ####################

pts=[[3,0,0],[6,0,0],[4.5,0,1],[3,7,0],[6,7,0],[4.5,7,1]]
triangle_roof=JOIN(AA(MK)(pts))
roof_hall=JOIN([CUBOID([9,7,0.1]),MK([0,3,1]),MK([9,3,1])])
roof_hall_sx=COLOR(color4ff([79,79,79,255]))(T([1,2,3])([-9,6,5.5])(STRUCT([roof_hall,triangle_roof])))
roof_hall_dx=COLOR(color4ff([79,79,79,255]))(T([1,2,3])([23,6,5.5])(STRUCT([roof_hall,triangle_roof])))

roof_octa=JOIN([MK([4.5,0,1.5]),wing_octa])
roof_wing_part=JOIN([MK([4.5,0,1.5]),MK([4.5,15,1.5]),wing_part1])
roof_wing_sx=COLOR(color4ff([79,79,79,255]))(T([1,2,3])([-18,1,11])(STRUCT([roof_octa,roof_wing_part])))
roof_wing_dx=COLOR(color4ff([79,79,79,255]))(T([1,2,3])([32,1,11])(STRUCT([roof_octa,roof_wing_part])))


roof_main_build_part=T(3)(13)(CUBOID([23,21,0.2]))
pts_tri_main=[[5,0,13.2],[18,0,13.2],[11.5,0,15.2],[5,21,13.2],[18,21,13.2],[11.5,21,15.2]]
tri_main=JOIN(AA(MK)(pts_tri_main))
roof_main_build=COLOR(color4ff([79,79,79,255]))(STRUCT([JOIN([roof_main_build_part,MK([3,10,17.2]),MK([19,10,17.2])]),tri_main]))


########## Internal Wall ############

wall_main_1=T([1,2,3])([1,10,1.2])(CUBOID([13,1,6.3]))
wall_main_2=T([1,2,3])([8,1,1.2])(CUBOID([1,9,6.3]))
wall_main_3=T([1,2,3])([13,1,1.2])(CUBOID([1,19,6.3]))
wall_main_4=T([1,2,3])([14,7,1.2])(CUBOID([8,1,6.3]))
wall_main_5=T([1,2,3])([14,12,1.2])(CUBOID([8,1,6.3]))

door=CUBOID([2,1,3])

wall_main_1=DIFFERENCE([wall_main_1, T([1,2,3])([10.5,10,1.2])(door)])
wall_main_5=DIFFERENCE([wall_main_5, T([1,2,3])([14.5,12,1.2])(door)])
wall_main_4=DIFFERENCE([wall_main_4, T([1,2,3])([20.,7,1.2])(door)])



door=(CUBOID([1,2,3]))
wall_main_2=DIFFERENCE([wall_main_2, T([1,2,3])([8,1.5,1.2])(door)])
wall_main_3=DIFFERENCE([wall_main_3, T([1,2,3])([13,17.5,1.2])(door)])

wall_main=STRUCT([wall_main_1, wall_main_2, wall_main_3,wall_main_4, wall_main_5])

wall_wing_sx=T([1,2,3])([-17,9,0.2])(CUBOID([7,1,5.5]))

wall_wing_dx=T([1,2,3])([33,9,0.2])(CUBOID([7,1,5.5]))

############# INTERNAL WALL FLOOR 1 #################
wall_main_f1=T(3)(6.2)(wall_main)

wall_wing_sx_f1=T(3)(5.5)(wall_wing_sx)

wall_wing_dx_f1=T(3)(5.5)(wall_wing_dx)

wall=STRUCT([wall_main,wall_main_f1,wall_wing_sx,wall_wing_dx, wall_wing_sx_f1, wall_wing_dx_f1])

house_interior=STRUCT([first_floor_half,main_floor,first_floor_main, roof_hall_sx, roof_hall_dx, roof_wing_sx, roof_wing_dx, roof_main_build, roof_main_build, wall])

##################################################################################################################################
##################################################################################################################################
#############################																		##############################
#############################                               Exercise 2                              ##############################
#############################																		##############################
##################################################################################################################################
##################################################################################################################################

########### MURA main building ##########
encl_main_ns_x=QUOTE([23])
encl_main_ns_y=QUOTE([1,-19,1])

encl_main_ew_x=QUOTE([1,-21,1])
encl_main_ew_y=QUOTE([21])

enclosure_main_south_north=INSR(PROD)([encl_main_ns_x,encl_main_ns_y,Q(13)])
enclosure_main_east_west=INSR(PROD)([encl_main_ew_x,encl_main_ew_y,Q(13)])
enclosure_main=(STRUCT([enclosure_main_south_north,enclosure_main_east_west]))

############ Mura Hall ###############
encl_hall_ns_x=QUOTE([9,-23,9])
encl_hall_ns_y=QUOTE([1,-5,1])

encl_hall_south_north=T([1,2])([-9,6])(INSR(PROD)([encl_hall_ns_x,encl_hall_ns_y,Q(5.5)]))

############ Mura Wing ###############

encl_wing_n_x=QUOTE([9,-41,9])
encl_wing_n_y=QUOTE([1])

encl_wing_north=T([1,2])([-18,15])(INSR(PROD)([encl_wing_n_x,encl_wing_n_y,Q(11)]))

encl_wing_ew_x=QUOTE([1,-7,1,-41,1,-7,1])
encl_wing_ew_y=QUOTE([15])

encl_wing_east_west=T([1,2])([-18,1])(INSR(PROD)([encl_wing_ew_x,encl_wing_ew_y,Q(11)]))

V_octa_wall=[[0,0,0],[0,-1,0],[1,-1,0],[1,1,0],[0,1,0],[2,-3,0],[2,-2,0],[5,-3,0],[5,-2,0],[7,-1,0],[6,-1,0],[7,1,0],[6,1,0]]
encl_octa_part=STRUCT(MKPOLS((V_octa_wall,[[0,1,2,3,4],[1,5,6,2],[5,7,8,6],[7,9,10,8],[9,11,12,10]])))
encl_octa_int=STRUCT(MKPOLS((V_octa_wall,[[3,2,6,8,10,12]])))
encl_octa_int=JOIN([encl_octa_int,T(3)(11)(encl_octa_int)])
encl_octa=DIFFERENCE([JOIN([encl_octa_part,T(3)(11)(encl_octa_part)]), encl_octa_int])

encl_octa_sx=T([1,2])([-17,1])(encl_octa)
encl_octa_dx=T([1,2])([33,1])(encl_octa)


enclosures=STRUCT([enclosure_main, encl_hall_south_north, encl_wing_north, encl_wing_east_west, encl_octa_sx,encl_octa_dx])

################# Porte #####################

porte_wing=STRUCT([T([1,2,3])([-10,7,0.2])(CUBOID([1,1.5,3])), T([1,2,3])([-10,10.5,0.2])(CUBOID([1,1.5,3])), T([1,2,3])([32, 10.5,0.2])(CUBOID([1,1.5,3])), T([1,2,3])([32, 7,0.2])(CUBOID([1,1.5,3]))])
encl_wing_east_west=DIFFERENCE([encl_wing_east_west, porte_wing ])

porta_main_1=COLOR(WHITE)(T([1,2,3])([10.25,0,1.2])(CUBOID([2.5,1,4])) )
porta_main_2=COLOR(WHITE)(T([1,2,3])([10.25,20,1.2])(CUBOID([2.5,1,4])) )

porte_main=STRUCT([porta_main_1, porta_main_2])


porta_hall=COLOR(WHITE)(STRUCT([T([1,2,3])([-5.5,6,0.2])(CUBOID([2,1,3])), T([1,2,3])([26.5,6,0.2])(CUBOID([2,1,3])), T([1,2,3])([-5.5,12,0.2])(CUBOID([2,1,3])), T([1,2,3])([26.5,12,0.2])(CUBOID([2,1,3]))]))


######### Decorazioni ######################
# dec_main=COLOR([0.0901,0.4470,0.2705])(T([1,2,3])([-0.05,-0.05,7.5])(CUBOID([23.1,21.1,0.2])))


############# FINESTRE #################################
#### main building #####
hole_porta=T([1,2,3])([10.75, 0, 1.6])(CUBOID([1.5,1,3]))
holes_main_1=STRUCT([T([1,2,3])([2.25, 0, 1.6])(CUBOID([1.5,1,3])), T([1,2,3])([6.75, 0, 1.6])(CUBOID([1.5,1,3])), T([1,2,3])([14.25, 0, 1.6])(CUBOID([1.5,1,3])), T([1,2,3])([18.25, 0, 1.6])(CUBOID([1.5,1,3]))])
windows_main_1=MATERIAL(glass_material)(STRUCT([holes_main_1, T(2)(20)(holes_main_1), T([1,2,3])([10.75, 0, 1.6])(CUBOID([1.5,1,3]))]))
enclosures=DIFFERENCE([enclosures, porte_main, holes_main_1, T(2)(20)(holes_main_1)])
porte_main=COLOR(BLACK)(DIFFERENCE([porte_main, hole_porta]))


window=CUBOID([1.5,1,2.5])
holes_main_2=STRUCT([T([1,2,3])([2.25, 0, 9])(window), T([1,2,3])([6.75, 0, 9])(window), T([1,2,3])([14.25, 0, 9])(window), T([1,2,3])([18.25, 0, 9])(window), T([1,2,3])([10.75, 0, 9])(window)])
enclosures=DIFFERENCE([enclosures, holes_main_2, T(2)(20)(holes_main_2)])
windows_main_2=MATERIAL(glass_material)(STRUCT([holes_main_2, T(2)(20)(holes_main_2)]))


######################## hall ###############

holes_hall=STRUCT([T([1,2,3])([-8, 12, 0.6])(CUBOID([1.5,1,3])), T([1,2,3])([-2.5, 12, 0.6])(CUBOID([1.5,1,3])), T([1,2,3])([24, 12, 0.6])(CUBOID([1.5,1,3])), T([1,2,3])([29.5, 12, 0.6])(CUBOID([1.5,1,3]))])
enclosures=DIFFERENCE([enclosures, holes_hall])
windows_hall=MATERIAL(glass_material)(holes_hall)

######### WING ############


hole_rot_1=R([1,2])(PI/4)(CUBOID([1.5,1,3]))
hole_rot_2=R([1,2])(-PI/4)(CUBOID([1.5,1,3]))
holes_wing=(STRUCT([T([1,2,3])([-14.25, -2, 0.6])(CUBOID([1.5,1,3])),T([1,2,3])([-11.5, -1.5, 0.6])(hole_rot_1), T([1,2,3])([-16.50, -0.50, 0.6])(hole_rot_2),T([1,2,3])([-16.5, 15, 0.6])(CUBOID([1.5,1,3])), T([1,2,3])([-12.5, 15, 0.6])(CUBOID([1.5,1,3])), T([1,2,3])([35.75, -2, 0.6])(CUBOID([1.5,1,3])), T([1,2,3])([38.5, -1.5, 0.6])(hole_rot_1), T([1,2,3])([33.5, -0.50, 0.6])(hole_rot_2), T([1,2,3])([38, 15, 0.6])(CUBOID([1.5,1,3])), T([1,2,3])([33.5, 15, 0.6])(CUBOID([1.5,1,3]))]))
enclosures=DIFFERENCE([enclosures, holes_wing])
windows_wing_1=MATERIAL(glass_material)(STRUCT([holes_wing,T(3)(5.7)(holes_wing) ]))



enclosures=STRUCT([COLOR(color4ff([92,8,8,255])) (enclosures), windows_main_2, windows_main_1, windows_hall, windows_wing_1])


###### Scale ########
step1=T([2])([-0.9])(CUBOID([3,0.8,1.2]))
step2=T([2])([-1.4])(CUBOID([3,0.5,0.96]))
step3=T([2])([-1.9])(CUBOID([3,0.5,0.72]))
step4=T([2])([-2.4])(CUBOID([3,0.5,0.48]))
step5=T([2])([-2.9])(CUBOID([3,0.5,0.24]))

stairs=COLOR(color4ff([79,79,79,255]))(T([1])([10])(STRUCT([step1,step2,step3, step4, step5])))
stairs2=COLOR(color4ff([79,79,79,255]))(T([1,2])([23,20.9])(R([1,2])(PI)(stairs)))

house_enclosures=STRUCT([enclosures,porte_main, porta_hall, stairs, stairs2])

##################################################################################################################################
##################################################################################################################################
#############################																		##############################
#############################                               Exercise 3                              ##############################
#############################																		##############################
##################################################################################################################################
##################################################################################################################################

mappa=CUBOID([700,600])
### Strade ###
street_x=COLOR(GRAY)(CUBOID([500,15]))
street_x=STRUCT([street_x, T(2)(115)(street_x),T(2)(230)(street_x),T(2)(345)(street_x) ])

street_y=COLOR(GRAY)(CUBOID([15,600]))
street_y_half=COLOR(GRAY)(T([1,2])([115,360])(CUBOID([15,240])))
street_y=STRUCT([street_y, street_y_half, T(1)(115)(street_y_half),T(1)(230)(street_y_half),T(1)(345)(street_y_half) ])

street=STRUCT([street_x, street_y])

### MALL ###
mall=COLOR(GRAY)(T(1)(500)(CUBOID([200,360])))
mall_building=COLOR([0.9686,0.9098,0.6235])(T([1,2])([510,15])(CUBOID([180,300,35])))

mall_complex=STRUCT([mall, mall_building])

### Houses ###
park=COLOR([0.0901,0.4470,0.2705])(T([1,2])([15,15])(CUBOID([485,100])))

model_house=CUBOID([30,18,8])
door_model_house=CUBOID([0,1.5,3])

roof=JOIN([MK([0,9,10]),MK([30,9,10]), T(3)(8)(CUBOID([30,18,0]))])

model1=STRUCT([COLOR(color4ff([250,218,221,255]))(model_house), COLOR(color4ff([47,47,47,255]))(roof),COLOR(color4ff([128,128,128,255]))(T([1,2])([-0.05,8])(door_model_house))])
model2=R([1,2])(PI/2)(model1)

row_house=[T(1)(60),model1]
row_house1=T(2)(40)(STRUCT(NN(7)(row_house)))
row_house2=T(2)(80)(STRUCT(NN(7)(row_house)))
row_1=STRUCT([row_house1,row_house2,park])
row_2=T(2)(115)(row_1)
row_3=T(2)(115)(row_2)



park2=COLOR([0.0901,0.4470,0.2705])(T([1,2])([15,360])(CUBOID([100,240])))
column_house=[T(2)(60), (model1)]
column_house1=T([1,2])([50,340])(STRUCT(NN(3)(column_house)))
column_1=STRUCT([column_house1,park2])
column_2=T(1)(115)(column_1)
column_3=T(1)(115)(column_2)

rows= STRUCT([row_1, row_2, row_3])
columns= STRUCT([column_1, column_2, column_3])

### Hammond ###
garden=T([1,2])([360,360])( COLOR([0.0901,0.4470,0.2705])( CUBOID([100, 100]) ))
house=T([1,2])([395,380])(STRUCT([house_enclosures, house_interior]))


### Swimming pool ###
pool=T([1,2])([400,500])(COLOR(color4ff([64,234,235,180]))(CUBOID([20,50])))
pool_street=T([1,2])([360,460])( COLOR(GRAY)( CUBOID([100, 140]) ))
pool_garden=T([1,2])([380,480])( COLOR([0.0901,0.4470,0.2705])( CUBOID([60, 100]) ))
baby_pool=T([1,2])([400,560])(COLOR(color4ff([64,234,235,180]))(CUBOID([25,10])))

pool=STRUCT([pool_street, pool_garden, baby_pool, pool])

parkink_zone=T([1,2])([475,360])( COLOR(GRAY)( CUBOID([225, 240]) ))

small_area_plan=STRUCT([mappa,street, mall_complex, rows, columns, garden, house, pool, parkink_zone])

VIEW(small_area_plan)


# VIEW(STRUCT([house_enclosures, house_interior, garden]))
import pyplasm

################ SOUTH ################

##### MAIN BUILDING #####

#Pareti
wall_main_building_south=pyplasm.CUBOID([7,0,5])
wall_main_building_south_west=pyplasm.CUBOID([0,2,5])
wall_main_building_south_east=pyplasm.T(1)(7)(pyplasm.CUBOID([0,2,5]))

#Porte e finestre
windows_example=pyplasm.COLOR([0.03, 0.9, 0.87])(pyplasm.CUBOID([0.4,0,0.66]))
windows_example2=pyplasm.COLOR([0.03, 0.9, 0.87])(pyplasm.CUBOID([0.4,0,0.53]))
door_example=pyplasm.COLOR([0.996, 0.996,0.913 ])(pyplasm.CUBOID([0.6,0,1.55]))

door_main_1=pyplasm.T([1,3])([3.2,0])(door_example)

wind_main_1=pyplasm.T([1,3])([0.7,1])(windows_example)

wind_main_2=pyplasm.T([1,3])([1.9,1])(windows_example)
wind_main_3=pyplasm.T([1,3])([4.5,1])(windows_example)
wind_main_4=pyplasm.T([1,3])([5.8,1])(windows_example)

wind_main_5=pyplasm.T([1,3])([0.7,3.8])(windows_example2)
wind_main_6=pyplasm.T([1,3])([1.9,3.8])(windows_example2)
wind_main_7=pyplasm.T([1,3])([3.2,3.8])(windows_example2)
wind_main_8=pyplasm.T([1,3])([4.5,3.8])(windows_example2)
wind_main_9=pyplasm.T([1,3])([5.8,3.8])(windows_example2)

windows_main_buinding_south = pyplasm.STRUCT([door_main_1, wind_main_1, wind_main_2, wind_main_3, wind_main_4, wind_main_5, wind_main_6, wind_main_7, wind_main_8, wind_main_9])

##### HALL #####

#Parete
wall_east_hall_south = pyplasm.CUBOID([2.6,0,3])

#Porte e finestre
door_east_hall_south = pyplasm.T([1])([1])(door_example)

south_east_hall = pyplasm.T([1,2])([7,2])(pyplasm.STRUCT([wall_east_hall_south, door_east_hall_south]))

south_west_hall = pyplasm.T([1,2])([-2.6,2])(pyplasm.STRUCT([wall_east_hall_south, door_east_hall_south]))

#Parte della facciata sud comprendente mura dell0edificio principale e dei corridoi
south=pyplasm.STRUCT([wall_main_building_south, wall_main_building_south_east, windows_main_buinding_south, wall_main_building_south_west,south_east_hall, south_west_hall])

################ NORTH ################

##### HALL #####

wall_east_hall_north = pyplasm.CUBOID([2.6,0,3])

door_east_hall_north = pyplasm.T([1])([1])(door_example)

wind_hall_1=pyplasm.T([1,3])([0.3,1])(windows_example)
wind_hall_2=pyplasm.T([1,3])([1.9 ,1])(windows_example)

north_east_hall = pyplasm.T([1,2])([7,4])(pyplasm.STRUCT([wall_east_hall_north, door_east_hall_north, wind_hall_1, wind_hall_2]))

north_west_hall = pyplasm.T([1,2])([-2.6,4])(pyplasm.STRUCT([wall_east_hall_north, door_east_hall_north, wind_hall_1, wind_hall_2]))


##### MAIN BUILDING #####

wall_main_building_north=pyplasm.T(2)(6.5)(pyplasm.CUBOID([7,0,5]))
wall_main_building_north_west=pyplasm.T(2)(4)(pyplasm.CUBOID([0,2.5,5]))
wall_main_building_north_east=pyplasm.T([1,2])([7,4])(pyplasm.CUBOID([0,2.5,5]))
windows_main_buinding_north = pyplasm.T(2)(6.5)(windows_main_buinding_south)


#Parte della facciata Nord comprendente le mura dei corridoi e dell'edificio principale
north=pyplasm.STRUCT([north_east_hall, north_west_hall, wall_main_building_north,wall_main_building_north_west, wall_main_building_north_east,windows_main_buinding_north])

#pyplasm.VIEW(pyplasm.STRUCT([north, south]))


#pyplasm.VIEW(building_2_5_D)

##################################################################################################################################################
##################################################################################################################################################
##################################################################################################################################################
##################################################################################################################################################
##################################################################################################################################################
##################################################################################################################################################
##################################################################################################################################################
##################################################################################################################################################
##################################################################################################################################################

################ MAIN BUILDING ################
#Pianta dell'edificio principale#
main_building=pyplasm.JOIN([pyplasm.MK([0,0]),pyplasm.MK([7,0]), pyplasm.MK([7,6.5]), pyplasm.MK([0,6.5])])

#Disegno le varie stanze
drawing_room=pyplasm.COLOR([1,1,0.4])(pyplasm.T([1,2])([0.3,0.3])(pyplasm.CUBOID([2.2,2.8])))

h_room=pyplasm.COLOR([1,1,0.4])(pyplasm.T([1,2])([2.8,0.3])(pyplasm.CUBOID([1.4,2.8])))

reception_room=pyplasm.COLOR([1,1,0.4])(pyplasm.T([1,2])([4.4,0.3])(pyplasm.CUBOID([2.2,1.8])))

dining_room=pyplasm.COLOR([1,1,0.4])(pyplasm.T([1,2])([0.3,3.4])(pyplasm.CUBOID([3.7,2.8])))

drawing_room_2=pyplasm.COLOR([1,1,0.4])(pyplasm.T([1,2])([4.4,4.2])(pyplasm.CUBOID([2.2,2])))

stair_room=pyplasm.COLOR([1,1,0.4])(pyplasm.T([1,2])([4.4,2.5])(pyplasm.CUBOID([2.2,1.4])))

#Unisco tutte le stanze alla piantina dell'edificio
main_b=pyplasm.STRUCT([main_building, drawing_room, h_room, reception_room, dining_room, drawing_room_2, stair_room])




################ HALLS ################

#Disegno il corridoio e la relativa stanza
hall=pyplasm.CUBOID([2.6,2])

hall_room=pyplasm.COLOR([1,1,0.4])(pyplasm.T([2])([0.3])(pyplasm.CUBOID([2.6,1.5])))

#Traslo un corridoio a destra e uno a sinistra
hall_sx=pyplasm.T([1,2])([-2.6,2.0])(pyplasm.STRUCT([hall, hall_room]))

hall_dx=pyplasm.T([1,2])([7,2.0])(pyplasm.STRUCT([hall, hall_room]))


################ OFFICES ################

#Disegno la piantina dell'ufficio con le 2 stanze

office_1=pyplasm.JOIN([pyplasm.MK([0,0]),pyplasm.MK([3,0]), pyplasm.MK([3,4.8]), pyplasm.MK([0,4.8])])

office_1_room1=pyplasm.COLOR([1,1,0.4])(pyplasm.T([1,2])([0.3,2.8])(pyplasm.CUBOID([2.5,1.7])))

office_1_room2=pyplasm.COLOR([1,1,0.4])(pyplasm.T([1,2])([0.3,0.3])(pyplasm.CUBOID([2.5,2.2])))

#Traslo gli uffici a destra e a sinistra
office_1_sx=pyplasm.T([1,2])([-5.6,0.2])(pyplasm.STRUCT([office_1, office_1_room1, office_1_room2]))

office_1_dx=pyplasm.T([1,2])([9.6,0.2])(pyplasm.STRUCT([office_1, office_1_room1, office_1_room2]))

#Disegno la parte sporgente a 5 lati dell'ufficio
office_2=pyplasm.JOIN([pyplasm.MK([0.2,0]),pyplasm.MK([0.2,-0.3]), pyplasm.MK([1,-1.1]), pyplasm.MK([2,-1.1]), pyplasm.MK([2.8,-0.3]), pyplasm.MK([2.8,0])])

office_2_room = pyplasm.COLOR([1,1,0.4])(pyplasm.T([1,2])([0.05,0.3])(pyplasm.JOIN([pyplasm.MK([0.5,0]),pyplasm.MK([0.5,-0.6]), pyplasm.MK([1,-1.1]), pyplasm.MK([2,-1.1]), pyplasm.MK([2.5,-0.6]), pyplasm.MK([2.5,0])])))

office_2_sx=pyplasm.T([1,2])([-5.6,0.2])(pyplasm.STRUCT([office_2, office_2_room]))

office_2_dx=pyplasm.T([1,2])([9.6,0.2])(pyplasm.STRUCT([office_2, office_2_room]))

################ FLOORS ################

floor0=pyplasm.STRUCT([main_b, hall_sx, hall_dx, office_1_sx, office_1_dx, office_2_sx, office_2_dx])

floor1=pyplasm.T(3)(3)(pyplasm.STRUCT([main_b, pyplasm.T([1,2])([-2.6,2.0])(hall), office_1_sx, office_1_dx, office_2_sx, office_2_dx, pyplasm.T([1,2])([7,2.0])(hall) ]))

################ BUILDING ################
two_and_half_model=pyplasm.STRUCT([floor0,floor1, south, north])

pyplasm.VIEW(two_and_half_model)





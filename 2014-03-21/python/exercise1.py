import pyplasm

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
two_and_half_model=pyplasm.STRUCT([floor0,floor1])

pyplasm.VIEW(two_and_half_model)
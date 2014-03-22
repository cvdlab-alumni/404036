import pyplasm

### MAIN BUILDING ###
main_building=pyplasm.JOIN([pyplasm.MK([0,0]),pyplasm.MK([7,0]), pyplasm.MK([7,6.5]), pyplasm.MK([0,6.5])])

drawing_room=pyplasm.COLOR([1,1,0.4])(pyplasm.T([1,2])([0.3,0.3])(pyplasm.CUBOID([2.2,2.8])))

h_room=pyplasm.COLOR([1,1,0.4])(pyplasm.T([1,2])([2.8,0.3])(pyplasm.CUBOID([1.4,2.8])))

reception_room=pyplasm.COLOR([1,1,0.4])(pyplasm.T([1,2])([4.4,0.3])(pyplasm.CUBOID([2.2,1.8])))

dining_room=pyplasm.COLOR([1,1,0.4])(pyplasm.T([1,2])([0.3,3.4])(pyplasm.CUBOID([3.7,2.8])))

drawing_room_2=pyplasm.COLOR([1,1,0.4])(pyplasm.T([1,2])([4.4,4.2])(pyplasm.CUBOID([2.2,2])))

stair_room=pyplasm.COLOR([1,1,0.4])(pyplasm.T([1,2])([4.4,2.5])(pyplasm.CUBOID([2.2,1.4])))


main_b=pyplasm.STRUCT([main_building, drawing_room, h_room, reception_room, dining_room, drawing_room_2, stair_room])




### HALLS ###
hall=pyplasm.CUBOID([2.6,2])

# hall=pyplasm.JOIN([pyplasm.MK([0,0]),pyplasm.MK([2.6,0]), pyplasm.MK([2.6,2]), pyplasm.MK([0,2])])

#hall_room=pyplasm.CUBOID([2.6,1.5])

hall_room=pyplasm.COLOR([1,1,0.4])(pyplasm.T([2])([0.3])(pyplasm.CUBOID([2.6,1.5])))

hall_sx=pyplasm.T([1,2])([-2.6,2.0])(pyplasm.STRUCT([hall, hall_room]))

hall_dx=pyplasm.T([1,2])([7,2.0])(pyplasm.STRUCT([hall, hall_room]))


### OFFICES ###
#office_part1=pyplasm.CUBOID([3,4.8])

office_1=pyplasm.JOIN([pyplasm.MK([0,0]),pyplasm.MK([3,0]), pyplasm.MK([3,4.8]), pyplasm.MK([0,4.8])])

office_1_room1=pyplasm.COLOR([1,1,0.4])(pyplasm.T([1,2])([0.3,2.8])(pyplasm.CUBOID([2.5,1.7])))

office_1_room2=pyplasm.COLOR([1,1,0.4])(pyplasm.T([1,2])([0.3,0.3])(pyplasm.CUBOID([2.5,2.2])))


office_1_sx=pyplasm.T([1,2])([-5.6,0.2])(pyplasm.STRUCT([office_1, office_1_room1, office_1_room2]))

office_1_dx=pyplasm.T([1,2])([9.6,0.2])(pyplasm.STRUCT([office_1, office_1_room1, office_1_room2]))

office_2=pyplasm.JOIN([pyplasm.MK([0.2,0]),pyplasm.MK([0.2,-0.3]), pyplasm.MK([1,-1.1]), pyplasm.MK([2,-1.1]), pyplasm.MK([2.8,-0.3]), pyplasm.MK([2.8,0])])

office_2_room = pyplasm.COLOR([1,1,0.4])(pyplasm.T([1,2])([0.05,0.3])(pyplasm.JOIN([pyplasm.MK([0.5,0]),pyplasm.MK([0.5,-0.6]), pyplasm.MK([1,-1.1]), pyplasm.MK([2,-1.1]), pyplasm.MK([2.5,-0.6]), pyplasm.MK([2.5,0])])))

# #verts=[[0.2,0],[0.2,-0.3],[1,-1.1],[2,-1.1],[2.8,-0.3],[2.8,0]]

# #cells=[[1,2,3,4,5,6]]

# #polls=None

# #office_part2=pyplasm.COLOR(pyplasm.GREEN)(pyplasm.MKPOL([verts, cells, polls]))

office_2_sx=pyplasm.T([1,2])([-5.6,0.2])(pyplasm.STRUCT([office_2, office_2_room]))

office_2_dx=pyplasm.T([1,2])([9.6,0.2])(pyplasm.STRUCT([office_2, office_2_room]))

# #pyplasm.VIEW(pyplasm.STRUCT([main_building, hall_sx, hall_dx, office_part1_sx, office_part2_sx]))
# floor=pyplasm.STRUCT([main_building, hall_sx, hall_room_sx, hall_dx, office_part1_sx, office_part1_dx,office_part2_sx, office_part2_dx])

floor0=pyplasm.STRUCT([main_b, hall_sx, hall_dx, office_1_sx, office_1_dx, office_2_sx, office_2_dx])

floor1=pyplasm.T(3)(5)(floor0)
# floor0=floor

# #Trraslo di 2 e 5.5
# floor1=pyplasm.T([1,2])([0,8])(floor)

# #floor1=pyplasm.S(2)(0.5)(floor1)


# #wall=pyplasm.JOIN([pyplasm.MK([-5.6,5]),pyplasm.MK([-3.6,9])])

# wall2=pyplasm.JOIN([pyplasm.MK([0,6.5]), pyplasm.MK([2,10.4])])

pyplasm.VIEW(pyplasm.STRUCT([floor0,floor1]))
# pyplasm.VIEW(pyplasm.JOIN([floor0, floor1]))


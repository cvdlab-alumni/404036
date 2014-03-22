import pyplasm

### MAIN BUILDING ###
main_building=pyplasm.JOIN([pyplasm.MK([0,0]),pyplasm.MK([7,0]), pyplasm.MK([7,6.5]), pyplasm.MK([0,6.5])])


### HALLS ###
#hall=pyplasm.CUBOID([2.6,2])

hall=pyplasm.JOIN([pyplasm.MK([0,0]),pyplasm.MK([2.6,0]), pyplasm.MK([2.6,2]), pyplasm.MK([0,2])])

hall_sx=pyplasm.T([1,2])([-2.6,2.0])(hall)

hall_dx=pyplasm.T([1,2])([7,2.0])(hall)


### OFFICES ###
#office_part1=pyplasm.CUBOID([3,4.8])

office_part1=pyplasm.JOIN([pyplasm.MK([0,0]),pyplasm.MK([3,0]), pyplasm.MK([3,4.8]), pyplasm.MK([0,4.8])])

office_part1_sx=pyplasm.T([1,2])([-5.6,0.2])(office_part1)

office_part1_dx=pyplasm.T([1,2])([9.6,0.2])(office_part1)

office_part2=pyplasm.JOIN([pyplasm.MK([0.2,0]),pyplasm.MK([0.2,-0.3]), pyplasm.MK([1,-1.1]), pyplasm.MK([2,-1.1]), pyplasm.MK([2.8,-0.3]), pyplasm.MK([2.8,0])])

#verts=[[0.2,0],[0.2,-0.3],[1,-1.1],[2,-1.1],[2.8,-0.3],[2.8,0]]

#cells=[[1,2,3,4,5,6]]

#polls=None

#office_part2=pyplasm.COLOR(pyplasm.GREEN)(pyplasm.MKPOL([verts, cells, polls]))

office_part2_sx=pyplasm.T([1,2])([-5.6,0.2])(office_part2)

office_part2_dx=pyplasm.T([1,2])([9.6,0.2])(office_part2)

#pyplasm.VIEW(pyplasm.STRUCT([main_building, hall_sx, hall_dx, office_part1_sx, office_part2_sx]))
floor=pyplasm.STRUCT([main_building, hall_sx, hall_dx, office_part1_sx, office_part1_dx,office_part2_sx, office_part2_dx])

floor0=pyplasm.COLOR([1,1,0.4])(floor)

floor1=pyplasm.T([1,2])([3,6])(pyplasm.COLOR([0.4,1,0.4])(floor))

pyplasm.VIEW(pyplasm.STRUCT([floor0, floor1]))





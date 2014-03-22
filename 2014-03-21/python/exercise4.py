import pyplasm

step1=pyplasm.T([1,2])([6,-0.9])(pyplasm.CUBOID([2,0.4,1]))
step2=pyplasm.T([1,2])([6,-1.1])(pyplasm.CUBOID([2,0.2,0.8]))
step3=pyplasm.T([1,2])([6,-1.3])(pyplasm.CUBOID([2,0.2,0.6]))
step4=pyplasm.T([1,2])([6,-1.5])(pyplasm.CUBOID([2,0.2,0.4]))
step5=pyplasm.T([1,2])([6,-1.7])(pyplasm.CUBOID([2,0.2,0.2]))

stairs=pyplasm.STRUCT([step1,step2,step3, step4, step5])

##########################################################


main_building=pyplasm.T(3)(1)(pyplasm.CUBOID([14,13,10]))
main_building_basement=pyplasm.T([1,2])([-0.5, -0.5])(pyplasm.CUBOID([15,14,1]))

#FINESTRE
window=pyplasm.COLOR([0.03, 0.9, 0.87])(pyplasm.CUBOID([0.82,13,1.4]))

window_main1=pyplasm.T([1,3])([1.4,3])(window)
window_main2=pyplasm.T([1,3])([3.8,3])(window)
window_main3=pyplasm.T([1,3])([9,3])(window)
window_main4=pyplasm.T([1,3])([11.6,3])(window)

door=pyplasm.COLOR([0.596, 0.462,0.329 ])(pyplasm.CUBOID([1.2,13,2.8]))

main_door=pyplasm.T([1,3])([6.4,1])(door)

low_windows_main= pyplasm.STRUCT([window_main1, window_main2, window_main3, window_main4])

upper_windows_main=pyplasm.T([1,3])([0,5.5])(low_windows_main)

central_window= pyplasm.T([1,3])([6.4,8.5])(window)

second_floor_main=pyplasm.COLOR([0.58, 0.3, 0.30])(pyplasm.T([1,2,3])([-0.1,-0.1,7])(pyplasm.CUBOID([14.2, 13.2, 0.5])))

main_building_complete=pyplasm.STRUCT([main_building, main_building_basement, low_windows_main, upper_windows_main, main_door, central_window, second_floor_main])
##################################
one_side_window=pyplasm.COLOR([0.03, 0.9, 0.87])(pyplasm.CUBOID([0.82,0,1.4]))
one_side_door=pyplasm.COLOR([0.596, 0.462,0.329])(pyplasm.CUBOID([1.2,0,2.8]))
double_windows=pyplasm.STRUCT([pyplasm.T([1,2,3])([0.8,4,2])(one_side_window),pyplasm.T([1,2,3])([4.2,4,2])(one_side_window) ])
door_hall=pyplasm.T([1,3])([1.7,0])(one_side_door)

hall = pyplasm.STRUCT([pyplasm.CUBOID([5.2,4,6]), double_windows, door_hall])

east_hall=pyplasm.T([1,2])([14, 4])(hall)

west_hall=pyplasm.T([1,2])([-5.2,4])(hall)

hall_complete=pyplasm.STRUCT([east_hall, west_hall])

##########################

double_windows_office= pyplasm.STRUCT([pyplasm.T([1,2,3])([1.6,9.6,2])(one_side_window),pyplasm.T([1,2,3])([3.6,9.6,2])(one_side_window) ])

upper_double_windows_office= pyplasm.T([3])([5.5])(double_windows_office)

second_floor_office=pyplasm.COLOR([0.58, 0.3, 0.30])(pyplasm.T([1,2,3])([-0.1,-0.1,6])(pyplasm.CUBOID([6.2, 9.8, 0.5])))

office = pyplasm.STRUCT([pyplasm.CUBOID([6, 9.6, 10]), double_windows_office, upper_double_windows_office, second_floor_office])

office_east =pyplasm.T([1,2])([19.2, 0.4])(office)

office_west =pyplasm.T([1,2])([-11.2, 0.4])(office)

base_halfe_octa=pyplasm.JOIN([pyplasm.MK([0.4,0]),pyplasm.MK([0.4,-0.6]), pyplasm.MK([2,-2.2]), pyplasm.MK([4,-2.2]), pyplasm.MK([5.6,-0.6]), pyplasm.MK([5.6,0])])



octa=pyplasm.JOIN([base_halfe_octa, pyplasm.T(3)(10)(base_halfe_octa)])
octa_west=pyplasm.T([1,2])([-11.2,0.4])(octa)
octa_east=pyplasm.T([1,2])([19.3,0.4])(octa)


#############


building=pyplasm.STRUCT([main_building_complete,hall_complete, office_east, office_west, octa_west, octa_east, stairs])

pyplasm.VIEW(building)

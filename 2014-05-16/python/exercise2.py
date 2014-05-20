from larcc import *

def tree(altezza, rTronco, rChioma):
	chioma=COLOR([0.050980,0.274509,0.054901,1])(SPHERE(rChioma)([32,32]))
	tronco=COLOR([0.396078,0.262745,0.129411,1])(JOIN([CIRCLE(rTronco)([32,32]), T(3)(altezza)(CIRCLE(rTronco)([32,32])) ]))
	tree=(STRUCT([tronco,T(3)(altezza)(chioma) ]))
	return tree;

DRAW = COMP([VIEW,STRUCT,MKPOLS])

def bezCurve(controlPoints):
	return STRUCT(MKPOLS(larMap(larBezierCurve(controlPoints))(larDomain([32]))))

def scale(larghezza, lunghezza, spessore, numero):
	s=CUBOID([larghezza, lunghezza, spessore])
	s=STRUCT([s,T([1,3])([larghezza,spessore])]*numero)
	return s

def sottrai(lista1, lista2):
	lst=[]
	for e in lista1:
		if e not in lista2:
			lst.append(e)
	return lst



def dis(pol):
	hpc=SKEL_1(STRUCT(MKPOLS(pol)))
	hpc = cellNumbering (pol,hpc)(range(len(pol[1])),CYAN,1)
	return hpc

""" rimuove una cella che va persa """
# def rem(list, pol):
# 	toRemove = list
# 	V,CV = pol
# 	pol = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
# 	return pol

""" rimuove una cella e la inserisce in una lista """
# def rem(toRemove, pol, addTo):
# 	V,CV=pol
# 	pol = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
# 	addTo=sottrai(CV,pol[1])
# 	return (pol,addTo )

def unisci(num,list1, list2, pol):
	merge=num
	room = assemblyDiagramInit(list1)(list2)
	pol_final = diagram2cell(room,pol,merge)
	return pol_final

def select(list, pol):
	lst=[]
	for i in list:
		lst.append(pol[1][i])
	return lst


""" ********************************************************************************************************************************************** """

house=assemblyDiagramInit([5,3,2])([[.3,5,.3,5.0,.3],[.3,10,.3],[.3,3]])

""" liste celle utili """
V,CV = house

""" Rinumero el celle """
hpc_house=dis(house)
# VIEW(hpc_house)

toMerge=21

""" Creo nuove stanze e innesto"""
stanze = assemblyDiagramInit([3,1,1])([[2.5,0.2,2.3],[.3],[2.2]])
house = diagram2cell(stanze,house,toMerge)


hpc_house=dis(house)
# VIEW(hpc_house)

toMerge=31

""" Camera, Bagno, Camera """
stanze = assemblyDiagramInit([3,5,1])([[1,0.3,4],[3,.2,3,.2,3],[2.2]])
house = diagram2cell(stanze,house,toMerge)

hpc_house=dis(house)
# VIEW(hpc_house)
toMerge=29

""" Bagno, Cucina, ingresso """
stanze = assemblyDiagramInit([1,5,1])([[5],[3,.2,3.5,.2,2.5],[2.2]])
house = diagram2cell(stanze,house,toMerge)

hpc_house=dis(house)
# VIEW(hpc_house)


""" porte """
toMerge=19
# cell = MKPOL([house[0],[[v+1 for v in  house[1][toMerge]]],None])
# VIEW(STRUCT([hpc_house,cell]))

house=unisci(toMerge,[3,1,1], [[14,1.1,13],[1],[1]], house)
hpc_house=dis(house)
# VIEW(hpc_house)

toMerge=49
# # # solidifico la stanza toMerge per vederla
# # cell = MKPOL([house[0],[[v+1 for v in  house[1][toMerge]]],None])
# # VIEW(STRUCT([hpc_house,cell]))
""" porta principale """
house = unisci(toMerge,[3,1,2],[[0.75,1,0.75],[.3],[2,1]],house)

# house= rem([40],house)
# # DRAW(house)
""" porta ingresso/cucina """
house = unisci(45,[3,1,2],[[0.75,1,0.75],[.3],[2,1]],house)
# hpc_house=dis(house)
""" porta ingresso/salone """
house = unisci(15,[1,4,2],[[.3],[1,1,1,6.4],[2,1]],house)
# hpc_house=dis(house)
""" porta /ingresso/camera"""
house = unisci(27,[1,4,2],[[.3],[1,1,1,6.4],[2,1]],house)
# hpc_house=dis(house)
""" porta camera1/bagno """
house = unisci(38,[3,1,2],[[0.7,1.5,0.7],[1],[2,1]],house)
# hpc_house=dis(house)
""" Divisione parete camera cucina"""
house = unisci(73,[1,2,1],[[1],[1,1],[1]],house)
# hpc_house=dis(house)
house = unisci(80,[1,3,1],[[1],[0.7,0.8,1.3],[1]],house)
# hpc_house=dis(house)
house = unisci(80,[1,3,1],[[1],[1.2,0.7,0.8],[1]],house)
# hpc_house=dis(house)
""" Finestre """
house = unisci(3,[1,9,3],[[1],[0.7,2.4,0.7,2.4,0.7,2.4,0.7,2.4,0.7],[1,1.5,0.5]],house)
# hpc_house=dis(house)

house = unisci(6,[5,1,3],[[1,1,1,1,1],[1],[1,1.5,0.5]],house)
hpc_house=dis(house)
house = unisci(44,[3,1,3],[[0.7,1,0.7],[1],[1,1.5,0.5]],house)
hpc_house=dis(house)
house = unisci(22,[1,5,3],[[1],[3,.2,3,.2,3],[1,1.5,0.5]],house)
hpc_house=dis(house)
house = unisci(140,[1,3,1],[[1],[1,1,1],[1]],house)
hpc_house=dis(house)
house = unisci(145,[1,3,1],[[1],[1,1,1],[1]],house)
hpc_house=dis(house)

porte=[45,51,57,65,72,77,80]
# porte=select(porte,house)
finestre=[104,98,92,86,113,119,128,147,150]
# finestre=select(finestre, house)
empty=[7,38,39,41,34,35,37,29,33,24,26,28,27]
# empty=select(empty, house)
wall=sottrai(sottrai(sottrai(range(len(house[1])-1),empty),finestre),porte)

print(len([1,2,3]))

# doors=house[0],porte
# windows=house[0],finestre
# empty=house[0],empty
apartment=house[0],select(wall,house)
# apartment=STRUCT(MKPOLS((apartment)))
# VIEW(apartment)

""" *************************************************************************************************************************** """
""" *************************************************************************************************************************** """
""" *********************************************** Exercise 2 **************************************************************** """
""" *************************************************************************************************************************** """
""" *************************************************************************************************************************** """

apartment2 = larApply(t(2,-10,0))(apartment)
apartment2 = larApply(s(1,-1,1))(apartment2)
print("*************************************************",apartment2)
# apartment2=STRUCT(MKPOLS((apartment2)))
# VIEW(apartment2)

# DRAW(house2)

building=assemblyDiagramInit([1,2,4])([[10],[10,10],[3,3,3,3]])
# DRAW(building)
hpc_building=dis(building)
	
# VIEW(hpc_building)

building = diagram2cell(apartment,building,0)

building = diagram2cell(apartment,building,0)
building = diagram2cell(apartment,building,0)
building = diagram2cell(apartment,building,0)

building = diagram2cell(apartment2,building,0)
building = diagram2cell(apartment2,building,0)
building = diagram2cell(apartment2,building,0)
building = diagram2cell(apartment2,building,0)
hpc_building=dis(building)
	
# VIEW(hpc_building)

# DRAW(building)

building_plasm=STRUCT(MKPOLS((building)))

""" Scala """
a=STRUCT([T([1,2])([4.75,20])(CUBOID([3,3,0.27]))])
b=STRUCT([T(2)(-23)(a)])
pian=STRUCT([a,b])
pian=STRUCT([pian,T(3)(3)]*4)


scala=STRUCT([T([1,2])([7.73,-2])(scale(0.35,1,0.27,6)),T([1,2,3])([9.83,-2,1.35])(R([1,2,])(PI)(scale(0.35,1,0.27,6)))])
scala_inv=STRUCT([T([1,2,3])([12.5,-4,3])(R([1,2])(PI)(scala))])
scala=STRUCT([T(3)(6)(scala), scala, scala_inv])
scala2=STRUCT([T([1,2])([12.5,20])(R([1,2])(PI)(scala))])

# VIEW(STRUCT([scala, scala2]))
""" Prato """
terreno=STRUCT([T([1,2,3])([-5,-5,-0.1])(CUBOID([30,30,0.1]))])
terreno=TEXTURE("../images/prato_02.jpg")(terreno)

""" Lake """
lake_1 = bezCurve([[0.709, 5.874], [1.009, 5.393], [0.567, 4.032], [1.276, 4.457]])
lake_2 = bezCurve([[1.276, 4.457], [1.984, 4.882], [2.409, 4.598], [2.693, 4.315]])
lake_3 = bezCurve([[2.693, 4.315], [2.976, 4.032], [4.677, 3.465], [4.252, 4.315]])
lake_4 = bezCurve([[4.252, 4.315], [3.827, 5.165], [4.819, 5.449], [4.819, 5.591]])
lake_5 = bezCurve([[4.819, 5.591], [4.819, 5.732], [5.386, 7.008], [3.968, 6.724]])
lake_6 = bezCurve([[3.968, 6.724], [2.551, 6.441], [3.402, 7.858], [2.268, 7.575]])
lake_7 = bezCurve([[2.268, 7.575], [1.134, 7.291], [0.0, 7.008], [0.709, 5.874]])

lake = S([1,2])([1.5,1.5])(SOLIDIFY(T([1,2])([7,-1])(STRUCT([lake_1,lake_2,lake_3,lake_4,lake_5,lake_6,lake_7]))))
lake= TEXTURE("../images/water_02.jpg")(lake)
# VIEW(lake)
""" Ponte """
bridge1 = larBezier(S1)([[15,-1,0],[16,-1,0],[17.5,-1,0]])
bridge2 = larBezier(S1)([[15,3,2],[16,3,2],[17.5,3,2]])
bridge3 = larBezier(S1)([[15,7,0],[16,7,0],[17.5,7,0]])
mapping = BEZIER(S2)([bridge1,bridge2,bridge3])
domain = larDomain([48,48])
surface = larMap(mapping)(domain)
bridge = STRUCT(MKPOLS(surface))

bridge= T([1,2])([-1,4])(STRUCT([bridge]))
bridge= TEXTURE("../images/wood_10.jpg")(bridge)

""" Tetto """
C_tetto=[[0,0,12],[10,0,12],[10,20,12],[0,20,12],[0,0,12.5],[10,0,12.5],[10,20,12.5],[0,20,12.5],[5,10,15]]
CV_tetto=[[0,1,2,3,4,5,6,7],[4,5,6,7,8]]

tetto=T([1,2])([-0.5,-1])(S([1,2])([1.1,1.1])(STRUCT(MKPOLS((C_tetto,CV_tetto)))))
tetto= TEXTURE("../images/tegole_03.jpg")(tetto)
# base=CUBOID([10,10])
# punta=MK([5,5,2])
# tetto=T(3)(12)(JOIN([base, punta]))


tree=T([1,2])([16,-2])(tree(9,0.4,3.0))

VIEW(STRUCT([pian, building_plasm, scala, scala2,terreno, lake, bridge, tree, tetto]))
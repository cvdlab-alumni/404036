from larcc import *

def tree(altezza, rTronco, rChioma):
	chioma=COLOR([0.050980,0.274509,0.054901,1])(SPHERE(rChioma)([32,32]))
	tronco=COLOR([0.396078,0.262745,0.129411,1])(JOIN([CIRCLE(rTronco)([32,32]), T(3)(altezza)(CIRCLE(rTronco)([32,32])) ]))
	tree=(STRUCT([tronco,T(3)(altezza)(chioma) ]))
	return tree;

DRAW = COMP([VIEW,STRUCT,MKPOLS])

def bezCurve(controlPoints):
	return STRUCT(MKPOLS(larMap(larBezierCurve(controlPoints))(larDomain([32]))))

def dis(pol):
	hpc=SKEL_1(STRUCT(MKPOLS(pol)))
	hpc = cellNumbering (pol,hpc)(range(len(pol[1])),CYAN,1)
	return hpc

def rem(list, pol):
	toRemove = list
	V,CV = pol
	pol = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
	return pol

def unisci(num,list1, list2, pol):
	merge=num
	room = assemblyDiagramInit(list1)(list2)
	pol_final = diagram2cell(room,pol,merge)
	return pol_final

def scale(larghezza, lunghezza, spessore, numero):
	s=CUBOID([larghezza, lunghezza, spessore])
	s=STRUCT([s,T([1,3])([larghezza,spessore])]*numero)
	return s



house=assemblyDiagramInit([5,3,2])([[.3,5,.3,5.0,.3],[.3,10,.3],[.3,3]])

V,CV = house

""" Creo il salone """
hpc_house=dis(house)
# VIEW(hpc_house)

""" Identifico rimuovo il blocco del salone"""
# toRemove = [9]
# house = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
house= rem([9],house)
# DRAW(house)

""" Rinumero el celle """
hpc_house=dis(house)
# VIEW(hpc_house)

""" Creo stanze piano terra destra """
stanze=assemblyDiagramInit([3,3,1])([[2.5,0.3,2.7],[3.5,6.5],[1]])

""" Mostro il blocco in cui innesto """
toMerge=20
# solidifico la stanza toMerge per vederla
cell = MKPOL([house[0],[[v+1 for v in  house[1][toMerge]]],None])
# VIEW(STRUCT([hpc_house,cell]))

""" Creo nuove stanze e innesto"""
stanze = assemblyDiagramInit([3,1,1])([[2.7,0.2,2.5],[.3],[2.2]])
house = diagram2cell(stanze,house,toMerge)

#rinumero
hpc_house=dis(house)
# VIEW(hpc_house)

toMerge=30
cell = MKPOL([house[0],[[v+1 for v in  house[1][toMerge]]],None])
# VIEW(STRUCT([hpc_house,cell]))

""" Camera, Bagno, Camera """
stanze = assemblyDiagramInit([3,5,1])([[1,0.3,4],[3,.2,3,.2,3],[2.2]])
house = diagram2cell(stanze,house,toMerge)

hpc_house=dis(house)
# VIEW(hpc_house)

# toRemove = [40,42,44,30,35,32,33,34,39]
# V,CV = house
# house = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
house= rem([40,42,44,30,35,32,33,34,39], house)
# DRAW(house)

hpc_house=dis(house)
# VIEW(hpc_house)

toMerge=28
cell = MKPOL([house[0],[[v+1 for v in  house[1][toMerge]]],None])
# VIEW(STRUCT([hpc_house,cell]))

""" Bagno, Cucina, ingresso """
stanze = assemblyDiagramInit([1,5,1])([[5],[3,.2,3.5,.2,2.5],[2.2]])
house = diagram2cell(stanze,house,toMerge)

hpc_house=dis(house)
# VIEW(hpc_house)

house=rem([35,37,39], house)
# DRAW(house)

""" porta"""
toMerge=18
cell = MKPOL([house[0],[[v+1 for v in  house[1][toMerge]]],None])
# VIEW(STRUCT([hpc_house,cell]))

house=unisci(toMerge,[3,1,1], [[14,1.1,13],[1],[1]], house)
# stanze = assemblyDiagramInit([3,1,1])([[14,1.1,13],[1],[1]])
# house = diagram2cell(stanze, house, toMerge)
hpc_house=dis(house)
# VIEW(hpc_house)

toMerge=36
# # solidifico la stanza toMerge per vederla
# cell = MKPOL([house[0],[[v+1 for v in  house[1][toMerge]]],None])
# VIEW(STRUCT([hpc_house,cell]))

house = unisci(36,[3,1,2],[[4,11,4],[.3],[2.2,.5]],house)
hpc_house=dis(house)
# VIEW(hpc_house)

house= rem([40],house)
# DRAW(house)

house = unisci(37,[3,1,3],[[4,8,4],[.3],[3,3,1.5]],house)
hpc_house=dis(house)
house = unisci(24,[1,5,3],[[.3],[3,.2,3.5,.2,2.5],[3,3,1.5]],house)
hpc_house=dis(house)
house = unisci(57,[1,3,1],[[.3],[1,1,1],[1]],house)
hpc_house=dis(house)
# house = unisci(62,[1,3,1],[[.3],[1,1,1],[1]],house)
# house = unisci(3,[1,5,3],[[1],[1,1,0.5,1,1],[1,2,1]],house)
# house = unisci(6,[5,1,3],[[1,1,0.5,1,1],[1],[1,2,1]],house)
# house = unisci(12,[1,3,2],[[1],[1,1,1],[2,1]],house)
# house = unisci(96,[1,3,1],[[1],[1,1,1],[1]],house)
# house = unisci(23,[1,3,2],[[1],[1,1,1],[2,1]],house)
# house = unisci(103,[1,3,1],[[1],[1,1,1],[1]],house)
# house = unisci(27,[3,1,2],[[0.5,1,0.5],[1],[2,1]],house)
# house = unisci(28,[3,1,2],[[0.5,1,0.5],[1],[2,1]],house)
# house = unisci(102,[1,3,1],[[1],[1,1,1],[1]],house)
# house = unisci(103,[1,3,1],[[1],[1,1,1],[1]],house)
# house = unisci(8,[5,1,3],[[1,1,0.5,1,1],[1],[1,2,1]],house)
# house = unisci(44,[1,3,1],[[1],[1,1,1],[1]],house)
# house = unisci(16,[5,1,3],[[1,1,1,1,0.8],[1],[1,1,1]],house)
# hpc_house=dis(house)

house = unisci(62,[1,3,1],[[.3],[1,1,1],[1]],house)
house = unisci(3,[1,5,3],[[1],[1,1,0.5,1,1],[1,2,1]],house)
house = unisci(6,[5,1,3],[[1,1,0.5,1,1],[1],[1,2,1]],house)
house = unisci(12,[1,3,2],[[1],[1,1,1],[2,1]],house)
house = unisci(96,[1,3,1],[[1],[1,1,1],[1]],house)
house = unisci(23,[1,3,2],[[1],[1,1,1],[2,1]],house)
house = unisci(103,[1,3,1],[[1],[1,1,1],[1]],house)
house = unisci(27,[3,1,2],[[0.5,1,0.5],[1],[2,1]],house)
house = unisci(28,[3,1,2],[[0.5,1,0.5],[1],[2,1]],house)
house = unisci(102,[1,3,1],[[1],[1,1,1],[1]],house)
house = unisci(103,[1,3,1],[[1],[1,1,1],[1]],house)
hpc_house=dis(house)
# VIEW(hpc_house)

house= rem([73,67,82,88,39,58,61, 99, 105, 109, 115,120, 123],house)
# VIEW(hpc_house)
# DRAW(house)



""" *************************************************************************************************************************** """
""" *************************************************************************************************************************** """
""" *********************************************** Exercise 2 **************************************************************** """
""" *************************************************************************************************************************** """
""" *************************************************************************************************************************** """

house2 = larApply(t(2,2,0))(house)
house2 = larApply(s(1,-1,1))(house2)

# DRAW(house2)

building=assemblyDiagramInit([1,2,4])([[10],[5,5],[3,3,3,3]])
# DRAW(building)
hpc_building=dis(building)
	
# VIEW(hpc_building)

building = diagram2cell(house,building,0)

building = diagram2cell(house,building,0)
building = diagram2cell(house,building,0)
building = diagram2cell(house,building,0)

building = diagram2cell(house2,building,0)
building = diagram2cell(house2,building,0)
building = diagram2cell(house2,building,0)
building = diagram2cell(house2,building,0)
hpc_building=dis(building)
	
# VIEW(hpc_building)

# DRAW(building)

building_plasm=STRUCT(MKPOLS((building)))

""" Scala """
a=STRUCT([T([1,2])([4.75,10])(CUBOID([3,3,0.27]))])
b=STRUCT([T(2)(-13)(a)])
pian=STRUCT([a,b])
pian=STRUCT([pian,T(3)(3)]*4)


scala=STRUCT([T([1,2])([7.73,-2])(scale(0.35,1,0.27,6)),T([1,2,3])([9.83,-2,1.35])(R([1,2,])(PI)(scale(0.35,1,0.27,6)))])
scala_inv=STRUCT([T([1,2,3])([12.5,-4,3])(R([1,2])(PI)(scala))])
scala=STRUCT([T(3)(6)(scala), scala, scala_inv])
scala2=STRUCT([T([1,2])([12.5,10])(R([1,2])(PI)(scala))])

# VIEW(STRUCT([scala, scala2]))
""" Prato """
terreno=STRUCT([T([2,3])([-5,-0.1])(CUBOID([20,20,0.1]))])
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
base=CUBOID([10,10])
punta=MK([5,5,2])
tetto=T(3)(12)(JOIN([base, punta]))


tree=T([1,2])([16,-2])(tree(9,0.4,3.0))

VIEW(STRUCT([pian, building_plasm, tetto, scala, scala2,terreno, lake, bridge, tree]))
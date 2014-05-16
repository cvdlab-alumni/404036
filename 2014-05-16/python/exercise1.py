from larcc import *

DRAW = COMP([VIEW,STRUCT,MKPOLS])

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
VIEW(hpc_house)

house= rem([73,67,82,88,39,58,61, 99, 105, 109, 115,120, 123],house)
DRAW(house)
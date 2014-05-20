from larcc import *

DRAW = COMP([VIEW,STRUCT,MKPOLS])

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
wall=house[0],select(wall,house)

VIEW(STRUCT(MKPOLS((wall))))


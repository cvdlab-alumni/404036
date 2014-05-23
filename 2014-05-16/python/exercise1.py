from larcc import *

DRAW = COMP([VIEW,STRUCT,MKPOLS])

# glass_material = [0.3,0.4,0.3,0.5,  0,0,0,0.5,  2,2,2,0.5, 0,0,0,0.5, 100]
glass_material = [0,1,1,0.2,  0,0,0,0.5,  2,2,2,0.5, 0,0,0,0.5, 100]

def sottrai(lista1, lista2):
	lst=[]
	for e in lista1:
		if e not in lista2:
			lst.append(e)
	return lst

def dis(pol):
	hpc=SKEL_1(STRUCT(MKPOLS(pol)))
	hpc = cellNumbering (pol,hpc)(range(len(pol[1])),CYAN,.5)
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

house=assemblyDiagramInit([5,3,2])([[.8,9.4,.30,13.3,.8],[.8,20,.8],[.8,6]])

hpc_house=dis(house)
# VIEW(hpc_house)

toMerge=21

""" divisione ingresso/camera1 """
stanze = assemblyDiagramInit([3,1,1])([[4.4,.30,8.60],[1],[3]])
house = diagram2cell(stanze,house,toMerge)
hpc_house=dis(house)
# VIEW(hpc_house)

toMerge=31

""" Camera1, Bagno1, Camera2 """
stanze = assemblyDiagramInit([3,5,1])([[2.4,0.3,6],[5.40,.30,5.4,.3,7.7],[3]])
house = diagram2cell(stanze,house,toMerge)
hpc_house=dis(house)
# VIEW(hpc_house)

toMerge=29

""" Ingresso, Cucina, Bagno2 """
stanze = assemblyDiagramInit([1,5,1])([[5],[6.6,.3,8.2,.3,4.6],[3]])
house = diagram2cell(stanze,house,toMerge)
hpc_house=dis(house)
# VIEW(hpc_house)

""" porte """
toMerge=19
# cell = MKPOL([house[0],[[v+1 for v in  house[1][toMerge]]],None])
# VIEW(STRUCT([hpc_house,cell]))

house=unisci(toMerge,[3,1,1], [[22,1.5,43],[10],[10]], house)
hpc_house=dis(house)
# VIEW(hpc_house)

toMerge=49
""" buco porta blindata """
house = unisci(toMerge,[3,1,2],[[0.25,1.7,0.25],[.3],[2.2,0.8]],house)

""" buco porta ingresso/cucina """
house = unisci(45,[3,1,2],[[0.7,0.8,0.7],[.3],[2.1,0.9]],house)
# # hpc_house=dis(house)

""" muro -> porta ingresso/salone """
house = unisci(15,[1,4,2],[[.3],[1.25,0.8,1.25,6.7],[2.1,0.9]],house)
# # hpc_house=dis(house)

""" buco porta ingresso/camera"""
house = unisci(27,[1,4,2],[[.3],[1.25,0.8,1.25,6.7],[2.1,0.9]],house)
# # hpc_house=dis(house)

""" buco porta camera1/bagno """
house = unisci(38,[3,1,2],[[1.1,0.8,1.1],[1],[2.1,0.9]],house)
# # hpc_house=dis(house)

""" Divisione parete camera cucina """
house = unisci(73,[1,2,1],[[1],[2.4,4],[1]],house)
# # hpc_house=dis(house)

""" buco porta cucina/camera2""" 
house = unisci(80,[1,3,1],[[1],[0.6,0.8,1],[1]],house)
# # hpc_house=dis(house)

""" buco porta camera2/bagno2 """
house = unisci(80,[1,3,1],[[1],[2.45,0.8,0.75],[1]],house)
# # hpc_house=dis(house)

""" buco Finestre salone lato lungo """
house = unisci(3,[1,9,3],[[1],[0.72,1.6,0.72,1.6,0.72,1.6,0.72,1.6,0.72],[1,1.5,0.5]],house)
# # hpc_house=dis(house)

""" buco Finestre salone lato corto """
house = unisci(6,[5,1,3],[[1.25,1,0.5,1,1.25],[1],[1,1.2,0.8]],house)
# hpc_house=dis(house)

""" buco Finestra Camera1 """
house = unisci(44,[3,1,3],[[2,1,1.3],[1],[1,1.2,0.8]],house)
# hpc_house=dis(house)

""" Divisione musro esterno camera1/bagno1/camera2 """
house = unisci(22,[1,5,3],[[1],[2.7,.15,2.7,.15,3.85],[1,1.2,0.8]],house)
# hpc_house=dis(house)

""" buco Finestre Camera Bagno1 """
house = unisci(140,[1,3,1],[[1],[0.85,1,0.85],[1]],house)
# hpc_house=dis(house)

""" buco Finestre Camera2 """
house = unisci(145,[1,3,1],[[1],[1.425,1,1.425],[1]],house)
hpc_house=dis(house)

""" porta blindata """
house = unisci(45,[2,3,1],[[0.85,0.85],[0.15,.1,.15],[1]],house)

""" porte generiche """
house = unisci(56,[3,1,1],[[0.055,0.04,0.055],[1],[1]],house)

house = unisci(63,[3,1,1],[[0.055,0.04,0.055],[1],[1]],house)


house = unisci(74,[3,1,1],[[0.055,0.04,0.055],[1],[1]],house)

house = unisci(76,[3,1,1],[[0.055,0.04,0.055],[1],[1]],house)

house = unisci(50,[1,3,1],[[1],[0.055,0.04,0.055],[1]],house)

""" telaio finestre """
house = unisci(122,[1,3,1],[[1],[.14, .12, .14],[1]],house)
house = unisci(167,[5,1,3],[[.1,.6,.1,.6,.1],[1],[.1,1,.1]],house)

house = unisci(140,[3,1,1],[[.14, .12, .14],[1],[1]],house)
house = unisci(183,[1,5,3],[[1],[.1,.6,.1,.6,.1],[.1,1,.1]],house)

house = unisci(142,[3,1,1],[[.14, .12, .14],[1],[1]],house)
house = unisci(199,[1,5,3],[[1],[.1,.6,.1,.6,.1],[.1,1,.1]],house)

house = unisci(113,[1,3,1],[[1],[.14, .12, .14],[1]],house)
house = unisci(215,[5,1,3],[[.1,.6,.1,.6,.1],[1],[.1,1,.1]],house)

house = unisci(107,[1,3,1],[[1],[.14, .12, .14],[1]],house)
house = unisci(231,[5,1,3],[[.1,.6,.1,.6,.1],[1],[.1,1,.1]],house)

house = unisci(80,[3,1,1],[[.14, .12, .14],[1],[1]],house)
house = unisci(85,[3,1,1],[[.14, .12, .14],[1],[1]],house)
house = unisci(90,[3,1,1],[[.14, .12, .14],[1],[1]],house)
house = unisci(95,[3,1,1],[[.14, .12, .14],[1],[1]],house)

house = unisci(68,[1,3,1],[[1],[0.055,0.04,0.055],[1]],house)

hpc_house=dis(house)

# porte=[45,51,57,65,72,77,80]
porte=[137,140, 143, 146, 149, 152, 155, 255]
porte_CV=select(porte,house)

# finestre=[104,98,92,86,113,119,128,147,150]
finestre=[214,220, 231, 237, 243, 246,249, 252, 163, 169, 180, 186, 197, 203]
finestre_CV=select(finestre, house)

telaio_fin=[227,228,229,230,232,233,234,235,236,238,239,240,241, 210,211,212,213,215,216,217,218,219,221,222,223,224, 
			159,160,161,162,164,165,166,167,168,170,171,172,173, 176,177,178,179,181,182,183,184,185,187,188,189,190,
			193,194,195,196,198,199,200,201,202,204,205,206,207]
telaio_fin_CV=select(telaio_fin, house)

empty=[7,27,38,39,41,24,26,28,29,33,34,35,37, 225,226, 245,247, 248,250, 251,253, 242,244, 208,209, 157,158, 174,175, 191,192, 136,138, 139,141, 142,144, 145,147, 148,150, 151,153, 154,156, 254,256]
empty_CV=select(empty, house)

wall=sottrai(sottrai(sottrai(sottrai(range(len(house[1])),empty),finestre),porte),telaio_fin)
wall_CV=select(wall, house)


porte_lar=house[0],porte_CV
porte_hpc=COLOR(RED)(STRUCT(MKPOLS((porte_lar))))
finestre_lar=house[0],finestre_CV
finestre_hpc=MATERIAL(glass_material)(STRUCT(MKPOLS((finestre_lar))))
empty_lar=house[0],empty_CV
empty_hpc=(STRUCT(MKPOLS((empty_lar))))
wall_lar=house[0],wall_CV
wall_hpc=(STRUCT(MKPOLS((wall_lar))))
telaio_fin_lar=house[0],telaio_fin_CV
telaio_fin_hpc=COLOR(BROWN)(STRUCT(MKPOLS((telaio_fin_lar))))
VIEW(hpc_house)
VIEW(STRUCT([porte_hpc,finestre_hpc, telaio_fin_hpc, wall_hpc]))


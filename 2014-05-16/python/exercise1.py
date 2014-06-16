from larcc import *

DRAW = COMP([VIEW,STRUCT,MKPOLS])



# glass_material = [0.3,0.4,0.3,0.5,  0,0,0,0.5,  2,2,2,0.5, 0,0,0,0.5, 100]
# glass_material = [0,1,1,0.2,  0,0,0,0.5,  2,2,2,0.5, 0,0,0,0.5, 100]
glass_material = [0.7086,1,1,0.2,  0,0,0,0.5,  2,2,2,0.5, 0,0,0,0.5, 100]

def sottrai(lista1, lista2):
	lst=[]
	for e in lista1:
		if e not in lista2:
			lst.append(e)
	return lst

# Removes cells from diagram
def removeCells(diagram,cells_tr):
	V,CV = diagram
	return V,[cell for k,cell in enumerate(CV) if not (k in cells_tr)]


def dis(pol):
	hpc=SKEL_1(STRUCT(MKPOLS(pol)))
	hpc = cellNumbering (pol,hpc)(range(len(pol[1])),CYAN,1)
	return hpc

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

house=assemblyDiagramInit([5,3,2])([[.8,9.4,.30,13.3,.8],[.8,20,.8],[.8,6]])

# hpc_house=dis(house)

toMerge=21

""" divisione ingresso/camera1 """
stanze = assemblyDiagramInit([3,1,1])([[4.4,.30,8.60],[1],[3]])
house = diagram2cell(stanze,house,toMerge)
# hpc_house=dis(house)

toMerge=31

""" Camera1, Bagno1, Camera2 """
stanze = assemblyDiagramInit([3,5,1])([[2.4,0.3,6],[5.40,.30,5.4,.3,7.7],[3]])
house = diagram2cell(stanze,house,toMerge)
# hpc_house=dis(house)

toMerge=29

""" Ingresso, Cucina, Bagno2 """
stanze = assemblyDiagramInit([1,5,1])([[5],[6.6,.3,8.2,.3,4.6],[3]])
house = diagram2cell(stanze,house,toMerge)
# hpc_house=dis(house)

""" porte """
toMerge=19
# cell = MKPOL([house[0],[[v+1 for v in  house[1][toMerge]]],None])
# VIEW(STRUCT([hpc_house,cell]))

house=unisci(toMerge,[3,1,1], [[22,1.5,43],[10],[10]], house)
# hpc_house=dis(house)

toMerge=49
# """ buco porta blindata """
house = unisci(toMerge,[3,1,2],[[0.25,1.7,0.25],[.3],[2.2,0.8]],house)

# """ buco porta ingresso/cucina """
house = unisci(45,[3,1,2],[[0.7,0.8,0.7],[.3],[2.1,0.9]],house)
# # hpc_house=dis(house)

# """ muro -> porta ingresso/salone """
house = unisci(15,[1,4,2],[[.3],[1.25,0.8,1.25,6.7],[2.1,0.9]],house)
# # hpc_house=dis(house)

# """ buco porta ingresso/camera"""
house = unisci(27,[1,4,2],[[.3],[1.25,0.8,1.25,6.7],[2.1,0.9]],house)
# # hpc_house=dis(house)

# """ buco porta camera1/bagno """
house = unisci(38,[3,1,2],[[1.1,0.8,1.1],[1],[2.1,0.9]],house)
# # hpc_house=dis(house)

# """ Divisione parete camera cucina """
house = unisci(73,[1,2,1],[[1],[2.4,4],[1]],house)
# # hpc_house=dis(house)

# """ buco porta cucina/camera2""" 
house = unisci(80,[1,3,1],[[1],[0.6,0.8,1],[1]],house)
# # hpc_house=dis(house)

# """ buco porta camera2/bagno2 """
house = unisci(80,[1,3,1],[[1],[2.45,0.8,0.75],[1]],house)
# # hpc_house=dis(house)

""" buco Finestre salone lato lungo """
house = unisci(3,[1,9,3],[[1],[0.72,1.6,0.72,1.6,0.72,1.6,0.72,1.6,0.72],[1,1.5,0.5]],house)
# hpc_house=dis(house)

""" buco Finestre salone lato corto """
house = unisci(6,[5,1,3],[[1.25,1,0.5,1,1.25],[1],[1,1.2,0.8]],house)
# hpc_house=dis(house)

""" buco Finestra Camera1 """
house = unisci(44,[3,1,3],[[2,1,1.3],[1],[1,1.2,0.8]],house)
# hpc_house=dis(house)

""" Divisione muro esterno camera1/bagno1/camera2 """
house = unisci(22,[1,5,3],[[1],[2.7,.15,2.7,.15,3.85],[1,1.2,0.8]],house)
# hpc_house=dis(house)

""" buco Finestre Camera Bagno1 """
house = unisci(140,[1,3,1],[[1],[0.85,1,0.85],[1]],house)
# hpc_house=dis(house)

""" buco Finestre Camera2 """
house = unisci(145,[1,3,1],[[1],[1.425,1,1.425],[1]],house)
# hpc_house=dis(house)

""" porta corridoio cucina salone """
house = unisci(61,[1,3,1],[[1],[5.05,1,0.65],[1]],house)

hpc_house=dis(house)
VIEW(hpc_house)
# # # # ########
empty=[103, 97, 91, 85, 112, 118, 45, 127, 146, 149, 7,  38, 39, 41, 34, 35, 37, 51, 57, 64, 24, 26, 29, 27, 33, 71, 28, 79, 152, 76]

apartment = removeCells(house, empty)
# print(house)
# hpc_house=dis(a)
# VIEW(hpc_house)

# V1=a[0]
# CV1=a[1]
# print CV1
DRAW(apartment)
# #######


# """ porta blindata """
# house = unisci(45,[2,3,1],[[0.85,0.85],[0.15,.1,.15],[1]],house)

# """ porte generiche """
# house = unisci(56,[3,1,1],[[0.055,0.04,0.055],[1],[1]],house)

# house = unisci(63,[3,1,1],[[0.055,0.04,0.055],[1],[1]],house)


# house = unisci(74,[3,1,1],[[0.055,0.04,0.055],[1],[1]],house)

# house = unisci(76,[3,1,1],[[0.055,0.04,0.055],[1],[1]],house)

# house = unisci(50,[1,3,1],[[1],[0.055,0.04,0.055],[1]],house)


# """ telaio finestre """
# house = unisci(122,[1,3,1],[[1],[.14, .12, .14],[1]],house)
# house = unisci(167,[5,1,3],[[.1,.6,.1,.6,.1],[1],[.1,1,.1]],house)

# house = unisci(140,[3,1,1],[[.14, .12, .14],[1],[1]],house)
# house = unisci(183,[1,5,3],[[1],[.1,.6,.1,.6,.1],[.1,1,.1]],house)

# house = unisci(142,[3,1,1],[[.14, .12, .14],[1],[1]],house)
# house = unisci(199,[1,5,3],[[1],[.1,.6,.1,.6,.1],[.1,1,.1]],house)

# house = unisci(113,[1,3,1],[[1],[.14, .12, .14],[1]],house)
# house = unisci(215,[5,1,3],[[.1,.6,.1,.6,.1],[1],[.1,1,.1]],house)

# house = unisci(107,[1,3,1],[[1],[.14, .12, .14],[1]],house)
# house = unisci(231,[5,1,3],[[.1,.6,.1,.6,.1],[1],[.1,1,.1]],house)

# house = unisci(80,[3,1,1],[[.14, .12, .14],[1],[1]],house)
# house = unisci(85,[3,1,1],[[.14, .12, .14],[1],[1]],house)
# house = unisci(90,[3,1,1],[[.14, .12, .14],[1],[1]],house)
# house = unisci(95,[3,1,1],[[.14, .12, .14],[1],[1]],house)

# house = unisci(68,[1,3,1],[[1],[0.055,0.04,0.055],[1]],house)

# house = unisci(58,[1,3,1],[[1],[5.05,1,0.65],[1]],house)
# house = unisci(257,[3,1,1],[[0.055,0.04,0.055],[1],[1]],house)

# hpc_house=dis(house)
# VIEW(hpc_house)

# porte=[136,139, 142, 145, 148, 151, 154, 254, 259]
# porte_CV=select(porte,house)

# finestre=[213,219, 230, 236, 242, 245,248, 251, 162, 168, 179, 185, 196, 202]
# finestre_CV=select(finestre, house)

# telaio_fin=[226,227,228,229, 231,232,233,234,235, 237,238,239,240,   209,210,211,212, 214,215,216,217,218, 220,221,222,223, 
# 			158,159,160,161, 163,164,165,166,167, 169,170,171,172,   175,176,177,178, 180,181,182,183,184, 186,187,188,189,
# 			192,193,194,195, 197,198,199,200,201, 203,204,205,206]
# telaio_fin_CV=select(telaio_fin, house)

# empty=[7,27,38,39,41,24,26,28,29,33,34,35,37, 224,225, 244,246, 247,249, 250,252, 241,243, 207,208, 156,157, 173,174, 190,191, 135,137, 138,140, 141,143, 144,146, 147,149, 150,152, 153,155, 253,255, 258,260]
# empty_CV=select(empty, house)

# wall=sottrai(sottrai(sottrai(sottrai(range(len(house[1])),empty),finestre),porte),telaio_fin)
# wall_CV=select(wall, house)

# # lcv = porte + finestre + telaio_fin +empty 
# # print lcv
# # print (house)

# porte_lar=house[0],porte_CV
# porte_hpc=COLOR([0.372549,0.372549,0.372549])(STRUCT(MKPOLS((porte_lar))))

# finestre_lar=house[0],finestre_CV
# finestre_hpc=MATERIAL(glass_material)(STRUCT(MKPOLS((finestre_lar))))

# empty_lar=house[0],empty_CV
# empty_hpc=(STRUCT(MKPOLS((empty_lar))))

# wall_lar=house[0],wall_CV
# wall_hpc=COLOR([1,0.960784,0.933333])(STRUCT(MKPOLS((wall_lar))))

# telaio_fin_lar=house[0],telaio_fin_CV
# telaio_fin_hpc=COLOR([0,0,0])(STRUCT(MKPOLS((telaio_fin_lar))))

# VIEW(hpc_house)
# VIEW(STRUCT([wall_hpc]))
# # print(len(house[1]))

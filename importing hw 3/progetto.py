from larcc import *

DRAW = COMP([VIEW,STRUCT,MKPOLS])
def removeCells(diagram,cells_tr):
	V,CV = diagram
	return V,[cell for k,cell in enumerate(CV) if not (k in cells_tr)]

def extractFacets(master, emptyChain=[]):
    solidCV = [cell for k,cell in enumerate(master[1]) if not (k in emptyChain)]
    exteriorCV =  [cell for k,cell in enumerate(master[1]) if k in emptyChain]
    exteriorCV += exteriorCells(master)
    CV = solidCV + exteriorCV
    V = master[0]
    FV = [f for f in larFacets((V,CV),3,len(exteriorCV))[1] if len(f) >= 4]
    BF = boundaryCells(solidCV,FV)
    boundaryFaces = [FV[face] for face in BF]
    B_Rep = V,boundaryFaces
    return B_Rep

def objExporter((V,FV), filePath):
    out_file = open(filePath,"w")
    out_file.write("# List of Vertices:\n")
    for v in V:
        out_file.write("v")
        for c in v:
            out_file.write(" " + str(c))
        out_file.write("\n")
    out_file.write("# Face Definitions:\n")
    for f in FV:
        out_file.write("f")
        for v in f:
            out_file.write(" " + str(v+1))
        out_file.write("\n")
    out_file.close()



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

house=assemblyDiagramInit([9,11,2])([[.8,9.4,.30,4.4,.30,2.3,0.3,6,.8],[.8,5.4,0.3,0.9,0.3,4.2,0.3,3.7,0.3,4.6,.8],[.8,6]])

""" buco porta blindata """
house = unisci(67,[3,1,2],[[0.25,1.7,0.25],[.3],[2.2,0.8]],house)

""" buco porta ingresso/disimpegno """
house = unisci(74,[3,1,2],[[0.7,0.8,0.7],[.3],[2.1,0.9]],house)
# # hpc_house=dis(house)

""" muro -> porta ingresso/salone """
house = unisci(47,[1,3,2],[[.3],[0.95,0.8,0.95],[2.1,0.9]],house)
# # hpc_house=dis(house)

""" buco porta ingresso/camera"""
house = unisci(88,[1,3,2],[[.3],[0.95,0.8,0.95],[2.1,0.9]],house)
# # hpc_house=dis(house)

""" buco porta camera1/bagno """
house = unisci(155,[3,1,2],[[1.1,0.8,1.1],[1],[2.1,0.9]],house)
# # hpc_house=dis(house)

# # """ Divisione parete camera cucina """
# house = unisci(73,[1,2,1],[[1],[2.4,4],[1]],house)
# # # hpc_house=dis(house)

""" buco porta disimpegno/cucina""" 
house = unisci(95,[1,3,2],[[1],[0.9,1.6,1.7],[2.1,0.9]],house)
# # # hpc_house=dis(house)

""" buco porta cucina/corridoio """
house = unisci(102,[1,3,2],[[1],[1.5,1.6,1.5],[2.1,0.9]],house)
# # # hpc_house=dis(house)

""" porta corridoio cucina salone """
house = unisci(62,[1,3,2],[[1],[1.5,1.6,1.5],[2.1,0.9]],house)

""" buco Finestre salone lato corto """
house = unisci(23,[5,1,3],[[2.2,2,1,2,2.2],[1],[1,1.2,0.8]],house)
# # hpc_house=dis(house)

""" buco Finestra Camera1 """
house = unisci(147,[3,1,3],[[2.4,2,1.6],[1],[1,1.2,0.8]],house)
# # hpc_house=dis(house)

# """ Divisione muro esterno camera1/bagno1/camera2 """
# house = unisci(22,[1,5,3],[[1],[2.7,.15,2.7,.15,3.85],[1,1.2,0.8]],house)
# # hpc_house=dis(house)

""" buco Finestre Camera Bagno1 """
house = unisci(177,[1,3,3],[[1],[0.,2,1.7],[1,1.2,0.8]],house)
# # hpc_house=dis(house)

""" buco Finestre cucina """
house = unisci(184,[1,2,3],[[1],[2,2.6],[1,1.2,0.8]],house)
# # hpc_house=dis(house)

""" buco Finestre salone lato lungo """
house = unisci(3,[1,3,3],[[1],[1.44,3.2,0.76],[1,1.5,0.5]],house)
#spessore 0.9
house = unisci(6,[1,2,3],[[1],[0.38,0.52],[1,1.5,0.5]],house)
#spessore 0.3
house = unisci(7,[1,1,3],[[1],[1],[1,1.5,0.5]],house)
#spessore 4.2
house = unisci(8,[1,3,3],[[1],[2.38,1.44,0.38],[1,1.5,0.5]],house)
#spessore 0.3
house = unisci(9,[1,1,3],[[1],[1],[1,1.5,0.5]],house)
#spessore 3.7
house = unisci(10,[1,2,3],[[1],[2.52, 1.18],[1,1.5,0.5]],house)
#spessore 0.3
house = unisci(11,[1,2,3],[[1],[0.26,0.04],[1,1.5,0.5]],house)
#spessore 4.6
house = unisci(12,[1,2,3],[[1],[3.16, 1.44],[1,1.5,0.5]],house)

print("Vertici ------------> ",len(house[0]))



# # hpc_house=dis(house)

emptyChain = [16,18,20,22,24,26,28,38, 30,32,222,  57,59,61,186,64,66,68,72,   198,192,  97,119,140,204,143,145,147,	101,103,105,107,109,131,151,153,155,135,113,111,216,210,133, 180,
				245, 254,260, 230,236,269, 278,281,284, 290,293,296, 308,305]

hpc_house=dis(house)
VIEW(hpc_house)

a = removeCells(house, emptyChain)
DRAW(a)

master = house

# # solidCV = [cell for k,cell in enumerate(master[1]) if not (k in emptyChain)]
# # DRAW((master[0],solidCV))

# # exteriorCV =  [cell for k,cell in enumerate(master[1]) if k in emptyChain]
# # exteriorCV += exteriorCells(master)
# # CV = solidCV + exteriorCV
# # V = master[0]
# # FV = [f for f in larFacets((V,CV),3,len(exteriorCV))[1] if len(f) >= 4]
# # """ Qui non viene visualizzato il muro """
# # VIEW(EXPLODE(1.5,1.5,1.5)(MKPOLS((V,FV)))) 

# # BF = boundaryCells(solidCV,FV)
# # boundaryFaces = [FV[face] for face in BF]
# # B_Rep = V,boundaryFaces
# # VIEW(EXPLODE(1.1,1.1,1.1)(MKPOLS(B_Rep)))
# # VIEW(STRUCT(MKPOLS(B_Rep)))


# # verts, triangles = quads2tria(B_Rep)
# # B_Rep = V,boundaryFaces
# # VIEW(EXPLODE(1.1,1.1,1.1)(MKPOLS((verts, triangles))))
# # VIEW(STRUCT(MKPOLS((verts, triangles))))

b_rep = extractFacets(master, emptyChain)
verts, triangles = quads2tria(b_rep)
objExporter((verts, triangles),"proj.obj")
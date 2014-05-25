from larcc import *

glass_material = [0.7086,1,1,0.2,  0,0,0,0.5,  2,2,2,0.5, 0,0,0,0.5, 100]

def updateIndex(lista, k, celleTot):
	lst=[]
	for y in range(k):
		for i in range(len(lista)):
			lst.append(lista[i]+(y*celleTot))
	return lst


def makeTree(altezza, rTronco, rChioma):
	chioma=COLOR([0.050980,0.274509,0.054901,1])(STRUCT(MKPOLS(larSphere(rChioma)())))
	tronco=COLOR([0.396078,0.262745,0.129411,1])(STRUCT(MKPOLS(larCylinder(rTronco, altezza)())))
	tree=(STRUCT([tronco,T(3)(altezza)(chioma) ]))
	return tree;

DRAW = COMP([VIEW,STRUCT,MKPOLS])

def bezCurve(controlPoints):
	return STRUCT(MKPOLS(larMap(larBezierCurve(controlPoints))(larDomain([32]))))

	
def multiply(n,tvect,model):
	oldV,oldCV=model
	# transform points from integer to float
	oldV = AA(AA (lambda x: float(x))) (oldV)
	# add 2nd dimension to tvect if necessary
	if len(tvect)==1:
		tvect = tvect+[0]
	# add 3rd dimension to points if necessary
	if len(oldV[0])<len(tvect):
		oldV = AA ( lambda x: x+[0.0] ) (oldV)
	newV = oldV
	newCV = oldCV
	# each iteration multiplies the model
	for i in range(1,n):
		# translate points of "tvect*i"
		newV = newV + translatePoints(oldV, AA(lambda x: x*i)(tvect))
		# create new cells, related to above points
		newCV = newCV + AA(AA(lambda x: x+(len(oldV)*i)))(oldCV)
	return newV,newCV

def scale(larghezza, lunghezza, spessore, numero):
	s=[[0,0,0],[larghezza,0,0],[larghezza, lunghezza, 0],[0,lunghezza, 0],[0,0,spessore],[larghezza, 0,spessore],[larghezza, lunghezza, spessore],[0, lunghezza, spessore]], [[0,1,2,3,4,5,6,7]]
	s=multiply(numero, (larghezza, 0, spessore), s)
	print(s)
	s=(STRUCT(MKPOLS((s))))
	return s

DRAW = COMP([VIEW,STRUCT,MKPOLS])

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
""" buco porta blindata """
house = unisci(toMerge,[3,1,2],[[0.25,1.7,0.25],[.3],[2.2,0.8]],house)

""" buco porta ingresso/cucina """
house = unisci(45,[3,1,2],[[0.7,0.8,0.7],[.3],[2.1,0.9]],house)
# hpc_house=dis(house)

""" muro -> porta ingresso/salone """
house = unisci(15,[1,4,2],[[.3],[1.25,0.8,1.25,6.7],[2.1,0.9]],house)
# hpc_house=dis(house)

""" buco porta ingresso/camera"""
house = unisci(27,[1,4,2],[[.3],[1.25,0.8,1.25,6.7],[2.1,0.9]],house)
# hpc_house=dis(house)

""" buco porta camera1/bagno """
house = unisci(38,[3,1,2],[[1.1,0.8,1.1],[1],[2.1,0.9]],house)
# hpc_house=dis(house)

""" Divisione parete camera cucina """
house = unisci(73,[1,2,1],[[1],[2.4,4],[1]],house)
# hpc_house=dis(house)

""" buco porta cucina/camera2""" 
house = unisci(80,[1,3,1],[[1],[0.6,0.8,1],[1]],house)
# hpc_house=dis(house)

""" buco porta camera2/bagno2 """
house = unisci(80,[1,3,1],[[1],[2.45,0.8,0.75],[1]],house)
# hpc_house=dis(house)

""" buco Finestre salone lato lungo """
house = unisci(3,[1,9,3],[[1],[0.72,1.6,0.72,1.6,0.72,1.6,0.72,1.6,0.72],[1,1.5,0.5]],house)
# hpc_house=dis(house)

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
# hpc_house=dis(house)

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

house = unisci(58,[1,3,1],[[1],[5.05,1,0.65],[1]],house)
house = unisci(257,[3,1,1],[[0.055,0.04,0.055],[1],[1]],house)

hpc_house=dis(house)

porte=[136,139, 142, 145, 148, 151, 154, 254, 259]
porte_CV=select(porte,house)

finestre=[213,219, 230, 236, 242, 245,248, 251, 162, 168, 179, 185, 196, 202]
finestre_CV=select(finestre, house)

telaio_fin=[226,227,228,229, 231,232,233,234,235, 237,238,239,240,   209,210,211,212, 214,215,216,217,218, 220,221,222,223, 
			158,159,160,161, 163,164,165,166,167, 169,170,171,172,   175,176,177,178, 180,181,182,183,184, 186,187,188,189,
			192,193,194,195, 197,198,199,200,201, 203,204,205,206]
telaio_fin_CV=select(telaio_fin, house)

empty=[7,27,38,39,41,24,26,28,29,33,34,35,37, 224,225, 244,246, 247,249, 250,252, 241,243, 207,208, 156,157, 173,174, 190,191, 135,137, 138,140, 141,143, 144,146, 147,149, 150,152, 153,155, 253,255, 258,260]
empty_CV=select(empty, house)

wall=sottrai(sottrai(sottrai(sottrai(range(len(house[1])),empty),finestre),porte),telaio_fin)
wall_CV=select(wall, house)
# apartment=house[0],select(wall,house)
apartment=house
""" *************************************************************************************************************************** """
""" *************************************************************************************************************************** """
""" *********************************************** Exercise 2 **************************************************************** """
""" *************************************************************************************************************************** """
""" *************************************************************************************************************************** """

apartment2 = larApply(t(2,-10,0))(apartment)
apartment2 = larApply(s(1,-1,1))(apartment2)

building=assemblyDiagramInit([1,2,4])([[10],[10,10],[3,3,3,3]])

# hpc_building=dis(building)
	
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

""" Dettagli """
win=updateIndex(finestre,8, 261)
windows_CV=select(win,building)

doo=updateIndex(porte, 8, 261)
doors_CV=select(doo, building)

wa=updateIndex(wall,8,261)
walls_CV=select(wa, building)

fra=updateIndex(telaio_fin,8,261)
frames_CV=select(fra, building)

windows=MATERIAL(glass_material)(STRUCT(MKPOLS((building[0],windows_CV))))
doors=COLOR([0.372549,0.372549,0.372549])(STRUCT(MKPOLS((building[0], doors_CV))))
walls=COLOR([1,0.960784,0.933333])(STRUCT(MKPOLS((building[0], walls_CV))))
frames=COLOR([0,0,0])(STRUCT(MKPOLS((building[0],frames_CV))))

""" Scala """
a=STRUCT([T([1,2])([4.75,20])(scale(3,3,0.27,1))])
b=STRUCT([T(2)(-23)(a)])
pian=STRUCT([a,b])
pian=STRUCT([pian,T(3)(3)]*4)


scala=STRUCT([T([1,2])([7.73,-2])(scale(0.35,1,0.27,6)),T([1,2,3])([9.83,-2,1.35])(R([1,2])(PI)(scale(0.35,1,0.27,6)))])
scala_inv=STRUCT([T([1,2,3])([12.5,-4,3])(R([1,2])(PI)(scala))])
scala=STRUCT([T(3)(6)(scala), scala, scala_inv])
scala2=STRUCT([T([1,2])([12.5,20])(R([1,2])(PI)(scala))])

# VIEW(STRUCT([scala, scala2]))
""" Prato """
terreno=STRUCT([T([1,2,3])([-5,-5,-0.1])(scale(30,30,0.1,1))])
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

""" Albero """
tree=T([1,2])([18,-2])(makeTree(9,0.4,3.0))
tree2=T([1,2])([18,22])(makeTree(9,0.4,3.0))

VIEW(STRUCT([pian,  scala, scala2,terreno, lake, bridge, tree, tree2, tetto, windows, doors,walls, frames]))
from larcc import *
import collections

""" Risolta la prima parte in cui chiede di eliminare i vertici doppi e """

def filt_dupl(lst):
	filtered = []
	for e in lst:
		if not (e in filtered):
			filtered.append(e)
	return filtered

def diagram2cell(diagram,master,cell):
	mat = diagram2cellMatrix(diagram)(master,cell)
	diagram =larApply(mat)(diagram)  
   	"""
   	# yet to finish coding
   	V, CV1, CV2, n12 = vertexSieve(master,diagram)
   	masterBoundaryFaces = boundaryOfChain(CV,FV)([cell])
   	diagramBoundaryFaces = lar2boundaryFaces(CV,FV)
   	"""
   	V1,CV1 = master
   	CV1=[c for k,c in enumerate(CV1) if k != cell]
   	V, CV1, CV2, n12 = vertexSieve((V1,CV1),diagram)
   	CV=CV1+CV2
   	# master=CV1,CV2
   	# V = master[0] + diagram[0]
   	# offset = len(master[0])
   	# CV = [c for k,c in enumerate(master[1]) if k != cell] + [
   	#       [v+offset for v in c] for c in diagram[1]]
   	master = V, CV
   	return master



""" TEST """
master = assemblyDiagramInit([2,2,2])([[7]*2, [7]*2,[7]*2])

V,CV = master
print(len(V))

diagram = assemblyDiagramInit([3,1,4])([[1.5,2,1.5],[.5],[2,2,2,1]])
dV,dCV = diagram
print(len(dV))

V3=V+dV
print(len(filt_dupl(V3)))

""" Numerando i vertici non vengono ripetuti """
master = diagram2cell(diagram,master,0)
V,CV=master
print(len(V))
VV = [[i] for i in range(len(V))]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering ((V,CV),hpc)(range(len(CV)),YELLOW,5)
hpc = cellNumbering ((V,VV),hpc)(range(len(VV)),RED,1.5)

VIEW(hpc)
 


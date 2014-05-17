from larcc import *
import collections

def filt_dupl(lst):
	filtered = []
	for e in lst:
		if not (e in filtered):
			filtered.append(e)
	return filtered


master = assemblyDiagramInit([1,1,1])([[1],[1],[1]])
V,CV = master
print(len(V))
print(V)
print(CV)

diagram=assemblyDiagramInit([2,2,2])([[1,1],[1,1],[1,1]])
V1,CV1=diagram
print(len(V1))

master = diagram2cell(diagram,master,0)
V,CV = master
print(len(V))
# print(list_duplicates(V))+
# print("duplicati: ",duplicati)
V=filt_dupl(V)
print(len(V))


# hpc = SKEL_1(STRUCT(MKPOLS(master)))
# hpc = cellNumbering ((V,CV),hpc)(range(len(CV)),YELLOW,5)
# VIEW(hpc)




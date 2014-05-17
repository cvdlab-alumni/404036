from larcc import *
 
DRAW = COMP([VIEW,STRUCT,MKPOLS])

def aggiornaToRemove(lista, volte, facce, k):
	for z in (range(len(lista))):
		lista[z]=lista[z]+k
	lista2=lista[:]
	for i in range(volte-1):
		for y in range(len(lista2)):
			lista.append(lista2[y]+(facce*(i+1)))
	return lista


# Funzione per mappare un diagram in piu' blocchi di un master
# Parametri:
#	subDiagram -> diagramma da innestare
#	master -> diagramma in cui verra' effettuato l'innesto
#	toRemove -> lista di celle del subDiagram da rimuovere
#	toMerges -> lista di celle del master nelle quali verra' innestato il subDiagram
def multipleDiagram2cell(subDiagram, master,toRemove, toMerges):
	toMerges = list(sort(toMerges))
	#Aggiorno la lista di celle da rimuovere, calcolo quale sara' la loro numerazione dopo l'innesto
	toRemovE=aggiornaToRemove(toRemove, len(toMerges), len(subDiagram[1]), (len(master[1]))-len(toMerges))
	#eseguo gli innesti
	for i in range(len(toMerges)):
		master = diagram2cell(subDiagram,master,toMerges[i]-i)
	#Elimino le celle
	master = master[0],[cell for k, cell in enumerate(master[1]) if not (k in toRemove)]
	return master
 

""" Test """

""" Istanzio la struttura principale """

master = assemblyDiagramInit([2,2,2])([[7]*2, [7]*2,[7]*2])

V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering ((V,CV),hpc)(range(len(CV)),YELLOW,5)
VIEW(hpc)
DRAW(master)
 
""" Istanzio la stanza/parete/diagram da innestare """

diagram = assemblyDiagramInit([3,1,4])([[1.5,2,1.5],[.5],[2,2,2,1]])
dV,dCV = diagram
hpc2 = SKEL_1(STRUCT(MKPOLS(diagram)))
hpc2 = cellNumbering ((dV,dCV),hpc2)(range(len(dCV)),YELLOW,2)
VIEW(hpc2)
DRAW(diagram)

 
""" Innesto il diagramma nel master e gli passo gli array toRemove e toMerge """
master = multipleDiagram2cell(diagram,master,[5,6],[5,2,0,7])
V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering ((V,CV),hpc)(range(len(CV)),YELLOW,5)
VIEW(hpc)
DRAW(master)


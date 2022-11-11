
package routing;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.HashSet;
import java.util.Set;
public class routingGraph {
	ArrayList<LinkedList<Node>> routingList;

	
	routingGraph(){
		routingList = new ArrayList<>();
	}
	
	public void addDevice(Node node) {
		LinkedList<Node> currentList = new LinkedList<>();
		currentList.add(node);
		routingList.add(currentList);
	}
	public void addEdge(int src, int dst,int weight) {
		LinkedList<Node> currentList = routingList.get(src);
		Node dstNode = routingList.get(dst).get(0);
		Node weightedDstNode = new Node(dstNode.device,dstNode.idNum,weight);
		currentList.add(weightedDstNode);
	}
	public void print() {
		for(LinkedList<Node> currentList:routingList) {
			for(Node node: currentList) {
				System.out.print(node.device+" ->");
			}
			System.out.println();
		}
	}
	public int[] dijkstra(int src) {
		int numNodes = routingList.size();
		int dist[] = new int[numNodes];
		PriorityQueue<Node> pQueue = new PriorityQueue<Node>(numNodes, new Node());
		Set<Integer> settled = new HashSet<Integer>();
		for(int i=0; i<numNodes; i++) {
			//Simulates infinity for initialization of dijkstra's algorithm
			dist[i] = Integer.MAX_VALUE;
		}
		pQueue.offer(new Node(src, 0));

		dist[src] = 0;
		while(settled.size() != numNodes && !pQueue.isEmpty()) {
			Node nodeU = pQueue.poll();
			int nodeNum = nodeU.idNum;
			
			if(settled.contains(nodeNum)) {
				continue;
			}
			
			settled.add(nodeNum);
			helperNeighbour(nodeU.idNum, settled,dist,pQueue);
		}
		return dist;
	}
	private void helperNeighbour(int num, Set<Integer> settled,int dist[], PriorityQueue<Node> pQueue) {
		
		for(int k=0; k<routingList.get(num).size(); k++) {
			Node neighbour = routingList.get(num).get(k);
			
			if(!settled.contains(neighbour.idNum)) {
				
				int distance = dist[num] + neighbour.weight;
				if(distance < dist[neighbour.idNum]) {
					dist[neighbour.idNum] = distance;
				}
				pQueue.add(new Node(neighbour.idNum,dist[neighbour.idNum]));
				
			}
		}
	}
	public void printDijkstra(int[] dist) {
		String typeofDevice;
		for(int i = 0;i<dist.length;i++ ) {
			typeofDevice = routingList.get(i).get(0).device;
			System.out.println(typeofDevice+" is a distance of "+dist[i]+" from source");
		}
		
	}
	public int dijkstra(int src, int dst) {
		int dist[] = dijkstra(src);
		return dist[dst];
		
	}
	
}

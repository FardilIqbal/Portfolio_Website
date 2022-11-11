package routing;

import java.util.Comparator;
public class Node implements Comparator<Node>{
	String device;
	int weight;
	int idNum;
	Node(){
		
	}
	Node(int idNum, int weight){
		this.idNum = idNum;
		this.weight = weight;
	}
	Node(String device, int idNum){
		this.device = device;
		this.idNum = idNum;
	}
	Node(String device,int idNum, int weight){
		this.device = device;
		this.idNum = idNum;
		this.weight = weight;
	}
	public int compare(Node node1, Node node2) {
		if(node1.weight < node2.weight) {
			return -1;
		}
		else if (node1.weight > node2.weight) {
			return 1;
		}
		else {
			return 0;
		}
		
	}
}

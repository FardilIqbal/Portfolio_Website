package routing;
import java.util.ArrayList;
import java.util.LinkedList;
public class Edge {
	private int src;
	private int dst;
	private int weight;
	Edge(int src, int dst, int weight){
		this.src = src;
		this.dst = dst;
		this.weight = weight;
	}
	
	public int getWeight() {
		return weight;
	}
	public void setWeight(int weight) {
		this.weight = weight;
	}
	

}

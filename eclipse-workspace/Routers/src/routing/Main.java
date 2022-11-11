package routing;
import java.io.File;
import java.util.Scanner;
import java.io.FileNotFoundException;
public class Main {
	public static void readText(String filename, routingGraph graph) {
		try {
			int counter = 0;
			File routingFile = new File(filename);
			Scanner myReader = new Scanner(routingFile);
			while(myReader.hasNextLine()) {
				String currentLine = myReader.nextLine();
				String[] arrayLine = currentLine.split(",");
				
				if(arrayLine[0].equals("Router") || arrayLine[0].equals("Destination")) {
					graph.addDevice(new Node(currentLine,counter));
					counter +=1;
				}else{
					graph.addEdge(Integer.parseInt(arrayLine[0]), Integer.parseInt(arrayLine[1]), Integer.parseInt(arrayLine[2]));
					graph.addEdge(Integer.parseInt(arrayLine[1]), Integer.parseInt(arrayLine[0]), Integer.parseInt(arrayLine[2]));
				}
					
			}
			myReader.close();
		}catch(FileNotFoundException e) {
			System.out.println("File not found");
			e.printStackTrace();
		}
	}
	public static int deviceToNodeNum(routingGraph routerGraph,String label) {
		int l=0;
		for(int i=0; i< routerGraph.routingList.size();i++) {
			Node currentNode = routerGraph.routingList.get(i).get(0);
			String[] arrayDevice = currentNode.device.split(",");
			if(arrayDevice[1].equals(label)) {
				l = i;
			}
		}
		return l;
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner userInput = new Scanner(System.in);
		routingGraph routerGraph = new routingGraph();
		readText("Router_Data.txt",routerGraph);
		routerGraph.print();
		boolean end = false;
		while(!end) {
			System.out.println("Enter 1 to see the all the distances from a source device/website and 2 to see distance from one device to another");
			int selection = userInput.nextInt();
			if(selection==1) {
				System.out.println("Which Router/Destination would you like to use as a source? (Please enter label such as A1, B2 etc)");
				String label = userInput.next();
				int l = deviceToNodeNum(routerGraph,label);
				int[] distances = routerGraph.dijkstra(l);
				routerGraph.printDijkstra(distances);
			}
			else if(selection==2) {
				System.out.println("Enter nodes, space separated in the form of 'A1 B2' ");
				String label1 = userInput.next();
				String label2 = userInput.next();
				int num1 = deviceToNodeNum(routerGraph,label1);
				int num2 = deviceToNodeNum(routerGraph,label2);
				
				System.out.println("The distance between the two points is "+routerGraph.dijkstra(num1, num2));
			}
			
			
		}
		userInput.close();

	}

}

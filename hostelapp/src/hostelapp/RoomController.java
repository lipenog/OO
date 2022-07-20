package hostelapp;

public class RoomController {
	private Room room;
	private Hostel hostel;
	
	public RoomController() {
		this.hostel = new Hostel();
	}
	
	public void createRoom(int number, String type) {
		room = new Room(number, type);
	}
	
	public String presistRoomData(String name, int floor, String descreption, double dimension) {
		room.setName(name);
		room.setFloor(floor);
		room.setDescription(descreption);
		room.setDimension(dimension);
		hostel.addRoom(room);
		return "Room data created";
	}
	public static void main(String[] args) {
		RoomController roomController = new RoomController();
		roomController.createRoom(312, "Double room");
		String result = roomController.presistRoomData("D. Leopoina", 3, "", 20);
		System.out.println(result);
	}
}

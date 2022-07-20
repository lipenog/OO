package hostelapp;

public class Room {
	private int number;
	private String name;
	private String type;
	private String description;
	private int dailyRate;
	private double dimension;
	private int floor;
	public Room(int number, String type) {
		this.number = number;
		this.type = type;
	}
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getDailyRate() {
		return dailyRate;
	}
	public void setDailyRate(int dailyRate) {
		this.dailyRate = dailyRate;
	}
	public double getDimension() {
		return dimension;
	}
	public void setDimension(double dimension2) {
		this.dimension = dimension2;
	}
	public int getFloor() {
		return floor;
	}
	public void setFloor(int floor) {
		this.floor = floor;
	}
	
}

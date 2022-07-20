package hostelapp;

import java.time.LocalDateTime;
import java.util.ArrayList;

public class Hostel {
	private String name = "Sparkling Water";
	private String homePage;
	private String description;
	private LocalDateTime inauguration;
	private String contact;
	private Address address;
	private ArrayList<Guest> guests = new ArrayList<Guest>();
	private int guestsNumber;
	private ArrayList<Employee> employees = new ArrayList<Employee>();
	private int employeesNumber;
	private ArrayList<Room> rooms = new ArrayList<Room>();
	private int roomsNumber;
	
	public void addRoom(Room room) {
		rooms.add(room);
		roomsNumber++;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getHomePage() {
		return homePage;
	}
	public void setHomePage(String homePage) {
		this.homePage = homePage;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public LocalDateTime getInauguration() {
		return inauguration;
	}
	public void setInauguration(LocalDateTime inauguration) {
		this.inauguration = inauguration;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public ArrayList<Guest> getGuests() {
		return guests;
	}
	public void setGuests(ArrayList<Guest> guests) {
		this.guests = guests;
	}
	public int getGuestsNumber() {
		return guestsNumber;
	}
	public void setGuestsNumber(int guestsNumber) {
		this.guestsNumber = guestsNumber;
	}
	public ArrayList<Employee> getEmployees() {
		return employees;
	}
	public void setEmployees(ArrayList<Employee> employees) {
		this.employees = employees;
	}
	public int getEmployeesNumber() {
		return employeesNumber;
	}
	public void setEmployeesNumber(int employeesNumber) {
		this.employeesNumber = employeesNumber;
	}
	public ArrayList<Room> getRooms() {
		return rooms;
	}
	public void setRooms(ArrayList<Room> rooms) {
		this.rooms = rooms;
	}
	public int getRoomsNumber() {
		return roomsNumber;
	}
	public void setRoomsNumber(int roomsNumber) {
		this.roomsNumber = roomsNumber;
	}
}

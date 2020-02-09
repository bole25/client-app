import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Room} from '../../models/room.model';
import {RoomsService} from './rooms.service';
import {Clinic} from '../../models/clinic.model';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',

})

export class RoomsComponent implements OnInit {
  room: Room;
  rooms: Set<Room>;
  type: string;
  name: string;
  filteredString: string;
  filteredRooms: Set<Room>;
  nameContent: string;


  constructor(private router: Router, private route: ActivatedRoute, private service: RoomsService) {
    this.room = new Room();
    this.rooms = new Set<Room>();
    this.filteredRooms = new Set<Room>();

  }

  ngOnInit() {
    this.service.getRooms().subscribe(data => {
      this.rooms = data;
      this.filteredRooms = data;
    });

  }

  filterChange() {
    this.filteredRooms = new Set<Room>();
    for (const r of this.rooms) {
      if (r.name.toLowerCase().includes(this.filteredString.toLowerCase())) {
        this.filteredRooms.add(r);
      }
    }

  }

  onSubmit() {
    this.service.addRoom(this.room).subscribe(result => {
      alert('Success!');
      location.reload();

    });

  }

  delete_Room(name: string) {
    this.service.removeRoom(name, this.nameContent).subscribe(result => this.router.navigate(['deleteRoom']));

  }

  delete_Room2(id: number) {
    this.service.removeRoom2(id, this.nameContent).subscribe(result => this.router.navigate(['deleteRoom2']));

  }
}
